import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GenerationModelInfoResponse } from "./generationmodelinforesponse";
import { Expose, Type } from "class-transformer";


export class GenerationModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GenerationModelInfoResponse })
  @Expose({ name: "models" })
  @Type(() => GenerationModelInfoResponse)
  models?: GenerationModelInfoResponse[];
}