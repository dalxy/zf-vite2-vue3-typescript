module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "prettier",
    "@vue/eslint-config-prettier"
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2021
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false, //单引号
        tabWidth: 2,
        indent: 2, //换行缩进
        semi: false, //行莫加分号
        trailingComma: "none",
        endOfLine: "auto" //行尾换行符
      }
    ],
    "no-unused-vars": "off",
    "vue/no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off"
  },
  globals: {
    defineProps: "readonly"
  }
}
