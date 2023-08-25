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
  organizationId: 248753,
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
        description: "aliquid",
        examples: [
          {
            example: "necessitatibus",
            type: TermExampleCreateType.Bad,
          },
          {
            example: "officia",
            type: TermExampleCreateType.Good,
          },
          {
            example: "debitis",
            type: TermExampleCreateType.Bad,
          },
        ],
        highlight: false,
        linkedTerms: [
          {
            linkedTermId: 447125,
            reference: "in",
          },
          {
            linkedTermId: 846409,
            reference: "maiores",
          },
          {
            linkedTermId: 699479,
            reference: "dicta",
          },
        ],
        mistakes: [
          {
            caseSensitive: false,
            mistake: "cumque",
            pos: TermMistakeCreatePos.Adjective,
            reference: "ea",
          },
          {
            caseSensitive: false,
            mistake: "aliquid",
            pos: TermMistakeCreatePos.Adverb,
            reference: "accusamus",
          },
        ],
        pos: TermCreatePos.Noun,
        reference: "occaecati",
        tags: [
          {
            tag: "accusamus",
          },
          {
            tag: "delectus",
          },
        ],
        term: "quidem",
        type: TermCreateType.Banned,
      },
      {
        approvedTermExtension: {
          capitalize: false,
          fixCase: false,
          fixCommonMistakes: false,
        },
        caseSensitive: false,
        description: "nam",
        examples: [
          {
            example: "blanditiis",
            type: TermExampleCreateType.Bad,
          },
          {
            example: "sapiente",
            type: TermExampleCreateType.Good,
          },
          {
            example: "deserunt",
            type: TermExampleCreateType.Good,
          },
        ],
        highlight: false,
        linkedTerms: [
          {
            linkedTermId: 618809,
            reference: "omnis",
          },
          {
            linkedTermId: 474867,
            reference: "perferendis",
          },
        ],
        mistakes: [
          {
            caseSensitive: false,
            mistake: "magnam",
            pos: TermMistakeCreatePos.Adverb,
            reference: "id",
          },
          {
            caseSensitive: false,
            mistake: "labore",
            pos: TermMistakeCreatePos.Verb,
            reference: "suscipit",
          },
        ],
        pos: TermCreatePos.Adverb,
        reference: "nobis",
        tags: [
          {
            tag: "vero",
          },
          {
            tag: "aspernatur",
          },
        ],
        term: "architecto",
        type: TermCreateType.Approved,
      },
      {
        approvedTermExtension: {
          capitalize: false,
          fixCase: false,
          fixCommonMistakes: false,
        },
        caseSensitive: false,
        description: "et",
        examples: [
          {
            example: "ullam",
            type: TermExampleCreateType.Bad,
          },
          {
            example: "quos",
            type: TermExampleCreateType.Bad,
          },
          {
            example: "accusantium",
            type: TermExampleCreateType.Bad,
          },
        ],
        highlight: false,
        linkedTerms: [
          {
            linkedTermId: 652103,
            reference: "ad",
          },
          {
            linkedTermId: 431418,
            reference: "dolor",
          },
          {
            linkedTermId: 896547,
            reference: "odit",
          },
          {
            linkedTermId: 367562,
            reference: "quasi",
          },
        ],
        mistakes: [
          {
            caseSensitive: false,
            mistake: "doloribus",
            pos: TermMistakeCreatePos.Adjective,
            reference: "eius",
          },
          {
            caseSensitive: false,
            mistake: "maxime",
            pos: TermMistakeCreatePos.Adverb,
            reference: "facilis",
          },
        ],
        pos: TermCreatePos.Verb,
        reference: "architecto",
        tags: [
          {
            tag: "repudiandae",
          },
        ],
        term: "ullam",
        type: TermCreateType.Pending,
      },
    ],
  },
  teamId: 469249,
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
  organizationId: 998848,
});

sdk.terminology.delete({
  xRequestID: "quibusdam",
  ids: [
    904648,
  ],
  teamId: 868126,
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
  organizationId: 37559,
});

sdk.terminology.find({
  limit: 162493,
  offset: 508315,
  partOfSpeech: FindTermsPartOfSpeech.Adverb,
  sortField: FindTermsSortField.Term,
  sortOrder: FindTermsSortOrder.Asc,
  tags: [
    "illum",
    "pariatur",
    "maxime",
    "ea",
  ],
  teamId: 569101,
  term: "odit",
  type: FindTermsType.Banned,
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
  organizationId: 33222,
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
        description: "quidem",
        examples: [
          {
            example: "voluptate",
            type: TermExampleCreateType.Good,
          },
          {
            example: "nam",
            type: TermExampleCreateType.Good,
          },
        ],
        highlight: false,
        id: 866383,
        linkedTerms: [
          {
            linkedTermId: 975522,
            reference: "perferendis",
          },
          {
            linkedTermId: 855804,
            reference: "amet",
          },
        ],
        mistakes: [
          {
            caseSensitive: false,
            mistake: "cumque",
            pos: TermMistakeCreatePos.Verb,
            reference: "hic",
          },
        ],
        pos: TermUpdatePos.Adverb,
        tags: [
          {
            tag: "dolores",
          },
          {
            tag: "quis",
          },
          {
            tag: "totam",
          },
        ],
        term: "dignissimos",
        type: TermUpdateType.Approved,
      },
      {
        approvedTermExtension: {
          capitalize: false,
          fixCase: false,
          fixCommonMistakes: false,
        },
        caseSensitive: false,
        description: "quis",
        examples: [
          {
            example: "eos",
            type: TermExampleCreateType.Good,
          },
        ],
        highlight: false,
        id: 170986,
        linkedTerms: [
          {
            linkedTermId: 463451,
            reference: "dolor",
          },
          {
            linkedTermId: 874573,
            reference: "nostrum",
          },
          {
            linkedTermId: 944120,
            reference: "recusandae",
          },
          {
            linkedTermId: 608253,
            reference: "facilis",
          },
        ],
        mistakes: [
          {
            caseSensitive: false,
            mistake: "voluptatem",
            pos: TermMistakeCreatePos.Adjective,
            reference: "consequuntur",
          },
          {
            caseSensitive: false,
            mistake: "blanditiis",
            pos: TermMistakeCreatePos.Adverb,
            reference: "eaque",
          },
          {
            caseSensitive: false,
            mistake: "occaecati",
            pos: TermMistakeCreatePos.Adverb,
            reference: "adipisci",
          },
        ],
        pos: TermUpdatePos.Adjective,
        tags: [
          {
            tag: "modi",
          },
          {
            tag: "iste",
          },
          {
            tag: "dolorum",
          },
          {
            tag: "deleniti",
          },
        ],
        term: "pariatur",
        type: TermUpdateType.Banned,
      },
      {
        approvedTermExtension: {
          capitalize: false,
          fixCase: false,
          fixCommonMistakes: false,
        },
        caseSensitive: false,
        description: "nobis",
        examples: [
          {
            example: "delectus",
            type: TermExampleCreateType.Good,
          },
          {
            example: "quos",
            type: TermExampleCreateType.Good,
          },
          {
            example: "dolorem",
            type: TermExampleCreateType.Good,
          },
        ],
        highlight: false,
        id: 222443,
        linkedTerms: [
          {
            linkedTermId: 218749,
            reference: "hic",
          },
        ],
        mistakes: [
          {
            caseSensitive: false,
            mistake: "cum",
            pos: TermMistakeCreatePos.Verb,
            reference: "dignissimos",
          },
          {
            caseSensitive: false,
            mistake: "reiciendis",
            pos: TermMistakeCreatePos.Noun,
            reference: "dolorum",
          },
          {
            caseSensitive: false,
            mistake: "numquam",
            pos: TermMistakeCreatePos.Noun,
            reference: "ipsa",
          },
        ],
        pos: TermUpdatePos.Noun,
        tags: [
          {
            tag: "odio",
          },
          {
            tag: "quaerat",
          },
        ],
        term: "accusamus",
        type: TermUpdateType.Pending,
      },
      {
        approvedTermExtension: {
          capitalize: false,
          fixCase: false,
          fixCommonMistakes: false,
        },
        caseSensitive: false,
        description: "voluptatibus",
        examples: [
          {
            example: "natus",
            type: TermExampleCreateType.Good,
          },
          {
            example: "atque",
            type: TermExampleCreateType.Good,
          },
        ],
        highlight: false,
        id: 854614,
        linkedTerms: [
          {
            linkedTermId: 743835,
            reference: "dolorum",
          },
        ],
        mistakes: [
          {
            caseSensitive: false,
            mistake: "voluptate",
            pos: TermMistakeCreatePos.Adverb,
            reference: "deleniti",
          },
          {
            caseSensitive: false,
            mistake: "omnis",
            pos: TermMistakeCreatePos.Adjective,
            reference: "distinctio",
          },
        ],
        pos: TermUpdatePos.Adjective,
        tags: [
          {
            tag: "ipsum",
          },
          {
            tag: "voluptate",
          },
        ],
        term: "id",
        type: TermUpdateType.Pending,
      },
    ],
  },
  xRequestID: "eius",
  teamId: 137220,
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

