import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CorrectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "correct" })
  correct: string;
}