# CoWrite

## Overview

Methods related to CoWrite

### Available Operations

* [generateContent](#generatecontent) - Generate content using predefined templates
* [listTemplates](#listtemplates) - Get a list of your existing CoWrite templates

## generateContent

Generate content using predefined templates

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { GenerateContentResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "",
  },
  organizationId: 847252,
});

sdk.coWrite.generateContent({
  generateTemplateRequest: {
    inputs: [
      {
        name: "Sabrina Oberbrunner",
        value: [
          "magnam",
        ],
      },
    ],
    templateId: "debitis",
  },
  teamId: 56713,
}).then((res: GenerateContentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GenerateContentRequest](../../models/operations/generatecontentrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GenerateContentResponse](../../models/operations/generatecontentresponse.md)>**


## listTemplates

Get a list of your existing CoWrite templates

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { ListTemplatesResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "",
  },
  organizationId: 963663,
});

sdk.coWrite.listTemplates({
  teamId: 272656,
  templateId: "suscipit",
}).then((res: ListTemplatesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListTemplatesRequest](../../models/operations/listtemplatesrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListTemplatesResponse](../../models/operations/listtemplatesresponse.md)>**

