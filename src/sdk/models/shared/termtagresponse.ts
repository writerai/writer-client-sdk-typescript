import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class TermTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "parentTagId" })
  parentTagId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tag" })
  tag: string;

  @SpeakeasyMetadata()
  @Expose({ name: "termId" })
  termId: number;
}