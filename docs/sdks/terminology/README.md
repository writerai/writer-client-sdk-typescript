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
  CreateTermsRequestFailHandling,
  TermCreatePos,
  TermCreateType,
  TermExampleCreateType,
  TermMistakeCreatePos,
} from "@writerai/writer-sdk/dist/sdk/models/shared";

(async() => {
  const sdk = new Writer({
    security: {
      apiKey: "",
    },
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
              example: "calculate Toyota noon",
              type: TermExampleCreateType.Bad,
            },
          ],
          linkedTerms: [
            {},
          ],
          mistakes: [
            {
              caseSensitive: false,
              mistake: "Chief",
            },
          ],
          tags: [
            {
              tag: "kelvin",
            },
          ],
          term: "lime",
          type: TermCreateType.Banned,
        },
      ],
    },
    teamId: 623862,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.AddTermsRequest](../../models/operations/addtermsrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.AddTermsResponse](../../models/operations/addtermsresponse.md)>**


## delete

Delete terms

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

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.DeleteTermsRequest](../../models/operations/deletetermsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.DeleteTermsResponse](../../models/operations/deletetermsresponse.md)>**


## find

Find terms

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { FindTermsPartOfSpeech, FindTermsSortField, FindTermsSortOrder, FindTermsType } from "@writerai/writer-sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Writer({
    security: {
      apiKey: "",
    },
    organizationId: 40141,
  });

  const res = await sdk.terminology.find({
    tags: [
      "underestimate",
    ],
    teamId: 111247,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.FindTermsRequest](../../models/operations/findtermsrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.FindTermsResponse](../../models/operations/findtermsresponse.md)>**


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
    security: {
      apiKey: "",
    },
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
              example: "Rock",
              type: TermExampleCreateType.Good,
            },
          ],
          id: 708455,
          linkedTerms: [
            {},
          ],
          mistakes: [
            {
              caseSensitive: false,
              mistake: "Metal cheater Islands",
            },
          ],
          tags: [
            {
              tag: "withdrawal extend",
            },
          ],
          term: "bifurcated",
          type: TermUpdateType.Banned,
        },
      ],
    },
    teamId: 789275,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.UpdateTermsRequest](../../models/operations/updatetermsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UpdateTermsResponse](../../models/operations/updatetermsresponse.md)>**

