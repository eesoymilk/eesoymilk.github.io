import { derived, writable } from "svelte/store";

type LightOrDark = "light" | "dark";

const themeStore = () => {
	const store = writable<LightOrDark>(defaultTheme);
	const { subscribe, set, update } = store;

	const changeClass = (mode: LightOrDark) => {
		if (mode === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		!import.meta.env.SSR && localStorage.setItem("theme", mode);
		return mode;
	};

	return {
		subscribe,
		init: () => {
			try {
				const saved =
					localStorage.getItem("theme") ||
					(window.matchMedia("(prefers-color-scheme: dark)").matches
						? "dark"
						: "light");
				if (saved === "dark" || saved === "light") {
					changeClass(saved);
					set(saved);
				} else {
					throw new Error(`Unknown theme: ${saved}`);
				}
			} catch (e) {
				if (e instanceof ReferenceError) {
					console.error("localStorage is not available in SSR");
				}
			}
		},
		toggle: () => {
			update((mode) => changeClass(mode === "dark" ? "light" : "dark"));
		},
	};
};

export const defaultTheme = "dark" as const;

export const theme = themeStore();

export const themeIcon = derived(theme, ($theme) =>
	$theme === "light"
		? "material-symbols:light-mode-outline"
		: "material-symbols:dark-mode-outline",
);
