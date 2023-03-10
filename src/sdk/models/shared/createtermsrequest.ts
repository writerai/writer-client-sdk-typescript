import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TermCreate } from "./termcreate";
import { Expose, Type } from "class-transformer";

export enum CreateTermsRequestFailHandlingEnum {
    Accumulate = "accumulate",
    Validate = "validate",
    Skip = "skip",
    ValidateOnly = "validateOnly"
}

export class CreateTermsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "failHandling" })
  failHandling?: CreateTermsRequestFailHandlingEnum;

  @SpeakeasyMetadata({ elemType: TermCreate })
  @Expose({ name: "models" })
  @Type(() => TermCreate)
  models?: TermCreate[];
}