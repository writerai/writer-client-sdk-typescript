import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class ContentDetectorApiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: number;
}

export class ContentDetectorApiHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}

export class ContentDetectorApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentDetectorApiPathParams;

  @SpeakeasyMetadata()
  headers: ContentDetectorApiHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ContentDetectorRequest;
}

export class ContentDetectorApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ContentDetectorResponse })
  contentDetectorResponses?: shared.ContentDetectorResponse[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  failResponse?: shared.FailResponse;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}