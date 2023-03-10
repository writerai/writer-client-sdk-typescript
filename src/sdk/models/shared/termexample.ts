import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum TermExampleTypeEnum {
    Good = "good",
    Bad = "bad"
}

export class TermExample extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "example" })
  example: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "termBankId" })
  termBankId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "termId" })
  termId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: TermExampleTypeEnum;
}