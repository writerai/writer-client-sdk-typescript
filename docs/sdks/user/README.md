# User
(*.user*)

## Overview

Methods related to User

### Available Operations

* [list](#list) - List users

## list

List users

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { ListUsersQueryParamSortField, ListUsersQueryParamSortOrder } from "@writerai/writer-sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Writer({
    apiKey: "",
    organizationId: 768578,
  });

  const res = await sdk.user.list({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ListUsersRequest](../../models/operations/listusersrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ListUsersResponse](../../models/operations/listusersresponse.md)>**

