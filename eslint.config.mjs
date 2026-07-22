import js from "@eslint/js";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

/**
 * Flat config (ESLint 9), migrated 1:1 from the previous `.eslintrc.json`.
 * `next lint` was removed in Next 16, so linting now runs through `eslint .`.
 *
 * eslint-config-next's flat config already registers the react, react-hooks,
 * import, jsx-a11y, @next/next and @typescript-eslint plugins. Flat config
 * forbids redefining a plugin, so instead of re-registering those plugins we
 * spread their recommended *rules* (which resolve against the plugins Next
 * already registered) and only register the plugins Next does not: simple
 * import sort and prettier.
 */
const tseslintRecommendedRules = Object.assign(
  {},
  ...tseslint.configs.recommended.map((config) => config.rules ?? {}),
);

export default [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "public/**",
      "next.config.mjs",
      "postcss.config.mjs",
      "next-sitemap.config.js",
      "eslint.config.mjs",
      "src/generated/graphql.ts",
      "next-env.d.ts",
    ],
  },

  js.configs.recommended,
  ...nextCoreWebVitals,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        typescript: {
          project: ["./tsconfig.json"],
        },
      },
    },
    rules: {
      // Recommended rule sets, formerly the `extends` array. Their plugins are
      // registered by eslint-config-next above, so only the rules are applied.
      ...tseslintRecommendedRules,
      ...react.configs.flat.recommended.rules,
      ...importPlugin.flatConfigs.recommended.rules,
      ...importPlugin.flatConfigs.typescript.rules,

      // Project overrides.
      "no-console": "error",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // eslint-plugin-react-hooks v7 ships the React Compiler rule set. These
      // rules did not exist in the v5 config this project was written against;
      // enforcing them now would flag pre-existing, intentional patterns (SSR
      // mount guards, notFound() inside try/catch, etc.), so they stay off to
      // preserve the prior lint behavior. rules-of-hooks and exhaustive-deps
      // remain enforced.
      "react-hooks/error-boundaries": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/purity": "off",
      "react-hooks/preserve-manual-memoization": "off",

      // ESLint 9 changed no-unused-vars' caughtErrors default to "all"; restore
      // the previous behavior of ignoring unused catch bindings.
      "@typescript-eslint/no-unused-vars": ["error", { caughtErrors: "none" }],
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // `react` first, `next` second, then packages starting with a character
            ["^react$", "^next", "^[A-Za-z0-9@~#$%^&*]"],
            // @/** alias folder
            ["^@/?"],
            // Side effect imports
            ["^\\u0000"],
            // Parent imports. Put `..` last.
            [
              "^\\.\\.(?!/?$)",
              "^\\.\\./?$",
              "^\\.\\./(.*).styles",
              "^\\.\\./(.*).types",
            ],
            // Other relative imports. Put same-folder imports and `.` last.
            [
              "^\\./(?=.*/)(?!/?$)",
              "^\\.(?!/?$)",
              "^\\./?$",
              "^\\./(.*).styles",
              "^\\./(.*).types",
            ],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "import/no-unresolved": [2, { commonjs: true, amd: true }],
      "import/named": "off",
      "import/namespace": "off",
      "import/default": "error",
      "import/export": "error",
    },
  },

  // Prettier last so it wins over conflicting stylistic rules.
  prettierRecommended,
  eslintConfigPrettier,
];
