import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ApprovedTermExtension } from "./approvedtermextension";
import { FullLinkedTerm } from "./fulllinkedterm";
import { TermExample } from "./termexample";
import { TerminologyUser } from "./terminologyuser";
import { TermMistake } from "./termmistake";
import { TermTagResponse } from "./termtagresponse";
import { Expose, Transform, Type } from "class-transformer";

export enum FullTermWithUserPosEnum {
    Noun = "noun",
    Verb = "verb",
    Adverb = "adverb",
    Adjective = "adjective"
}
export enum FullTermWithUserTypeEnum {
    Approved = "approved",
    Banned = "banned",
    Pending = "pending"
}

export class FullTermWithUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "approvedTermExtension" })
  @Type(() => ApprovedTermExtension)
  approvedTermExtension?: ApprovedTermExtension;

  @SpeakeasyMetadata({ elemType: FullLinkedTerm })
  @Expose({ name: "backlinkedTerms" })
  @Type(() => FullLinkedTerm)
  backlinkedTerms?: FullLinkedTerm[];

  @SpeakeasyMetadata()
  @Expose({ name: "caseSensitive" })
  caseSensitive: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "createdUser" })
  @Type(() => TerminologyUser)
  createdUser: TerminologyUser;

  @SpeakeasyMetadata()
  @Expose({ name: "creationTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  creationTime: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata({ elemType: TermExample })
  @Expose({ name: "examples" })
  @Type(() => TermExample)
  examples?: TermExample[];

  @SpeakeasyMetadata()
  @Expose({ name: "highlight" })
  highlight: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata({ elemType: FullLinkedTerm })
  @Expose({ name: "linkedTerms" })
  @Type(() => FullLinkedTerm)
  linkedTerms?: FullLinkedTerm[];

  @SpeakeasyMetadata({ elemType: TermMistake })
  @Expose({ name: "mistakes" })
  @Type(() => TermMistake)
  mistakes?: TermMistake[];

  @SpeakeasyMetadata()
  @Expose({ name: "modificationTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modificationTime: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedUser" })
  @Type(() => TerminologyUser)
  modifiedUser: TerminologyUser;

  @SpeakeasyMetadata()
  @Expose({ name: "pos" })
  pos?: FullTermWithUserPosEnum;

  @SpeakeasyMetadata({ elemType: TermTagResponse })
  @Expose({ name: "tags" })
  @Type(() => TermTagResponse)
  tags?: TermTagResponse[];

  @SpeakeasyMetadata()
  @Expose({ name: "term" })
  term: string;

  @SpeakeasyMetadata()
  @Expose({ name: "termBankId" })
  termBankId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: FullTermWithUserTypeEnum;
}