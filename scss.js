const { rules } = require('./index');

module.exports = {
  rules: Object.entries(rules).reduce(
    (rules, [k, v]) => Object.assign({ [k === 'import-notation' ? `${k}` : `scss/${k}`]: v }, rules),
    rules
  ),
};
