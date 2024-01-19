<div align="center">
    <picture>
        <source srcset="https://user-images.githubusercontent.com/6267663/223574357-9a053550-02f9-49f1-b453-1b11db148d7b.svg" media="(prefers-color-scheme: dark)" width="500">
        <img src="https://user-images.githubusercontent.com/6267663/223574369-77805bfe-6d95-44e8-ac48-f9494101e1dc.svg" width="500">
    </picture>
    <h1>Typescript SDK</h1>
   <p>AI for everyone.</p>
   <a href="https://dev.writer.com/docs"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000000&style=for-the-badge" /></a>
   <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
   <a href="https://github.com/writerai/writer-client-sdk-typescript/releases"><img src="https://img.shields.io/github/v/release/writerai/writer-client-sdk-typescript?sort=semver&style=for-the-badge" /></a>
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @writerai/writer-sdk
```

### Yarn

```bash
yarn add @writerai/writer-sdk
```
<!-- End SDK Installation [installation] -->

## Authentication

Writer authenticates your API requests using your account’s API keys. If you do not include your key when making an API request, or use one that is incorrect or outdated, Writer returns an error.

Your API keys are available in the account dashboard. We include randomly generated API keys in our code examples if you are not logged in. Replace these with your own or log in to see code examples populated with your own API keys.

<img width="1070" alt="writer-auth" src="https://user-images.githubusercontent.com/6267663/223578295-89087c24-c55a-48bf-b74a-5f057e21e14f.png">

If you cannot see your secret API keys in the Dashboard, this means you do not have access to them. Contact your Writer account owner and ask to be added to their team as a developer.

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Writer } from "@writerai/writer-sdk";

async function run() {
    const sdk = new Writer({
        apiKey: "<YOUR_API_KEY_HERE>",
        organizationId: 850421,
    });

    const result = await sdk.billing.getSubscriptionDetails();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [billing](docs/sdks/billing/README.md)

* [getSubscriptionDetails](docs/sdks/billing/README.md#getsubscriptiondetails) - Get your organization subscription details

### [aiContentDetector](docs/sdks/aicontentdetector/README.md)

* [detect](docs/sdks/aicontentdetector/README.md#detect) - Content detector api

### [content](docs/sdks/content/README.md)

* [check](docs/sdks/content/README.md#check) - Check your content against your preset styleguide.
* [correct](docs/sdks/content/README.md#correct) - Apply the style guide suggestions directly to your content.

### [coWrite](docs/sdks/cowrite/README.md)

* [generateContent](docs/sdks/cowrite/README.md#generatecontent) - Generate content using predefined templates
* [listTemplates](docs/sdks/cowrite/README.md#listtemplates) - Get a list of your existing CoWrite templates

### [files](docs/sdks/files/README.md)

* [delete](docs/sdks/files/README.md#delete) - Delete file
* [get](docs/sdks/files/README.md#get) - Get file
* [list](docs/sdks/files/README.md#list) - List files
* [upload](docs/sdks/files/README.md#upload) - Upload file

### [models](docs/sdks/models/README.md)

* [list](docs/sdks/models/README.md#list) - List available LLM models

### [completions](docs/sdks/completions/README.md)

* [create](docs/sdks/completions/README.md#create) - Create completion for LLM model
* [createModelCustomizationCompletion](docs/sdks/completions/README.md#createmodelcustomizationcompletion) - Create completion for LLM customization model

### [modelCustomization](docs/sdks/modelcustomization/README.md)

* [create](docs/sdks/modelcustomization/README.md#create) - Create model customization
* [delete](docs/sdks/modelcustomization/README.md#delete) - Delete Model customization
* [get](docs/sdks/modelcustomization/README.md#get) - Get model customization
* [list](docs/sdks/modelcustomization/README.md#list) - List model customizations

### [downloadTheCustomizedModel](docs/sdks/downloadthecustomizedmodel/README.md)

* [fetchFile](docs/sdks/downloadthecustomizedmodel/README.md#fetchfile) - Download your fine-tuned model (available only for Palmyra Base and Palmyra Large)

### [document](docs/sdks/document/README.md)

* [get](docs/sdks/document/README.md#get) - Get document details
* [list](docs/sdks/document/README.md#list) - List team documents

### [snippet](docs/sdks/snippet/README.md)

* [delete](docs/sdks/snippet/README.md#delete) - Delete snippets
* [find](docs/sdks/snippet/README.md#find) - Find snippets
* [update](docs/sdks/snippet/README.md#update) - Update snippets

### [styleguide](docs/sdks/styleguide/README.md)

* [get](docs/sdks/styleguide/README.md#get) - Page details
* [listPages](docs/sdks/styleguide/README.md#listpages) - List your styleguide pages

### [terminology](docs/sdks/terminology/README.md)

* [add](docs/sdks/terminology/README.md#add) - Add terms
* [delete](docs/sdks/terminology/README.md#delete) - Delete terms
* [find](docs/sdks/terminology/README.md#find) - Find terms
* [update](docs/sdks/terminology/README.md#update) - Update terms

### [user](docs/sdks/user/README.md)

* [list](docs/sdks/user/README.md#list) - List users
<!-- End Available Resources and Operations [operations] -->







<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

A parameter is configured globally. This parameter must be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, This global value will be used as the default on the operations that use it. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `organizationId` to `99895` at SDK initialization and then you do not have to pass the same value on calls to operations like `detect`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameter is available. The required parameter must be set when you initialize the SDK client.

| Name | Type | Required | Description |
| ---- | ---- |:--------:| ----------- |
| organizationId | number | ✔️ | The organizationId parameter. |


### Example

```typescript
import { Writer } from "@writerai/writer-sdk";

async function run() {
    const sdk = new Writer({
        apiKey: "<YOUR_API_KEY_HERE>",
        organizationId: 496531,
    });

    const contentDetectorRequest = {
        input: "string",
    };
    const organizationId = 592237;

    const result = await sdk.aiContentDetector.detect(contentDetectorRequest, organizationId);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Global Parameters [global-parameters] -->



<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.FailResponse | 400,401,403,404,500 | application/json    |
| errors.SDKError     | 4xx-5xx             | */*                 |

Example

```typescript
import { Writer } from "@writerai/writer-sdk";
import * as errors from "@writerai/writer-sdk/sdk/models/errors";

async function run() {
    const sdk = new Writer({
        apiKey: "<YOUR_API_KEY_HERE>",
        organizationId: 850421,
    });

    let result;
    try {
        result = await sdk.billing.getSubscriptionDetails();
    } catch (err) {
        switch (true) {
            case err instanceof errors.FailResponse: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://enterprise-api.writer.com` | None |

```typescript
import { Writer } from "@writerai/writer-sdk";

async function run() {
    const sdk = new Writer({
        serverIdx: 0,
        apiKey: "<YOUR_API_KEY_HERE>",
        organizationId: 850421,
    });

    const result = await sdk.billing.getSubscriptionDetails();

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Writer } from "@writerai/writer-sdk";

async function run() {
    const sdk = new Writer({
        serverURL: "https://enterprise-api.writer.com",
        apiKey: "<YOUR_API_KEY_HERE>",
        organizationId: 850421,
    });

    const result = await sdk.billing.getSubscriptionDetails();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Writer } from "@writerai/writer-sdk";
import { HTTPClient } from "@writerai/writer-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Writer({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type     | Scheme   |
| -------- | -------- | -------- |
| `apiKey` | apiKey   | API key  |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Writer } from "@writerai/writer-sdk";

async function run() {
    const sdk = new Writer({
        apiKey: "<YOUR_API_KEY_HERE>",
        organizationId: 850421,
    });

    const result = await sdk.billing.getSubscriptionDetails();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Writer } from "@writerai/writer-sdk";
import { openAsBlob } from "node:fs";

async function run() {
    const sdk = new Writer({
        apiKey: "<YOUR_API_KEY_HERE>",
        organizationId: 403654,
    });

    const uploadModelFileRequest = {
        file: await openAsBlob("./sample-file"),
    };
    const organizationId = 330343;

    const result = await sdk.files.upload(uploadModelFileRequest, organizationId);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
