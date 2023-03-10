import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class FindTermsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: number;
}
export enum FindTermsPartOfSpeechEnum {
    Noun = "noun",
    Verb = "verb",
    Adverb = "adverb",
    Adjective = "adjective"
}
export enum FindTermsSortFieldEnum {
    Term = "term",
    CreationTime = "creationTime",
    ModificationTime = "modificationTime",
    Type = "type"
}
export enum FindTermsSortOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
export enum FindTermsTypeEnum {
    Approved = "approved",
    Banned = "banned",
    Pending = "pending"
}

export class FindTermsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partOfSpeech" })
  partOfSpeech?: FindTermsPartOfSpeechEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" })
  sortField?: FindTermsSortFieldEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: FindTermsSortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=term" })
  term?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: FindTermsTypeEnum;
}

export class FindTermsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}

export class FindTermsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FindTermsPathParams;

  @SpeakeasyMetadata()
  queryParams: FindTermsQueryParams;

  @SpeakeasyMetadata()
  headers: FindTermsHeaders;
}

export class FindTermsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  failResponse?: shared.FailResponse;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  paginatedResultFullTermWithUser?: shared.PaginatedResultFullTermWithUser;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}