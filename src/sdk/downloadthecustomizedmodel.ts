/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Methods related to Download the customized model
 */
export class DownloadTheCustomizedModel {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Download your fine-tuned model (available only for Palmyra Base and Palmyra Large)
     */
    async fetchFile(
        req: operations.FetchCustomizedModelFileRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.FetchCustomizedModelFileResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FetchCustomizedModelFileRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/llm/organization/{organizationId}/model/{modelId}/customization/{customizationId}/fetch",
            req,
            this.sdkConfiguration.globals
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/octet-stream;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.FetchCustomizedModelFileResponse =
            new operations.FetchCustomizedModelFileResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
                headers: utils.getHeadersFromResponse(httpRes.headers),
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/octet-stream`)) {
                    res.fetchCustomizedModelFile200ApplicationOctetStreamBinaryString =
                        httpRes?.data;
                }
                break;
            case [400, 401, 403, 404, 500].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.failResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.FailResponse
                    );
                }
                break;
        }

        return res;
    }
}
