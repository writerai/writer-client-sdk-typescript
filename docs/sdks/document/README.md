# document

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
import { GetDocumentDetailsResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "",
  },
  organizationId: 716327,
});

sdk.document.get({
  documentId: 841386,
  teamId: 289406,
}).then((res: GetDocumentDetailsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import {
  ListTeamDocumentsResponse,
  ListTeamDocumentsSortField,
  ListTeamDocumentsSortOrder,
} from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "",
  },
  organizationId: 264730,
});

sdk.document.list({
  limit: 183191,
  offset: 397821,
  search: "cupiditate",
  sortField: ListTeamDocumentsSortField.ModificationTime,
  sortOrder: ListTeamDocumentsSortOrder.Asc,
  teamId: 164940,
}).then((res: ListTeamDocumentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListTeamDocumentsRequest](../../models/operations/listteamdocumentsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListTeamDocumentsResponse](../../models/operations/listteamdocumentsresponse.md)>**

