import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class ApprovedTermExtensionCreate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "capitalize" })
  capitalize: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "fixCase" })
  fixCase: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "fixCommonMistakes" })
  fixCommonMistakes: boolean;
}