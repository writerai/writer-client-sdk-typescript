# completions

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
import { CreateCompletionRequest, CreateCompletionResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 870088,
});

const req: CreateCompletionRequest = {
  completionRequest: {
    bestOf: 978619,
    frequencyPenalty: 4736.08,
    logprobs: 799159,
    maxTokens: 800911,
    minTokens: 461479,
    n: 520478,
    presencePenalty: 7805.29,
    prompt: "dolorum",
    stop: [
      "nam",
    ],
    temperature: 6399.21,
    topP: 5820.2,
  },
  modelId: "fugit",
};

sdk.completions.create(req).then((res: CreateCompletionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createModelCustomizationCompletion

Create completion for LLM customization model

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import {
  CreateModelCustomizationCompletionRequest,
  CreateModelCustomizationCompletionResponse,
} from "@writerai/writer-sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 537373,
});

const req: CreateModelCustomizationCompletionRequest = {
  completionRequest: {
    bestOf: 944669,
    frequencyPenalty: 7586.16,
    logprobs: 521848,
    maxTokens: 105907,
    minTokens: 414662,
    n: 473600,
    presencePenalty: 2645.55,
    prompt: "qui",
    stop: [
      "cum",
      "esse",
      "ipsum",
      "excepturi",
    ],
    temperature: 1352.18,
    topP: 187.89,
  },
  customizationId: "ad",
  modelId: "natus",
};

sdk.completions.createModelCustomizationCompletion(req).then((res: CreateModelCustomizationCompletionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
