const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)", // 255 85 11
        },
      },
      fontFamily: {
        sans: ["FabrikatKompakt", ...defaultTheme.fontFamily.sans],
        mono: ["CamingoCode", ...defaultTheme.fontFamily.mono],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              "font-weight": 400,
              "&:hover": {
                "text-decoration-color": "rgb(var(--color-primary))",
              },
            },
            h2: {
              "font-weight": 400,
            },
            h3: {
              "font-weight": 400,
            },
            h4: {
              "font-weight": 400,
            },
            h5: {
              "font-weight": 400,
            },
            h6: {
              "font-weight": 400,
            },
            blockquote: {
              "font-weight": 400,
              "border-left-color": "rgb(var(--color-primary))",
              "border-left-width": "0.125rem",
            },
            "blockquote p > em": {
              display: "block",
              "text-align": "right",
              "padding-right": "1rem",
            },
            "blockquote p:last-of-type::after": {
              content: "",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
