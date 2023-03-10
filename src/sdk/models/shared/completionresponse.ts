import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CompletionGenerationChoice } from "./completiongenerationchoice";
import { Expose, Type } from "class-transformer";


export class CompletionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CompletionGenerationChoice })
  @Expose({ name: "choices" })
  @Type(() => CompletionGenerationChoice)
  choices?: CompletionGenerationChoice[];
}