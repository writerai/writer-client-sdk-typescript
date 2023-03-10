import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CompletionGenerationChoiceLogprobs } from "./completiongenerationchoicelogprobs";
import { Expose, Type } from "class-transformer";


export class CompletionGenerationChoice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "logprobs" })
  @Type(() => CompletionGenerationChoiceLogprobs)
  logprobs?: CompletionGenerationChoiceLogprobs;

  @SpeakeasyMetadata()
  @Expose({ name: "text" })
  text: string;
}