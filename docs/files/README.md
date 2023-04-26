# files

## Overview

Methods related to Files

### Available Operations

* [delete](#delete) - Delete file
* [get](#get) - Get file
* [list](#list) - List files
* [upload](#upload) - Upload file

## delete

Delete file

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { DeleteFileRequest, DeleteFileResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 613064,
});

const req: DeleteFileRequest = {
  fileId: "iure",
};

sdk.files.delete(req).then((res: DeleteFileResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get file

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { GetFileRequest, GetFileResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 902349,
});

const req: GetFileRequest = {
  fileId: "quidem",
};

sdk.files.get(req).then((res: GetFileResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

List files

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { ListFilesRequest, ListFilesResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 99280,
});

const req: ListFilesRequest = {};

sdk.files.list(req).then((res: ListFilesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## upload

Upload file

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { UploadFileRequest, UploadFileResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 60225,
});

const req: UploadFileRequest = {
  uploadModelFileRequest: {
    file: {
      content: "reiciendis".encode(),
      file: "est",
    },
  },
};

sdk.files.upload(req).then((res: UploadFileResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
