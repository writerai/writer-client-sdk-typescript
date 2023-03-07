import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Pagination } from "./pagination";
import { UserPublicResponse } from "./userpublicresponse";
import { Expose, Type } from "class-transformer";


export class PaginatedResultUserPublicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "pagination" })
  @Type(() => Pagination)
  pagination: Pagination;

  @SpeakeasyMetadata({ elemType: UserPublicResponse })
  @Expose({ name: "result" })
  @Type(() => UserPublicResponse)
  result?: UserPublicResponse[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalCount" })
  totalCount: number;
}