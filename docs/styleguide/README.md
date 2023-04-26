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
import { PageDetailsRequest, PageDetailsResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { PageWithSectionResponseStatusEnum } from "@writerai/writer-sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 100226,
});

const req: PageDetailsRequest = {
  pageId: 99569,
};

sdk.styleguide.get(req).then((res: PageDetailsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listPages

List your styleguide pages

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { ListPagesRequest, ListPagesResponse, ListPagesStatusEnum } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { PagePublicApiResponseStatusEnum } from "@writerai/writer-sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 919483,
});

const req: ListPagesRequest = {
  limit: 352312,
  offset: 714242,
  status: ListPagesStatusEnum.Live,
};

sdk.styleguide.listPages(req).then((res: ListPagesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
