/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Pagination, Pagination$ } from "./pagination";
import { UserPublicResponse, UserPublicResponse$ } from "./userpublicresponse";
import { z } from "zod";

export type PaginatedResultUserPublicResponse = {
    pagination: Pagination;
    result?: Array<UserPublicResponse> | undefined;
    totalCount: number;
};

/** @internal */
export namespace PaginatedResultUserPublicResponse$ {
    export type Inbound = {
        pagination: Pagination$.Inbound;
        result?: Array<UserPublicResponse$.Inbound> | undefined;
        totalCount: number;
    };

    export const inboundSchema: z.ZodType<
        PaginatedResultUserPublicResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            pagination: Pagination$.inboundSchema,
            result: z.array(UserPublicResponse$.inboundSchema).optional(),
            totalCount: z.number().int(),
        })
        .transform((v) => {
            return {
                pagination: v.pagination,
                ...(v.result === undefined ? null : { result: v.result }),
                totalCount: v.totalCount,
            };
        });

    export type Outbound = {
        pagination: Pagination$.Outbound;
        result?: Array<UserPublicResponse$.Outbound> | undefined;
        totalCount: number;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PaginatedResultUserPublicResponse
    > = z
        .object({
            pagination: Pagination$.outboundSchema,
            result: z.array(UserPublicResponse$.outboundSchema).optional(),
            totalCount: z.number().int(),
        })
        .transform((v) => {
            return {
                pagination: v.pagination,
                ...(v.result === undefined ? null : { result: v.result }),
                totalCount: v.totalCount,
            };
        });
}
