import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetTemplateInputsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateId" })
  templateId: string;
}

export class GetTemplateInputsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}

export class GetTemplateInputsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTemplateInputsPathParams;

  @SpeakeasyMetadata()
  headers: GetTemplateInputsHeaders;
}

export class GetTemplateInputsResponse extends SpeakeasyBase {
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

  @SpeakeasyMetadata()
  templateDetailsResponse?: shared.TemplateDetailsResponse;
}