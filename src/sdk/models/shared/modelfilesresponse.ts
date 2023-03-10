import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ModelFile } from "./modelfile";
import { Expose, Type } from "class-transformer";


export class ModelFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ModelFile })
  @Expose({ name: "files" })
  @Type(() => ModelFile)
  files?: ModelFile[];
}