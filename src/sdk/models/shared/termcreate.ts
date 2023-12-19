/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    ApprovedTermExtensionCreate,
    ApprovedTermExtensionCreate$,
} from "./approvedtermextensioncreate";
import { LinkedTermCreate, LinkedTermCreate$ } from "./linkedtermcreate";
import { TermExampleCreate, TermExampleCreate$ } from "./termexamplecreate";
import { TermMistakeCreate, TermMistakeCreate$ } from "./termmistakecreate";
import { TermTagCreate, TermTagCreate$ } from "./termtagcreate";
import { z } from "zod";

export enum TermCreatePos {
    Noun = "noun",
    Verb = "verb",
    Adverb = "adverb",
    Adjective = "adjective",
}

export enum TermCreateType {
    Approved = "approved",
    Banned = "banned",
    Pending = "pending",
}

export type TermCreate = {
    approvedTermExtension?: ApprovedTermExtensionCreate | undefined;
    caseSensitive: boolean;
    description?: string | undefined;
    examples?: Array<TermExampleCreate> | undefined;
    highlight?: boolean | undefined;
    linkedTerms?: Array<LinkedTermCreate> | undefined;
    mistakes?: Array<TermMistakeCreate> | undefined;
    pos?: TermCreatePos | undefined;
    reference?: string | undefined;
    tags?: Array<TermTagCreate> | undefined;
    term: string;
    type: TermCreateType;
};

/** @internal */
export const TermCreatePos$ = z.nativeEnum(TermCreatePos);

/** @internal */
export const TermCreateType$ = z.nativeEnum(TermCreateType);

/** @internal */
export namespace TermCreate$ {
    export type Inbound = {
        approvedTermExtension?: ApprovedTermExtensionCreate$.Inbound | undefined;
        caseSensitive: boolean;
        description?: string | undefined;
        examples?: Array<TermExampleCreate$.Inbound> | undefined;
        highlight?: boolean | undefined;
        linkedTerms?: Array<LinkedTermCreate$.Inbound> | undefined;
        mistakes?: Array<TermMistakeCreate$.Inbound> | undefined;
        pos?: TermCreatePos | undefined;
        reference?: string | undefined;
        tags?: Array<TermTagCreate$.Inbound> | undefined;
        term: string;
        type: TermCreateType;
    };

    export const inboundSchema: z.ZodType<TermCreate, z.ZodTypeDef, Inbound> = z
        .object({
            approvedTermExtension: ApprovedTermExtensionCreate$.inboundSchema.optional(),
            caseSensitive: z.boolean(),
            description: z.string().optional(),
            examples: z.array(TermExampleCreate$.inboundSchema).optional(),
            highlight: z.boolean().optional(),
            linkedTerms: z.array(LinkedTermCreate$.inboundSchema).optional(),
            mistakes: z.array(TermMistakeCreate$.inboundSchema).optional(),
            pos: TermCreatePos$.optional(),
            reference: z.string().optional(),
            tags: z.array(TermTagCreate$.inboundSchema).optional(),
            term: z.string(),
            type: TermCreateType$,
        })
        .transform((v) => {
            return {
                ...(v.approvedTermExtension === undefined
                    ? null
                    : { approvedTermExtension: v.approvedTermExtension }),
                caseSensitive: v.caseSensitive,
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.examples === undefined ? null : { examples: v.examples }),
                ...(v.highlight === undefined ? null : { highlight: v.highlight }),
                ...(v.linkedTerms === undefined ? null : { linkedTerms: v.linkedTerms }),
                ...(v.mistakes === undefined ? null : { mistakes: v.mistakes }),
                ...(v.pos === undefined ? null : { pos: v.pos }),
                ...(v.reference === undefined ? null : { reference: v.reference }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                term: v.term,
                type: v.type,
            };
        });

    export type Outbound = {
        approvedTermExtension?: ApprovedTermExtensionCreate$.Outbound | undefined;
        caseSensitive: boolean;
        description?: string | undefined;
        examples?: Array<TermExampleCreate$.Outbound> | undefined;
        highlight?: boolean | undefined;
        linkedTerms?: Array<LinkedTermCreate$.Outbound> | undefined;
        mistakes?: Array<TermMistakeCreate$.Outbound> | undefined;
        pos?: TermCreatePos | undefined;
        reference?: string | undefined;
        tags?: Array<TermTagCreate$.Outbound> | undefined;
        term: string;
        type: TermCreateType;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TermCreate> = z
        .object({
            approvedTermExtension: ApprovedTermExtensionCreate$.outboundSchema.optional(),
            caseSensitive: z.boolean(),
            description: z.string().optional(),
            examples: z.array(TermExampleCreate$.outboundSchema).optional(),
            highlight: z.boolean().optional(),
            linkedTerms: z.array(LinkedTermCreate$.outboundSchema).optional(),
            mistakes: z.array(TermMistakeCreate$.outboundSchema).optional(),
            pos: TermCreatePos$.optional(),
            reference: z.string().optional(),
            tags: z.array(TermTagCreate$.outboundSchema).optional(),
            term: z.string(),
            type: TermCreateType$,
        })
        .transform((v) => {
            return {
                ...(v.approvedTermExtension === undefined
                    ? null
                    : { approvedTermExtension: v.approvedTermExtension }),
                caseSensitive: v.caseSensitive,
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.examples === undefined ? null : { examples: v.examples }),
                ...(v.highlight === undefined ? null : { highlight: v.highlight }),
                ...(v.linkedTerms === undefined ? null : { linkedTerms: v.linkedTerms }),
                ...(v.mistakes === undefined ? null : { mistakes: v.mistakes }),
                ...(v.pos === undefined ? null : { pos: v.pos }),
                ...(v.reference === undefined ? null : { reference: v.reference }),
                ...(v.tags === undefined ? null : { tags: v.tags }),
                term: v.term,
                type: v.type,
            };
        });
}
