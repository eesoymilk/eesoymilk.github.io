import { derived, writable } from 'svelte/store';
import type { Locale } from '@/types/locale';
import { translate } from '@/utils/i18n';

const localeStore = () => {
  const store = writable<Locale>('zh_tw');
  const { subscribe, set } = store;

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
