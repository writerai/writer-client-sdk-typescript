import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class LinkedTermCreate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "linkedTermId" })
  linkedTermId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;
}