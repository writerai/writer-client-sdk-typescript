import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SnippetTagV2 } from "./snippettagv2";
import { TerminologyUser } from "./terminologyuser";
import { Expose, Transform, Type } from "class-transformer";


export class SnippetWithUser extends SpeakeasyBase {
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

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modificationTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modificationTime: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedUser" })
  @Type(() => TerminologyUser)
  modifiedUser: TerminologyUser;

  @SpeakeasyMetadata()
  @Expose({ name: "shortcut" })
  shortcut?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "snippet" })
  snippet: string;

  @SpeakeasyMetadata({ elemType: SnippetTagV2 })
  @Expose({ name: "tags" })
  @Type(() => SnippetTagV2)
  tags?: SnippetTagV2[];
}