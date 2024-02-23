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

export class CoWrite extends ClientSDK {
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
     * Generate content using predefined templates
     */
    async generateContent(
        generateTemplateRequest: shared.GenerateTemplateRequest,
        teamId: number,
        organizationId?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.GenerateContentResponse> {
        const input$: operations.GenerateContentRequest = {
            generateTemplateRequest: generateTemplateRequest,
            teamId: teamId,
            organizationId: organizationId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.GenerateContentRequest$.outboundSchema.parse(input$);
        const body$ = enc$.encodeJSON("body", payload$.GenerateTemplateRequest, { explode: true });

        const pathParams$ = {
            organizationId: enc$.encodeSimple(
                "organizationId",
                payload$.organizationId ?? this.options$.organizationId,
                { explode: false, charEncoding: "percent" }
            ),
            teamId: enc$.encodeSimple("teamId", payload$.teamId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/cowrite/organization/{organizationId}/team/{teamId}/generate"
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

        const context = { operationID: "Generate Content" };
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
            const result = operations.GenerateContentResponse$.inboundSchema.parse({
                ...responseFields$,
                Headers: this.unpackHeaders(response.headers),
                Draft: responseBody,
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
     * Get a list of your existing CoWrite templates
     */
    async listTemplates(
        teamId: number,
        templateId: string,
        organizationId?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.ListTemplatesResponse> {
        const input$: operations.ListTemplatesRequest = {
            teamId: teamId,
            templateId: templateId,
            organizationId: organizationId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.ListTemplatesRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            organizationId: enc$.encodeSimple(
                "organizationId",
                payload$.organizationId ?? this.options$.organizationId,
                { explode: false, charEncoding: "percent" }
            ),
            teamId: enc$.encodeSimple("teamId", payload$.teamId, {
                explode: false,
                charEncoding: "percent",
            }),
            templateId: enc$.encodeSimple("templateId", payload$.templateId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/cowrite/organization/{organizationId}/team/{teamId}/template/{templateId}"
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

        const context = { operationID: "listTemplates" };
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
            const result = operations.ListTemplatesResponse$.inboundSchema.parse({
                ...responseFields$,
                Headers: this.unpackHeaders(response.headers),
                TemplateDetailsResponse: responseBody,
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
