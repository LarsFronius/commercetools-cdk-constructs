import { Stack, Token } from 'aws-cdk-lib';
import { CfnEventBus, EventBus, IEventBus, Rule } from 'aws-cdk-lib/aws-events';
import { EventBus as EventBusTarget } from 'aws-cdk-lib/aws-events-targets/lib/event-bus';
import { CfnAccessKey, User } from 'aws-cdk-lib/aws-iam';
import { ITopic, Topic } from 'aws-cdk-lib/aws-sns';
import { IQueue, Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import {
  CommercetoolsSubscription,
  EventBridgeDestination,
  ICommercetoolsSubscriptionTarget,
  SnsDestination,
  SqsDestination,
} from './commercetools-subscription';

export class SnsSubscriptionTarget implements ICommercetoolsSubscriptionTarget {
  snsTopic: ITopic | undefined;

  constructor(topic?: ITopic) {
    if (topic) {
      this.snsTopic = topic;
    }
  }

  getDestination(scope: Construct): SnsDestination | SqsDestination | EventBridgeDestination {
    const userName = `CommercetoolsSubscription-${scope.node.id}`;

    const user = new User(scope, 'CommercetoolsSubscriptionUser', { userName });
    const accessKey = new CfnAccessKey(scope, 'CommercetoolsSubscriptionAccessKey', { userName: user.userName });
    this.snsTopic = this.snsTopic || new Topic(scope, `${scope.node.id}-Topic`);
    this.snsTopic.grantPublish(user);

    return <SnsDestination>{
      type: 'SNS',
      accessKey: Token.asString(accessKey.ref),
      accessSecret: accessKey.attrSecretAccessKey,
      topicArn: this.snsTopic.topicArn,
    };
  }

}

export class SQSSubscriptionTarget implements ICommercetoolsSubscriptionTarget {
  queue: IQueue | undefined;
  constructor(queue?: IQueue) {
    if (queue) {
      this.queue = queue;
    }
  }
  getDestination(scope: Construct): SnsDestination | SqsDestination | EventBridgeDestination {
    const userName = `CommercetoolsSubscription-${scope.node.id}`;

    const user = new User(scope, 'CommercetoolsSubscriptionUser', { userName });
    const accessKey = new CfnAccessKey(scope, 'CommercetoolsSubscriptionAccessKey', { userName: user.userName });
    this.queue = this.queue || new Queue(scope, `${scope.node.id}-Queue`);
    this.queue.grantSendMessages(user);

    return <SqsDestination>{
      type: 'SQS',
      accessKey: Token.asString(accessKey.ref),
      accessSecret: accessKey.attrSecretAccessKey,
      queueUrl: this.queue.queueUrl,
    };
  }
}

export class EventbridgeSubscriptionTarget implements ICommercetoolsSubscriptionTarget {
  eventBus: IEventBus | undefined;

  constructor(eventbus?: IEventBus) {
    if (eventbus) {
      this.eventBus = eventbus;
    }
  }

  getDestination(scope: Construct): SnsDestination | SqsDestination | EventBridgeDestination {
    return <EventBridgeDestination>{
      type: 'EventBridge',
      region: Stack.of(scope).region,
      accountId: Stack.of(scope).account,
    };
  }

  postSubscription(subscription: CommercetoolsSubscription) {
    const ctCfnEventBus = new CfnEventBus(subscription, 'EventBusForCT', {
      name: Token.asString(subscription.eventBridgeSource),
      eventSourceName: Token.asString(subscription.eventBridgeSource),
    });

    const ctEventBus = EventBus.fromEventBusName(subscription, 'CT', Token.asString(ctCfnEventBus.name));
    this.eventBus = this.eventBus || new EventBus(subscription, 'Eventbus');

    const rule = new Rule(subscription, 'CTToEventBus', {
      eventPattern: { account: [Stack.of(subscription).account] },
      eventBus: ctEventBus,
      targets: [new EventBusTarget(this.eventBus)],
    });
    rule.node.addDependency(ctCfnEventBus);
  }
}