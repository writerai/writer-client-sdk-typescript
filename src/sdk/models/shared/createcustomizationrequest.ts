import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { HyperParameters } from "./hyperparameters";
import { Expose, Type } from "class-transformer";


export class CreateCustomizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "additionalHyperParameters" })
  @Type(() => HyperParameters)
  additionalHyperParameters?: HyperParameters;

  @SpeakeasyMetadata()
  @Expose({ name: "batchSize" })
  batchSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "epochs" })
  epochs?: number;

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
  @Expose({ name: "trainingDatasetFileId" })
  trainingDatasetFileId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validationDatasetFileId" })
  validationDatasetFileId?: string;
}