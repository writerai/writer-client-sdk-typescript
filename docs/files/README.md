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
import { DeleteFileResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 613064,
});

sdk.files.delete({
  fileId: "iure",
}).then((res: DeleteFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get file

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { GetFileResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 902349,
});

sdk.files.get({
  fileId: "quidem",
}).then((res: GetFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

List files

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { ListFilesResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 99280,
});

sdk.files.list({}).then((res: ListFilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## upload

Upload file

### Example Usage

```typescript
import { Writer } from "@writerai/writer-sdk";
import { UploadFileResponse } from "@writerai/writer-sdk/dist/sdk/models/operations";

const sdk = new Writer({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  organizationId: 60225,
});

sdk.files.upload({
  uploadModelFileRequest: {
    file: {
      content: "reiciendis".encode(),
      file: "est",
    },
  },
}).then((res: UploadFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
