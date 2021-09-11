export enum Language {
  dotNet = '.NET Core',
  go = 'Go',
  javascript = 'JS',
  kotlin = 'Kotlin',
  python = 'Python',
}

// This type is also used for SDKs
export type LibraryType = {
  description: string;
  language: Language;
  title: string;
  url: string;
};
