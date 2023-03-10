import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FailMessage } from "./failmessage";
import { FullTermWithUser } from "./fulltermwithuser";
import { Expose, Type } from "class-transformer";


export class CreateTermsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FailMessage })
  @Expose({ name: "fails" })
  @Type(() => FailMessage)
  fails?: FailMessage[];

  @SpeakeasyMetadata({ elemType: FullTermWithUser })
  @Expose({ name: "models" })
  @Type(() => FullTermWithUser)
  models?: FullTermWithUser[];
}