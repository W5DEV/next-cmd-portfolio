import type { Config } from 'tailwindcss'
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        xs: "0 0 46px var(--tw-shadow-color)",
        sm: "0 0 8px var(--tw-shadow-color)",
        DEFAULT: "0 0 12px var(--tw-shadow-color)",
        lg: "0 0 16px var(--tw-shadow-color)",
        xl: "0 0 20px var(--tw-shadow-color)",
        xxl: "0 0 24px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({
      matchUtilities,
      theme,
    }: {
      matchUtilities: any;
      theme: any;
    }) {
      matchUtilities(
        {
          "text-shadow": (value: any) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config
