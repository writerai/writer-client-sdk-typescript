# downloadTheCustomizedModel

## Overview

Methods related to Download the customized model

### Available Operations

* [fetchFile](#fetchfile) - Download your fine-tuned model (available only for Palmyra Base and Palmyra Large)

## fetchFile

Download your fine-tuned model (available only for Palmyra Base and Palmyra Large)

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { FetchCustomizedModelFileResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 681820,
});

sdk.downloadTheCustomizedModel.fetchFile({
  customizationId: "in",
  modelId: "corporis",
}).then((res: FetchCustomizedModelFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
