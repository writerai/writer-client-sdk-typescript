import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Terminology {
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
   * addTerms - Add terms
  **/
  addTerms(
    req: operations.AddTermsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddTermsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddTermsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/terminology/organization/{organizationId}/team/{teamId}", req.pathParams);

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
        const res: operations.AddTermsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createTermsResponse = plainToInstance(
                shared.CreateTermsResponse,
                httpRes?.data as shared.CreateTermsResponse,
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
   * deleteTerms - Delete terms
  **/
  deleteTerms(
    req: operations.DeleteTermsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTermsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTermsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/terminology/organization/{organizationId}/team/{teamId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "delete",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteTermsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.deleteResponse = plainToInstance(
                shared.DeleteResponse,
                httpRes?.data as shared.DeleteResponse,
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
   * findTerms - Find terms
  **/
  findTerms(
    req: operations.FindTermsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FindTermsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FindTermsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/terminology/organization/{organizationId}/team/{teamId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FindTermsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.paginatedResultFullTermWithUser = plainToInstance(
                shared.PaginatedResultFullTermWithUser,
                httpRes?.data as shared.PaginatedResultFullTermWithUser,
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
   * updateTerms - Update terms
  **/
  updateTerms(
    req: operations.UpdateTermsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTermsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTermsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/terminology/organization/{organizationId}/team/{teamId}", req.pathParams);

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateTermsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createTermsResponse = plainToInstance(
                shared.CreateTermsResponse,
                httpRes?.data as shared.CreateTermsResponse,
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
