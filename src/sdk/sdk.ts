/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { AIContentDetector } from "./aicontentdetector";
import { Billing } from "./billing";
import { Completions } from "./completions";
import { Content } from "./content";
import { CoWrite } from "./cowrite";
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
  security?: shared.Security;
  /**
   * Allows setting the organizationId parameter for all supported operations
   */
  organizationId?: number;
  /**
   * Allows overriding the default axios client used by the SDK
   */
  defaultClient?: AxiosInstance;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

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

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.10.1";
  private _genVersion = "2.26.1";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverURL ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props?.security) {
      let security: shared.Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new shared.Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }

    this._globals = {
      parameters: {
        queryParam: {},
        pathParam: {
          organizationId: props?.organizationId,
        },
      },
    };

    this.aiContentDetector = new AIContentDetector(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion,
      this._globals
    );

    this.billing = new Billing(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion,
      this._globals
    );

    this.coWrite = new CoWrite(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion,
      this._globals
    );

    this.completions = new Completions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion,
      this._globals
    );

    this.content = new Content(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion,
      this._globals
    );

    this.downloadTheCustomizedModel = new DownloadTheCustomizedModel(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion,
      this._globals
    );

    this.files = new Files(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion,
      this._globals
    );

    this.modelCustomization = new ModelCustomization(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion,
      this._globals
    );

    this.models = new Models(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion,
      this._globals
    );

    this.snippet = new Snippet(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion,
      this._globals
    );

    this.styleguide = new Styleguide(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion,
      this._globals
    );

    this.terminology = new Terminology(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion,
      this._globals
    );

    this.user = new User(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion,
      this._globals
    );
  }
}
