import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum TermMistakeCreatePosEnum {
    Noun = "noun",
    Verb = "verb",
    Adverb = "adverb",
    Adjective = "adjective"
}

export class TermMistakeCreate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "caseSensitive" })
  caseSensitive: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "mistake" })
  mistake: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pos" })
  pos?: TermMistakeCreatePosEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;
}