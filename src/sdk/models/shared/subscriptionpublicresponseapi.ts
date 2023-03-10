import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MetaData } from "./metadata";
import { Usage } from "./usage";
import { Expose, Transform, Type } from "class-transformer";

export enum SubscriptionPublicResponseApiProductNameEnum {
    Free = "free",
    Pro = "pro",
    Team = "team",
    Enterprise = "enterprise",
    Legacy = "legacy"
}
export enum SubscriptionPublicResponseApiStatusEnum {
    Trialing = "trialing",
    Active = "active",
    PastDue = "past_due",
    Incomplete = "incomplete",
    IncompleteExpired = "incomplete_expired",
    Unpaid = "unpaid",
    Canceled = "canceled"
}

export class SubscriptionPublicResponseApi extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  @Type(() => MetaData)
  meta: MetaData;

  @SpeakeasyMetadata()
  @Expose({ name: "productName" })
  productName: SubscriptionPublicResponseApiProductNameEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "seats" })
  seats: number;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: SubscriptionPublicResponseApiStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subscriptionId" })
  subscriptionId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "usage" })
  @Type(() => Usage)
  usage: Usage;
}