import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UsageItem } from "./usageitem";
import { Expose, Type } from "class-transformer";


export class Usage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "coWriteWords" })
  @Type(() => UsageItem)
  coWriteWords: UsageItem;

  @SpeakeasyMetadata()
  @Expose({ name: "team" })
  @Type(() => UsageItem)
  team: UsageItem;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  @Type(() => UsageItem)
  user: UsageItem;

  @SpeakeasyMetadata()
  @Expose({ name: "words" })
  @Type(() => UsageItem)
  words: UsageItem;
}