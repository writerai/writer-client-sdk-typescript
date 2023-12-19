/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import { isBlobLike } from "../sdk/types";

export class Files extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }
    /**
     * Delete file
     */
    async delete(
        input: operations.DeleteFileRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteFileResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.DeleteFileRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            fileId: enc$.encodeSimple("fileId", payload$.fileId, {
                explode: false,
                charEncoding: "percent",
            }),
            organizationId: enc$.encodeSimple(
                "organizationId",
                payload$.organizationId ?? this.options$.organizationId,
                { explode: false, charEncoding: "percent" }
            ),
        };

        const path$ = this.templateURLComponent("/llm/organization/{organizationId}/file/{fileId}")(
            pathParams$
        );

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "delete",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.DeleteFileResponse$.inboundSchema.parse({
                ...responseFields$,
                Headers: this.unpackHeaders(response.headers),
                object: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, [400, 401, 403, 404, 500], "application/json")) {
            const responseBody = await response.json();
            const result = errors.FailResponse$.inboundSchema.parse({
                ...responseFields$,
                Headers: this.unpackHeaders(response.headers),
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get file
     */
    async get(
        input: operations.GetFileRequest,
        options?: RequestOptions
    ): Promise<operations.GetFileResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetFileRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            fileId: enc$.encodeSimple("fileId", payload$.fileId, {
                explode: false,
                charEncoding: "percent",
            }),
            organizationId: enc$.encodeSimple(
                "organizationId",
                payload$.organizationId ?? this.options$.organizationId,
                { explode: false, charEncoding: "percent" }
            ),
        };

        const path$ = this.templateURLComponent("/llm/organization/{organizationId}/file/{fileId}")(
            pathParams$
        );

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "get",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetFileResponse$.inboundSchema.parse({
                ...responseFields$,
                Headers: this.unpackHeaders(response.headers),
                ModelFile: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, [400, 401, 403, 404, 500], "application/json")) {
            const responseBody = await response.json();
            const result = errors.FailResponse$.inboundSchema.parse({
                ...responseFields$,
                Headers: this.unpackHeaders(response.headers),
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * List files
     */
    async list(
        organizationId?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.ListFilesResponse> {
        const input$: operations.ListFilesRequest = {
            organizationId: organizationId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.ListFilesRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            organizationId: enc$.encodeSimple(
                "organizationId",
                payload$.organizationId ?? this.options$.organizationId,
                { explode: false, charEncoding: "percent" }
            ),
        };

        const path$ = this.templateURLComponent("/llm/organization/{organizationId}/file")(
            pathParams$
        );

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "get",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.ListFilesResponse$.inboundSchema.parse({
                ...responseFields$,
                Headers: this.unpackHeaders(response.headers),
                ModelFilesResponse: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, [400, 401, 403, 404, 500], "application/json")) {
            const responseBody = await response.json();
            const result = errors.FailResponse$.inboundSchema.parse({
                ...responseFields$,
                Headers: this.unpackHeaders(response.headers),
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Upload file
     */
    async upload(
        input: operations.UploadFileRequest,
        options?: RequestOptions
    ): Promise<operations.UploadFileResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.UploadFileRequest$.outboundSchema.parse(input);

        const body$ = new FormData();

        if (isBlobLike(payload$.UploadModelFileRequest.file)) {
            body$.append("file", payload$.UploadModelFileRequest.file);
        } else {
            body$.append(
                "file",
                new Blob([payload$.UploadModelFileRequest.file.content], {
                    type: "application/octet-stream",
                }),
                payload$.UploadModelFileRequest.file.fileName
            );
        }

        const pathParams$ = {
            organizationId: enc$.encodeSimple(
                "organizationId",
                payload$.organizationId ?? this.options$.organizationId,
                { explode: false, charEncoding: "percent" }
            ),
        };

        const path$ = this.templateURLComponent("/llm/organization/{organizationId}/file")(
            pathParams$
        );

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "post",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.UploadFileResponse$.inboundSchema.parse({
                ...responseFields$,
                Headers: this.unpackHeaders(response.headers),
                ModelFile: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, [400, 401, 403, 404, 500], "application/json")) {
            const responseBody = await response.json();
            const result = errors.FailResponse$.inboundSchema.parse({
                ...responseFields$,
                Headers: this.unpackHeaders(response.headers),
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
