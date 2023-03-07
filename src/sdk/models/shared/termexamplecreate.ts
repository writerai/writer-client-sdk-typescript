import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum TermExampleCreateTypeEnum {
    Good = "good",
    Bad = "bad"
}

export class TermExampleCreate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "example" })
  example: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: TermExampleCreateTypeEnum;
}