import { AIContentDetector } from "./aicontentdetector";
import { Billing } from "./billing";
import { Completions } from "./completions";
import { Content } from "./content";
import { CoWrite } from "./cowrite";
import { DownloadTheCustomizedModel } from "./downloadthecustomizedmodel";
import { Files } from "./files";
import { FineTunes } from "./finetunes";
import { Models } from "./models";
import { Snippet } from "./snippet";
import { Styleguide } from "./styleguide";
import { Terminology } from "./terminology";
import { User } from "./user";
import axios, { AxiosInstance } from "axios";

export const ServerList = [
	"https://enterprise-api.writer.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class Writer {
  public aiContentDetector: AIContentDetector;
  public billing: Billing;
  public coWrite: CoWrite;
  public completions: Completions;
  public content: Content;
  public downloadTheCustomizedModel: DownloadTheCustomizedModel;
  public files: Files;
  public fineTunes: FineTunes;
  public models: Models;
  public snippet: Snippet;
  public styleguide: Styleguide;
  public terminology: Terminology;
  public user: User;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.2.1";
  private _genVersion = "1.8.6";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.aiContentDetector = new AIContentDetector(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.billing = new Billing(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.coWrite = new CoWrite(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.completions = new Completions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.content = new Content(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.downloadTheCustomizedModel = new DownloadTheCustomizedModel(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.files = new Files(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.fineTunes = new FineTunes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.models = new Models(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.snippet = new Snippet(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.styleguide = new Styleguide(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.terminology = new Terminology(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.user = new User(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
  
}