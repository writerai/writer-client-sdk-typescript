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
import { CreateModelCustomizationResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "",
  },
  organizationId: 653140,
});

sdk.modelCustomization.create({
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
}).then((res: CreateModelCustomizationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.CreateModelCustomizationRequest](../../models/operations/createmodelcustomizationrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.CreateModelCustomizationResponse](../../models/operations/createmodelcustomizationresponse.md)>**


## delete

Delete Model customization

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { DeleteModelCustomizationResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "",
  },
  organizationId: 988374,
});

sdk.modelCustomization.delete({
  customizationId: "sapiente",
  modelId: "architecto",
}).then((res: DeleteModelCustomizationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.DeleteModelCustomizationRequest](../../models/operations/deletemodelcustomizationrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.DeleteModelCustomizationResponse](../../models/operations/deletemodelcustomizationresponse.md)>**


## get

Get model customization

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { GetModelCustomizationResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "",
  },
  organizationId: 652790,
});

sdk.modelCustomization.get({
  customizationId: "dolorem",
  modelId: "culpa",
}).then((res: GetModelCustomizationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetModelCustomizationRequest](../../models/operations/getmodelcustomizationrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetModelCustomizationResponse](../../models/operations/getmodelcustomizationresponse.md)>**


## list

List model customizations

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { ListModelCustomizationsResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "",
  },
  organizationId: 161309,
});

sdk.modelCustomization.list({
  modelId: "repellat",
}).then((res: ListModelCustomizationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ListModelCustomizationsRequest](../../models/operations/listmodelcustomizationsrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ListModelCustomizationsResponse](../../models/operations/listmodelcustomizationsresponse.md)>**

