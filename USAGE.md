<!-- Start SDK Example Usage -->
```typescript
import {
  DetectContentRequest,
  DetectContentResponse
} from "@writerai/writer-sdk/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Writer } from "@writerai/writer-sdk";
const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 548814,
});

const req: DetectContentRequest = {
  contentDetectorRequest: {
    input: "provident",
  },
};

sdk.aiContentDetector.detect(req).then((res: DetectContentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->