import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class TerminologyUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fullName" })
  fullName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;
}