import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ContentIssueServiceEnum {
    CommonMistakes = "common-mistakes",
    BannedWords = "banned-words",
    Dictionary = "dictionary",
    Gec = "gec",
    Infinitive = "infinitive",
    Spelling = "spelling",
    WritingStyle = "writing-style",
    CustomRules = "custom-rules",
    SentenceCase = "sentence-case",
    Acronym = "acronym",
    OxfordComma = "oxford-comma",
    MlPunctuation = "ml-punctuation",
    Emojis = "emojis",
    GenderPronouns = "gender-pronouns",
    Sensitivity = "sensitivity",
    Plagiarism = "plagiarism",
    Readability = "readability",
    SentenceComplexity = "sentence-complexity",
    Vocabulary = "vocabulary",
    ParagraphLength = "paragraph-length",
    PlainLanguage = "plain-language",
    HealthyCommn = "healthy-commn",
    Confidence = "confidence",
    DataLossPrevention = "data-loss-prevention",
    HateSpeech = "hate-speech",
    ContentSafeguards = "content-safeguards",
    Feedback = "feedback",
    Claim = "claim",
    Quote = "quote",
    GenderNouns = "gender-nouns",
    GenderTone = "gender-tone",
    Grammar = "grammar",
    PunctuationDark = "punctuation-dark",
    Formatting = "formatting",
    Twitter = "twitter",
    GecDark = "gec-dark",
    GecGpt3 = "gec-gpt3"
}

export class ContentIssue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "from" })
  from: number;

  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  meta?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "service" })
  service: ContentIssueServiceEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "suggestions" })
  suggestions?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "until" })
  until: number;
}