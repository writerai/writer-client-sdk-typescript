import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { HyperParameters } from "./hyperparameters";
import { Expose, Transform, Type } from "class-transformer";


export class ModelCustomization extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "additionalHyperParameters" })
  @Type(() => HyperParameters)
  additionalHyperParameters?: HyperParameters;

  @SpeakeasyMetadata()
  @Expose({ name: "baseModelId" })
  baseModelId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "batchSize" })
  batchSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "epochs" })
  epochs?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "learningRate" })
  learningRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "promptTemplate" })
  promptTemplate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: string;

  @SpeakeasyMetadata()
  @Expose({ name: "trainingDatasetFileId" })
  trainingDatasetFileId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "validationDatasetFileId" })
  validationDatasetFileId?: string;
}