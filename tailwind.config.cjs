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
              color: "rgb(var(--color-primary))",
              "text-decoration-color": "black",
              "&:hover": {
                color: "black",
                "text-decoration-color": "rgb(var(--color-primary))",
              },
              "transition-property":
                "color, background-color, border-color, text-decoration-color, fill, stroke",
              "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
              "transition-duration": "150ms",
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
            "blockquote p:first-of-type::before": {
              content: "",
            },
            i: {
              "font-family": "Rowan-Variable",
            },
            em: {
              "font-family": "Rowan-Variable",
            },
            "img, video": {
              width: "auto",
              "max-width": "100%",
              height: "auto",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
