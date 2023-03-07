import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class Pagination extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "limit" })
  limit?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "offset" })
  offset?: number;
}