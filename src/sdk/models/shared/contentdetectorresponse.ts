import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ContentDetectorResponseLabelEnum {
    Fake = "fake",
    Real = "real"
}

export class ContentDetectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "label" })
  label: ContentDetectorResponseLabelEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "score" })
  score: number;
}