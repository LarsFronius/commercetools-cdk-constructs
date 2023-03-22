import {
  ApiRoot, createApiBuilderFromCtpClient, ExtensionUpdateAction,
} from '@commercetools/platform-sdk';

import { ClientBuilder, Client } from '@commercetools/sdk-client-v2';
import middy from '@middy/core';
import secretsManager from '@middy/secrets-manager';

import {
  CdkCustomResourceEvent,
  CdkCustomResourceHandler,
  CdkCustomResourceResponse,
  Context as LambdaContext,
} from 'aws-lambda';
import { Destination, Triggers } from './types';

if (!process.env.SECRETS_MANAGER_SECRET_NAME) {
  throw new Error('SECRETS_MANAGER_SECRET_NAME not defined');
}
const secretsManagerSecretPath = process.env.SECRETS_MANAGER_SECRET_NAME;

if (!process.env.AWS_REGION) {
  throw new Error('AWS_REGION not defined');
}
const region = process.env.AWS_REGION;

let client: Client;
let apiRoot: ApiRoot;

export interface ResourceProperties {
  oAuthUri: string;
  baseUri: string;
  projectKey: string;
  destination: string;
  triggers: string;
  ServiceToken: string;
}

export interface Context extends LambdaContext {
  secrets: {
    CT_CLIENT_ID: string;
    CT_CLIENT_SECRET: string;
  };
}

const getProperties = (props: ResourceProperties): [Destination, Triggers] => {
  return [
        <Destination>JSON.parse(props.destination),
        <Triggers>JSON.parse(props.triggers),
  ];
};

const processEvent: CdkCustomResourceHandler = async (event: CdkCustomResourceEvent, context: LambdaContext) => {
  console.log(`Input event: ${JSON.stringify(event)}`);

  const ctx: Context = context as unknown as Context;
  const props = event.ResourceProperties as ResourceProperties;

  if (!client) {
    client = new ClientBuilder()
      .defaultClient(props.baseUri, {
        clientId: ctx.secrets.CT_CLIENT_ID,
        clientSecret: ctx.secrets.CT_CLIENT_SECRET,
      }, props.oAuthUri, props.projectKey)
      .build();
    apiRoot = createApiBuilderFromCtpClient(client);
  }

  switch (event.RequestType) {
    case 'Create': {
      const [destination, triggers] = getProperties(props);

      const ret = await apiRoot.withProjectKey({ projectKey: props.projectKey }).extensions().post(
        {
          body: {
            destination: destination,
            triggers: triggers,
          },
        },
      ).execute();
      console.log(ret.body);

      return Promise.resolve(<CdkCustomResourceResponse>{
        PhysicalResourceId: `${ret.body.id}:${ret.body.version}`,
        Data: {
          Id: ret.body.id,
          Version: ret.body.version,
        },
      });
    }

    case 'Delete': {
      const [id, v] = event.PhysicalResourceId.split(':');
      const version = Number.parseInt(v);
      const currentApiExtension = await apiRoot.withProjectKey({ projectKey: props.projectKey }).extensions().withId({ ID: id }).get().execute();

      if (currentApiExtension.body.version != version) {
        return Promise.resolve(<CdkCustomResourceResponse>{
          PhysicalResourceId: event.PhysicalResourceId,
        });
      }
      const ret = await apiRoot.withProjectKey({ projectKey: props.projectKey }).extensions().withId({ ID: id }).delete({ queryArgs: { version } }).execute();

      return Promise.resolve(<CdkCustomResourceResponse>{
        PhysicalResourceId: `${ret.body.id}:${ret.body.version}`,
        Data: {
          Id: ret.body.id,
          Version: ret.body.version,
        },
      });
    }

    case 'Update': {
      const [id, v] = event.PhysicalResourceId.split(':');
      const version = Number.parseInt(v);
      const oldProps = event.OldResourceProperties as ResourceProperties;
      const newProps = event.ResourceProperties as ResourceProperties;
      const [destination, triggers] = getProperties(newProps);
      const actions: ExtensionUpdateAction[] = [];

      if (oldProps.projectKey != newProps.projectKey) {
        throw new Error('can not change projektKey on existing resource, please create a new one.');
      }

      if (oldProps.destination != newProps.destination) {
        actions.push({ action: 'changeDestination', destination });
      }

      if (oldProps.triggers != newProps.triggers) {
        actions.push({ action: 'changeTriggers', triggers });
      }

      const ret = await apiRoot.withProjectKey({ projectKey: props.projectKey }).extensions().withId({ ID: id }).post({
        body: {
          version: version,
          actions: actions,
        },
        queryArgs: { version },
      }).execute();
      console.log(ret.body);

      return Promise.resolve(<CdkCustomResourceResponse>{
        PhysicalResourceId: `${ret.body.id}:${ret.body.version}`,
        Data: {
          Id: ret.body.id,
          Version: ret.body.version,
        },
      });
    }

    default: {
      throw new Error('not implemented');
    }
  }
};

export const handler = middy(processEvent);

handler.use(secretsManager({
  fetchData: {
    secrets: secretsManagerSecretPath,
  },
  awsClientOptions: {
    region,
  },
  setToContext: true,
}));
