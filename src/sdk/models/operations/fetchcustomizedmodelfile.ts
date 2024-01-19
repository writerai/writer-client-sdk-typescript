/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type FetchCustomizedModelFileRequest = {
    customizationId: string;
    modelId: string;
    organizationId?: number | undefined;
};

export type FetchCustomizedModelFileResponse = {
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
    stream?: ReadableStream<Uint8Array> | undefined;
};

/** @internal */
export namespace FetchCustomizedModelFileRequest$ {
    export type Inbound = {
        customizationId: string;
        modelId: string;
        organizationId?: number | undefined;
    };

    export const inboundSchema: z.ZodType<FetchCustomizedModelFileRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                customizationId: z.string(),
                modelId: z.string(),
                organizationId: z.number().int().optional(),
            })
            .transform((v) => {
                return {
                    customizationId: v.customizationId,
                    modelId: v.modelId,
                    ...(v.organizationId === undefined
                        ? null
                        : { organizationId: v.organizationId }),
                };
            });

    export type Outbound = {
        customizationId: string;
        modelId: string;
        organizationId?: number | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        FetchCustomizedModelFileRequest
    > = z
        .object({
            customizationId: z.string(),
            modelId: z.string(),
            organizationId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                customizationId: v.customizationId,
                modelId: v.modelId,
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
            };
        });
}

/** @internal */
export namespace FetchCustomizedModelFileResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
        stream?: ReadableStream<Uint8Array> | undefined;
    };

    export const inboundSchema: z.ZodType<FetchCustomizedModelFileResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                ContentType: z.string(),
                Headers: z.record(z.array(z.string())),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
                stream: z.instanceof(ReadableStream<Uint8Array>).optional(),
            })
            .transform((v) => {
                return {
                    contentType: v.ContentType,
                    headers: v.Headers,
                    statusCode: v.StatusCode,
                    rawResponse: v.RawResponse,
                    ...(v.stream === undefined ? null : { stream: v.stream }),
                };
            });

    export type Outbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: never;
        stream?: ReadableStream<Uint8Array> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        FetchCustomizedModelFileResponse
    > = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            stream: z.instanceof(ReadableStream<Uint8Array>).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                Headers: v.headers,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.stream === undefined ? null : { stream: v.stream }),
            };
        });
}
