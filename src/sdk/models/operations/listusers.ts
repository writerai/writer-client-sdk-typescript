import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export enum ListUsersSortFieldEnum {
    Id = "id",
    Name = "name",
    CreationTime = "creationTime",
    Deleted = "deleted",
    ModificationTime = "modificationTime",
    Email = "email",
    LastSeen = "lastSeen"
}
export enum ListUsersSortOrderEnum {
    Asc = "asc",
    Desc = "desc"
}

export class ListUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" })
  sortField?: ListUsersSortFieldEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: ListUsersSortOrderEnum;
}

export class ListUsersHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}

export class ListUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListUsersQueryParams;

  @SpeakeasyMetadata()
  headers: ListUsersHeaders;
}

export class ListUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  failResponse?: shared.FailResponse;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  paginatedResultUserPublicResponse?: shared.PaginatedResultUserPublicResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}