import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default withNuxt(eslintPluginPrettierRecommended, {
  rules: {
    "vue/multi-word-component-names": "off",
    "prettier/prettier": [
      "error",
      {
        plugins: [
          "prettier-plugin-classnames",
          "prettier-plugin-tailwindcss",
          "prettier-plugin-merge",
        ],
        tailwindFunctions: ["clsx", "cn"],
        printWidth: 100,
        useTabs: false,
        semi: true,
        singleQuote: false,
      },
    ],
  },
});
