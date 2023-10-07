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

(async() => {
  const sdk = new Writer({
    security: {
      apiKey: "",
    },
    organizationId: 545907,
  });

  const res = await sdk.snippet.delete({
    ids: [
      "Van",
    ],
    teamId: 386564,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { FindSnippetsSortField, FindSnippetsSortOrder } from "@writerai/writer-sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Writer({
    security: {
      apiKey: "",
    },
    organizationId: 40141,
  });

  const res = await sdk.snippet.find({
    shortcuts: [
      "underestimate",
    ],
    tags: [
      "Northeast",
    ],
    teamId: 803382,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Writer({
    security: {
      apiKey: "",
    },
    organizationId: 857478,
  });

  const res = await sdk.snippet.update({
    requestBody: [
      {
        id: "<ID>",
        snippet: "Rock",
        tags: [
          {
            tag: "male Metal",
          },
        ],
      },
    ],
    teamId: 984008,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateSnippetsRequest](../../models/operations/updatesnippetsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateSnippetsResponse](../../models/operations/updatesnippetsresponse.md)>**

