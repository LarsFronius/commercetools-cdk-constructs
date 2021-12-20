import { expect, haveResource } from '@aws-cdk/assert';
import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Secret } from 'aws-cdk-lib/aws-secretsmanager';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { CommercetoolsSubscription, SQSSubscriptionTarget } from '../src';

let app: App;
beforeEach(() => {
  app = new App();
});

describe('CommerceToolsSubscription', () => {
  it('should have a custom resource (lambda is singleton)', () => {
    const stack = new Stack(app, 'TestStack');

    const importedSecret = Secret.fromSecretNameV2(stack, 'foo', 'foo');
    new CommercetoolsSubscription(stack, 'Test1', {
      target: new SQSSubscriptionTarget(Queue.fromQueueArn(stack, 'Queue1', 'arn:aws:sqs:us-east-2:444455556666:queue1')),
      messages: [],
      changes: [],
      projectKey: 'foo',
      secret: importedSecret,
    });

    new CommercetoolsSubscription(stack, 'Test2', {
      target: new SQSSubscriptionTarget(Queue.fromQueueArn(stack, 'Queue2', 'arn:aws:sqs:us-east-2:444455556666:queue2')),
      messages: [],
      changes: [],
      projectKey: '',
      secret: importedSecret,
    });

    expect(stack).to(haveResource('AWS::Lambda::Function', {
    }));

    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::Lambda::Function', 3); // 3 = CDK LogRetention Custom Resource + Custom Resource CDK Wrapper + Our actual CommerceTools CR (1, not 2 as the above resource can share their secret)
  });
});