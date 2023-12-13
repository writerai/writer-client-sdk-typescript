/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { MetaData, MetaData$ } from "./metadata";
import { Usage, Usage$ } from "./usage";
import { z } from "zod";

export enum ProductName {
    Free = "free",
    Pro = "pro",
    Team = "team",
    Enterprise = "enterprise",
    Legacy = "legacy",
}

export enum SubscriptionPublicResponseApiStatus {
    Trialing = "trialing",
    Active = "active",
    PastDue = "past_due",
    Incomplete = "incomplete",
    IncompleteExpired = "incomplete_expired",
    Unpaid = "unpaid",
    Canceled = "canceled",
}

export type SubscriptionPublicResponseApi = {
    createdAt: Date;
    meta: MetaData;
    productName: ProductName;
    seats: number;
    status: SubscriptionPublicResponseApiStatus;
    subscriptionId: string;
    usage: Usage;
};

/** @internal */
export const ProductName$ = z.nativeEnum(ProductName);

/** @internal */
export const SubscriptionPublicResponseApiStatus$ = z.nativeEnum(
    SubscriptionPublicResponseApiStatus
);

/** @internal */
export namespace SubscriptionPublicResponseApi$ {
    export type Inbound = {
        createdAt: string;
        meta: MetaData$.Inbound;
        productName: ProductName;
        seats: number;
        status: SubscriptionPublicResponseApiStatus;
        subscriptionId: string;
        usage: Usage$.Inbound;
    };

    export const inboundSchema: z.ZodType<SubscriptionPublicResponseApi, z.ZodTypeDef, Inbound> = z
        .object({
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            meta: MetaData$.inboundSchema,
            productName: ProductName$,
            seats: z.number().int(),
            status: SubscriptionPublicResponseApiStatus$,
            subscriptionId: z.string(),
            usage: Usage$.inboundSchema,
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                meta: v.meta,
                productName: v.productName,
                seats: v.seats,
                status: v.status,
                subscriptionId: v.subscriptionId,
                usage: v.usage,
            };
        });

    export type Outbound = {
        createdAt: string;
        meta: MetaData$.Outbound;
        productName: ProductName;
        seats: number;
        status: SubscriptionPublicResponseApiStatus;
        subscriptionId: string;
        usage: Usage$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SubscriptionPublicResponseApi> =
        z
            .object({
                createdAt: z.date().transform((v) => v.toISOString()),
                meta: MetaData$.outboundSchema,
                productName: ProductName$,
                seats: z.number().int(),
                status: SubscriptionPublicResponseApiStatus$,
                subscriptionId: z.string(),
                usage: Usage$.outboundSchema,
            })
            .transform((v) => {
                return {
                    createdAt: v.createdAt,
                    meta: v.meta,
                    productName: v.productName,
                    seats: v.seats,
                    status: v.status,
                    subscriptionId: v.subscriptionId,
                    usage: v.usage,
                };
            });
}
