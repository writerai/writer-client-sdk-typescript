/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    CompletionGenerationChoice,
    CompletionGenerationChoice$,
} from "./completiongenerationchoice";
import { z } from "zod";

export type CompletionResponse = {
    choices?: Array<CompletionGenerationChoice> | undefined;
};

/** @internal */
export namespace CompletionResponse$ {
    export type Inbound = {
        choices?: Array<CompletionGenerationChoice$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<CompletionResponse, z.ZodTypeDef, Inbound> = z
        .object({
            choices: z.array(CompletionGenerationChoice$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.choices === undefined ? null : { choices: v.choices }),
            };
        });

    export type Outbound = {
        choices?: Array<CompletionGenerationChoice$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CompletionResponse> = z
        .object({
            choices: z.array(CompletionGenerationChoice$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.choices === undefined ? null : { choices: v.choices }),
            };
        });
}
