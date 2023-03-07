import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ContentSettings } from "./contentsettings";
import { Expose, Type } from "class-transformer";


export class ContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content: string;

  @SpeakeasyMetadata()
  @Expose({ name: "settings" })
  @Type(() => ContentSettings)
  settings: ContentSettings;
}