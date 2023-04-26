# coWrite

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
import { GenerateContentRequest, GenerateContentResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 857946,
});

const req: GenerateContentRequest = {
  generateTemplateRequest: {
    inputs: [
      {
        name: "Ben Mueller",
        value: [
          "magnam",
          "debitis",
        ],
      },
      {
        name: "Lucia Goldner",
        value: [
          "placeat",
          "voluptatum",
          "iusto",
          "excepturi",
        ],
      },
      {
        name: "Mrs. Sophie Smith MD",
        value: [
          "ipsam",
        ],
      },
    ],
    templateId: "repellendus",
  },
  teamId: 957156,
};

sdk.coWrite.generateContent(req).then((res: GenerateContentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listTemplates

Get a list of your existing CoWrite templates

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { ListTemplatesRequest, ListTemplatesResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { InputTypeEnum } from "@writerai/writer-sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 778157,
});

const req: ListTemplatesRequest = {
  teamId: 140350,
  templateId: "at",
};

sdk.coWrite.listTemplates(req).then((res: ListTemplatesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
