import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CompletionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bestOf" })
  bestOf?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "frequencyPenalty" })
  frequencyPenalty?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "logprobs" })
  logprobs?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "maxTokens" })
  maxTokens?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "minTokens" })
  minTokens?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "n" })
  n?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "presencePenalty" })
  presencePenalty?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "prompt" })
  prompt: string;

  @SpeakeasyMetadata()
  @Expose({ name: "stop" })
  stop?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "temperature" })
  temperature?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "topP" })
  topP?: number;
}