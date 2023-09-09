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
  organizationId: 13571,
});

sdk.terminology.add({
  createTermsRequest: {
    failHandling: CreateTermsRequestFailHandling.Accumulate,
    models: [
      {
        approvedTermExtension: {
          capitalize: false,
          fixCase: false,
          fixCommonMistakes: false,
        },
        caseSensitive: false,
        description: "error",
        examples: [
          {
            example: "temporibus",
            type: TermExampleCreateType.Bad,
          },
        ],
        highlight: false,
        linkedTerms: [
          {
            linkedTermId: 96098,
            reference: "reiciendis",
          },
        ],
        mistakes: [
          {
            caseSensitive: false,
            mistake: "voluptatibus",
            pos: TermMistakeCreatePos.Adjective,
            reference: "nihil",
          },
        ],
        pos: TermCreatePos.Adverb,
        reference: "voluptatibus",
        tags: [
          {
            tag: "ipsa",
          },
        ],
        term: "omnis",
        type: TermCreateType.Banned,
      },
    ],
  },
  teamId: 739264,
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
  organizationId: 19987,
});

sdk.terminology.delete({
  xRequestID: "doloremque",
  ids: [
    441711,
  ],
  teamId: 282807,
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
  organizationId: 979587,
});

sdk.terminology.find({
  limit: 120196,
  offset: 359444,
  partOfSpeech: FindTermsPartOfSpeech.Verb,
  sortField: FindTermsSortField.CreationTime,
  sortOrder: FindTermsSortOrder.Asc,
  tags: [
    "harum",
  ],
  teamId: 317983,
  term: "accusamus",
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
  organizationId: 918236,
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
        description: "ipsum",
        examples: [
          {
            example: "quidem",
            type: TermExampleCreateType.Bad,
          },
        ],
        highlight: false,
        id: 566602,
        linkedTerms: [
          {
            linkedTermId: 865103,
            reference: "modi",
          },
        ],
        mistakes: [
          {
            caseSensitive: false,
            mistake: "praesentium",
            pos: TermMistakeCreatePos.Adverb,
            reference: "voluptates",
          },
        ],
        pos: TermUpdatePos.Noun,
        tags: [
          {
            tag: "repudiandae",
          },
        ],
        term: "sint",
        type: TermUpdateType.Approved,
      },
    ],
  },
  xRequestID: "itaque",
  teamId: 277718,
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

