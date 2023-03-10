import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FullTermWithUser } from "./fulltermwithuser";
import { Pagination } from "./pagination";
import { Expose, Type } from "class-transformer";


export class PaginatedResultFullTermWithUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "pagination" })
  @Type(() => Pagination)
  pagination: Pagination;

  @SpeakeasyMetadata({ elemType: FullTermWithUser })
  @Expose({ name: "result" })
  @Type(() => FullTermWithUser)
  result?: FullTermWithUser[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalCount" })
  totalCount: number;
}