import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class ContentSettings extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ageAndFamilyStatus" })
  ageAndFamilyStatus: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "confidence" })
  confidence: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "contentSafeguards" })
  contentSafeguards: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "disability" })
  disability: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "genderIdentitySensitivity" })
  genderIdentitySensitivity: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "genderInclusiveNouns" })
  genderInclusiveNouns: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "genderInclusivePronouns" })
  genderInclusivePronouns: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "grammar" })
  grammar: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "healthyCommunication" })
  healthyCommunication: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "passiveVoice" })
  passiveVoice: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "raceEthnicityNationalitySensitivity" })
  raceEthnicityNationalitySensitivity: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "sexualOrientationSensitivity" })
  sexualOrientationSensitivity: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "spelling" })
  spelling: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "substanceUseSensitivity" })
  substanceUseSensitivity: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "unclearReference" })
  unclearReference: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "wordiness" })
  wordiness: boolean;
}