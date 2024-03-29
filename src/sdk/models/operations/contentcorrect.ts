/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type ContentCorrectRequest = {
    contentRequest: shared.ContentRequest;
    teamId: number;
    xRequestID?: string | undefined;
    organizationId?: number | undefined;
};

export type ContentCorrectResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    correctionResponse?: shared.CorrectionResponse | undefined;
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
export namespace ContentCorrectRequest$ {
    export type Inbound = {
        ContentRequest: shared.ContentRequest$.Inbound;
        teamId: number;
        "X-Request-ID"?: string | undefined;
        organizationId?: number | undefined;
    };

    export const inboundSchema: z.ZodType<ContentCorrectRequest, z.ZodTypeDef, Inbound> = z
        .object({
            ContentRequest: shared.ContentRequest$.inboundSchema,
            teamId: z.number().int(),
            "X-Request-ID": z.string().optional(),
            organizationId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                contentRequest: v.ContentRequest,
                teamId: v.teamId,
                ...(v["X-Request-ID"] === undefined ? null : { xRequestID: v["X-Request-ID"] }),
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
            };
        });

    export type Outbound = {
        ContentRequest: shared.ContentRequest$.Outbound;
        teamId: number;
        "X-Request-ID"?: string | undefined;
        organizationId?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ContentCorrectRequest> = z
        .object({
            contentRequest: shared.ContentRequest$.outboundSchema,
            teamId: z.number().int(),
            xRequestID: z.string().optional(),
            organizationId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ContentRequest: v.contentRequest,
                teamId: v.teamId,
                ...(v.xRequestID === undefined ? null : { "X-Request-ID": v.xRequestID }),
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
            };
        });
}

/** @internal */
export namespace ContentCorrectResponse$ {
    export type Inbound = {
        ContentType: string;
        CorrectionResponse?: shared.CorrectionResponse$.Inbound | undefined;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<ContentCorrectResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            CorrectionResponse: shared.CorrectionResponse$.inboundSchema.optional(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.CorrectionResponse === undefined
                    ? null
                    : { correctionResponse: v.CorrectionResponse }),
                headers: v.Headers,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        CorrectionResponse?: shared.CorrectionResponse$.Outbound | undefined;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ContentCorrectResponse> = z
        .object({
            contentType: z.string(),
            correctionResponse: shared.CorrectionResponse$.outboundSchema.optional(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.correctionResponse === undefined
                    ? null
                    : { CorrectionResponse: v.correctionResponse }),
                Headers: v.headers,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
