import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FailMessage } from "./failmessage";
import { Expose, Type } from "class-transformer";


export class FailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FailMessage })
  @Expose({ name: "errors" })
  @Type(() => FailMessage)
  errors?: FailMessage[];

  @SpeakeasyMetadata()
  @Expose({ name: "extras" })
  extras: any;

  @SpeakeasyMetadata()
  @Expose({ name: "tpe" })
  tpe: string;
}