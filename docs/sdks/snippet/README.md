# Snippet
(*snippet*)

## Overview

Methods related to Snippets

### Available Operations

* [delete](#delete) - Delete snippets
* [find](#find) - Find snippets
* [update](#update) - Update snippets

## delete

Delete snippets

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { DeleteSnippetsResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "",
  },
  organizationId: 545907,
});

sdk.snippet.delete({
  xRequestID: "Designer complexity gladiolus",
  ids: [
    "ick",
  ],
  teamId: 604931,
}).then((res: DeleteSnippetsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DeleteSnippetsRequest](../../models/operations/deletesnippetsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DeleteSnippetsResponse](../../models/operations/deletesnippetsresponse.md)>**


## find

Find snippets

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { FindSnippetsResponse, FindSnippetsSortField, FindSnippetsSortOrder } from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "",
  },
  organizationId: 40141,
});

sdk.snippet.find({
  limit: 326883,
  offset: 488098,
  search: "whoa West Credit",
  shortcuts: [
    "Granite",
  ],
  sortField: FindSnippetsSortField.CreationTime,
  sortOrder: FindSnippetsSortOrder.Asc,
  tags: [
    "Iowa",
  ],
  teamId: 785366,
}).then((res: FindSnippetsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.FindSnippetsRequest](../../models/operations/findsnippetsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.FindSnippetsResponse](../../models/operations/findsnippetsresponse.md)>**


## update

Update snippets

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { UpdateSnippetsResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "",
  },
  organizationId: 857478,
});

sdk.snippet.update({
  requestBody: [
    {
      description: "Ameliorated methodical access",
      id: "<ID>",
      shortcut: "male Metal",
      snippet: "Arizona Cotton extend",
      tags: [
        {
          tag: "bifurcated",
        },
      ],
    },
  ],
  xRequestID: "silver immediately",
  teamId: 302461,
}).then((res: UpdateSnippetsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateSnippetsRequest](../../models/operations/updatesnippetsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateSnippetsResponse](../../models/operations/updatesnippetsresponse.md)>**

