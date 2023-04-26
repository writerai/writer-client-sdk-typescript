# content

## Overview

Methods related to Content

### Available Operations

* [check](#check) - Check your content against your preset styleguide.
* [correct](#correct) - Apply the style guide suggestions directly to your content.

## check

Check your content against your preset styleguide.

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { ContentCheckRequest, ContentCheckResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { ContentIssueServiceEnum } from "@writerai/writer-sdk/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 149675,
});

const req: ContentCheckRequest = {
  contentRequest: {
    content: "iste",
    settings: {
      ageAndFamilyStatus: false,
      confidence: false,
      contentSafeguards: false,
      disability: false,
      genderIdentitySensitivity: false,
      genderInclusiveNouns: false,
      genderInclusivePronouns: false,
      grammar: false,
      healthyCommunication: false,
      passiveVoice: false,
      raceEthnicityNationalitySensitivity: false,
      sexualOrientationSensitivity: false,
      spelling: false,
      substanceUseSensitivity: false,
      unclearReference: false,
      wordiness: false,
    },
  },
  teamId: 222321,
};

sdk.content.check(req).then((res: ContentCheckResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## correct

Apply the style guide suggestions directly to your content.

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { ContentCorrectRequest, ContentCorrectResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 616934,
});

const req: ContentCorrectRequest = {
  contentRequest: {
    content: "laboriosam",
    settings: {
      ageAndFamilyStatus: false,
      confidence: false,
      contentSafeguards: false,
      disability: false,
      genderIdentitySensitivity: false,
      genderInclusiveNouns: false,
      genderInclusivePronouns: false,
      grammar: false,
      healthyCommunication: false,
      passiveVoice: false,
      raceEthnicityNationalitySensitivity: false,
      sexualOrientationSensitivity: false,
      spelling: false,
      substanceUseSensitivity: false,
      unclearReference: false,
      wordiness: false,
    },
  },
  xRequestID: "hic",
  teamId: 902599,
};

sdk.content.correct(req).then((res: ContentCorrectResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
