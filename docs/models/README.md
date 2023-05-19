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
import { ListModelsResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { GenerationModelInfoResponseType } from "@writerai/writer-sdk/dist/sdk/models/shared";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 653108,
});

sdk.models.list({}).then((res: ListModelsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
