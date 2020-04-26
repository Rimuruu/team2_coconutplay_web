module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/recommended",
    //"plugin:prettier/recommended",
    "eslint:recommended",
    //"prettier/vue",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "max-len": "off",
    "import/no-dynamic-require": "off",
    "global-require": "off",
    "vue/require-default-prop": "off",
    "vue/attribute-hyphenation": "off",
    "vue/v-bind-style": "off",
    "vue/attributes-order": "off",
    "vue/no-v-html": "off",
    "vue/html-indent": "off",
    "vue/no-side-effects-in-computed-properties":"off",
    "vue/no-unused-vars":"off",
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  
};
