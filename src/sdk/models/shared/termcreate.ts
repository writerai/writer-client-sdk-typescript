import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ApprovedTermExtensionCreate } from "./approvedtermextensioncreate";
import { LinkedTermCreate } from "./linkedtermcreate";
import { TermExampleCreate } from "./termexamplecreate";
import { TermMistakeCreate } from "./termmistakecreate";
import { TermTagCreate } from "./termtagcreate";
import { Expose, Type } from "class-transformer";

export enum TermCreatePosEnum {
    Noun = "noun",
    Verb = "verb",
    Adverb = "adverb",
    Adjective = "adjective"
}
export enum TermCreateTypeEnum {
    Approved = "approved",
    Banned = "banned",
    Pending = "pending"
}

export class TermCreate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "approvedTermExtension" })
  @Type(() => ApprovedTermExtensionCreate)
  approvedTermExtension?: ApprovedTermExtensionCreate;

  @SpeakeasyMetadata()
  @Expose({ name: "caseSensitive" })
  caseSensitive: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata({ elemType: TermExampleCreate })
  @Expose({ name: "examples" })
  @Type(() => TermExampleCreate)
  examples?: TermExampleCreate[];

  @SpeakeasyMetadata()
  @Expose({ name: "highlight" })
  highlight?: boolean;

  @SpeakeasyMetadata({ elemType: LinkedTermCreate })
  @Expose({ name: "linkedTerms" })
  @Type(() => LinkedTermCreate)
  linkedTerms?: LinkedTermCreate[];

  @SpeakeasyMetadata({ elemType: TermMistakeCreate })
  @Expose({ name: "mistakes" })
  @Type(() => TermMistakeCreate)
  mistakes?: TermMistakeCreate[];

  @SpeakeasyMetadata()
  @Expose({ name: "pos" })
  pos?: TermCreatePosEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata({ elemType: TermTagCreate })
  @Expose({ name: "tags" })
  @Type(() => TermTagCreate)
  tags?: TermTagCreate[];

  @SpeakeasyMetadata()
  @Expose({ name: "term" })
  term: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: TermCreateTypeEnum;
}