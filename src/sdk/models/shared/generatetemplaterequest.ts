import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MagicRequestInput } from "./magicrequestinput";
import { Expose, Type } from "class-transformer";


export class GenerateTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: MagicRequestInput })
  @Expose({ name: "inputs" })
  @Type(() => MagicRequestInput)
  inputs?: MagicRequestInput[];

  @SpeakeasyMetadata()
  @Expose({ name: "templateId" })
  templateId: string;
}