<!-- Start SDK Example Usage -->
```typescript
import { Writer } from "@writerai/writer-sdk";
import { DetectContentResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { ContentDetectorResponseLabel } from "@writerai/writer-sdk/dist/sdk/models/shared";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 548814,
});

sdk.aiContentDetector.detect({
  contentDetectorRequest: {
    input: "provident",
  },
}).then((res: DetectContentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->