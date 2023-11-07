<!-- Start SDK Example Usage -->


```typescript
import { Writer } from "@writerai/writer-sdk";

(async () => {
    const sdk = new Writer({
        apiKey: "",
        organizationId: 850421,
    });

    const res = await sdk.billing.getSubscriptionDetails();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->