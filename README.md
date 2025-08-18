# stylelint-config-tailwindcss

[![NPM version](https://img.shields.io/npm/v/stylelint-config-tailwindcss.svg)](https://www.npmjs.org/package/stylelint-config-tailwindcss)

Tailwind CSS shareable config for Stylelint

## Installation

```sh
npm install stylelint-config-tailwindcss --save-dev
```

## Usage

Set your Stylelint config to:

```diff
{
  "extends": [
    "stylelint-config-recommended",
+   "stylelint-config-tailwindcss"
  ]
}
```

If you use `stylelint-config-recommended-scss`, `stylelint-config-sass-guidelines` or similar packages, you can use the following configuration to support rules such as `scss/at-rule-no-unknown`.

```diff
{
  "extends": [
    "stylelint-config-recommended-scss",
+   "stylelint-config-tailwindcss/scss"
  ]
}
```

## License

[MIT License](/LICENSE)
