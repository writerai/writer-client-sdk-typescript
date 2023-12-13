<!-- Start SDK Example Usage [usage] -->
```typescript
import { Writer } from "@writerai/writer-sdk";

async function run() {
    const sdk = new Writer({
        apiKey: "<YOUR_API_KEY_HERE>",
        organizationId: 850421,
    });

    const res = await sdk.billing.getSubscriptionDetails();

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End SDK Example Usage [usage] -->