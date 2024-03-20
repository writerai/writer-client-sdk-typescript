/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type ListTemplatesRequest = {
    teamId: number;
    templateId: string;
    organizationId?: number | undefined;
};

export type ListTemplatesResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    headers: Record<string, Array<string>>;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    templateDetailsResponse?: shared.TemplateDetailsResponse | undefined;
};

/** @internal */
export namespace ListTemplatesRequest$ {
    export type Inbound = {
        teamId: number;
        templateId: string;
        organizationId?: number | undefined;
    };

    export const inboundSchema: z.ZodType<ListTemplatesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            teamId: z.number().int(),
            templateId: z.string(),
            organizationId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                teamId: v.teamId,
                templateId: v.templateId,
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
            };
        });

    export type Outbound = {
        teamId: number;
        templateId: string;
        organizationId?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListTemplatesRequest> = z
        .object({
            teamId: z.number().int(),
            templateId: z.string(),
            organizationId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                teamId: v.teamId,
                templateId: v.templateId,
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
            };
        });
}

/** @internal */
export namespace ListTemplatesResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
        TemplateDetailsResponse?: shared.TemplateDetailsResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<ListTemplatesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            TemplateDetailsResponse: shared.TemplateDetailsResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                headers: v.Headers,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.TemplateDetailsResponse === undefined
                    ? null
                    : { templateDetailsResponse: v.TemplateDetailsResponse }),
            };
        });

    export type Outbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: never;
        TemplateDetailsResponse?: shared.TemplateDetailsResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListTemplatesResponse> = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            templateDetailsResponse: shared.TemplateDetailsResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                Headers: v.headers,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.templateDetailsResponse === undefined
                    ? null
                    : { TemplateDetailsResponse: v.templateDetailsResponse }),
            };
        });
}
