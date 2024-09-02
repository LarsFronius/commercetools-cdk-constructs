# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CommercetoolsSubscription <a name="CommercetoolsSubscription" id="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription"></a>

new CommercetoolsSubscription(this, 'CTToEventBusSubscription', {              messages: [ {                  "resourceTypeId" : "product",                  "types: [ ]              }],              changes: [],              projectKey: props.ctProjektKey,              secret: Secret.fromSecretNameV2(this, 'CTSecret', `/ct/${props.envName}/commercetools-subscription-mgmt`),              target: new EventbridgeSubscriptionTarget(this.eventBus)          }).

#### Initializers <a name="Initializers" id="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.Initializer"></a>

```typescript
import { CommercetoolsSubscription } from '@larsfronius/commercetools-cdk-constructs'

new CommercetoolsSubscription(scope: Construct, id: string, props: ICommercetoolsSubscriptionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.Initializer.parameter.props">props</a></code> | <code><a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps">ICommercetoolsSubscriptionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.Initializer.parameter.props"></a>

- *Type:* <a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps">ICommercetoolsSubscriptionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.isConstruct"></a>

```typescript
import { CommercetoolsSubscription } from '@larsfronius/commercetools-cdk-constructs'

CommercetoolsSubscription.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.property.id">id</a></code> | <code>aws-cdk-lib.Reference</code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.property.version">version</a></code> | <code>aws-cdk-lib.Reference</code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.property.eventBridgeSource">eventBridgeSource</a></code> | <code>aws-cdk-lib.Reference</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `id`<sup>Required</sup> <a name="id" id="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.property.id"></a>

```typescript
public readonly id: Reference;
```

- *Type:* aws-cdk-lib.Reference

---

##### `version`<sup>Required</sup> <a name="version" id="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.property.version"></a>

```typescript
public readonly version: Reference;
```

- *Type:* aws-cdk-lib.Reference

---

##### `eventBridgeSource`<sup>Optional</sup> <a name="eventBridgeSource" id="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.property.eventBridgeSource"></a>

```typescript
public readonly eventBridgeSource: Reference;
```

- *Type:* aws-cdk-lib.Reference

---


## Structs <a name="Structs" id="Structs"></a>

### EventBridgeDestination <a name="EventBridgeDestination" id="@larsfronius/commercetools-cdk-constructs.EventBridgeDestination"></a>

#### Initializer <a name="Initializer" id="@larsfronius/commercetools-cdk-constructs.EventBridgeDestination.Initializer"></a>

```typescript
import { EventBridgeDestination } from '@larsfronius/commercetools-cdk-constructs'

const eventBridgeDestination: EventBridgeDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.EventBridgeDestination.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.EventBridgeDestination.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.EventBridgeDestination.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@larsfronius/commercetools-cdk-constructs.EventBridgeDestination.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@larsfronius/commercetools-cdk-constructs.EventBridgeDestination.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@larsfronius/commercetools-cdk-constructs.EventBridgeDestination.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

### SnsDestination <a name="SnsDestination" id="@larsfronius/commercetools-cdk-constructs.SnsDestination"></a>

#### Initializer <a name="Initializer" id="@larsfronius/commercetools-cdk-constructs.SnsDestination.Initializer"></a>

```typescript
import { SnsDestination } from '@larsfronius/commercetools-cdk-constructs'

const snsDestination: SnsDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.SnsDestination.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.SnsDestination.property.accessSecret">accessSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.SnsDestination.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.SnsDestination.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@larsfronius/commercetools-cdk-constructs.SnsDestination.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `accessSecret`<sup>Required</sup> <a name="accessSecret" id="@larsfronius/commercetools-cdk-constructs.SnsDestination.property.accessSecret"></a>

```typescript
public readonly accessSecret: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@larsfronius/commercetools-cdk-constructs.SnsDestination.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@larsfronius/commercetools-cdk-constructs.SnsDestination.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

### SqsDestination <a name="SqsDestination" id="@larsfronius/commercetools-cdk-constructs.SqsDestination"></a>

#### Initializer <a name="Initializer" id="@larsfronius/commercetools-cdk-constructs.SqsDestination.Initializer"></a>

```typescript
import { SqsDestination } from '@larsfronius/commercetools-cdk-constructs'

const sqsDestination: SqsDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.SqsDestination.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.SqsDestination.property.accessSecret">accessSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.SqsDestination.property.queueUrl">queueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.SqsDestination.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.SqsDestination.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@larsfronius/commercetools-cdk-constructs.SqsDestination.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `accessSecret`<sup>Required</sup> <a name="accessSecret" id="@larsfronius/commercetools-cdk-constructs.SqsDestination.property.accessSecret"></a>

```typescript
public readonly accessSecret: string;
```

- *Type:* string

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@larsfronius/commercetools-cdk-constructs.SqsDestination.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@larsfronius/commercetools-cdk-constructs.SqsDestination.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@larsfronius/commercetools-cdk-constructs.SqsDestination.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### EventbridgeSubscriptionTarget <a name="EventbridgeSubscriptionTarget" id="@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget"></a>

- *Implements:* <a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget">ICommercetoolsSubscriptionTarget</a>

#### Initializers <a name="Initializers" id="@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget.Initializer"></a>

```typescript
import { EventbridgeSubscriptionTarget } from '@larsfronius/commercetools-cdk-constructs'

new EventbridgeSubscriptionTarget(eventbus?: IEventBus)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget.Initializer.parameter.eventbus">eventbus</a></code> | <code>aws-cdk-lib.aws_events.IEventBus</code> | *No description.* |

---

##### `eventbus`<sup>Optional</sup> <a name="eventbus" id="@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget.Initializer.parameter.eventbus"></a>

- *Type:* aws-cdk-lib.aws_events.IEventBus

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget.getDestination">getDestination</a></code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget.postSubscription">postSubscription</a></code> | *No description.* |

---

##### `getDestination` <a name="getDestination" id="@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget.getDestination"></a>

```typescript
public getDestination(scope: Construct): SnsDestination | SqsDestination | EventBridgeDestination
```

###### `scope`<sup>Required</sup> <a name="scope" id="@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget.getDestination.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `postSubscription` <a name="postSubscription" id="@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget.postSubscription"></a>

```typescript
public postSubscription(subscription: CommercetoolsSubscription): void
```

###### `subscription`<sup>Required</sup> <a name="subscription" id="@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget.postSubscription.parameter.subscription"></a>

- *Type:* <a href="#@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription">CommercetoolsSubscription</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.IEventBus</code> | *No description.* |

---

##### `eventBus`<sup>Optional</sup> <a name="eventBus" id="@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget.property.eventBus"></a>

```typescript
public readonly eventBus: IEventBus;
```

- *Type:* aws-cdk-lib.aws_events.IEventBus

---


### SnsSubscriptionTarget <a name="SnsSubscriptionTarget" id="@larsfronius/commercetools-cdk-constructs.SnsSubscriptionTarget"></a>

- *Implements:* <a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget">ICommercetoolsSubscriptionTarget</a>

#### Initializers <a name="Initializers" id="@larsfronius/commercetools-cdk-constructs.SnsSubscriptionTarget.Initializer"></a>

```typescript
import { SnsSubscriptionTarget } from '@larsfronius/commercetools-cdk-constructs'

new SnsSubscriptionTarget(topic?: ITopic)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.SnsSubscriptionTarget.Initializer.parameter.topic">topic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | *No description.* |

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@larsfronius/commercetools-cdk-constructs.SnsSubscriptionTarget.Initializer.parameter.topic"></a>

- *Type:* aws-cdk-lib.aws_sns.ITopic

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.SnsSubscriptionTarget.getDestination">getDestination</a></code> | *No description.* |

---

##### `getDestination` <a name="getDestination" id="@larsfronius/commercetools-cdk-constructs.SnsSubscriptionTarget.getDestination"></a>

```typescript
public getDestination(scope: Construct): SnsDestination | SqsDestination | EventBridgeDestination
```

###### `scope`<sup>Required</sup> <a name="scope" id="@larsfronius/commercetools-cdk-constructs.SnsSubscriptionTarget.getDestination.parameter.scope"></a>

- *Type:* constructs.Construct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.SnsSubscriptionTarget.property.snsTopic">snsTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | *No description.* |

---

##### `snsTopic`<sup>Optional</sup> <a name="snsTopic" id="@larsfronius/commercetools-cdk-constructs.SnsSubscriptionTarget.property.snsTopic"></a>

```typescript
public readonly snsTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

---


### SQSSubscriptionTarget <a name="SQSSubscriptionTarget" id="@larsfronius/commercetools-cdk-constructs.SQSSubscriptionTarget"></a>

- *Implements:* <a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget">ICommercetoolsSubscriptionTarget</a>

#### Initializers <a name="Initializers" id="@larsfronius/commercetools-cdk-constructs.SQSSubscriptionTarget.Initializer"></a>

```typescript
import { SQSSubscriptionTarget } from '@larsfronius/commercetools-cdk-constructs'

new SQSSubscriptionTarget(queue?: IQueue)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.SQSSubscriptionTarget.Initializer.parameter.queue">queue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | *No description.* |

---

##### `queue`<sup>Optional</sup> <a name="queue" id="@larsfronius/commercetools-cdk-constructs.SQSSubscriptionTarget.Initializer.parameter.queue"></a>

- *Type:* aws-cdk-lib.aws_sqs.IQueue

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.SQSSubscriptionTarget.getDestination">getDestination</a></code> | *No description.* |

---

##### `getDestination` <a name="getDestination" id="@larsfronius/commercetools-cdk-constructs.SQSSubscriptionTarget.getDestination"></a>

```typescript
public getDestination(scope: Construct): SnsDestination | SqsDestination | EventBridgeDestination
```

###### `scope`<sup>Required</sup> <a name="scope" id="@larsfronius/commercetools-cdk-constructs.SQSSubscriptionTarget.getDestination.parameter.scope"></a>

- *Type:* constructs.Construct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.SQSSubscriptionTarget.property.queue">queue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | *No description.* |

---

##### `queue`<sup>Optional</sup> <a name="queue" id="@larsfronius/commercetools-cdk-constructs.SQSSubscriptionTarget.property.queue"></a>

```typescript
public readonly queue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

---


## Protocols <a name="Protocols" id="Protocols"></a>

### ICommercetoolsChangeSubscription <a name="ICommercetoolsChangeSubscription" id="@larsfronius/commercetools-cdk-constructs.ICommercetoolsChangeSubscription"></a>

- *Implemented By:* <a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsChangeSubscription">ICommercetoolsChangeSubscription</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsChangeSubscription.property.resourceTypeId">resourceTypeId</a></code> | <code>string</code> | *No description.* |

---

##### `resourceTypeId`<sup>Required</sup> <a name="resourceTypeId" id="@larsfronius/commercetools-cdk-constructs.ICommercetoolsChangeSubscription.property.resourceTypeId"></a>

```typescript
public readonly resourceTypeId: string;
```

- *Type:* string

---

### ICommercetoolsMessageSubscription <a name="ICommercetoolsMessageSubscription" id="@larsfronius/commercetools-cdk-constructs.ICommercetoolsMessageSubscription"></a>

- *Implemented By:* <a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsMessageSubscription">ICommercetoolsMessageSubscription</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsMessageSubscription.property.resourceTypeId">resourceTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsMessageSubscription.property.types">types</a></code> | <code>string[]</code> | *No description.* |

---

##### `resourceTypeId`<sup>Required</sup> <a name="resourceTypeId" id="@larsfronius/commercetools-cdk-constructs.ICommercetoolsMessageSubscription.property.resourceTypeId"></a>

```typescript
public readonly resourceTypeId: string;
```

- *Type:* string

---

##### `types`<sup>Required</sup> <a name="types" id="@larsfronius/commercetools-cdk-constructs.ICommercetoolsMessageSubscription.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

---

### ICommercetoolsSubscriptionProps <a name="ICommercetoolsSubscriptionProps" id="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps"></a>

- *Implemented By:* <a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps">ICommercetoolsSubscriptionProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.changes">changes</a></code> | <code><a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsChangeSubscription">ICommercetoolsChangeSubscription</a>[]</code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.messages">messages</a></code> | <code><a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsMessageSubscription">ICommercetoolsMessageSubscription</a>[]</code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.projectKey">projectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.secret">secret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.target">target</a></code> | <code><a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget">ICommercetoolsSubscriptionTarget</a></code> | target is one of EventbridgeSubscriptionTarget, SQSSubscriptionTarget or SnsSubscriptionTarget. |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.baseUri">baseUri</a></code> | <code>string</code> | baseUri is the base URI of your commercetools instance. |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.oAuthUri">oAuthUri</a></code> | <code>string</code> | oAuthUri is the oauth URI of your commercetools instance. |

---

##### `changes`<sup>Required</sup> <a name="changes" id="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.changes"></a>

```typescript
public readonly changes: ICommercetoolsChangeSubscription[];
```

- *Type:* <a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsChangeSubscription">ICommercetoolsChangeSubscription</a>[]

---

##### `messages`<sup>Required</sup> <a name="messages" id="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.messages"></a>

```typescript
public readonly messages: ICommercetoolsMessageSubscription[];
```

- *Type:* <a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsMessageSubscription">ICommercetoolsMessageSubscription</a>[]

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.secret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

##### `target`<sup>Required</sup> <a name="target" id="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.target"></a>

```typescript
public readonly target: ICommercetoolsSubscriptionTarget;
```

- *Type:* <a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget">ICommercetoolsSubscriptionTarget</a>

target is one of EventbridgeSubscriptionTarget, SQSSubscriptionTarget or SnsSubscriptionTarget.

---

##### `baseUri`<sup>Optional</sup> <a name="baseUri" id="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.baseUri"></a>

```typescript
public readonly baseUri: string;
```

- *Type:* string

baseUri is the base URI of your commercetools instance.

Defaults to 'https://api.europe-west1.gcp.commercetools.com'

---

##### `oAuthUri`<sup>Optional</sup> <a name="oAuthUri" id="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.oAuthUri"></a>

```typescript
public readonly oAuthUri: string;
```

- *Type:* string

oAuthUri is the oauth URI of your commercetools instance.

Defaults to 'https://auth.europe-west1.gcp.commercetools.com'

---

### ICommercetoolsSubscriptionTarget <a name="ICommercetoolsSubscriptionTarget" id="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget"></a>

- *Implemented By:* <a href="#@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget">EventbridgeSubscriptionTarget</a>, <a href="#@larsfronius/commercetools-cdk-constructs.SQSSubscriptionTarget">SQSSubscriptionTarget</a>, <a href="#@larsfronius/commercetools-cdk-constructs.SnsSubscriptionTarget">SnsSubscriptionTarget</a>, <a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget">ICommercetoolsSubscriptionTarget</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget.getDestination">getDestination</a></code> | *No description.* |
| <code><a href="#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget.postSubscription">postSubscription</a></code> | *No description.* |

---

##### `getDestination` <a name="getDestination" id="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget.getDestination"></a>

```typescript
public getDestination(scope: Construct): SnsDestination | SqsDestination | EventBridgeDestination
```

###### `scope`<sup>Required</sup> <a name="scope" id="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget.getDestination.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `postSubscription` <a name="postSubscription" id="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget.postSubscription"></a>

```typescript
public postSubscription(subscription: CommercetoolsSubscription): void
```

###### `subscription`<sup>Required</sup> <a name="subscription" id="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget.postSubscription.parameter.subscription"></a>

- *Type:* <a href="#@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription">CommercetoolsSubscription</a>

---


