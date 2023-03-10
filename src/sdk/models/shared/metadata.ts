import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum MetaDataTierEnum {
    Enterprise1 = "enterprise-1",
    Enterprise2 = "enterprise-2",
    Enterprise3 = "enterprise-3",
    Enterprise4 = "enterprise-4"
}

export class MetaData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "portal" })
  portal: Record<string, string>;

  @SpeakeasyMetadata()
  @Expose({ name: "reporting" })
  reporting: Record<string, string>;

  @SpeakeasyMetadata()
  @Expose({ name: "snippetsCount" })
  snippetsCount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "ssoAccess" })
  ssoAccess: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "styleguide" })
  styleguide: Record<string, string>;

  @SpeakeasyMetadata()
  @Expose({ name: "teamCount" })
  teamCount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "termsCount" })
  termsCount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tier" })
  tier?: MetaDataTierEnum;
}