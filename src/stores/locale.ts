import { derived, writable } from 'svelte/store';

interface Translations {
  en: Record<string, string>;
  zh_tw: Record<string, string>;
}

type Locale = keyof Translations;

const translations: Translations = {
  en: {
    'common.fullname': 'Yu-Wei Chang',
    'common.firstname': 'Yu-Wei',
    'common.lastname': 'Chang',
    'common.separatingComma': ',',
    'common.period': '.',
    'header.line1': 'Hello, I am',
    'header.line2': 'You can also call me',
    'header.title1': 'engineer',
    'header.title2': 'tutor',
    'header.title3': 'freelancer',
    'header.title4': 'developer',
    'header.title5': 'researcher',
    'about.title': 'About Me',
    'about.paragraph1':
      'I am currently a master student at UCLA majoring Eletrical and Computer Engineering with a keen interest in the field of AI and robotics. Feel free to contact me for any software development or tutoring opportunities.',
    'education.title': 'Education',
    'education.ucla': 'University of California, Los Angeles',
    'education.ucla.degree': 'M.S. in Electrical and Computer Engineering',
    'education.ucla.location': 'Los Angeles, CA',
    'education.nthu': 'National Tsing Hua University',
    'education.nthu.degree': 'B.S. in Electrical Engineering',
    'education.nthu.location': 'Hsinchu, Taiwan',
  },
  zh_tw: {
    'common.fullname': '張育瑋',
    'common.firstname': '育瑋',
    'common.lastname': '張',
    'common.separatingComma': '、',
    'common.period': '。',
    'header.line1': '嗨，我是',
    'header.line2': '你也可以叫我',
    'header.title1': '工程師',
    'header.title2': '家教',
    'header.title3': '接案',
    'header.title4': '開發者',
    'header.title5': '研究員',
    'about.title': '簡介',
    'about.paragraph1':
      '我是加州大學洛杉磯分校電機碩士，專攻人工智慧與機器人學。歡迎聯絡我，我可以當你的家教也可以幫你開發軟體。',
    'education.title': '學歷',
    'education.ucla': '加州大學洛杉磯分校 (UCLA)',
    'education.ucla.degree': '電機碩士 (ECE M.S.)',
    'education.ucla.location': '加州洛杉磯',
    'education.nthu': '國立清華大學',
    'education.nthu.degree': '電機學士 (EE B.S.)',
    'education.nthu.location': '新竹, 台灣',
  },
} as const;

const locales = Object.keys(translations) as Locale[];

const translate = (
  locale: Locale,
  key: string,
  vars: Record<string, string> = {}
): string => {
  try {
    let text = translations[locale][key];

    if (!text) throw new Error(`no translation found for ${locale}.${key}`);

    for (const [key, value] of Object.entries(vars)) {
      text = text.replace(`{{${key}}}`, value);
    }
    return text;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const localeStore = () => {
  const store = writable<Locale>('zh_tw');
  const { subscribe, set, update } = store;

  return {
    subscribe,
    changeLocale: (locale: Locale) => {
      set(locale);
      localStorage.setItem('locale', locale);
    },
    init: () => {
      try {
        const saved =
          localStorage.getItem('locale') || navigator.language.includes('zh')
            ? 'zh_tw'
            : 'en';
        set(saved);
      } catch (e) {
        if (e instanceof ReferenceError) {
          console.error(`localStorage is not available in SSR: ${e}`);
        }
      }
    },
  };
};

export const locale = localeStore();

export const t = derived(
  locale,
  ($locale) =>
    (key: string, vars: Record<string, string> = {}) =>
      translate($locale, key, vars)
);
