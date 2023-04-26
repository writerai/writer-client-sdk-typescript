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
import { AddTermsRequest, AddTermsResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import {
  CreateTermsRequestFailHandlingEnum,
  FullLinkedTermPosEnum,
  FullTermWithUserPosEnum,
  FullTermWithUserTypeEnum,
  TermCreatePosEnum,
  TermCreateTypeEnum,
  TermExampleCreateTypeEnum,
  TermExampleTypeEnum,
  TermMistakeCreatePosEnum,
  TermMistakePosEnum,
} from "@writerai/writer-sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 998848,
});

const req: AddTermsRequest = {
  createTermsRequest: {
    failHandling: CreateTermsRequestFailHandlingEnum.ValidateOnly,
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
            type: TermExampleCreateTypeEnum.Good,
          },
          {
            example: "praesentium",
            type: TermExampleCreateTypeEnum.Bad,
          },
          {
            example: "magni",
            type: TermExampleCreateTypeEnum.Good,
          },
          {
            example: "quo",
            type: TermExampleCreateTypeEnum.Bad,
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
            pos: TermMistakeCreatePosEnum.Verb,
            reference: "autem",
          },
          {
            caseSensitive: false,
            mistake: "nam",
            pos: TermMistakeCreatePosEnum.Noun,
            reference: "pariatur",
          },
          {
            caseSensitive: false,
            mistake: "nemo",
            pos: TermMistakeCreatePosEnum.Adjective,
            reference: "perferendis",
          },
        ],
        pos: TermCreatePosEnum.Adjective,
        reference: "amet",
        tags: [
          {
            tag: "cumque",
          },
        ],
        term: "corporis",
        type: TermCreateTypeEnum.Pending,
      },
    ],
  },
  teamId: 729991,
};

sdk.terminology.add(req).then((res: AddTermsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## delete

Delete terms

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { DeleteTermsRequest, DeleteTermsResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 749999,
});

const req: DeleteTermsRequest = {
  xRequestID: "dolores",
  ids: [
    521037,
    489549,
  ],
  teamId: 54338,
};

sdk.terminology.delete(req).then((res: DeleteTermsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## find

Find terms

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import {
  FindTermsPartOfSpeechEnum,
  FindTermsRequest,
  FindTermsResponse,
  FindTermsSortFieldEnum,
  FindTermsSortOrderEnum,
  FindTermsTypeEnum,
} from "@writerai/writer-sdk/dist/sdk/models/operations";
import {
  FullLinkedTermPosEnum,
  FullTermWithUserPosEnum,
  FullTermWithUserTypeEnum,
  TermExampleTypeEnum,
  TermMistakePosEnum,
} from "@writerai/writer-sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 338985,
});

const req: FindTermsRequest = {
  limit: 199996,
  offset: 179490,
  partOfSpeech: FindTermsPartOfSpeechEnum.Noun,
  sortField: FindTermsSortFieldEnum.Term,
  sortOrder: FindTermsSortOrderEnum.Desc,
  tags: [
    "dolor",
    "vero",
  ],
  teamId: 345352,
  term: "hic",
  type: FindTermsTypeEnum.Pending,
};

sdk.terminology.find(req).then((res: FindTermsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## update

Update terms

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { UpdateTermsRequest, UpdateTermsResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import {
  FullLinkedTermPosEnum,
  FullTermWithUserPosEnum,
  FullTermWithUserTypeEnum,
  TermExampleCreateTypeEnum,
  TermExampleTypeEnum,
  TermMistakeCreatePosEnum,
  TermMistakePosEnum,
  TermUpdatePosEnum,
  TermUpdateTypeEnum,
  UpdateTermsRequestFailHandlingEnum,
} from "@writerai/writer-sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 608253,
});

const req: UpdateTermsRequest = {
  updateTermsRequest: {
    failHandling: UpdateTermsRequestFailHandlingEnum.Skip,
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
            type: TermExampleCreateTypeEnum.Bad,
          },
          {
            example: "error",
            type: TermExampleCreateTypeEnum.Good,
          },
          {
            example: "occaecati",
            type: TermExampleCreateTypeEnum.Bad,
          },
          {
            example: "adipisci",
            type: TermExampleCreateTypeEnum.Bad,
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
            pos: TermMistakeCreatePosEnum.Adverb,
            reference: "delectus",
          },
          {
            caseSensitive: false,
            mistake: "quaerat",
            pos: TermMistakeCreatePosEnum.Adverb,
            reference: "aliquid",
          },
          {
            caseSensitive: false,
            mistake: "dolorem",
            pos: TermMistakeCreatePosEnum.Noun,
            reference: "dolor",
          },
        ],
        pos: TermUpdatePosEnum.Noun,
        tags: [
          {
            tag: "hic",
          },
        ],
        term: "excepturi",
        type: TermUpdateTypeEnum.Pending,
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
            type: TermExampleCreateTypeEnum.Good,
          },
          {
            example: "dolorum",
            type: TermExampleCreateTypeEnum.Good,
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
            pos: TermMistakeCreatePosEnum.Adjective,
            reference: "quidem",
          },
          {
            caseSensitive: false,
            mistake: "voluptatibus",
            pos: TermMistakeCreatePosEnum.Verb,
            reference: "natus",
          },
        ],
        pos: TermUpdatePosEnum.Noun,
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
        type: TermUpdateTypeEnum.Pending,
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
            type: TermExampleCreateTypeEnum.Bad,
          },
          {
            example: "omnis",
            type: TermExampleCreateTypeEnum.Bad,
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
            pos: TermMistakeCreatePosEnum.Adjective,
            reference: "ad",
          },
        ],
        pos: TermUpdatePosEnum.Adjective,
        tags: [
          {
            tag: "deserunt",
          },
          {
            tag: "provident",
          },
        ],
        term: "minima",
        type: TermUpdateTypeEnum.Pending,
      },
    ],
  },
  xRequestID: "totam",
  teamId: 628982,
};

sdk.terminology.update(req).then((res: UpdateTermsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
