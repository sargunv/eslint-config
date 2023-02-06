module.exports = {
  settings: {
    react: {
      version: `detect`,
    },
  },
  extends: [
    `alloy/react`,
    `plugin:react-hooks/recommended`,
    `plugin:jsx-a11y/recommended`,
  ],
  rules: {
    "react/no-unescaped-entities": `off`,
  },
}
