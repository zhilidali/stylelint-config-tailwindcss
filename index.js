module.exports = {
  rules: {
    'import-notation': null,
    // Tailwind at-rules (e.g. `@config`, `@theme`, `@source`) may legitimately
    // appear before `@import`, which would otherwise be flagged as an invalid
    // import position. Ignore them so the "Tailwind without Preflight" pattern
    // (`@config` followed by `@import "tailwindcss/*"`) lints cleanly.
    // See https://github.com/zhilidali/stylelint-config-tailwindcss/issues/13
    'no-invalid-position-at-import-rule': [
      true,
      {
        ignoreAtRules: [
          /** tailwindcss v4 */
          'theme',
          'source',
          'utility',
          'variant',
          'custom-variant',
          'plugin',
          'reference',
          /** tailwindcss v3 */
          'tailwind',
          'apply',
          'layer',
          'config',
          /** tailwindcss v1, v2 */
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          /** tailwindcss v4 */
          'theme',
          'source',
          'utility',
          'variant',
          'custom-variant',
          'plugin',
          'reference',
          /** tailwindcss v3 */
          'tailwind',
          'apply',
          'layer',
          'config',
          /** tailwindcss v1, v2 */
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme'],
      },
    ],
  },
};
