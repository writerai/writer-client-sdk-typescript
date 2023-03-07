import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum InputTypeEnum {
    Textbox = "textbox",
    Textarea = "textarea",
    Dropdown = "dropdown"
}

export class Input extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dynamic" })
  dynamic: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "help" })
  help?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "maxFields" })
  maxFields?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "minFields" })
  minFields?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "options" })
  options?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "subtitle" })
  subtitle?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: InputTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "unitCopy" })
  unitCopy?: string;
}