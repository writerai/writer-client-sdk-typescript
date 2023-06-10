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
  organizationId: 581850,
});

sdk.snippet.delete({
  xRequestID: "numquam",
  ids: [
    "quam",
    "molestiae",
  ],
  teamId: 244425,
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
  organizationId: 623510,
});

sdk.snippet.find({
  limit: 158969,
  offset: 338007,
  search: "vitae",
  shortcuts: [
    "animi",
    "enim",
    "odit",
  ],
  sortField: FindSnippetsSortField.ModificationTime,
  sortOrder: FindSnippetsSortOrder.Asc,
  tags: [
    "ipsam",
    "id",
    "possimus",
    "aut",
  ],
  teamId: 97101,
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
  organizationId: 622846,
});

sdk.snippet.update({
  requestBody: [
    {
      description: "laborum",
      id: "1ffe78f0-97b0-4074-b154-71b5e6e13b99",
      shortcut: "pariatur",
      snippet: "modi",
      tags: [
        {
          tag: "rem",
        },
        {
          tag: "voluptates",
        },
        {
          tag: "quasi",
        },
      ],
    },
    {
      description: "repudiandae",
      id: "91e450ad-2abd-4442-a980-2d502a94bb4f",
      shortcut: "eum",
      snippet: "non",
      tags: [
        {
          tag: "sint",
        },
        {
          tag: "aliquid",
        },
        {
          tag: "provident",
        },
        {
          tag: "necessitatibus",
        },
      ],
    },
    {
      description: "sint",
      id: "a3efa77d-fb14-4cd6-aae3-95efb9ba88f3",
      shortcut: "deserunt",
      snippet: "nisi",
      tags: [
        {
          tag: "natus",
        },
        {
          tag: "omnis",
        },
      ],
    },
    {
      description: "molestiae",
      id: "074ba446-9b6e-4214-9959-890afa563e25",
      shortcut: "quasi",
      snippet: "iure",
      tags: [
        {
          tag: "debitis",
        },
        {
          tag: "eius",
        },
        {
          tag: "maxime",
        },
        {
          tag: "deleniti",
        },
      ],
    },
  ],
  xRequestID: "facilis",
  teamId: 447926,
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

