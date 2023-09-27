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
  organizationId: 622846,
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
        description: "laborum",
        examples: [
          {
            example: "quasi",
            type: TermExampleCreateType.Bad,
          },
        ],
        highlight: false,
        linkedTerms: [
          {
            linkedTermId: 976460,
            reference: "vero",
          },
        ],
        mistakes: [
          {
            caseSensitive: false,
            mistake: "nihil",
            pos: TermMistakeCreatePos.Adverb,
            reference: "voluptatibus",
          },
        ],
        pos: TermCreatePos.Noun,
        reference: "omnis",
        tags: [
          {
            tag: "voluptate",
          },
        ],
        term: "cum",
        type: TermCreateType.Approved,
      },
    ],
  },
  teamId: 39187,
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
  organizationId: 441711,
});

sdk.terminology.delete({
  xRequestID: "ut",
  ids: [
    979587,
  ],
  teamId: 120196,
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
  organizationId: 359444,
});

sdk.terminology.find({
  limit: 296140,
  offset: 480894,
  partOfSpeech: FindTermsPartOfSpeech.Noun,
  sortField: FindTermsSortField.ModificationTime,
  sortOrder: FindTermsSortOrder.Asc,
  tags: [
    "accusamus",
  ],
  teamId: 414263,
  term: "repudiandae",
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
  organizationId: 216822,
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
        description: "molestias",
        examples: [
          {
            example: "excepturi",
            type: TermExampleCreateType.Bad,
          },
        ],
        highlight: false,
        id: 265389,
        linkedTerms: [
          {
            linkedTermId: 508969,
            reference: "rem",
          },
        ],
        mistakes: [
          {
            caseSensitive: false,
            mistake: "voluptates",
            pos: TermMistakeCreatePos.Noun,
            reference: "repudiandae",
          },
        ],
        pos: TermUpdatePos.Adverb,
        tags: [
          {
            tag: "veritatis",
          },
        ],
        term: "itaque",
        type: TermUpdateType.Approved,
      },
    ],
  },
  xRequestID: "enim",
  teamId: 9356,
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

