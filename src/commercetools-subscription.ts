import * as path from 'path';
import { CustomResource, Reference, Stack } from 'aws-cdk-lib';
import { Architecture, Runtime } from 'aws-cdk-lib/aws-lambda';
import { LogLevel, NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { Provider } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

export declare type Destination = EventBridgeDestination | SnsDestination | SqsDestination;

export interface SnsDestination {
  readonly type: 'SNS';
  readonly accessKey: string;
  readonly accessSecret: string;
  readonly topicArn: string;
}
export interface SqsDestination {
  readonly type: 'SQS';
  readonly accessKey: string;
  readonly accessSecret: string;
  readonly queueUrl: string;
  readonly region: string;
}
export interface EventBridgeDestination {
  readonly type: 'EventBridge';
  readonly region: string;
  readonly accountId: string;
}

export interface ICommercetoolsSubscriptionTarget {
  getDestination(scope: Construct): Destination;
  postSubscription?(subscription: CommercetoolsSubscription): void;
}

export interface CommercetoolsMessageSubscription {
  resourceTypeId: string; types: string[];
}

export interface CommercetoolsChangeSubscription {
  readonly resourceTypeId: string;
}

export interface CommercetoolsSubscriptionProps {
  projectKey: string;
  secret: ISecret;
  /**
     * target is one of EventbridgeSubscriptionTarget, SQSSubscriptionTarget or SnsSubscriptionTarget
     */
  target: ICommercetoolsSubscriptionTarget;
  /**
     * oAuthUri is the oauth URI of your commercetools instance. Defaults to 'https://auth.europe-west1.gcp.commercetools.com'
     */
  oAuthUri?: string;
  /**
     * baseUri is the base URI of your commercetools instance. Defaults to 'https://api.europe-west1.gcp.commercetools.com'
     */
  baseUri?: string;
  messages: CommercetoolsMessageSubscription[];
  changes: CommercetoolsChangeSubscription[];
}

/**
 * new CommercetoolsSubscription(this, 'CTToEventBusSubscription', {
 *             messages: [ {
 *                 "resourceTypeId" : "product",
 *                 "types: [ ]
 *             }],
 *             changes: [],
 *             projectKey: props.ctProjektKey,
 *             secret: Secret.fromSecretNameV2(this, 'CTSecret', `/ocp/${props.envName}/cdk/commercetools-subscription-mgmt`),
 *             target: new EventbridgeSubscriptionTarget(this.eventBus)
 *         })
 */
export class CommercetoolsSubscription extends Construct {
  readonly id: Reference;
  readonly version: Reference;
  readonly eventBridgeSource?: Reference;

  constructor(scope: Construct, id: string, props: CommercetoolsSubscriptionProps) {
    super(scope, id);

    const destination = props.target.getDestination(this);

    const customResource = new CustomResource(this, 'CommercetoolsSubscriptionCustomResource', {
      serviceToken: CommerceToolsSubscriptionProvider.getOrCreate(this, props.secret),
      resourceType: 'Custom::CommerceToolsSubscription',
      properties: {
        oAuthUri: props.oAuthUri || 'https://auth.europe-west1.gcp.commercetools.com',
        baseUri: props.baseUri || 'https://api.europe-west1.gcp.commercetools.com',
        projectKey: props.projectKey,
        destination: JSON.stringify(destination),
        messages: JSON.stringify(props.messages),
        changes: JSON.stringify(props.changes),
      },
    });
    this.id = customResource.getAtt('Id');
    this.version = customResource.getAtt('Version');
    if (destination.type == 'EventBridge') {
      this.eventBridgeSource = customResource.getAtt('EventBridgeSource');
    }

    if (props.target.postSubscription) {
      props.target.postSubscription(this);
    }
  }
}

class CommerceToolsSubscriptionProvider extends Construct {
  public static getOrCreate(scope: Construct, secret: ISecret): string {
    const stack = Stack.of(scope);
    const id = `me.fronius.cdk.custom-resource.commercetools-subscription-provider-${secret.secretName}`;
    const providerResource = stack.node.tryFindChild(id) as CommerceToolsSubscriptionProvider || new CommerceToolsSubscriptionProvider(stack, id, { secret });
    return providerResource.provider.serviceToken;
  }

  private readonly provider: Provider;

  constructor(scope: Construct, id: string, props: { secret: ISecret }) {
    super(scope, id);

    const eventHandler = new NodejsFunction(this, 'CommercetoolsSubscriptionEventHandlerLambda', {
      entry: path.join(__dirname, './commercetools-subscription-provider/index.ts'),
      handler: 'handler',
      runtime: Runtime.NODEJS_14_X,
      architecture: Architecture.X86_64,
      depsLockFilePath: path.join(__dirname, './commercetools-subscription-provider/package-lock.json'),
      projectRoot: path.join(__dirname, './commercetools-subscription-provider'),
      bundling: {
        minify: true,
        logLevel: LogLevel.INFO,
        commandHooks: {
          beforeBundling(_inputDir: string, _outputDir: string): string[] {
            return [
              'npm i',
            ];
          },
          afterBundling(_inputDir: string, _outputDir: string): string[] {
            return [];
          },
          beforeInstall() {
            return [];
          },
        },
      },
      environment: {
        SECRETS_MANAGER_SECRET_NAME: props.secret.secretName,
      },
    });
    props.secret.grantRead(eventHandler);

    this.provider = new Provider(this, 'CommercetoolsSubscriptionCustomResourceProvider', {
      onEventHandler: eventHandler,
      logRetention: RetentionDays.ONE_YEAR,
    });
  }

}