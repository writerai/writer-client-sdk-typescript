import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Completions {
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
   * completions - Create completion for LLM model
  **/
  completions(
    req: operations.CompletionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CompletionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CompletionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/llm/organization/{organizationId}/model/{modelId}/completions", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CompletionsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.completionResponse = plainToInstance(
                shared.CompletionResponse,
                httpRes?.data as shared.CompletionResponse,
                { excludeExtraneousValues: true }
              );
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

  
  /**
   * customizationCompletions - Create completion for LLM customization model
  **/
  customizationCompletions(
    req: operations.CustomizationCompletionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CustomizationCompletionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CustomizationCompletionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/llm/organization/{organizationId}/model/{modelId}/customization/{customizationId}/completions", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CustomizationCompletionsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.completionResponse = plainToInstance(
                shared.CompletionResponse,
                httpRes?.data as shared.CompletionResponse,
                { excludeExtraneousValues: true }
              );
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
