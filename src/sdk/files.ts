import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Files {
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
   * deleteFile - Delete file
  **/
  deleteFile(
    req: operations.DeleteFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/llm/organization/{organizationId}/file/{fileId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteFileResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.deleteFile200ApplicationJSONObject = httpRes?.data;
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
   * files - List files
  **/
  files(
    req: operations.FilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/llm/organization/{organizationId}/file", req.pathParams);
    
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
        const res: operations.FilesResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.modelFilesResponse = plainToInstance(
                shared.ModelFilesResponse,
                httpRes?.data as shared.ModelFilesResponse,
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
   * getFile - Get file
  **/
  getFile(
    req: operations.GetFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/llm/organization/{organizationId}/file/{fileId}", req.pathParams);
    
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
        const res: operations.GetFileResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.modelFile = plainToInstance(
                shared.ModelFile,
                httpRes?.data as shared.ModelFile,
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
   * uploadFile - Upload file
  **/
  uploadFile(
    req: operations.UploadFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UploadFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UploadFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/llm/organization/{organizationId}/file", req.pathParams);

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
        const res: operations.UploadFileResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.modelFile = plainToInstance(
                shared.ModelFile,
                httpRes?.data as shared.ModelFile,
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
