<!-- Start SDK Example Usage -->


```typescript
import { Writer } from "@writerai/writer-sdk";

(async () => {
    const sdk = new Writer({
        apiKey: "",
        organizationId: 496531,
    });

    const res = await sdk.aiContentDetector.detect({
        contentDetectorRequest: {
            input: "string",
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->