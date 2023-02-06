require(`@rushstack/eslint-patch/modern-module-resolution`)

module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  plugins: [`simple-import-sort`],
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  env: {
    es2017: true,
  },
  extends: [
    `alloy`,
    `plugin:promise/recommended`,
    `plugin:security/recommended`,
    `prettier`,
  ],
  rules: {
    // Configure the plugins that don't have base configs.
    "simple-import-sort/imports": [
      `error`,
      {
        // See https://github.com/lydell/eslint-plugin-simple-import-sort/#custom-grouping.
        groups: [
          [`^\\u0000`], // Side effect imports (the plugin inserts '\\u0000' for us to match).
          // Node builtins.
          [
            `^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)`,
          ],
          [`^(?!@sargunv)@?\\w`], // Packages NOT in @sargunv scope.
          [`^@sargunv`], // Packages in @sargunv scope.
          [`^\\.`], // Relative imports.
          [`^`], // Catchall uncovered by the rest. IRL this shouldn't ever match?
        ],
      },
    ],
    "simple-import-sort/exports": `error`,

    // Override presets from the base configs
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
    "quotes": [`error`, `backtick`],
    "no-void": `off`,
  },
  overrides: [{ files: [`*.cjs`, `*.js`, `*.jsx`, `*.mjs`] }],
}
