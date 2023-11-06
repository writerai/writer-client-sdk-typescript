# Models
(*models*)

## Overview

Methods related to Model

### Available Operations

* [list](#list) - List available LLM models

## list

List available LLM models

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { ListModelsRequest } from "@writerai/writer-sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Writer({
    apiKey: "",
    organizationId: 768578,
  });
const organizationId: number = 99895;

  const res = await sdk.models.list(organizationId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `organizationId`                                             | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListModelsResponse](../../models/operations/listmodelsresponse.md)>**

