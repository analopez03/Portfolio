import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        surfacefooter: "var(--color-surface-3)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        "accent-subtle": "var(--color-accent-subtle)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        border: "var(--color-border)",
        "border-focus": "var(--color-border-focus)",
        "border-strong": "var(--color-border-strong)",
        error: "var(--color-error)",
        "error-bg": "var(--color-error-bg)",
        success: "var(--color-success)",
        "success-bg": "var(--color-success-bg)",
        icon: "var(--color-icon)",
      },
    },
  },
  plugins: [],
} satisfies Config;
