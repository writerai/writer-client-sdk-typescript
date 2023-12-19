/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export type UpdateSnippetsRequest = {
    requestBody?: Array<shared.SnippetUpdate> | undefined;
    xRequestID?: string | undefined;
    organizationId?: number | undefined;
    teamId: number;
};

export type UpdateSnippetsResponse = {
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
    classes?: Array<shared.SnippetWithUser> | undefined;
};

/** @internal */
export namespace UpdateSnippetsRequest$ {
    export type Inbound = {
        RequestBody?: Array<shared.SnippetUpdate$.Inbound> | undefined;
        "X-Request-ID"?: string | undefined;
        organizationId?: number | undefined;
        teamId: number;
    };

    export const inboundSchema: z.ZodType<UpdateSnippetsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            RequestBody: z.array(shared.SnippetUpdate$.inboundSchema).optional(),
            "X-Request-ID": z.string().optional(),
            organizationId: z.number().int().optional(),
            teamId: z.number().int(),
        })
        .transform((v) => {
            return {
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
                ...(v["X-Request-ID"] === undefined ? null : { xRequestID: v["X-Request-ID"] }),
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
                teamId: v.teamId,
            };
        });

    export type Outbound = {
        RequestBody?: Array<shared.SnippetUpdate$.Outbound> | undefined;
        "X-Request-ID"?: string | undefined;
        organizationId?: number | undefined;
        teamId: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSnippetsRequest> = z
        .object({
            requestBody: z.array(shared.SnippetUpdate$.outboundSchema).optional(),
            xRequestID: z.string().optional(),
            organizationId: z.number().int().optional(),
            teamId: z.number().int(),
        })
        .transform((v) => {
            return {
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
                ...(v.xRequestID === undefined ? null : { "X-Request-ID": v.xRequestID }),
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
                teamId: v.teamId,
            };
        });
}

/** @internal */
export namespace UpdateSnippetsResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
        classes?: Array<shared.SnippetWithUser$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateSnippetsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            classes: z.array(shared.SnippetWithUser$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                headers: v.Headers,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.classes === undefined ? null : { classes: v.classes }),
            };
        });

    export type Outbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: never;
        classes?: Array<shared.SnippetWithUser$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSnippetsResponse> = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            classes: z.array(shared.SnippetWithUser$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                Headers: v.headers,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.classes === undefined ? null : { classes: v.classes }),
            };
        });
}
