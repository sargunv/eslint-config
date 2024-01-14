// @ts-check

// @ts-expect-error no types for this package
require(`@rushstack/eslint-patch/modern-module-resolution`)

/** @type {import('eslint').ESLint.ConfigData} */
const config = {
  root: true,
  reportUnusedDisableDirectives: true,
  plugins: [`simple-import-sort`, `import`],
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  env: {
    es2017: true,
  },
  extends: [
    `alloy`,
    `plugin:promise/recommended`,
    `plugin:security/recommended-legacy`,
    `plugin:unicorn/recommended`,
    `prettier`,
  ],
  rules: {
    // Configure the plugins that don't have base configs.

    "simple-import-sort/imports": `error`, // unicorn/prefer-node-protocol helps group imports
    "simple-import-sort/exports": `error`,

    "import/extensions": [`error`, `ignorePackages`],
    "import/first": `error`,
    "import/newline-after-import": [`error`, { considerComments: true }],
    "import/no-cycle": `error`,

    // Override presets from the base configs

    // allow unused vars if they're prefixed with _
    "no-unused-vars": [
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

    // never manually convert a string again
    "quotes": [`error`, `backtick`],

    // this is useful for arrow functions without braces
    "no-void": `off`,

    // aesthetic preference
    "curly": [`error`, `multi-or-nest`, `consistent`],

    // props, req, res, fn, etc. are common names
    "unicorn/prevent-abbreviations": `off`,

    // false positives on anything with a similarly named method
    "unicorn/no-array-method-this-argument": `off`,

    // if foo == null is useful, also lots of apis use null
    "unicorn/no-null": `off`,

    // sometimes it's good to be explicit
    "unicorn/no-useless-undefined": `off`,

    // if statements are fine
    "unicorn/prefer-switch": `off`,

    // reduce is fine too, ugh unicorn's defaults are wild
    "unicorn/no-array-reduce": `off`,

    // way too many false positives (like, every array index)
    "security/detect-object-injection": `off`,
  },
  ignorePatterns: [`dist/`, `coverage/`],
  overrides: [
    { files: [`*.cjs`, `*.js`, `*.jsx`, `*.mjs`] },
    {
      // vitest typecheck fails to parse backtick strings
      files: [`*.test-d.ts`],
      rules: {
        quotes: [`error`, `double`],
      },
    },
  ],
}

module.exports = config
