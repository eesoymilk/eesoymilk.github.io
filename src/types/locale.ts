export interface Translations {
  en: Record<string, string>;
  zh_tw: Record<string, string>;
}

export type Locale = keyof Translations;
