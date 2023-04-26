# aiContentDetector

## Overview

Methods related to AI Content Detector

### Available Operations

* [detect](#detect) - Content detector api

## detect

Content detector api

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { DetectContentRequest, DetectContentResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { ContentDetectorResponseLabelEnum } from "@writerai/writer-sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 715190,
});

const req: DetectContentRequest = {
  contentDetectorRequest: {
    input: "quibusdam",
  },
};

sdk.aiContentDetector.detect(req).then((res: DetectContentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
