import { derived, writable } from 'svelte/store';

type LightOrDark = 'light' | 'dark';

const themeStore = () => {
  const store = writable<LightOrDark>('light');
  const { subscribe, set, update } = store;

  const changeClass = (mode: LightOrDark) => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    return mode;
  };

  return {
    subscribe,
    set: (mode: LightOrDark) => {
      localStorage.setItem('theme', mode);
      set(mode);
    },
    init: () => {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') {
        changeClass(saved);
        set(saved);
      }
    },
    toggle: () => {
      update((mode) => changeClass(mode === 'dark' ? 'light' : 'dark'));
    },
  };
};

export const theme = themeStore();
export const themeIcon = derived(theme, ($theme) =>
  $theme === 'light'
    ? 'material-symbols:light-mode-outline'
    : 'material-symbols:dark-mode-outline'
);
