import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SectionInfo } from "./sectioninfo";
import { SimpleUser } from "./simpleuser";
import { Expose, Transform, Type } from "class-transformer";

export enum PagePublicApiResponseStatusEnum {
    Live = "live",
    Offline = "offline"
}

export class PagePublicApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "order" })
  order: number;

  @SpeakeasyMetadata()
  @Expose({ name: "section" })
  @Type(() => SectionInfo)
  section?: SectionInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: PagePublicApiResponseStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedBy" })
  @Type(() => SimpleUser)
  updatedBy?: SimpleUser;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;
}