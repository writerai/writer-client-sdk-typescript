import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ApprovedTermExtension } from "./approvedtermextension";
import { Expose, Type } from "class-transformer";

export enum FullLinkedTermPosEnum {
    Noun = "noun",
    Verb = "verb",
    Adverb = "adverb",
    Adjective = "adjective"
}

export class FullLinkedTerm extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "approvedTermExtension" })
  @Type(() => ApprovedTermExtension)
  approvedTermExtension?: ApprovedTermExtension;

  @SpeakeasyMetadata()
  @Expose({ name: "caseSensitive" })
  caseSensitive: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "linkedTermId" })
  linkedTermId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pos" })
  pos?: FullLinkedTermPosEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "term" })
  term: string;

  @SpeakeasyMetadata()
  @Expose({ name: "termId" })
  termId: number;
}