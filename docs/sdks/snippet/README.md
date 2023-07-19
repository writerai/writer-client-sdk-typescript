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
  organizationId: 988374,
});

sdk.snippet.delete({
  xRequestID: "sapiente",
  ids: [
    "mollitia",
  ],
  teamId: 208876,
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
  organizationId: 635059,
});

sdk.snippet.find({
  limit: 161309,
  offset: 995300,
  search: "mollitia",
  shortcuts: [
    "numquam",
    "commodi",
    "quam",
  ],
  sortField: FindSnippetsSortField.CreationTime,
  sortOrder: FindSnippetsSortOrder.Asc,
  tags: [
    "quia",
    "quis",
    "vitae",
  ],
  teamId: 674752,
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
  organizationId: 656330,
});

sdk.snippet.update({
  requestBody: [
    {
      description: "odit",
      id: "c3f5ad01-9da1-4ffe-b8f0-97b0074f1547",
      shortcut: "dicta",
      snippet: "harum",
      tags: [
        {
          tag: "accusamus",
        },
        {
          tag: "commodi",
        },
      ],
    },
    {
      description: "repudiandae",
      id: "13b99d48-8e1e-491e-850a-d2abd4426980",
      shortcut: "magni",
      snippet: "assumenda",
      tags: [
        {
          tag: "alias",
        },
        {
          tag: "fugit",
        },
      ],
    },
  ],
  xRequestID: "dolorum",
  teamId: 569618,
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

