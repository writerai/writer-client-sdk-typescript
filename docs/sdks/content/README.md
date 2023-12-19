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

async function run() {
  const sdk = new Writer({
    apiKey: "<YOUR_API_KEY_HERE>",
    organizationId: 935464,
  });

  const res = await sdk.content.check({
    contentRequest: {
      content: "string",
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
    teamId: 38270,
  });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ContentCheckRequest](../../sdk/models/operations/contentcheckrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ContentCheckResponse](../../sdk/models/operations/contentcheckresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.FailResponse | 400,401,403,404,500 | application/json    |
| errors.SDKError     | 4xx-5xx             | */*                 |

## correct

Apply the style guide suggestions directly to your content.

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";

async function run() {
  const sdk = new Writer({
    apiKey: "<YOUR_API_KEY_HERE>",
    organizationId: 501355,
  });

  const res = await sdk.content.correct({
    contentRequest: {
      content: "string",
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
    teamId: 31310,
  });

  if (res?.statusCode !== 200) {
    throw new Error("Unexpected status code: " + res?.statusCode || "-");
  }
  
  // handle response
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ContentCorrectRequest](../../sdk/models/operations/contentcorrectrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ContentCorrectResponse](../../sdk/models/operations/contentcorrectresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.FailResponse | 400,401,403,404,500 | application/json    |
| errors.SDKError     | 4xx-5xx             | */*                 |
