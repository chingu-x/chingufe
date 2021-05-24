module.exports = {
  extends: "stylelint-config-recommended",
  rules: {
    "at-rule-empty-line-before": [
      "always",
      {
        except: [
          "blockless-after-blockless",
          "blockless-after-same-name-blockless",
          "first-nested"
        ],
        ignore: ["after-comment", "inside-block"],
        ignoreAtRules: ["apply", "screen", "font-face", "nest", "layer"]
      }
    ],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "variants", "responsive", "apply", "screen", "layer"]
      }
    ],
    "property-no-unknown": [
      true,
      {
        ignoreProperties: ["font-path"]
      }
    ],
    "selector-nested-pattern": "^&"
  }
};
