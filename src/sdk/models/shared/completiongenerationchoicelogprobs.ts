import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CompletionGenerationChoiceLogprobs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "textOffset" })
  textOffset?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "tokenLogprobs" })
  tokenLogprobs?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "tokens" })
  tokens?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "topLogprobs" })
  topLogprobs?: Record<string, string>[];
}