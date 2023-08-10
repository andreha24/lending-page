module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        ".eslintrc.{js,cjs}",
      ],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "max-len": ["error", { code: 120 }],
    "no-param-reassign": ["error", { props: false }],
    "react/require-default-props": "off",
    "react/no-array-index-key": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    quotes: ["error", "double"],
    "import/order":
        [
          1,
          {
            "newlines-between": "always",
            groups:
                [
                  "external",
                  "builtin",
                  "internal",
                  "sibling",
                  "parent",
                  "index",
                ],
          },
        ],
    "jsx-a11y/label-has-associated-control": ["error", {
      required: {
        some: ["nesting", "id"],
      },
    }],
    "jsx-a11y/label-has-for": ["error", {
      required: {
        some: ["nesting", "id"],
      },
    }],
  },
};
