import * as sns from '@aws-cdk/aws-sns';
import * as subs from '@aws-cdk/aws-sns-subscriptions';
import * as sqs from '@aws-cdk/aws-sqs';
import * as cdk from '@aws-cdk/core';

export class CdkTsStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'CdkTsQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    //adding new topic
    const topic = new sns.Topic(this, 'CdkTsTopic');

    topic.addSubscription(new subs.SqsSubscription(queue));
  }
}
