# ModelCustomization

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
  organizationId: 944669,
});

sdk.modelCustomization.create({
  createCustomizationRequest: {
    additionalHyperParameters: {
      numVirtualTokens: 758616,
    },
    batchSize: 521848,
    description: "beatae",
    epochs: 414662,
    learningRate: 4736,
    name: "Norma Ryan",
    promptTemplate: "ipsum",
    trainingDatasetFileId: "excepturi",
    validationDatasetFileId: "aspernatur",
  },
  modelId: "perferendis",
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
  organizationId: 324141,
});

sdk.modelCustomization.delete({
  customizationId: "natus",
  modelId: "sed",
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
  organizationId: 612096,
});

sdk.modelCustomization.get({
  customizationId: "dolor",
  modelId: "natus",
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
  organizationId: 386489,
});

sdk.modelCustomization.list({
  modelId: "hic",
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

