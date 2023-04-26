# models

## Overview

Methods related to Model

### Available Operations

* [list](#list) - List available LLM models

## list

List available LLM models

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { ListModelsRequest, ListModelsResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { GenerationModelInfoResponseTypeEnum } from "@writerai/writer-sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 653108,
});

const req: ListModelsRequest = {};

sdk.models.list(req).then((res: ListModelsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
