# snippet

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
  organizationId: 943749,
});

sdk.snippet.delete({
  xRequestID: "saepe",
  ids: [
    "fuga",
  ],
  teamId: 449950,
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
  organizationId: 359508,
});

sdk.snippet.find({
  limit: 613064,
  offset: 437032,
  search: "saepe",
  shortcuts: [
    "quidem",
  ],
  sortField: FindSnippetsSortField.Shortcut,
  sortOrder: FindSnippetsSortOrder.Asc,
  tags: [
    "reiciendis",
  ],
  teamId: 666767,
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
  organizationId: 653140,
});

sdk.snippet.update({
  requestBody: [
    {
      description: "laborum",
      id: "2352c595-5907-4aff-9a3a-2fa946773925",
      shortcut: "vitae",
      snippet: "laborum",
      tags: [
        {
          tag: "animi",
        },
      ],
    },
  ],
  xRequestID: "enim",
  teamId: 138183,
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

