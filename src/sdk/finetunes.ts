import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class FineTunes {
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
   * createModelCustomization - Create model customization
  **/
  createModelCustomization(
    req: operations.CreateModelCustomizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateModelCustomizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateModelCustomizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/llm/organization/{organizationId}/model/{modelId}/customization", req.pathParams);

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
        const res: operations.CreateModelCustomizationResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.modelCustomization = plainToInstance(
                shared.ModelCustomization,
                httpRes?.data as shared.ModelCustomization,
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
   * customizations - List model customizations
  **/
  customizations(
    req: operations.CustomizationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CustomizationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CustomizationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/llm/organization/{organizationId}/model/{modelId}/customization", req.pathParams);
    
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
        const res: operations.CustomizationsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.customizationsResponse = plainToInstance(
                shared.CustomizationsResponse,
                httpRes?.data as shared.CustomizationsResponse,
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
   * deleteModelCustomization - Delete Model customization
  **/
  deleteModelCustomization(
    req: operations.DeleteModelCustomizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteModelCustomizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteModelCustomizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/llm/organization/{organizationId}/model/{modelId}/customization/{customizationId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteModelCustomizationResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.deleteModelCustomization200ApplicationJSONObject = httpRes?.data;
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
   * getModelCustomization - Get model customization
  **/
  getModelCustomization(
    req: operations.GetModelCustomizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModelCustomizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModelCustomizationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/llm/organization/{organizationId}/model/{modelId}/customization/{customizationId}", req.pathParams);
    
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
        const res: operations.GetModelCustomizationResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.modelCustomization = plainToInstance(
                shared.ModelCustomization,
                httpRes?.data as shared.ModelCustomization,
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
