// @ts-check

/** @type {import('eslint').ESLint.ConfigData} */
const mixin = {
  parser: `@typescript-eslint/parser`,
  extends: [`alloy/typescript`],
  rules: {
    "@typescript-eslint/no-invalid-void-type": `off`,
    "@typescript-eslint/no-parameter-properties": `off`,
    "@typescript-eslint/no-unused-vars": [
      `error`,
      {
        vars: `all`,
        args: `all`,
        caughtErrors: `all`,
        varsIgnorePattern: `^_`,
        argsIgnorePattern: `^_`,
        caughtErrorsIgnorePattern: `^_`,
      },
    ],
    "quotes": `off`,
    "@typescript-eslint/quotes": [`error`, `backtick`],
  },
  overrides: [
    {
      files: [`*.cjs`, `*.js`, `*.jsx`],
      rules: {
        "@typescript-eslint/no-require-imports": `off`,
      },
    },
    {
      files: [`*.ts`, `*.cts`, `*.mts`, `*.tsx`],
      parserOptions: {
        // Evaluated relative to tsconfigRootDir or CWD.
        // TS projects should set tsconfigRootDir to make this work properly.
        project: `./tsconfig.json`,
      },
      rules: {
        // Copied from @typescript-eslint/recommended-requiring-type-checking.
        // We don't directly import that config because we use a different base config.
        "@typescript-eslint/await-thenable": `error`,
        "@typescript-eslint/no-floating-promises": `error`,
        "@typescript-eslint/no-for-in-array": `error`,
        "@typescript-eslint/no-implied-eval": `error`,
        "@typescript-eslint/no-misused-promises": `error`,
        "@typescript-eslint/no-unnecessary-type-assertion": `error`,
        "@typescript-eslint/no-unsafe-assignment": `error`,
        "@typescript-eslint/no-unsafe-call": `error`,
        "@typescript-eslint/no-unsafe-member-access": `error`,
        "@typescript-eslint/no-unsafe-return": `error`,
        "@typescript-eslint/prefer-regexp-exec": `error`,
        "@typescript-eslint/require-await": `error`,
        "@typescript-eslint/restrict-plus-operands": `error`,
        "@typescript-eslint/restrict-template-expressions": `error`,
        "@typescript-eslint/unbound-method": `error`,
      },
    },
    {
      files: [`*.d.ts`],
      rules: {
        "spaced-comment": `off`,
      },
    },
  ],
}

module.exports = mixin
