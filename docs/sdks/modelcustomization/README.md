# ModelCustomization
(*modelCustomization*)

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

(async() => {
  const sdk = new Writer({
    apiKey: "",
    organizationId: 486589,
  });

  const res = await sdk.modelCustomization.create({
    createCustomizationRequest: {
      additionalHyperParameters: {
        numVirtualTokens: 489382,
      },
      name: "Extended South",
      trainingDatasetFileId: "grey technology East",
    },
    modelId: "evolve",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Writer({
    apiKey: "",
    organizationId: 545907,
  });

  const res = await sdk.modelCustomization.delete({
    customizationId: "Designer complexity gladiolus",
    modelId: "objective Aluminium Metal",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Writer({
    apiKey: "",
    organizationId: 700347,
  });

  const res = await sdk.modelCustomization.get({
    customizationId: "program",
    modelId: "Kia Cambridgeshire",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Writer({
    apiKey: "",
    organizationId: 768578,
  });

  const res = await sdk.modelCustomization.list({
    modelId: "compress",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ListModelCustomizationsRequest](../../models/operations/listmodelcustomizationsrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ListModelCustomizationsResponse](../../models/operations/listmodelcustomizationsresponse.md)>**

