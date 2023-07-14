# terminology

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
  organizationId: 998848,
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
        description: "saepe",
        examples: [
          {
            example: "accusantium",
            type: TermExampleCreateType.Good,
          },
          {
            example: "praesentium",
            type: TermExampleCreateType.Bad,
          },
          {
            example: "magni",
            type: TermExampleCreateType.Good,
          },
          {
            example: "quo",
            type: TermExampleCreateType.Bad,
          },
        ],
        highlight: false,
        linkedTerms: [
          {
            linkedTermId: 807319,
            reference: "ea",
          },
          {
            linkedTermId: 569101,
            reference: "odit",
          },
          {
            linkedTermId: 407183,
            reference: "accusantium",
          },
          {
            linkedTermId: 69167,
            reference: "maiores",
          },
        ],
        mistakes: [
          {
            caseSensitive: false,
            mistake: "ipsam",
            pos: TermMistakeCreatePos.Verb,
            reference: "autem",
          },
          {
            caseSensitive: false,
            mistake: "nam",
            pos: TermMistakeCreatePos.Noun,
            reference: "pariatur",
          },
          {
            caseSensitive: false,
            mistake: "nemo",
            pos: TermMistakeCreatePos.Adjective,
            reference: "perferendis",
          },
        ],
        pos: TermCreatePos.Adjective,
        reference: "amet",
        tags: [
          {
            tag: "cumque",
          },
        ],
        term: "corporis",
        type: TermCreateType.Pending,
      },
    ],
  },
  teamId: 729991,
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
  organizationId: 749999,
});

sdk.terminology.delete({
  xRequestID: "dolores",
  ids: [
    521037,
    489549,
  ],
  teamId: 54338,
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
  organizationId: 338985,
});

sdk.terminology.find({
  limit: 199996,
  offset: 179490,
  partOfSpeech: FindTermsPartOfSpeech.Noun,
  sortField: FindTermsSortField.Term,
  sortOrder: FindTermsSortOrder.Desc,
  tags: [
    "dolor",
    "vero",
  ],
  teamId: 345352,
  term: "hic",
  type: FindTermsType.Pending,
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
  organizationId: 608253,
});

sdk.terminology.update({
  updateTermsRequest: {
    failHandling: UpdateTermsRequestFailHandling.Skip,
    models: [
      {
        approvedTermExtension: {
          capitalize: false,
          fixCase: false,
          fixCommonMistakes: false,
        },
        caseSensitive: false,
        description: "voluptatem",
        examples: [
          {
            example: "consequuntur",
            type: TermExampleCreateType.Bad,
          },
          {
            example: "error",
            type: TermExampleCreateType.Good,
          },
          {
            example: "occaecati",
            type: TermExampleCreateType.Bad,
          },
          {
            example: "adipisci",
            type: TermExampleCreateType.Bad,
          },
        ],
        highlight: false,
        id: 934214,
        linkedTerms: [
          {
            linkedTermId: 613966,
            reference: "dolorum",
          },
          {
            linkedTermId: 535633,
            reference: "pariatur",
          },
        ],
        mistakes: [
          {
            caseSensitive: false,
            mistake: "nobis",
            pos: TermMistakeCreatePos.Adverb,
            reference: "delectus",
          },
          {
            caseSensitive: false,
            mistake: "quaerat",
            pos: TermMistakeCreatePos.Adverb,
            reference: "aliquid",
          },
          {
            caseSensitive: false,
            mistake: "dolorem",
            pos: TermMistakeCreatePos.Noun,
            reference: "dolor",
          },
        ],
        pos: TermUpdatePos.Noun,
        tags: [
          {
            tag: "hic",
          },
        ],
        term: "excepturi",
        type: TermUpdateType.Pending,
      },
      {
        approvedTermExtension: {
          capitalize: false,
          fixCase: false,
          fixCommonMistakes: false,
        },
        caseSensitive: false,
        description: "voluptate",
        examples: [
          {
            example: "reiciendis",
            type: TermExampleCreateType.Good,
          },
          {
            example: "dolorum",
            type: TermExampleCreateType.Good,
          },
        ],
        highlight: false,
        id: 85295,
        linkedTerms: [
          {
            linkedTermId: 56418,
            reference: "iure",
          },
        ],
        mistakes: [
          {
            caseSensitive: false,
            mistake: "quaerat",
            pos: TermMistakeCreatePos.Adjective,
            reference: "quidem",
          },
          {
            caseSensitive: false,
            mistake: "voluptatibus",
            pos: TermMistakeCreatePos.Verb,
            reference: "natus",
          },
        ],
        pos: TermUpdatePos.Noun,
        tags: [
          {
            tag: "sit",
          },
          {
            tag: "fugiat",
          },
          {
            tag: "ab",
          },
        ],
        term: "soluta",
        type: TermUpdateType.Pending,
      },
      {
        approvedTermExtension: {
          capitalize: false,
          fixCase: false,
          fixCommonMistakes: false,
        },
        caseSensitive: false,
        description: "iusto",
        examples: [
          {
            example: "dolorum",
            type: TermExampleCreateType.Bad,
          },
          {
            example: "omnis",
            type: TermExampleCreateType.Bad,
          },
        ],
        highlight: false,
        id: 714697,
        linkedTerms: [
          {
            linkedTermId: 469497,
            reference: "ipsum",
          },
          {
            linkedTermId: 456015,
            reference: "id",
          },
          {
            linkedTermId: 906418,
            reference: "eius",
          },
          {
            linkedTermId: 137220,
            reference: "perferendis",
          },
        ],
        mistakes: [
          {
            caseSensitive: false,
            mistake: "optio",
            pos: TermMistakeCreatePos.Adjective,
            reference: "ad",
          },
        ],
        pos: TermUpdatePos.Adjective,
        tags: [
          {
            tag: "deserunt",
          },
          {
            tag: "provident",
          },
        ],
        term: "minima",
        type: TermUpdateType.Pending,
      },
    ],
  },
  xRequestID: "totam",
  teamId: 628982,
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

