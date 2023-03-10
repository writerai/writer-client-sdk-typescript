import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Input } from "./input";
import { Expose, Transform, Type } from "class-transformer";


export class TemplateDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "categoryId" })
  categoryId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "creationTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  creationTime: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "guideUrl" })
  guideUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata({ elemType: Input })
  @Expose({ name: "inputs" })
  @Type(() => Input)
  inputs?: Input[];

  @SpeakeasyMetadata()
  @Expose({ name: "modificationTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modificationTime: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}