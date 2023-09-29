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
import { AddTermsResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import {
  CreateTermsRequestFailHandling,
  TermCreatePos,
  TermCreateType,
  TermExampleCreateType,
  TermMistakeCreatePos,
} from "@writerai/writer-sdk/dist/sdk/models/shared";

const sdk = new Writer({
  security: {
    apiKey: "",
  },
  organizationId: 551477,
});

sdk.terminology.add({
  createTermsRequest: {
    failHandling: CreateTermsRequestFailHandling.ValidateOnly,
    models: [
      {
        approvedTermExtension: {
          capitalize: false,
          fixCase: false,
          fixCommonMistakes: false,
        },
        caseSensitive: false,
        description: "Optional mobile secured line",
        examples: [
          {
            example: "noon bypass Chief",
            type: TermExampleCreateType.Good,
          },
        ],
        highlight: false,
        linkedTerms: [
          {
            linkedTermId: 753323,
            reference: "Southeast",
          },
        ],
        mistakes: [
          {
            caseSensitive: false,
            mistake: "generating payment quantify",
            pos: TermMistakeCreatePos.Verb,
            reference: "Urbandale Gasoline",
          },
        ],
        pos: TermCreatePos.Adverb,
        reference: "methodologies",
        tags: [
          {
            tag: "Northeast",
          },
        ],
        term: "Pomona auxiliary",
        type: TermCreateType.Banned,
      },
    ],
  },
  teamId: 739517,
}).then((res: AddTermsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { DeleteTermsResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "",
  },
  organizationId: 545907,
});

sdk.terminology.delete({
  xRequestID: "Designer complexity gladiolus",
  ids: [
    921415,
  ],
  teamId: 953140,
}).then((res: DeleteTermsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import {
  FindTermsPartOfSpeech,
  FindTermsResponse,
  FindTermsSortField,
  FindTermsSortOrder,
  FindTermsType,
} from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "",
  },
  organizationId: 40141,
});

sdk.terminology.find({
  limit: 326883,
  offset: 488098,
  partOfSpeech: FindTermsPartOfSpeech.Adjective,
  sortField: FindTermsSortField.Type,
  sortOrder: FindTermsSortOrder.Asc,
  tags: [
    "West",
  ],
  teamId: 413686,
  term: "Bike generating",
  type: FindTermsType.Approved,
}).then((res: FindTermsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateTermsResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import {
  TermExampleCreateType,
  TermMistakeCreatePos,
  TermUpdatePos,
  TermUpdateType,
  UpdateTermsRequestFailHandling,
} from "@writerai/writer-sdk/dist/sdk/models/shared";

const sdk = new Writer({
  security: {
    apiKey: "",
  },
  organizationId: 857478,
});

sdk.terminology.update({
  updateTermsRequest: {
    failHandling: UpdateTermsRequestFailHandling.Accumulate,
    models: [
      {
        approvedTermExtension: {
          capitalize: false,
          fixCase: false,
          fixCommonMistakes: false,
        },
        caseSensitive: false,
        description: "Persistent 24/7 focus group",
        examples: [
          {
            example: "dock Quality redundant",
            type: TermExampleCreateType.Bad,
          },
        ],
        highlight: false,
        id: 134151,
        linkedTerms: [
          {
            linkedTermId: 54062,
            reference: "mostly",
          },
        ],
        mistakes: [
          {
            caseSensitive: false,
            mistake: "dynamic white",
            pos: TermMistakeCreatePos.Verb,
            reference: "Forward",
          },
        ],
        pos: TermUpdatePos.Adjective,
        tags: [
          {
            tag: "East Baht Quality",
          },
        ],
        term: "Home users Sharable",
        type: TermUpdateType.Banned,
      },
    ],
  },
  xRequestID: "Northeast Wooden",
  teamId: 352919,
}).then((res: UpdateTermsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.UpdateTermsRequest](../../models/operations/updatetermsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UpdateTermsResponse](../../models/operations/updatetermsresponse.md)>**

