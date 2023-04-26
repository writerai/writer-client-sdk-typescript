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
import { FetchCustomizedModelFileRequest, FetchCustomizedModelFileResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 681820,
});

const req: FetchCustomizedModelFileRequest = {
  customizationId: "in",
  modelId: "corporis",
};

sdk.downloadTheCustomizedModel.fetchFile(req).then((res: FetchCustomizedModelFileResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
