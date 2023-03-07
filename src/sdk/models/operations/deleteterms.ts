import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class DeleteTermsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: number;
}

export class DeleteTermsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: number[];
}

export class DeleteTermsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" })
  xRequestID?: string;
}

export class DeleteTermsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTermsPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteTermsQueryParams;

  @SpeakeasyMetadata()
  headers: DeleteTermsHeaders;
}

export class DeleteTermsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteResponse?: shared.DeleteResponse;

  @SpeakeasyMetadata()
  failResponse?: shared.FailResponse;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}