/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type GenerateContentRequest = {
    generateTemplateRequest: shared.GenerateTemplateRequest;
    organizationId?: number | undefined;
    teamId: number;
};

export type GenerateContentResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    draft?: shared.Draft | undefined;
    headers: Record<string, Array<string>>;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace GenerateContentRequest$ {
    export type Inbound = {
        GenerateTemplateRequest: shared.GenerateTemplateRequest$.Inbound;
        organizationId?: number | undefined;
        teamId: number;
    };

    export const inboundSchema: z.ZodType<GenerateContentRequest, z.ZodTypeDef, Inbound> = z
        .object({
            GenerateTemplateRequest: shared.GenerateTemplateRequest$.inboundSchema,
            organizationId: z.number().int().optional(),
            teamId: z.number().int(),
        })
        .transform((v) => {
            return {
                generateTemplateRequest: v.GenerateTemplateRequest,
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
                teamId: v.teamId,
            };
        });

    export type Outbound = {
        GenerateTemplateRequest: shared.GenerateTemplateRequest$.Outbound;
        organizationId?: number | undefined;
        teamId: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GenerateContentRequest> = z
        .object({
            generateTemplateRequest: shared.GenerateTemplateRequest$.outboundSchema,
            organizationId: z.number().int().optional(),
            teamId: z.number().int(),
        })
        .transform((v) => {
            return {
                GenerateTemplateRequest: v.generateTemplateRequest,
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
                teamId: v.teamId,
            };
        });
}

/** @internal */
export namespace GenerateContentResponse$ {
    export type Inbound = {
        ContentType: string;
        Draft?: shared.Draft$.Inbound | undefined;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GenerateContentResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Draft: shared.Draft$.inboundSchema.optional(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.Draft === undefined ? null : { draft: v.Draft }),
                headers: v.Headers,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        Draft?: shared.Draft$.Outbound | undefined;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GenerateContentResponse> = z
        .object({
            contentType: z.string(),
            draft: shared.Draft$.outboundSchema.optional(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.draft === undefined ? null : { Draft: v.draft }),
                Headers: v.headers,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
