/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CorrectionResponse = {
    correct: string;
};

/** @internal */
export namespace CorrectionResponse$ {
    export type Inbound = {
        correct: string;
    };

    export const inboundSchema: z.ZodType<CorrectionResponse, z.ZodTypeDef, Inbound> = z
        .object({
            correct: z.string(),
        })
        .transform((v) => {
            return {
                correct: v.correct,
            };
        });

    export type Outbound = {
        correct: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CorrectionResponse> = z
        .object({
            correct: z.string(),
        })
        .transform((v) => {
            return {
                correct: v.correct,
            };
        });
}
