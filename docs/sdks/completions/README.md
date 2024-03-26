# Completions
(*completions*)

## Overview

Methods related to Completions

### Available Operations

* [create](#create) - Create completion for LLM model
* [createModelCustomizationCompletion](#createmodelcustomizationcompletion) - Create completion for LLM customization model

## create

Create completion for LLM model

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";

async function run() {
  const sdk = new Writer({
    apiKey: "<YOUR_API_KEY_HERE>",
    organizationId: 486589,
  });

  const completionRequest = {
    bestOf: 1,
    maxTokens: 1024,
    minTokens: 1,
    prompt: "<value>",
    stop: [
      "the",
      "is",
      "and",
    ],
    temperature: 0.7,
    topP: 1,
  };
  const modelId = "<value>";
  const organizationId = 489382;
  
  const result = await sdk.completions.create(completionRequest, modelId, organizationId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `completionRequest`                                                                                                                                                            | [shared.CompletionRequest](../../sdk/models/shared/completionrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `modelId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `organizationId`                                                                                                                                                               | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateCompletionResponse](../../sdk/models/operations/createcompletionresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.FailResponse | 400,401,403,404,500 | application/json    |
| errors.SDKError     | 4xx-5xx             | */*                 |

## createModelCustomizationCompletion

Create completion for LLM customization model

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";

async function run() {
  const sdk = new Writer({
    apiKey: "<YOUR_API_KEY_HERE>",
    organizationId: 919503,
  });

  const completionRequest = {
    bestOf: 1,
    maxTokens: 1024,
    minTokens: 1,
    prompt: "<value>",
    stop: [
      "the",
      "is",
      "and",
    ],
    temperature: 0.7,
    topP: 1,
  };
  const customizationId = "<value>";
  const modelId = "<value>";
  const organizationId = 41297;
  
  const result = await sdk.completions.createModelCustomizationCompletion(completionRequest, customizationId, modelId, organizationId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `completionRequest`                                                                                                                                                            | [shared.CompletionRequest](../../sdk/models/shared/completionrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `customizationId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `modelId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `organizationId`                                                                                                                                                               | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateModelCustomizationCompletionResponse](../../sdk/models/operations/createmodelcustomizationcompletionresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.FailResponse | 400,401,403,404,500 | application/json    |
| errors.SDKError     | 4xx-5xx             | */*                 |
