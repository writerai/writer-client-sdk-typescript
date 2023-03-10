import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ContentIssue } from "./contentissue";
import { Expose, Type } from "class-transformer";


export class ProcessedContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ContentIssue })
  @Expose({ name: "issues" })
  @Type(() => ContentIssue)
  issues?: ContentIssue[];
}