/* eslint-env node */

module.exports = {
  root: true,
  extends: [
    "airbnb",
    "prettier",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true,
    },
  },
  ignorePatterns: ["static/**", "dist/**", "dev-dist/**"],
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  rules: {
    "no-nested-ternary": "off",
    "no-useless-escape": "off",
    "no-bitwise": 1,
    "prefer-destructuring": "off",
    camelcase: "off",
    "no-param-reassign": "off",
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "import/no-extraneous-dependencies": "off",
    "react-hooks/rules-of-hooks": "error",
    "no-debugger": 0,
    "no-alert": 0,
    "no-unused-vars": 1,
    "prefer-const": [
      "error",
      {
        destructuring: "all",
      },
    ],
    "arrow-body-style": [2, "as-needed"],
    "no-unused-expressions": [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    "no-console": 0,
    import: 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "max-len": 0,
    "import/extensions": 0,
    "no-underscore-dangle": 0,
    "consistent-return": 0,
    "react/display-name": 0,
    "react/no-array-index-key": 0,
    "react/react-in-jsx-scope": 0,
    "react/prefer-stateless-function": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "react/no-unescaped-entities": 0,
    "react/function-component-definition": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    radix: 0,
    "no-shadow": "off",
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        aspects: ["invalidHref"],
      },
    ],
  },
  plugins: ["prettier", "react", "react-hooks"],
  overrides: [
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: ["plugin:@typescript-eslint/recommended"],
    },
  ],
};
