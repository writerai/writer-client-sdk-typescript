import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class CompletionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: number;
}

export class CompletionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}

export class CompletionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompletionsPathParams;

  @SpeakeasyMetadata()
  headers: CompletionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CompletionRequest;
}

export class CompletionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  completionResponse?: shared.CompletionResponse;

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