//#region src/client/theme.ts
const same = (value) => ({
	light: value,
	dark: value
});
/** Paired semantic token layer for the Song-inspired web composition. */
const SONG_THEME_TOKENS = {
	"--dsw-font-family-display": same("'Songti SC', STSong, SimSun, 'Noto Serif CJK SC', serif"),
	"--dsw-radius-xs": same("2px"),
	"--dsw-radius-sm": same("4px"),
	"--dsw-radius-md": same("8px"),
	"--dsw-radius-lg": same("12px"),
	"--dsw-press-scale": same("0.98"),
	"--dsw-alias-bg-base": {
		light: "oklch(0.97 0.012 82)",
		dark: "oklch(0.18 0.012 75)"
	},
	"--dsw-alias-bg-layer-1": {
		light: "oklch(0.985 0.008 82)",
		dark: "oklch(0.215 0.014 75)"
	},
	"--dsw-alias-bg-layer-2": {
		light: "oklch(0.955 0.014 82)",
		dark: "oklch(0.245 0.016 75)"
	},
	"--dsw-alias-bg-layer-3": {
		light: "oklch(0.93 0.018 82)",
		dark: "oklch(0.28 0.018 75)"
	},
	"--dsw-alias-bg-module-platform": {
		light: "oklch(0.945 0.016 82)",
		dark: "oklch(0.255 0.018 75)"
	},
	"--dsw-alias-bg-multi-select": {
		light: "oklch(0.925 0.021 174)",
		dark: "oklch(0.31 0.025 174)"
	},
	"--dsw-alias-bg-overlay": {
		light: "oklch(0.93 0.018 82)",
		dark: "oklch(0.31 0.018 75)"
	},
	"--dsw-alias-bg-skeleton": {
		light: "oklch(0.88 0.018 82 / 0.55)",
		dark: "oklch(0.58 0.018 75 / 0.16)"
	},
	"--dsw-alias-bg-mask-drop": {
		light: "oklch(0.97 0.012 82 / 0.72)",
		dark: "oklch(0.12 0.01 75 / 0.76)"
	},
	"--dsw-alias-border-inverted": {
		light: "oklch(0.42 0.025 70 / 0.12)",
		dark: "oklch(0.86 0.02 82 / 0.1)"
	},
	"--dsw-alias-border-inverted2": {
		light: "oklch(0.42 0.025 70 / 0.08)",
		dark: "oklch(0.86 0.02 82 / 0.08)"
	},
	"--dsw-alias-border-l1": {
		light: "oklch(0.42 0.025 70 / 0.09)",
		dark: "oklch(0.86 0.02 82 / 0.08)"
	},
	"--dsw-alias-border-l2": {
		light: "oklch(0.42 0.025 70 / 0.16)",
		dark: "oklch(0.86 0.02 82 / 0.14)"
	},
	"--dsw-alias-border-l2-darkmode-thin": {
		light: "oklch(0.42 0.025 70 / 0.13)",
		dark: "oklch(0.86 0.02 82 / 0.1)"
	},
	"--dsw-alias-border-l3": {
		light: "oklch(0.42 0.025 70 / 0.22)",
		dark: "oklch(0.86 0.02 82 / 0.2)"
	},
	"--dsw-alias-border-l4": {
		light: "oklch(0.42 0.025 70 / 0.3)",
		dark: "oklch(0.86 0.02 82 / 0.28)"
	},
	"--dsw-alias-brand-primary": {
		light: "oklch(0.43 0.065 174)",
		dark: "oklch(0.76 0.07 174)"
	},
	"--dsw-alias-brand-primary-invert": {
		light: "oklch(0.28 0.035 174)",
		dark: "oklch(0.9 0.025 174)"
	},
	"--dsw-alias-brand-text": {
		light: "oklch(0.4 0.07 174)",
		dark: "oklch(0.78 0.065 174)"
	},
	"--dsw-alias-brand-primary-new-colorprimary-new-color": {
		light: "oklch(0.48 0.08 174)",
		dark: "oklch(0.72 0.085 174)"
	},
	"--dsw-alias-label-primary": {
		light: "oklch(0.25 0.018 70)",
		dark: "oklch(0.9 0.012 82)"
	},
	"--dsw-alias-label-secondary": {
		light: "oklch(0.43 0.02 70)",
		dark: "oklch(0.72 0.016 82)"
	},
	"--dsw-alias-label-tertiary": {
		light: "oklch(0.53 0.018 70)",
		dark: "oklch(0.61 0.014 82)"
	},
	"--dsw-alias-label-caption": {
		light: "oklch(0.58 0.016 70)",
		dark: "oklch(0.56 0.014 82)"
	},
	"--dsw-alias-label-dimmed": {
		light: "oklch(0.76 0.015 75)",
		dark: "oklch(0.42 0.012 78)"
	},
	"--dsw-alias-label-primary-dimmed": {
		light: "oklch(0.34 0.016 70)",
		dark: "oklch(0.82 0.012 82)"
	},
	"--dsw-alias-label-primary-bluish": {
		light: "oklch(0.39 0.055 174)",
		dark: "oklch(0.8 0.05 174)"
	},
	"--dsw-alias-label-primary-foreground": {
		light: "oklch(0.985 0.008 82)",
		dark: "oklch(0.18 0.012 75)"
	},
	"--dsw-alias-button-primary-fill": {
		light: "oklch(0.43 0.065 174)",
		dark: "oklch(0.76 0.07 174)"
	},
	"--dsw-alias-button-primary-hover": {
		light: "oklch(0.37 0.07 174)",
		dark: "oklch(0.82 0.065 174)"
	},
	"--dsw-alias-button-primary-dimmed": {
		light: "oklch(0.86 0.025 174)",
		dark: "oklch(0.38 0.025 174)"
	},
	"--dsw-alias-button-elevated-fill": {
		light: "oklch(0.985 0.008 82)",
		dark: "oklch(0.29 0.017 75)"
	},
	"--dsw-alias-button-floating-fill": {
		light: "oklch(0.985 0.008 82)",
		dark: "oklch(0.27 0.017 75)"
	},
	"--dsw-alias-button-floating-hover": {
		light: "oklch(0.93 0.02 174)",
		dark: "oklch(0.34 0.028 174)"
	},
	"--dsw-alias-button-info-fill": {
		light: "oklch(0.48 0.08 174)",
		dark: "oklch(0.7 0.08 174)"
	},
	"--dsw-alias-button-info-hover": {
		light: "oklch(0.42 0.085 174)",
		dark: "oklch(0.76 0.075 174)"
	},
	"--dsw-alias-interactive-bg-hover": {
		light: "oklch(0.48 0.055 174 / 0.08)",
		dark: "oklch(0.78 0.05 174 / 0.1)"
	},
	"--dsw-alias-interactive-bg-active": {
		light: "oklch(0.48 0.055 174 / 0.14)",
		dark: "oklch(0.78 0.05 174 / 0.17)"
	},
	"--dsw-alias-interactive-bg-hover-accent": {
		light: "oklch(0.48 0.055 174 / 0.16)",
		dark: "oklch(0.78 0.05 174 / 0.2)"
	},
	"--dsw-alias-interactive-bg-hover-solid": {
		light: "oklch(0.925 0.021 174)",
		dark: "oklch(0.31 0.025 174)"
	},
	"--dsw-alias-markdown-code-block-banner": {
		light: "oklch(0.92 0.018 82)",
		dark: "oklch(0.24 0.015 75)"
	},
	"--dsw-alias-markdown-code-block": {
		light: "oklch(0.945 0.014 82)",
		dark: "oklch(0.205 0.013 75)"
	},
	"--dsw-alias-markdown-code-segment-selected": {
		light: "oklch(0.985 0.008 82)",
		dark: "oklch(0.29 0.018 75)"
	},
	"--dsw-alias-markdown-code-segment-unselected": {
		light: "oklch(0.925 0.016 82)",
		dark: "oklch(0.22 0.014 75)"
	},
	"--dsw-alias-markdown-inline-code": {
		light: "oklch(0.91 0.022 82)",
		dark: "oklch(0.27 0.018 75)"
	},
	"--dsw-alias-markdown-placeholder": {
		light: "oklch(0.94 0.014 82)",
		dark: "oklch(0.25 0.015 75)"
	},
	"--dsw-alias-markdown-tag": {
		light: "oklch(0.91 0.025 174)",
		dark: "oklch(0.3 0.03 174)"
	},
	"--dsw-alias-state-business-primary": {
		light: "oklch(0.48 0.08 174)",
		dark: "oklch(0.72 0.085 174)"
	},
	"--dsw-alias-state-business-tertiary": {
		light: "oklch(0.9 0.03 174)",
		dark: "oklch(0.3 0.035 174)"
	},
	"--dsw-alias-state-error-primary": {
		light: "oklch(0.5 0.16 32)",
		dark: "oklch(0.68 0.14 32)"
	},
	"--dsw-alias-state-error-secondary": {
		light: "oklch(0.62 0.13 32)",
		dark: "oklch(0.72 0.12 32)"
	},
	"--dsw-alias-state-success-primary": {
		light: "oklch(0.47 0.105 148)",
		dark: "oklch(0.7 0.1 148)"
	},
	"--dsw-alias-state-success-secondary": {
		light: "oklch(0.58 0.09 148)",
		dark: "oklch(0.76 0.08 148)"
	},
	"--dsw-alias-state-success-tertiary": {
		light: "oklch(0.91 0.035 148)",
		dark: "oklch(0.29 0.04 148)"
	},
	"--dsw-alias-state-warn-label": {
		light: "oklch(0.48 0.1 72)",
		dark: "oklch(0.75 0.1 72)"
	},
	"--dsw-alias-state-warn-primary": {
		light: "oklch(0.62 0.13 72)",
		dark: "oklch(0.76 0.12 72)"
	},
	"--dsw-alias-state-warn-secondary": {
		light: "oklch(0.7 0.11 72)",
		dark: "oklch(0.8 0.1 72)"
	},
	"--dsw-alias-state-warn-tertiary": {
		light: "oklch(0.93 0.035 72)",
		dark: "oklch(0.29 0.035 72)"
	},
	"--dsw-alias-scrollbar-bg-l1": {
		light: "oklch(0.75 0.018 75 / 0.6)",
		dark: "oklch(0.5 0.018 78 / 0.55)"
	},
	"--dsw-alias-scrollbar-bg-l2": {
		light: "oklch(0.7 0.02 75 / 0.58)",
		dark: "oklch(0.56 0.018 78 / 0.58)"
	},
	"--dsw-alias-scrollbar-hover-l1": {
		light: "oklch(0.58 0.025 75 / 0.7)",
		dark: "oklch(0.66 0.02 78 / 0.68)"
	},
	"--dsw-alias-scrollbar-hover-l2": {
		light: "oklch(0.52 0.025 75 / 0.72)",
		dark: "oklch(0.72 0.02 78 / 0.7)"
	},
	"--dsw-alias-toast-bg": {
		light: "oklch(0.3 0.025 70)",
		dark: "oklch(0.35 0.02 75)"
	},
	"--dsw-alias-tooltip-bg": {
		light: "oklch(0.27 0.022 70)",
		dark: "oklch(0.34 0.02 75)"
	},
	"--dsw-specific-bubble": {
		light: "oklch(0.92 0.026 174)",
		dark: "oklch(0.28 0.03 174)"
	},
	"--dsw-specific-bubble-highlight": {
		light: "oklch(0.87 0.04 174)",
		dark: "oklch(0.35 0.045 174)"
	},
	"--dsw-specific-input-major": {
		light: "oklch(0.985 0.008 82)",
		dark: "oklch(0.235 0.015 75)"
	},
	"--dsw-specific-login-input": {
		light: "oklch(0.955 0.014 82)",
		dark: "oklch(0.21 0.014 75)"
	},
	"--dsw-specific-menu": {
		light: "oklch(0.955 0.014 82)",
		dark: "oklch(0.28 0.018 75)"
	},
	"--dsw-specific-selector": {
		light: "oklch(0.925 0.021 174)",
		dark: "oklch(0.3 0.026 174)"
	},
	"--dsw-specific-sidebar-fill": {
		light: "oklch(0.925 0.02 82)",
		dark: "oklch(0.15 0.012 75)"
	},
	"--dsw-specific-sidebar-nav-item-active-accent": {
		light: "oklch(0.88 0.04 174)",
		dark: "oklch(0.34 0.045 174)"
	},
	"--dsw-specific-sidebar-nav-item-active": {
		light: "oklch(0.9 0.025 82)",
		dark: "oklch(0.25 0.022 75)"
	},
	"--dsw-specific-sidebar-nav-item-hover": {
		light: "oklch(0.905 0.023 82)",
		dark: "oklch(0.22 0.019 75)"
	},
	"--dsw-specific-tip": {
		light: "oklch(0.935 0.02 82)",
		dark: "oklch(0.26 0.02 75)"
	}
};
//#endregion
export { SONG_THEME_TOKENS };
