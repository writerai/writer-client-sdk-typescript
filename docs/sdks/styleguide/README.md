# Styleguide
(*.styleguide*)

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
import { PageDetailsRequest } from "@writerai/writer-sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Writer({
    apiKey: "",
    organizationId: 700347,
  });
const pageId: number = 90065;

  const res = await sdk.styleguide.get(pageId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `pageId`                                                     | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PageDetailsResponse](../../models/operations/pagedetailsresponse.md)>**


## listPages

List your styleguide pages

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { Status } from "@writerai/writer-sdk/dist/sdk/models/operations";

(async() => {
  const sdk = new Writer({
    apiKey: "",
    organizationId: 763372,
  });

  const res = await sdk.styleguide.listPages({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ListPagesRequest](../../models/operations/listpagesrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ListPagesResponse](../../models/operations/listpagesresponse.md)>**

