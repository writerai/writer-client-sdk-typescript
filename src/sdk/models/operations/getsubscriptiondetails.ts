/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type GetSubscriptionDetailsResponse = {
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
    subscriptionPublicResponseApi?: shared.SubscriptionPublicResponseApi | undefined;
};

/** @internal */
export namespace GetSubscriptionDetailsResponse$ {
    export type Inbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
        SubscriptionPublicResponseApi?: shared.SubscriptionPublicResponseApi$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetSubscriptionDetailsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            SubscriptionPublicResponseApi:
                shared.SubscriptionPublicResponseApi$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                headers: v.Headers,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.SubscriptionPublicResponseApi === undefined
                    ? null
                    : { subscriptionPublicResponseApi: v.SubscriptionPublicResponseApi }),
            };
        });

    export type Outbound = {
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: never;
        SubscriptionPublicResponseApi?: shared.SubscriptionPublicResponseApi$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSubscriptionDetailsResponse> =
        z
            .object({
                contentType: z.string(),
                headers: z.record(z.array(z.string())),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
                subscriptionPublicResponseApi:
                    shared.SubscriptionPublicResponseApi$.outboundSchema.optional(),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    Headers: v.headers,
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                    ...(v.subscriptionPublicResponseApi === undefined
                        ? null
                        : { SubscriptionPublicResponseApi: v.subscriptionPublicResponseApi }),
                };
            });
}
