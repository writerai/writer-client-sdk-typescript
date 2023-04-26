# modelCustomization

## Overview

Methods related to Model Customization

### Available Operations

* [create](#create) - Create model customization
* [delete](#delete) - Delete Model customization
* [get](#get) - Get model customization
* [list](#list) - List model customizations

## create

Create model customization

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { CreateModelCustomizationRequest, CreateModelCustomizationResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 653140,
});

const req: CreateModelCustomizationRequest = {
  createCustomizationRequest: {
    additionalHyperParameters: {
      numVirtualTokens: 670638,
    },
    batchSize: 170909,
    description: "dolorem",
    epochs: 358152,
    learningRate: 1289.26,
    name: "Ronnie Mohr",
    promptTemplate: "excepturi",
    trainingDatasetFileId: "accusantium",
    validationDatasetFileId: "iure",
  },
  modelId: "culpa",
};

sdk.modelCustomization.create(req).then((res: CreateModelCustomizationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## delete

Delete Model customization

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { DeleteModelCustomizationRequest, DeleteModelCustomizationResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 988374,
});

const req: DeleteModelCustomizationRequest = {
  customizationId: "sapiente",
  modelId: "architecto",
};

sdk.modelCustomization.delete(req).then((res: DeleteModelCustomizationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get model customization

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { GetModelCustomizationRequest, GetModelCustomizationResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 652790,
});

const req: GetModelCustomizationRequest = {
  customizationId: "dolorem",
  modelId: "culpa",
};

sdk.modelCustomization.get(req).then((res: GetModelCustomizationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

List model customizations

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { ListModelCustomizationsRequest, ListModelCustomizationsResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 161309,
});

const req: ListModelCustomizationsRequest = {
  modelId: "repellat",
};

sdk.modelCustomization.list(req).then((res: ListModelCustomizationsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
