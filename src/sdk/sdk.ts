/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { AIContentDetector } from "./aicontentdetector";
import { Billing } from "./billing";
import { Completions } from "./completions";
import { Content } from "./content";
import { CoWrite } from "./cowrite";
import { Document } from "./document";
import { DownloadTheCustomizedModel } from "./downloadthecustomizedmodel";
import { Files } from "./files";
import { ModelCustomization } from "./modelcustomization";
import { Models } from "./models";
import * as shared from "./models/shared";
import { Snippet } from "./snippet";
import { Styleguide } from "./styleguide";
import { Terminology } from "./terminology";
import { User } from "./user";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://enterprise-api.writer.com"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);

    /**
     * Allows setting the organizationId parameter for all supported operations
     */
    organizationId?: number;

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.7";
    sdkVersion = "0.47.2";
    genVersion = "2.147.0";
    userAgent = "speakeasy-sdk/typescript 0.47.2 2.147.0 1.7 @writerai/writer-sdk";
    globals: any;
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

export class Writer {
    /**
     * Methods related to AI Content Detector
     */
    public aiContentDetector: AIContentDetector;
    /**
     * Methods related to Billing
     */
    public billing: Billing;
    /**
     * Methods related to CoWrite
     */
    public coWrite: CoWrite;
    /**
     * Methods related to Completions
     */
    public completions: Completions;
    /**
     * Methods related to Content
     */
    public content: Content;
    /**
     * Methods related to Download the customized model
     */
    public downloadTheCustomizedModel: DownloadTheCustomizedModel;
    /**
     * Methods related to Files
     */
    public files: Files;
    /**
     * Methods related to Model Customization
     */
    public modelCustomization: ModelCustomization;
    /**
     * Methods related to Model
     */
    public models: Models;
    /**
     * Methods related to Snippets
     */
    public snippet: Snippet;
    /**
     * Methods related to Styleguide
     */
    public styleguide: Styleguide;
    /**
     * Methods related to Terminology
     */
    public terminology: Terminology;
    /**
     * Methods related to User
     */
    public user: User;
    /**
     * Methods related to document
     */
    public document: Document;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            globals: {
                parameters: {
                    queryParam: {},
                    pathParam: {
                        organizationId: props?.organizationId,
                    },
                },
            },
            retryConfig: props?.retryConfig,
        });

        this.aiContentDetector = new AIContentDetector(this.sdkConfiguration);
        this.billing = new Billing(this.sdkConfiguration);
        this.coWrite = new CoWrite(this.sdkConfiguration);
        this.completions = new Completions(this.sdkConfiguration);
        this.content = new Content(this.sdkConfiguration);
        this.downloadTheCustomizedModel = new DownloadTheCustomizedModel(this.sdkConfiguration);
        this.files = new Files(this.sdkConfiguration);
        this.modelCustomization = new ModelCustomization(this.sdkConfiguration);
        this.models = new Models(this.sdkConfiguration);
        this.snippet = new Snippet(this.sdkConfiguration);
        this.styleguide = new Styleguide(this.sdkConfiguration);
        this.terminology = new Terminology(this.sdkConfiguration);
        this.user = new User(this.sdkConfiguration);
        this.document = new Document(this.sdkConfiguration);
    }
}
