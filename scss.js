const { rules } = require('./index');

module.exports = {
  rules: Object.entries(rules).reduce(
    (rules, [k, v]) => Object.assign({ [`scss/${k}`]: v }, rules),
    rules
  ),
};
