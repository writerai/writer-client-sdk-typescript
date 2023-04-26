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
import { DeleteSnippetsRequest, DeleteSnippetsResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 581850,
});

const req: DeleteSnippetsRequest = {
  xRequestID: "numquam",
  ids: [
    "quam",
    "molestiae",
  ],
  teamId: 244425,
};

sdk.snippet.delete(req).then((res: DeleteSnippetsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## find

Find snippets

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import {
  FindSnippetsRequest,
  FindSnippetsResponse,
  FindSnippetsSortFieldEnum,
  FindSnippetsSortOrderEnum,
} from "@writerai/writer-sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 623510,
});

const req: FindSnippetsRequest = {
  limit: 158969,
  offset: 338007,
  search: "vitae",
  shortcuts: [
    "animi",
    "enim",
    "odit",
  ],
  sortField: FindSnippetsSortFieldEnum.ModificationTime,
  sortOrder: FindSnippetsSortOrderEnum.Asc,
  tags: [
    "ipsam",
    "id",
    "possimus",
    "aut",
  ],
  teamId: 97101,
};

sdk.snippet.find(req).then((res: FindSnippetsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## update

Update snippets

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { UpdateSnippetsRequest, UpdateSnippetsResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 622846,
});

const req: UpdateSnippetsRequest = {
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
};

sdk.snippet.update(req).then((res: UpdateSnippetsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
