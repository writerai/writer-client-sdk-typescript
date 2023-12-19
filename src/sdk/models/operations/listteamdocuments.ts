/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../../../sdk/models/shared";
import { z } from "zod";

export enum ListTeamDocumentsQueryParamSortField {
    Title = "title",
    CreationTime = "creationTime",
    ModificationTime = "modificationTime",
    ModifiedByMeTime = "modifiedByMeTime",
    OpenedByMeTime = "openedByMeTime",
}

export enum ListTeamDocumentsQueryParamSortOrder {
    Asc = "asc",
    Desc = "desc",
}

export type ListTeamDocumentsRequest = {
    limit?: number | undefined;
    offset?: number | undefined;
    organizationId?: number | undefined;
    search?: string | undefined;
    sortField?: ListTeamDocumentsQueryParamSortField | undefined;
    sortOrder?: ListTeamDocumentsQueryParamSortOrder | undefined;
    teamId: number;
};

export type ListTeamDocumentsResponse = {
    briefDocuments?: shared.BriefDocuments | undefined;
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
};

/** @internal */
export const ListTeamDocumentsQueryParamSortField$ = z.nativeEnum(
    ListTeamDocumentsQueryParamSortField
);

/** @internal */
export const ListTeamDocumentsQueryParamSortOrder$ = z.nativeEnum(
    ListTeamDocumentsQueryParamSortOrder
);

/** @internal */
export namespace ListTeamDocumentsRequest$ {
    export type Inbound = {
        limit?: number | undefined;
        offset?: number | undefined;
        organizationId?: number | undefined;
        search?: string | undefined;
        sortField?: ListTeamDocumentsQueryParamSortField | undefined;
        sortOrder?: ListTeamDocumentsQueryParamSortOrder | undefined;
        teamId: number;
    };

    export const inboundSchema: z.ZodType<ListTeamDocumentsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            limit: z.number().int().optional(),
            offset: z.number().int().optional(),
            organizationId: z.number().int().optional(),
            search: z.string().optional(),
            sortField: ListTeamDocumentsQueryParamSortField$.optional(),
            sortOrder: ListTeamDocumentsQueryParamSortOrder$.optional(),
            teamId: z.number().int(),
        })
        .transform((v) => {
            return {
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.offset === undefined ? null : { offset: v.offset }),
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
                ...(v.search === undefined ? null : { search: v.search }),
                ...(v.sortField === undefined ? null : { sortField: v.sortField }),
                ...(v.sortOrder === undefined ? null : { sortOrder: v.sortOrder }),
                teamId: v.teamId,
            };
        });

    export type Outbound = {
        limit?: number | undefined;
        offset?: number | undefined;
        organizationId?: number | undefined;
        search?: string | undefined;
        sortField?: ListTeamDocumentsQueryParamSortField | undefined;
        sortOrder?: ListTeamDocumentsQueryParamSortOrder | undefined;
        teamId: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListTeamDocumentsRequest> = z
        .object({
            limit: z.number().int().optional(),
            offset: z.number().int().optional(),
            organizationId: z.number().int().optional(),
            search: z.string().optional(),
            sortField: ListTeamDocumentsQueryParamSortField$.optional(),
            sortOrder: ListTeamDocumentsQueryParamSortOrder$.optional(),
            teamId: z.number().int(),
        })
        .transform((v) => {
            return {
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.offset === undefined ? null : { offset: v.offset }),
                ...(v.organizationId === undefined ? null : { organizationId: v.organizationId }),
                ...(v.search === undefined ? null : { search: v.search }),
                ...(v.sortField === undefined ? null : { sortField: v.sortField }),
                ...(v.sortOrder === undefined ? null : { sortOrder: v.sortOrder }),
                teamId: v.teamId,
            };
        });
}

/** @internal */
export namespace ListTeamDocumentsResponse$ {
    export type Inbound = {
        BriefDocuments?: shared.BriefDocuments$.Inbound | undefined;
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<ListTeamDocumentsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            BriefDocuments: shared.BriefDocuments$.inboundSchema.optional(),
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.BriefDocuments === undefined ? null : { briefDocuments: v.BriefDocuments }),
                contentType: v.ContentType,
                headers: v.Headers,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        BriefDocuments?: shared.BriefDocuments$.Outbound | undefined;
        ContentType: string;
        Headers: Record<string, Array<string>>;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListTeamDocumentsResponse> = z
        .object({
            briefDocuments: shared.BriefDocuments$.outboundSchema.optional(),
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ...(v.briefDocuments === undefined ? null : { BriefDocuments: v.briefDocuments }),
                ContentType: v.contentType,
                Headers: v.headers,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
