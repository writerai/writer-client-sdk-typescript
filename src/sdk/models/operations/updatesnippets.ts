import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class UpdateSnippetsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: number;
}

export class UpdateSnippetsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" })
  xRequestID?: string;
}

export class UpdateSnippetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSnippetsPathParams;

  @SpeakeasyMetadata()
  headers: UpdateSnippetsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.SnippetUpdate })
  request?: shared.SnippetUpdate[];
}

export class UpdateSnippetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  failResponse?: shared.FailResponse;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata({ elemType: shared.SnippetWithUser })
  snippetWithUsers?: shared.SnippetWithUser[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}