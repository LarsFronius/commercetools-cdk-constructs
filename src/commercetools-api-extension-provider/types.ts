export type ResourceTypeId = 'cart' | 'order' | 'payment' | 'customer'
export type Action = 'Create' | 'Update'

export interface Trigger {resourceTypeId: ResourceTypeId; actions: Action[]}
export type Triggers = Trigger[]

export interface BaseDestination {
  type: string;
}

export interface LambdaDestination extends BaseDestination {
  type: 'AWSLambda';
  arn: string;
  accessKey: string;
  accessSecret: string;
}

export interface HTTPDestination extends BaseDestination {
  type: 'HTTP';
  url: string;
  authentication?: DestinationAuthentication;
}

export type Destination = LambdaDestination | HTTPDestination

export type DestinationAuthentication = ExtensionAuthorizationHeaderAuthentication | ExtensionAzureFunctionsAuthentication;
export interface ExtensionAuthorizationHeaderAuthentication {
  readonly type: 'AuthorizationHeader';
  readonly headerValue: string;
}
export interface ExtensionAzureFunctionsAuthentication {
  readonly type: 'AzureFunctions';
  readonly key: string;
}
