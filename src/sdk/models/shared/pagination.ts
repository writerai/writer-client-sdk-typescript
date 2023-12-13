/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Pagination = {
    limit?: number | undefined;
    offset?: number | undefined;
};

/** @internal */
export namespace Pagination$ {
    export type Inbound = {
        limit?: number | undefined;
        offset?: number | undefined;
    };

    export const inboundSchema: z.ZodType<Pagination, z.ZodTypeDef, Inbound> = z
        .object({
            limit: z.number().int().optional(),
            offset: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.offset === undefined ? null : { offset: v.offset }),
            };
        });

    export type Outbound = {
        limit?: number | undefined;
        offset?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Pagination> = z
        .object({
            limit: z.number().int().optional(),
            offset: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.offset === undefined ? null : { offset: v.offset }),
            };
        });
}
