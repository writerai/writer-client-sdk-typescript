import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class Draft extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "body" })
  body: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdUserId" })
  createdUserId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "creationTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  creationTime: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "deleted" })
  deleted: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "documentId" })
  documentId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "inputs" })
  inputs: any;

  @SpeakeasyMetadata()
  @Expose({ name: "organizationId" })
  organizationId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "teamId" })
  teamId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "templateId" })
  templateId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;
}