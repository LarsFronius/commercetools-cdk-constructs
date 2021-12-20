// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for IndexFunction
 */
export interface IndexFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/commercetools-subscription-provider/index.
 */
export class IndexFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: IndexFunctionProps) {
    super(scope, id, {
      description: 'src/commercetools-subscription-provider/index.lambda.ts',
      ...props,
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../assets/commercetools-subscription-provider/index.lambda')),
    });
  }
}