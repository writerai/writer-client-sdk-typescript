import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TermUpdate } from "./termupdate";
import { Expose, Type } from "class-transformer";

export enum UpdateTermsRequestFailHandlingEnum {
    Accumulate = "accumulate",
    Validate = "validate",
    Skip = "skip",
    ValidateOnly = "validateOnly"
}

export class UpdateTermsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "failHandling" })
  failHandling?: UpdateTermsRequestFailHandlingEnum;

  @SpeakeasyMetadata({ elemType: TermUpdate })
  @Expose({ name: "models" })
  @Type(() => TermUpdate)
  models?: TermUpdate[];
}