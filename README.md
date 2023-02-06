[![npm badge](https://img.shields.io/npm/v/@sargunv/eslint-config)](https://www.npmjs.com/package/@sargunv/eslint-config)

# @sargunv/eslint-config

My personal ESLint configs, mostly based on
[eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy).

## Usage

In package.json (or your ESLint config):

```json
{
  "eslintConfig": {
    "extends": [
      "@sargunv/eslint-config",
      "@sargunv/eslint-config/mixins/react",
      "@sargunv/eslint-config/mixins/next",
      "@sargunv/eslint-config/mixins/typescript"
    ],
    "root": true
  }
}
```

The mixins are optional.

If using the TypeScript mixin, `typescript` is a required peer dependency (and
you probably have it anyway).

If not using the TypeScript mixin, `@babel/core` and `@babel/eslint-parser` are
required peer dependencies. If using the React mixin, `@babel/preset-react` is
also a required peer dependency.
