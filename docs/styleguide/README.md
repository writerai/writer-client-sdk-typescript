# styleguide

## Overview

Methods related to Styleguide

### Available Operations

* [get](#get) - Page details
* [listPages](#listpages) - List your styleguide pages

## get

Page details

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { PageDetailsResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { PageWithSectionResponseStatusEnum } from "@writerai/writer-sdk/dist/sdk/models/shared";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 100226,
});

sdk.styleguide.get({
  pageId: 99569,
}).then((res: PageDetailsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listPages

List your styleguide pages

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { ListPagesResponse, ListPagesStatusEnum } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { PagePublicApiResponseStatusEnum } from "@writerai/writer-sdk/dist/sdk/models/shared";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 919483,
});

sdk.styleguide.listPages({
  limit: 352312,
  offset: 714242,
  status: ListPagesStatusEnum.Live,
}).then((res: ListPagesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
