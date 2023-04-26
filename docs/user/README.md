# user

## Overview

Methods related to User

### Available Operations

* [list](#list) - List users

## list

List users

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import {
  ListUsersRequest,
  ListUsersResponse,
  ListUsersSortFieldEnum,
  ListUsersSortOrderEnum,
} from "@writerai/writer-sdk/dist/sdk/models/operations";
import { UserPublicResponseAccountStatusEnum } from "@writerai/writer-sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 55,
});

const req: ListUsersRequest = {
  limit: 872651,
  offset: 311860,
  search: "tempora",
  sortField: ListUsersSortFieldEnum.CreationTime,
  sortOrder: ListUsersSortOrderEnum.Desc,
};

sdk.user.list(req).then((res: ListUsersResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
