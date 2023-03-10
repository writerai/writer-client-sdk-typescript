import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum GenerationModelInfoResponseTypeEnum {
    Gpt = "GPT",
    Instruct = "Instruct"
}

export class GenerationModelInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GenerationModelInfoResponseTypeEnum;
}