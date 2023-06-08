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
import { ListUsersResponse, ListUsersSortField, ListUsersSortOrder } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { UserPublicResponseAccountStatus } from "@writerai/writer-sdk/dist/sdk/models/shared";

const sdk = new Writer({
  security: {
    apiKey: "",
  },
  organizationId: 55,
});

sdk.user.list({
  limit: 872651,
  offset: 311860,
  search: "tempora",
  sortField: ListUsersSortField.CreationTime,
  sortOrder: ListUsersSortOrder.Desc,
}).then((res: ListUsersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
