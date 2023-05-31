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
        serif: ["Rowan-Variable", ...defaultTheme.fontFamily.serif],
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
            h1: {
              "font-weight": 200,
            },
            h2: {
              "font-weight": 300,
            },
            h3: {
              "font-weight": 300,
            },
            h4: {
              "font-weight": 300,
            },
            h5: {
              "font-weight": 400,
            },
            h6: {
              "font-weight": 400,
            },
            blockquote: {
              "font-weight": 300,
              "font-size": "1.25rem",
              "line-height": "2rem",
              "font-family": "Rowan-Variable",
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
            i: {
              "font-family": "Rowan-Variable",
            },
            em: {
              "font-family": "Rowan-Variable",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
