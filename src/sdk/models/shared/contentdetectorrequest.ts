import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class ContentDetectorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "input" })
  input: string;
}