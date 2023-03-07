<!-- Start SDK Example Usage -->
```typescript
import {
  ContentDetectorApiRequest,
  ContentDetectorApiResponse 
} from "@writerai/writer-sdk/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Writer } from "@writerai/writer-sdk";


const sdk = new Writer();
    
const req: ContentDetectorApiRequest = {
  pathParams: {
    organizationId: 548814,
  },
  headers: {
    authorization: "deserunt",
  },
  request: {
    input: "porro",
  },
};

sdk.aiContentDetector.contentDetectorApi(req).then((res: ContentDetectorApiResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->