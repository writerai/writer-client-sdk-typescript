# DownloadTheCustomizedModel
(*downloadTheCustomizedModel*)

## Overview

Methods related to Download the customized model

### Available Operations

* [fetchFile](#fetchfile) - Download your fine-tuned model (available only for Palmyra Base and Palmyra Large)

## fetchFile

Download your fine-tuned model (available only for Palmyra Base and Palmyra Large)

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";

async function run() {
  const sdk = new Writer({
    apiKey: "<YOUR_API_KEY_HERE>",
    organizationId: 501762,
  });

  const customizationId = "string";
  const modelId = "string";
  const organizationId = 948692;
  
  const result = await sdk.downloadTheCustomizedModel.fetchFile(customizationId, modelId, organizationId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `customizationId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `modelId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `organizationId`                                                                                                                                                               | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.FetchCustomizedModelFileResponse](../../sdk/models/operations/fetchcustomizedmodelfileresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.FailResponse | 400,401,403,404,500 | application/json    |
| errors.SDKError     | 4xx-5xx             | */*                 |
