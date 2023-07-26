/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteModelCustomizationRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customizationId" })
    customizationId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
    modelId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
    organizationId?: number;
}

export class DeleteModelCustomization200ApplicationJSON extends SpeakeasyBase {}

export class DeleteModelCustomizationResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Bad Request
     */
    @SpeakeasyMetadata()
    failResponse?: shared.FailResponse;

    @SpeakeasyMetadata()
    headers?: Record<string, string[]>;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    @SpeakeasyMetadata()
    deleteModelCustomization200ApplicationJSONObject?: DeleteModelCustomization200ApplicationJSON;
}
