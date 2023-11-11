# Terminology
(*terminology*)

## Overview

Methods related to Terminology

### Available Operations

* [add](#add) - Add terms
* [delete](#delete) - Delete terms
* [find](#find) - Find terms
* [update](#update) - Update terms

## add

Add terms

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import {
  FailHandling,
  TermCreatePos,
  TermCreateType,
  TermExampleCreateType,
  TermMistakeCreatePos,
} from "@writerai/writer-sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new Writer({
    apiKey: "",
    organizationId: 551477,
  });

  const res = await sdk.terminology.add({
    createTermsRequest: {
      models: [
        {
          approvedTermExtension: {
            capitalize: false,
            fixCase: false,
            fixCommonMistakes: false,
          },
          caseSensitive: false,
          examples: [
            {
              example: "string",
              type: TermExampleCreateType.Bad,
            },
          ],
          linkedTerms: [
            {},
          ],
          mistakes: [
            {
              caseSensitive: false,
              mistake: "string",
            },
          ],
          tags: [
            {
              tag: "string",
            },
          ],
          term: "string",
          type: TermCreateType.Banned,
        },
      ],
    },
    teamId: 623445,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.AddTermsRequest](../../sdk/models/operations/addtermsrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.AddTermsResponse](../../sdk/models/operations/addtermsresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.FailResponse | 400,401,403,404,500 | application/json    |
| errors.SDKError     | 400-600             | */*                 |

## delete

Delete terms

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";

(async() => {
  const sdk = new Writer({
    apiKey: "",
    organizationId: 545907,
  });

  const res = await sdk.terminology.delete({
    ids: [
      841399,
    ],
    teamId: 698486,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteTermsRequest](../../sdk/models/operations/deletetermsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteTermsResponse](../../sdk/models/operations/deletetermsresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.FailResponse | 400,401,403,404,500 | application/json    |
| errors.SDKError     | 400-600             | */*                 |

## find

Find terms

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { PartOfSpeech, QueryParamSortField, QueryParamSortOrder, TypeT } from "@writerai/writer-sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Writer({
    apiKey: "",
    organizationId: 40141,
  });

  const res = await sdk.terminology.find({
    tags: [
      "string",
    ],
    teamId: 326883,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.FindTermsRequest](../../sdk/models/operations/findtermsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.FindTermsResponse](../../sdk/models/operations/findtermsresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.FailResponse | 400,401,403,404,500 | application/json    |
| errors.SDKError     | 400-600             | */*                 |

## update

Update terms

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import {
  TermExampleCreateType,
  TermMistakeCreatePos,
  TermUpdatePos,
  TermUpdateType,
  UpdateTermsRequestFailHandling,
} from "@writerai/writer-sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new Writer({
    apiKey: "",
    organizationId: 857478,
  });

  const res = await sdk.terminology.update({
    updateTermsRequest: {
      models: [
        {
          approvedTermExtension: {
            capitalize: false,
            fixCase: false,
            fixCommonMistakes: false,
          },
          caseSensitive: false,
          examples: [
            {
              example: "string",
              type: TermExampleCreateType.Good,
            },
          ],
          id: 597129,
          linkedTerms: [
            {},
          ],
          mistakes: [
            {
              caseSensitive: false,
              mistake: "string",
            },
          ],
          tags: [
            {
              tag: "string",
            },
          ],
          term: "string",
          type: TermUpdateType.Approved,
        },
      ],
    },
    teamId: 344620,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateTermsRequest](../../sdk/models/operations/updatetermsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateTermsResponse](../../sdk/models/operations/updatetermsresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.FailResponse | 400,401,403,404,500 | application/json    |
| errors.SDKError     | 400-600             | */*                 |
