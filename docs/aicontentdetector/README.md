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
import { DetectContentResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { ContentDetectorResponseLabel } from "@writerai/writer-sdk/dist/sdk/models/shared";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 715190,
});

sdk.aiContentDetector.detect({
  contentDetectorRequest: {
    input: "quibusdam",
  },
}).then((res: DetectContentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
