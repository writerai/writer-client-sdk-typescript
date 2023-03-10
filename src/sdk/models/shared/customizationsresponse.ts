import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ModelCustomization } from "./modelcustomization";
import { Expose, Type } from "class-transformer";


export class CustomizationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ModelCustomization })
  @Expose({ name: "customizations" })
  @Type(() => ModelCustomization)
  customizations?: ModelCustomization[];
}