/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ModelCustomization, ModelCustomization$ } from "./modelcustomization";
import { z } from "zod";

export type CustomizationsResponse = {
    customizations?: Array<ModelCustomization> | undefined;
};

/** @internal */
export namespace CustomizationsResponse$ {
    export type Inbound = {
        customizations?: Array<ModelCustomization$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<CustomizationsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            customizations: z.array(ModelCustomization$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.customizations === undefined ? null : { customizations: v.customizations }),
            };
        });

    export type Outbound = {
        customizations?: Array<ModelCustomization$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CustomizationsResponse> = z
        .object({
            customizations: z.array(ModelCustomization$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.customizations === undefined ? null : { customizations: v.customizations }),
            };
        });
}
