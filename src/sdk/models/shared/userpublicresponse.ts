import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export enum UserPublicResponseAccountStatusEnum {
    Invited = "invited",
    SignedUp = "signed_up"
}

export class UserPublicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountStatus" })
  accountStatus: UserPublicResponseAccountStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "avatar" })
  avatar?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "firstName" })
  firstName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fullName" })
  fullName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "invitedBy" })
  invitedBy?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "lastName" })
  lastName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "lastSeenOnline" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastSeenOnline?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "timezone" })
  timezone?: string;
}