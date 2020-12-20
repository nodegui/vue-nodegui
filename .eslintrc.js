module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "babel"
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
      typescript: {}
    },
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
    ],
    "class-methods-use-this": 0,
    "max-classes-per-file": 0,
    'import/no-cycle': 0,
    "no-unused-expressions": 0,
    "babel/no-unused-expressions": "error"
  }
}
