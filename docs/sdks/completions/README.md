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

(async() => {
  const sdk = new Writer({
    apiKey: "",
    organizationId: 486589,
  });

  const res = await sdk.completions.create({
    completionRequest: {
      bestOf: 1,
      maxTokens: 1024,
      minTokens: 1,
      prompt: "string",
      stop: [
        "the",
        "is",
        "and",
      ],
      temperature: 0.7,
      topP: 1,
    },
    modelId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateCompletionRequest](../../models/operations/createcompletionrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateCompletionResponse](../../models/operations/createcompletionresponse.md)>**


## createModelCustomizationCompletion

Create completion for LLM customization model

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";

(async() => {
  const sdk = new Writer({
    apiKey: "",
    organizationId: 919503,
  });

  const res = await sdk.completions.createModelCustomizationCompletion({
    completionRequest: {
      bestOf: 1,
      maxTokens: 1024,
      minTokens: 1,
      prompt: "string",
      stop: [
        "the",
        "is",
        "and",
      ],
      temperature: 0.7,
      topP: 1,
    },
    customizationId: "string",
    modelId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.CreateModelCustomizationCompletionRequest](../../models/operations/createmodelcustomizationcompletionrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.CreateModelCustomizationCompletionResponse](../../models/operations/createmodelcustomizationcompletionresponse.md)>**

