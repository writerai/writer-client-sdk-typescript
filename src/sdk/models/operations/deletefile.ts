/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type DeleteFileRequest = {
    fileId: string;
    organizationId?: number | undefined;
};

export type DeleteFileResponseBody = {};

export type DeleteFileResponse = {
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
    object?: DeleteFileResponseBody | undefined;
};

/** @internal */
export namespace DeleteFileRequest$ {
    export type Inbound = {
        fileId: string;
        organizationId?: number | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteFileRequest, z.ZodTypeDef, Inbound> = z
        .object({
            fileId: z.string(),
            organizationId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                fileId: v.fileId,
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
            };
        });

    export type Outbound = {
        fileId: string;
        organizationId?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteFileRequest> = z
        .object({
            fileId: z.string(),
            organizationId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                fileId: v.fileId,
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
            };
        });
}

/** @internal */
export namespace DeleteFileResponseBody$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<DeleteFileResponseBody, z.ZodTypeDef, Inbound> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteFileResponseBody> =
        z.object({});
}

/** @internal */
export namespace DeleteFileResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
        object?: DeleteFileResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteFileResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => DeleteFileResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                headers: v.Headers,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: never;
        object?: DeleteFileResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteFileResponse> = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => DeleteFileResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                Headers: v.headers,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
