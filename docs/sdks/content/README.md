# Content
(*content*)

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

(async() => {
  const sdk = new Writer({
    apiKey: "",
    organizationId: 935464,
  });

  const res = await sdk.content.check({
    contentRequest: {
      content: "now",
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
    teamId: 740907,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Writer({
    apiKey: "",
    organizationId: 501355,
  });

  const res = await sdk.content.correct({
    contentRequest: {
      content: "structure",
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
    teamId: 267677,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ContentCorrectRequest](../../models/operations/contentcorrectrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ContentCorrectResponse](../../models/operations/contentcorrectresponse.md)>**

