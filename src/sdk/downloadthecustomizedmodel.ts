import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class DownloadTheCustomizedModel {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * fetchCustomizedModelFile - Download your fine-tuned model (available only for Palmyra Base and Palmyra Large)
  **/
  fetchCustomizedModelFile(
    req: operations.FetchCustomizedModelFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchCustomizedModelFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchCustomizedModelFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/llm/organization/{organizationId}/model/{modelId}/customization/{customizationId}/fetch", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchCustomizedModelFileResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.fetchCustomizedModelFile200ApplicationOctetStreamBinaryString = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.failResponse = plainToInstance(
                shared.FailResponse,
                httpRes?.data as shared.FailResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.failResponse = plainToInstance(
                shared.FailResponse,
                httpRes?.data as shared.FailResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.failResponse = plainToInstance(
                shared.FailResponse,
                httpRes?.data as shared.FailResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.failResponse = plainToInstance(
                shared.FailResponse,
                httpRes?.data as shared.FailResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.failResponse = plainToInstance(
                shared.FailResponse,
                httpRes?.data as shared.FailResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
