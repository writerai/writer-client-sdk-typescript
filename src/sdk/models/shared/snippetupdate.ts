import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SnippetTagV2 } from "./snippettagv2";
import { Expose, Type } from "class-transformer";


export class SnippetUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

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