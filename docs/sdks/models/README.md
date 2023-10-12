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

(async() => {
  const sdk = new Writer({
    security: {
      apiKey: "",
    },
    organizationId: 768578,
  });

  const res = await sdk.models.list({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.ListModelsRequest](../../models/operations/listmodelsrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ListModelsResponse](../../models/operations/listmodelsresponse.md)>**

