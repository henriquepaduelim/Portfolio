// Flat ESLint config leveraging Next.js defaults.
// https://nextjs.org/docs/app/building-your-application/configuring/eslint
const next = require("eslint-config-next");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  ...next,
  {
    rules: {
      "react/no-unescaped-entities": "off"
    }
  }
];
