# Document
(*document*)

## Overview

Methods related to document

### Available Operations

* [get](#get) - Get document details
* [list](#list) - List team documents

## get

Get document details

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";

(async() => {
  const sdk = new Writer({
    security: {
      apiKey: "",
    },
    organizationId: 700347,
  });

  const res = await sdk.document.get({
    documentId: 90065,
    teamId: 558834,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetDocumentDetailsRequest](../../models/operations/getdocumentdetailsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetDocumentDetailsResponse](../../models/operations/getdocumentdetailsresponse.md)>**


## list

List team documents

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { ListTeamDocumentsSortField, ListTeamDocumentsSortOrder } from "@writerai/writer-sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Writer({
    security: {
      apiKey: "",
    },
    organizationId: 768578,
  });

  const res = await sdk.document.list({
    teamId: 99895,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListTeamDocumentsRequest](../../models/operations/listteamdocumentsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListTeamDocumentsResponse](../../models/operations/listteamdocumentsresponse.md)>**

