module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "airbnb-base",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "settings": {
    "plugins": [
      "import"
    ],
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "rules": {
    "no-unused-vars": 0,
    "import/prefer-default-export": 0,
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/type-annotation-spacing": ["error", {
      "before": true,
      "after": true,
      "overrides": {
        "colon": {
          "before": false
        }
      }
    }],
    "no-dupe-class-members": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "ts": "never",
      }
    ]
  }
}
