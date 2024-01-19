<!-- Start SDK Example Usage [usage] -->
```typescript
import { Writer } from "@writerai/writer-sdk";

async function run() {
    const sdk = new Writer({
        apiKey: "<YOUR_API_KEY_HERE>",
        organizationId: 850421,
    });

    const result = await sdk.billing.getSubscriptionDetails();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->