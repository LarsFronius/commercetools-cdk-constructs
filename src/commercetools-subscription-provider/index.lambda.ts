import {
  ApiRoot, ChangeSubscription,
  createApiBuilderFromCtpClient,
  Destination,
  SubscriptionUpdateAction,
} from '@commercetools/platform-sdk';

import { MessageSubscription } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/subscription';
import { ClientBuilder, Client } from '@commercetools/sdk-client-v2';
import middy from '@middy/core';
import secretsManager from '@middy/secrets-manager';

import {
  CdkCustomResourceEvent,
  CdkCustomResourceHandler,
  CdkCustomResourceResponse,
  Context as LambdaContext,
} from 'aws-lambda';

const secretsManagerSecretPath = process.env.SECRETS_MANAGER_SECRET_NAME;
if (!secretsManagerSecretPath) {
  throw new Error('SECRETS_MANAGER_SECRET_NAME not defined');
}
const region = process.env.AWS_REGION;
if (!region) {
  throw new Error('AWS_REGION not defined');
}

let client: Client;
let apiRoot: ApiRoot;

export interface ResourceProperties {
  oAuthUri: string;
  baseUri: string;
  projectKey: string;
  destination: string;
  messages: string;
  changes: string;
  ServiceToken: string;
}

export interface Context extends LambdaContext {
  secrets: {
    CT_CLIENT_ID: string;
    CT_CLIENT_SECRET: string;
  };
}

const getProperties = (props: ResourceProperties): [MessageSubscription[], ChangeSubscription[], Destination] => {
  return [
        <MessageSubscription[]>JSON.parse(props.messages),
        <ChangeSubscription[]>JSON.parse(props.changes),
        <Destination>JSON.parse(props.destination),
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
      const [messages, changes, destination] = getProperties(props);
      const ret = await apiRoot.withProjectKey({ projectKey: props.projectKey }).subscriptions().post(
        {
          body: {
            destination,
            messages,
            changes,
          },
        },
      ).execute();
      console.log(ret.body);
      return Promise.resolve(<CdkCustomResourceResponse>{
        PhysicalResourceId: `${ret.body.id}:${ret.body.version}`,
        Data: {
          ...{
            Id: ret.body.id,
            Version: ret.body.version,
          },
          // @ts-ignore # not necessary anymore once the commercetools SDK actually has EventBridge support ;)
          ...(destination.type == 'EventBridge' ? { EventBridgeSource: ret.body.destination.source } : {}),
        },
      });
    }

    case 'Delete': {
      const [id, v] = event.PhysicalResourceId.split(':');
      const version = Number.parseInt(v);
      await apiRoot.withProjectKey({ projectKey: props.projectKey }).subscriptions().withId({ ID: id }).delete({ queryArgs: { version } }).execute();
      return Promise.resolve(<CdkCustomResourceResponse>{ PhysicalResourceId: `${id}:${v}` });
    }

    case 'Update': {
      const [id, v] = event.PhysicalResourceId.split(':');
      const version = Number.parseInt(v);
      const oldProps = event.OldResourceProperties as ResourceProperties;
      const newProps = event.ResourceProperties as ResourceProperties;
      const [messages, changes, destination] = getProperties(newProps);
      let actions: SubscriptionUpdateAction[] = [];
      if (oldProps.projectKey != newProps.projectKey) {
        throw new Error('can not change projektKey on existing resource, please create a new one.');
      }
      if (oldProps.messages != newProps.messages) {
        actions.push({ action: 'setMessages', messages });
      }
      if (oldProps.destination != newProps.destination) {
        actions.push({ action: 'changeDestination', destination });
      }
      if (oldProps.changes != newProps.changes) {
        actions.push({ action: 'setChanges', changes });
      }
      const ret = await apiRoot.withProjectKey({ projectKey: props.projectKey }).subscriptions().withId({ ID: id }).post({
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
          ...{
            Id: ret.body.id,
            Version: ret.body.version,
          },
          // @ts-ignore # not necessary anymore once the commercetools SDK actually has EventBridge support ;)
          ...(destination.type == 'EventBridge' ? { EventBridgeSource: ret.body.destination.source } : {}),
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
    region: process.env.AWS_REGION,
  },
  setToContext: true,
}));
