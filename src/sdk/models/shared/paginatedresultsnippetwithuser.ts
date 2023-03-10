import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Pagination } from "./pagination";
import { SnippetWithUser } from "./snippetwithuser";
import { Expose, Type } from "class-transformer";


export class PaginatedResultSnippetWithUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "pagination" })
  @Type(() => Pagination)
  pagination: Pagination;

  @SpeakeasyMetadata({ elemType: SnippetWithUser })
  @Expose({ name: "result" })
  @Type(() => SnippetWithUser)
  result?: SnippetWithUser[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalCount" })
  totalCount: number;
}