import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class DeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "deleted" })
  deleted: number;
}