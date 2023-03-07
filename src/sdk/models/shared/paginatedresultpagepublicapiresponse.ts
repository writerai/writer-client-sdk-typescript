import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PagePublicApiResponse } from "./pagepublicapiresponse";
import { Pagination } from "./pagination";
import { Expose, Type } from "class-transformer";


export class PaginatedResultPagePublicApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "pagination" })
  @Type(() => Pagination)
  pagination: Pagination;

  @SpeakeasyMetadata({ elemType: PagePublicApiResponse })
  @Expose({ name: "result" })
  @Type(() => PagePublicApiResponse)
  result?: PagePublicApiResponse[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalCount" })
  totalCount: number;
}