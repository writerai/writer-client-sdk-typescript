/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";

export class ModelCustomization extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Create model customization
     */
    async create(
        createCustomizationRequest: shared.CreateCustomizationRequest,
        modelId: string,
        organizationId?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.CreateModelCustomizationResponse> {
        const input$: operations.CreateModelCustomizationRequest = {
            createCustomizationRequest: createCustomizationRequest,
            modelId: modelId,
            organizationId: organizationId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.CreateModelCustomizationRequest$.outboundSchema.parse(input$);

        const body$ = enc$.encodeJSON("body", payload$.CreateCustomizationRequest, {
            explode: true,
        });

        const pathParams$ = {
            modelId: enc$.encodeSimple("modelId", payload$.modelId, {
                explode: false,
                charEncoding: "percent",
            }),
            organizationId: enc$.encodeSimple(
                "organizationId",
                payload$.organizationId ?? this.options$.organizationId,
                { explode: false, charEncoding: "percent" }
            ),
        };
        const path$ = this.templateURLComponent(
            "/llm/organization/{organizationId}/model/{modelId}/customization"
        )(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "createModelCustomization" };
        const doOptions = {
            context,
            errorCodes: ["400", "401", "403", "404", "4XX", "500", "5XX"],
        };
        const request = await this.createRequest$(
            {
                context,
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.CreateModelCustomizationResponse$.inboundSchema.parse({
                ...responseFields$,
                Headers: this.unpackHeaders(response.headers),
                ModelCustomization: responseBody,
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
     * Delete Model customization
     */
    async delete(
        customizationId: string,
        modelId: string,
        organizationId?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.DeleteModelCustomizationResponse> {
        const input$: operations.DeleteModelCustomizationRequest = {
            customizationId: customizationId,
            modelId: modelId,
            organizationId: organizationId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.DeleteModelCustomizationRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            customizationId: enc$.encodeSimple("customizationId", payload$.customizationId, {
                explode: false,
                charEncoding: "percent",
            }),
            modelId: enc$.encodeSimple("modelId", payload$.modelId, {
                explode: false,
                charEncoding: "percent",
            }),
            organizationId: enc$.encodeSimple(
                "organizationId",
                payload$.organizationId ?? this.options$.organizationId,
                { explode: false, charEncoding: "percent" }
            ),
        };
        const path$ = this.templateURLComponent(
            "/llm/organization/{organizationId}/model/{modelId}/customization/{customizationId}"
        )(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "deleteModelCustomization" };
        const doOptions = {
            context,
            errorCodes: ["400", "401", "403", "404", "4XX", "500", "5XX"],
        };
        const request = await this.createRequest$(
            {
                context,
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.DeleteModelCustomizationResponse$.inboundSchema.parse({
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
     * Get model customization
     */
    async get(
        customizationId: string,
        modelId: string,
        organizationId?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.GetModelCustomizationResponse> {
        const input$: operations.GetModelCustomizationRequest = {
            customizationId: customizationId,
            modelId: modelId,
            organizationId: organizationId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetModelCustomizationRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            customizationId: enc$.encodeSimple("customizationId", payload$.customizationId, {
                explode: false,
                charEncoding: "percent",
            }),
            modelId: enc$.encodeSimple("modelId", payload$.modelId, {
                explode: false,
                charEncoding: "percent",
            }),
            organizationId: enc$.encodeSimple(
                "organizationId",
                payload$.organizationId ?? this.options$.organizationId,
                { explode: false, charEncoding: "percent" }
            ),
        };
        const path$ = this.templateURLComponent(
            "/llm/organization/{organizationId}/model/{modelId}/customization/{customizationId}"
        )(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "getModelCustomization" };
        const doOptions = {
            context,
            errorCodes: ["400", "401", "403", "404", "4XX", "500", "5XX"],
        };
        const request = await this.createRequest$(
            {
                context,
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetModelCustomizationResponse$.inboundSchema.parse({
                ...responseFields$,
                Headers: this.unpackHeaders(response.headers),
                ModelCustomization: responseBody,
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
     * List model customizations
     */
    async list(
        modelId: string,
        organizationId?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.ListModelCustomizationsResponse> {
        const input$: operations.ListModelCustomizationsRequest = {
            modelId: modelId,
            organizationId: organizationId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.ListModelCustomizationsRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            modelId: enc$.encodeSimple("modelId", payload$.modelId, {
                explode: false,
                charEncoding: "percent",
            }),
            organizationId: enc$.encodeSimple(
                "organizationId",
                payload$.organizationId ?? this.options$.organizationId,
                { explode: false, charEncoding: "percent" }
            ),
        };
        const path$ = this.templateURLComponent(
            "/llm/organization/{organizationId}/model/{modelId}/customization"
        )(pathParams$);

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const context = { operationID: "listModelCustomizations" };
        const doOptions = {
            context,
            errorCodes: ["400", "401", "403", "404", "4XX", "500", "5XX"],
        };
        const request = await this.createRequest$(
            {
                context,
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.ListModelCustomizationsResponse$.inboundSchema.parse({
                ...responseFields$,
                Headers: this.unpackHeaders(response.headers),
                CustomizationsResponse: responseBody,
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
