import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class UploadModelFileRequestFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}

export class UploadModelFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: UploadModelFileRequestFile;
}