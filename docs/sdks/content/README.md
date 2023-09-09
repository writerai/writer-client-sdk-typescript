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
import { ContentCheckResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "",
  },
  organizationId: 832620,
});

sdk.content.check({
  contentRequest: {
    content: "sapiente",
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
  teamId: 778157,
}).then((res: ContentCheckResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ContentCheckRequest](../../models/operations/contentcheckrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ContentCheckResponse](../../models/operations/contentcheckresponse.md)>**


## correct

Apply the style guide suggestions directly to your content.

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { ContentCorrectResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "",
  },
  organizationId: 140350,
});

sdk.content.correct({
  contentRequest: {
    content: "at",
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
  xRequestID: "at",
  teamId: 978619,
}).then((res: ContentCorrectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ContentCorrectRequest](../../models/operations/contentcorrectrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ContentCorrectResponse](../../models/operations/contentcorrectresponse.md)>**

