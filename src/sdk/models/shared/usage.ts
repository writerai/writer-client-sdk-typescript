/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { UsageItem, UsageItem$ } from "./usageitem";
import { z } from "zod";

export type Usage = {
    coWriteWords: UsageItem;
    team: UsageItem;
    user: UsageItem;
    words: UsageItem;
};

/** @internal */
export namespace Usage$ {
    export type Inbound = {
        coWriteWords: UsageItem$.Inbound;
        team: UsageItem$.Inbound;
        user: UsageItem$.Inbound;
        words: UsageItem$.Inbound;
    };

    export const inboundSchema: z.ZodType<Usage, z.ZodTypeDef, Inbound> = z
        .object({
            coWriteWords: UsageItem$.inboundSchema,
            team: UsageItem$.inboundSchema,
            user: UsageItem$.inboundSchema,
            words: UsageItem$.inboundSchema,
        })
        .transform((v) => {
            return {
                coWriteWords: v.coWriteWords,
                team: v.team,
                user: v.user,
                words: v.words,
            };
        });

    export type Outbound = {
        coWriteWords: UsageItem$.Outbound;
        team: UsageItem$.Outbound;
        user: UsageItem$.Outbound;
        words: UsageItem$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Usage> = z
        .object({
            coWriteWords: UsageItem$.outboundSchema,
            team: UsageItem$.outboundSchema,
            user: UsageItem$.outboundSchema,
            words: UsageItem$.outboundSchema,
        })
        .transform((v) => {
            return {
                coWriteWords: v.coWriteWords,
                team: v.team,
                user: v.user,
                words: v.words,
            };
        });
}
