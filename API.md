# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### CommercetoolsSubscription <a name="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription" id="larsfroniuscommercetoolscdkconstructscommercetoolssubscription"></a>

new CommercetoolsSubscription(this, 'CTToEventBusSubscription', {              messages: [ {                  "resourceTypeId" : "product",                  "types: [ ]              }],              changes: [],              projectKey: props.ctProjektKey,              secret: Secret.fromSecretNameV2(this, 'CTSecret', `/ct/${props.envName}/commercetools-subscription-mgmt`),              target: new EventbridgeSubscriptionTarget(this.eventBus)          }).

#### Initializers <a name="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.Initializer" id="larsfroniuscommercetoolscdkconstructscommercetoolssubscriptioninitializer"></a>

```typescript
import { CommercetoolsSubscription } from '@larsfronius/commercetools-cdk-constructs'

new CommercetoolsSubscription(scope: Construct, id: string, props: ICommercetoolsSubscriptionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#larsfroniuscommercetoolscdkconstructscommercetoolssubscriptionparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#larsfroniuscommercetoolscdkconstructscommercetoolssubscriptionparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#larsfroniuscommercetoolscdkconstructscommercetoolssubscriptionparameterprops)<span title="Required">*</span> | [`@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps`](#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.parameter.scope" id="larsfroniuscommercetoolscdkconstructscommercetoolssubscriptionparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.parameter.id" id="larsfroniuscommercetoolscdkconstructscommercetoolssubscriptionparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.parameter.props" id="larsfroniuscommercetoolscdkconstructscommercetoolssubscriptionparameterprops"></a>

- *Type:* [`@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps`](#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#larsfroniuscommercetoolscdkconstructscommercetoolssubscriptionpropertyid)<span title="Required">*</span> | [`aws-cdk-lib.Reference`](#aws-cdk-lib.Reference) | *No description.* |
| [`version`](#larsfroniuscommercetoolscdkconstructscommercetoolssubscriptionpropertyversion)<span title="Required">*</span> | [`aws-cdk-lib.Reference`](#aws-cdk-lib.Reference) | *No description.* |
| [`eventBridgeSource`](#larsfroniuscommercetoolscdkconstructscommercetoolssubscriptionpropertyeventbridgesource) | [`aws-cdk-lib.Reference`](#aws-cdk-lib.Reference) | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.property.id" id="larsfroniuscommercetoolscdkconstructscommercetoolssubscriptionpropertyid"></a>

```typescript
public readonly id: Reference;
```

- *Type:* [`aws-cdk-lib.Reference`](#aws-cdk-lib.Reference)

---

##### `version`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.property.version" id="larsfroniuscommercetoolscdkconstructscommercetoolssubscriptionpropertyversion"></a>

```typescript
public readonly version: Reference;
```

- *Type:* [`aws-cdk-lib.Reference`](#aws-cdk-lib.Reference)

---

##### `eventBridgeSource`<sup>Optional</sup> <a name="@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription.property.eventBridgeSource" id="larsfroniuscommercetoolscdkconstructscommercetoolssubscriptionpropertyeventbridgesource"></a>

```typescript
public readonly eventBridgeSource: Reference;
```

- *Type:* [`aws-cdk-lib.Reference`](#aws-cdk-lib.Reference)

---


## Structs <a name="Structs" id="structs"></a>

### EventBridgeDestination <a name="@larsfronius/commercetools-cdk-constructs.EventBridgeDestination" id="larsfroniuscommercetoolscdkconstructseventbridgedestination"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { EventBridgeDestination } from '@larsfronius/commercetools-cdk-constructs'

const eventBridgeDestination: EventBridgeDestination = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`accountId`](#larsfroniuscommercetoolscdkconstructseventbridgedestinationpropertyaccountid)<span title="Required">*</span> | `string` | *No description.* |
| [`region`](#larsfroniuscommercetoolscdkconstructseventbridgedestinationpropertyregion)<span title="Required">*</span> | `string` | *No description.* |
| [`type`](#larsfroniuscommercetoolscdkconstructseventbridgedestinationpropertytype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `accountId`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.EventBridgeDestination.property.accountId" id="larsfroniuscommercetoolscdkconstructseventbridgedestinationpropertyaccountid"></a>

```typescript
public readonly accountId: string;
```

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.EventBridgeDestination.property.region" id="larsfroniuscommercetoolscdkconstructseventbridgedestinationpropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.EventBridgeDestination.property.type" id="larsfroniuscommercetoolscdkconstructseventbridgedestinationpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

### SnsDestination <a name="@larsfronius/commercetools-cdk-constructs.SnsDestination" id="larsfroniuscommercetoolscdkconstructssnsdestination"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SnsDestination } from '@larsfronius/commercetools-cdk-constructs'

const snsDestination: SnsDestination = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`accessKey`](#larsfroniuscommercetoolscdkconstructssnsdestinationpropertyaccesskey)<span title="Required">*</span> | `string` | *No description.* |
| [`accessSecret`](#larsfroniuscommercetoolscdkconstructssnsdestinationpropertyaccesssecret)<span title="Required">*</span> | `string` | *No description.* |
| [`topicArn`](#larsfroniuscommercetoolscdkconstructssnsdestinationpropertytopicarn)<span title="Required">*</span> | `string` | *No description.* |
| [`type`](#larsfroniuscommercetoolscdkconstructssnsdestinationpropertytype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `accessKey`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.SnsDestination.property.accessKey" id="larsfroniuscommercetoolscdkconstructssnsdestinationpropertyaccesskey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* `string`

---

##### `accessSecret`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.SnsDestination.property.accessSecret" id="larsfroniuscommercetoolscdkconstructssnsdestinationpropertyaccesssecret"></a>

```typescript
public readonly accessSecret: string;
```

- *Type:* `string`

---

##### `topicArn`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.SnsDestination.property.topicArn" id="larsfroniuscommercetoolscdkconstructssnsdestinationpropertytopicarn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.SnsDestination.property.type" id="larsfroniuscommercetoolscdkconstructssnsdestinationpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

### SqsDestination <a name="@larsfronius/commercetools-cdk-constructs.SqsDestination" id="larsfroniuscommercetoolscdkconstructssqsdestination"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SqsDestination } from '@larsfronius/commercetools-cdk-constructs'

const sqsDestination: SqsDestination = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`accessKey`](#larsfroniuscommercetoolscdkconstructssqsdestinationpropertyaccesskey)<span title="Required">*</span> | `string` | *No description.* |
| [`accessSecret`](#larsfroniuscommercetoolscdkconstructssqsdestinationpropertyaccesssecret)<span title="Required">*</span> | `string` | *No description.* |
| [`queueUrl`](#larsfroniuscommercetoolscdkconstructssqsdestinationpropertyqueueurl)<span title="Required">*</span> | `string` | *No description.* |
| [`region`](#larsfroniuscommercetoolscdkconstructssqsdestinationpropertyregion)<span title="Required">*</span> | `string` | *No description.* |
| [`type`](#larsfroniuscommercetoolscdkconstructssqsdestinationpropertytype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `accessKey`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.SqsDestination.property.accessKey" id="larsfroniuscommercetoolscdkconstructssqsdestinationpropertyaccesskey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* `string`

---

##### `accessSecret`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.SqsDestination.property.accessSecret" id="larsfroniuscommercetoolscdkconstructssqsdestinationpropertyaccesssecret"></a>

```typescript
public readonly accessSecret: string;
```

- *Type:* `string`

---

##### `queueUrl`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.SqsDestination.property.queueUrl" id="larsfroniuscommercetoolscdkconstructssqsdestinationpropertyqueueurl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.SqsDestination.property.region" id="larsfroniuscommercetoolscdkconstructssqsdestinationpropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

---

##### `type`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.SqsDestination.property.type" id="larsfroniuscommercetoolscdkconstructssqsdestinationpropertytype"></a>

```typescript
public readonly type: string;
```

- *Type:* `string`

---

## Classes <a name="Classes" id="classes"></a>

### EventbridgeSubscriptionTarget <a name="@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget" id="larsfroniuscommercetoolscdkconstructseventbridgesubscriptiontarget"></a>

- *Implements:* [`@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget`](#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget)

#### Initializers <a name="@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget.Initializer" id="larsfroniuscommercetoolscdkconstructseventbridgesubscriptiontargetinitializer"></a>

```typescript
import { EventbridgeSubscriptionTarget } from '@larsfronius/commercetools-cdk-constructs'

new EventbridgeSubscriptionTarget(eventbus?: IEventBus)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`eventbus`](#larsfroniuscommercetoolscdkconstructseventbridgesubscriptiontargetparametereventbus) | [`aws-cdk-lib.aws_events.IEventBus`](#aws-cdk-lib.aws_events.IEventBus) | *No description.* |

---

##### `eventbus`<sup>Optional</sup> <a name="@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget.parameter.eventbus" id="larsfroniuscommercetoolscdkconstructseventbridgesubscriptiontargetparametereventbus"></a>

- *Type:* [`aws-cdk-lib.aws_events.IEventBus`](#aws-cdk-lib.aws_events.IEventBus)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`getDestination`](#larsfroniuscommercetoolscdkconstructseventbridgesubscriptiontargetgetdestination) | *No description.* |
| [`postSubscription`](#larsfroniuscommercetoolscdkconstructseventbridgesubscriptiontargetpostsubscription) | *No description.* |

---

##### `getDestination` <a name="@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget.getDestination" id="larsfroniuscommercetoolscdkconstructseventbridgesubscriptiontargetgetdestination"></a>

```typescript
public getDestination(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget.parameter.scope" id="larsfroniuscommercetoolscdkconstructseventbridgesubscriptiontargetparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `postSubscription` <a name="@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget.postSubscription" id="larsfroniuscommercetoolscdkconstructseventbridgesubscriptiontargetpostsubscription"></a>

```typescript
public postSubscription(subscription: CommercetoolsSubscription)
```

###### `subscription`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget.parameter.subscription" id="larsfroniuscommercetoolscdkconstructseventbridgesubscriptiontargetparametersubscription"></a>

- *Type:* [`@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription`](#@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription)

---


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`eventBus`](#larsfroniuscommercetoolscdkconstructseventbridgesubscriptiontargetpropertyeventbus) | [`aws-cdk-lib.aws_events.IEventBus`](#aws-cdk-lib.aws_events.IEventBus) | *No description.* |

---

##### `eventBus`<sup>Optional</sup> <a name="@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget.property.eventBus" id="larsfroniuscommercetoolscdkconstructseventbridgesubscriptiontargetpropertyeventbus"></a>

```typescript
public readonly eventBus: IEventBus;
```

- *Type:* [`aws-cdk-lib.aws_events.IEventBus`](#aws-cdk-lib.aws_events.IEventBus)

---


### SnsSubscriptionTarget <a name="@larsfronius/commercetools-cdk-constructs.SnsSubscriptionTarget" id="larsfroniuscommercetoolscdkconstructssnssubscriptiontarget"></a>

- *Implements:* [`@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget`](#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget)

#### Initializers <a name="@larsfronius/commercetools-cdk-constructs.SnsSubscriptionTarget.Initializer" id="larsfroniuscommercetoolscdkconstructssnssubscriptiontargetinitializer"></a>

```typescript
import { SnsSubscriptionTarget } from '@larsfronius/commercetools-cdk-constructs'

new SnsSubscriptionTarget(topic?: ITopic)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`topic`](#larsfroniuscommercetoolscdkconstructssnssubscriptiontargetparametertopic) | [`aws-cdk-lib.aws_sns.ITopic`](#aws-cdk-lib.aws_sns.ITopic) | *No description.* |

---

##### `topic`<sup>Optional</sup> <a name="@larsfronius/commercetools-cdk-constructs.SnsSubscriptionTarget.parameter.topic" id="larsfroniuscommercetoolscdkconstructssnssubscriptiontargetparametertopic"></a>

- *Type:* [`aws-cdk-lib.aws_sns.ITopic`](#aws-cdk-lib.aws_sns.ITopic)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`getDestination`](#larsfroniuscommercetoolscdkconstructssnssubscriptiontargetgetdestination) | *No description.* |

---

##### `getDestination` <a name="@larsfronius/commercetools-cdk-constructs.SnsSubscriptionTarget.getDestination" id="larsfroniuscommercetoolscdkconstructssnssubscriptiontargetgetdestination"></a>

```typescript
public getDestination(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.SnsSubscriptionTarget.parameter.scope" id="larsfroniuscommercetoolscdkconstructssnssubscriptiontargetparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`snsTopic`](#larsfroniuscommercetoolscdkconstructssnssubscriptiontargetpropertysnstopic) | [`aws-cdk-lib.aws_sns.ITopic`](#aws-cdk-lib.aws_sns.ITopic) | *No description.* |

---

##### `snsTopic`<sup>Optional</sup> <a name="@larsfronius/commercetools-cdk-constructs.SnsSubscriptionTarget.property.snsTopic" id="larsfroniuscommercetoolscdkconstructssnssubscriptiontargetpropertysnstopic"></a>

```typescript
public readonly snsTopic: ITopic;
```

- *Type:* [`aws-cdk-lib.aws_sns.ITopic`](#aws-cdk-lib.aws_sns.ITopic)

---


### SQSSubscriptionTarget <a name="@larsfronius/commercetools-cdk-constructs.SQSSubscriptionTarget" id="larsfroniuscommercetoolscdkconstructssqssubscriptiontarget"></a>

- *Implements:* [`@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget`](#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget)

#### Initializers <a name="@larsfronius/commercetools-cdk-constructs.SQSSubscriptionTarget.Initializer" id="larsfroniuscommercetoolscdkconstructssqssubscriptiontargetinitializer"></a>

```typescript
import { SQSSubscriptionTarget } from '@larsfronius/commercetools-cdk-constructs'

new SQSSubscriptionTarget(queue?: IQueue)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`queue`](#larsfroniuscommercetoolscdkconstructssqssubscriptiontargetparameterqueue) | [`aws-cdk-lib.aws_sqs.IQueue`](#aws-cdk-lib.aws_sqs.IQueue) | *No description.* |

---

##### `queue`<sup>Optional</sup> <a name="@larsfronius/commercetools-cdk-constructs.SQSSubscriptionTarget.parameter.queue" id="larsfroniuscommercetoolscdkconstructssqssubscriptiontargetparameterqueue"></a>

- *Type:* [`aws-cdk-lib.aws_sqs.IQueue`](#aws-cdk-lib.aws_sqs.IQueue)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`getDestination`](#larsfroniuscommercetoolscdkconstructssqssubscriptiontargetgetdestination) | *No description.* |

---

##### `getDestination` <a name="@larsfronius/commercetools-cdk-constructs.SQSSubscriptionTarget.getDestination" id="larsfroniuscommercetoolscdkconstructssqssubscriptiontargetgetdestination"></a>

```typescript
public getDestination(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.SQSSubscriptionTarget.parameter.scope" id="larsfroniuscommercetoolscdkconstructssqssubscriptiontargetparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`queue`](#larsfroniuscommercetoolscdkconstructssqssubscriptiontargetpropertyqueue) | [`aws-cdk-lib.aws_sqs.IQueue`](#aws-cdk-lib.aws_sqs.IQueue) | *No description.* |

---

##### `queue`<sup>Optional</sup> <a name="@larsfronius/commercetools-cdk-constructs.SQSSubscriptionTarget.property.queue" id="larsfroniuscommercetoolscdkconstructssqssubscriptiontargetpropertyqueue"></a>

```typescript
public readonly queue: IQueue;
```

- *Type:* [`aws-cdk-lib.aws_sqs.IQueue`](#aws-cdk-lib.aws_sqs.IQueue)

---


## Protocols <a name="Protocols" id="protocols"></a>

### ICommercetoolsChangeSubscription <a name="@larsfronius/commercetools-cdk-constructs.ICommercetoolsChangeSubscription" id="larsfroniuscommercetoolscdkconstructsicommercetoolschangesubscription"></a>

- *Implemented By:* [`@larsfronius/commercetools-cdk-constructs.ICommercetoolsChangeSubscription`](#@larsfronius/commercetools-cdk-constructs.ICommercetoolsChangeSubscription)


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`resourceTypeId`](#larsfroniuscommercetoolscdkconstructsicommercetoolschangesubscriptionpropertyresourcetypeid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `resourceTypeId`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.ICommercetoolsChangeSubscription.property.resourceTypeId" id="larsfroniuscommercetoolscdkconstructsicommercetoolschangesubscriptionpropertyresourcetypeid"></a>

```typescript
public readonly resourceTypeId: string;
```

- *Type:* `string`

---

### ICommercetoolsMessageSubscription <a name="@larsfronius/commercetools-cdk-constructs.ICommercetoolsMessageSubscription" id="larsfroniuscommercetoolscdkconstructsicommercetoolsmessagesubscription"></a>

- *Implemented By:* [`@larsfronius/commercetools-cdk-constructs.ICommercetoolsMessageSubscription`](#@larsfronius/commercetools-cdk-constructs.ICommercetoolsMessageSubscription)


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`resourceTypeId`](#larsfroniuscommercetoolscdkconstructsicommercetoolsmessagesubscriptionpropertyresourcetypeid)<span title="Required">*</span> | `string` | *No description.* |
| [`types`](#larsfroniuscommercetoolscdkconstructsicommercetoolsmessagesubscriptionpropertytypes)<span title="Required">*</span> | `string`[] | *No description.* |

---

##### `resourceTypeId`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.ICommercetoolsMessageSubscription.property.resourceTypeId" id="larsfroniuscommercetoolscdkconstructsicommercetoolsmessagesubscriptionpropertyresourcetypeid"></a>

```typescript
public readonly resourceTypeId: string;
```

- *Type:* `string`

---

##### `types`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.ICommercetoolsMessageSubscription.property.types" id="larsfroniuscommercetoolscdkconstructsicommercetoolsmessagesubscriptionpropertytypes"></a>

```typescript
public readonly types: string[];
```

- *Type:* `string`[]

---

### ICommercetoolsSubscriptionProps <a name="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps" id="larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptionprops"></a>

- *Implemented By:* [`@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps`](#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps)


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`changes`](#larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptionpropspropertychanges)<span title="Required">*</span> | [`@larsfronius/commercetools-cdk-constructs.ICommercetoolsChangeSubscription`](#@larsfronius/commercetools-cdk-constructs.ICommercetoolsChangeSubscription)[] | *No description.* |
| [`messages`](#larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptionpropspropertymessages)<span title="Required">*</span> | [`@larsfronius/commercetools-cdk-constructs.ICommercetoolsMessageSubscription`](#@larsfronius/commercetools-cdk-constructs.ICommercetoolsMessageSubscription)[] | *No description.* |
| [`projectKey`](#larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptionpropspropertyprojectkey)<span title="Required">*</span> | `string` | *No description.* |
| [`secret`](#larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptionpropspropertysecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret) | *No description.* |
| [`target`](#larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptionpropspropertytarget)<span title="Required">*</span> | [`@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget`](#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget) | target is one of EventbridgeSubscriptionTarget, SQSSubscriptionTarget or SnsSubscriptionTarget. |
| [`baseUri`](#larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptionpropspropertybaseuri) | `string` | baseUri is the base URI of your commercetools instance. |
| [`oAuthUri`](#larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptionpropspropertyoauthuri) | `string` | oAuthUri is the oauth URI of your commercetools instance. |

---

##### `changes`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.changes" id="larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptionpropspropertychanges"></a>

```typescript
public readonly changes: ICommercetoolsChangeSubscription[];
```

- *Type:* [`@larsfronius/commercetools-cdk-constructs.ICommercetoolsChangeSubscription`](#@larsfronius/commercetools-cdk-constructs.ICommercetoolsChangeSubscription)[]

---

##### `messages`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.messages" id="larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptionpropspropertymessages"></a>

```typescript
public readonly messages: ICommercetoolsMessageSubscription[];
```

- *Type:* [`@larsfronius/commercetools-cdk-constructs.ICommercetoolsMessageSubscription`](#@larsfronius/commercetools-cdk-constructs.ICommercetoolsMessageSubscription)[]

---

##### `projectKey`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.projectKey" id="larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptionpropspropertyprojectkey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* `string`

---

##### `secret`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.secret" id="larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptionpropspropertysecret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

---

##### `target`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.target" id="larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptionpropspropertytarget"></a>

```typescript
public readonly target: ICommercetoolsSubscriptionTarget;
```

- *Type:* [`@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget`](#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget)

target is one of EventbridgeSubscriptionTarget, SQSSubscriptionTarget or SnsSubscriptionTarget.

---

##### `baseUri`<sup>Optional</sup> <a name="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.baseUri" id="larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptionpropspropertybaseuri"></a>

```typescript
public readonly baseUri: string;
```

- *Type:* `string`

baseUri is the base URI of your commercetools instance.

Defaults to 'https://api.europe-west1.gcp.commercetools.com'

---

##### `oAuthUri`<sup>Optional</sup> <a name="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionProps.property.oAuthUri" id="larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptionpropspropertyoauthuri"></a>

```typescript
public readonly oAuthUri: string;
```

- *Type:* `string`

oAuthUri is the oauth URI of your commercetools instance.

Defaults to 'https://auth.europe-west1.gcp.commercetools.com'

---

### ICommercetoolsSubscriptionTarget <a name="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget" id="larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptiontarget"></a>

- *Implemented By:* [`@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget`](#@larsfronius/commercetools-cdk-constructs.EventbridgeSubscriptionTarget), [`@larsfronius/commercetools-cdk-constructs.SQSSubscriptionTarget`](#@larsfronius/commercetools-cdk-constructs.SQSSubscriptionTarget), [`@larsfronius/commercetools-cdk-constructs.SnsSubscriptionTarget`](#@larsfronius/commercetools-cdk-constructs.SnsSubscriptionTarget), [`@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget`](#@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget)

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`getDestination`](#larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptiontargetgetdestination) | *No description.* |
| [`postSubscription`](#larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptiontargetpostsubscription) | *No description.* |

---

##### `getDestination` <a name="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget.getDestination" id="larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptiontargetgetdestination"></a>

```typescript
public getDestination(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget.parameter.scope" id="larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptiontargetparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `postSubscription` <a name="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget.postSubscription" id="larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptiontargetpostsubscription"></a>

```typescript
public postSubscription(subscription: CommercetoolsSubscription)
```

###### `subscription`<sup>Required</sup> <a name="@larsfronius/commercetools-cdk-constructs.ICommercetoolsSubscriptionTarget.parameter.subscription" id="larsfroniuscommercetoolscdkconstructsicommercetoolssubscriptiontargetparametersubscription"></a>

- *Type:* [`@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription`](#@larsfronius/commercetools-cdk-constructs.CommercetoolsSubscription)

---


