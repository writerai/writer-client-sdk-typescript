import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum TermMistakePosEnum {
    Noun = "noun",
    Verb = "verb",
    Adverb = "adverb",
    Adjective = "adjective"
}

export class TermMistake extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "caseSensitive" })
  caseSensitive: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "mistake" })
  mistake: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pos" })
  pos?: TermMistakePosEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "termBankId" })
  termBankId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "termId" })
  termId: number;
}