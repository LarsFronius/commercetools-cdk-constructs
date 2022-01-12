# Commercetools CDK Constructs

Implemented resource types:
 * Subscriptions

## Usage

```typescript
const eventBus = new EventBus(this, 'EventBus')
new CommercetoolsSubscription(this, 'CTToEventBusSubscription', {
    messages: [{
        resourceTypeId: "product",
        types: [ ]
    }],
    changes: [],
    projectKey: props.ctProjektKey,
    secret: Secret.fromSecretNameV2(this, 'CTSecret', `/ct/${props.envName}/commercetools-subscription-mgmt`),
    target: new EventbridgeSubscriptionTarget(this.eventBus)
})

```