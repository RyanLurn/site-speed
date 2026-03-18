// @ts-check

import { globalIgnores, defineConfig } from "eslint/config";
import tanstackRouter from "@tanstack/eslint-plugin-router";
import perfectionist from "eslint-plugin-perfectionist";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier/flat";
import jsxA11y from "eslint-plugin-jsx-a11y";
import ts from "typescript-eslint";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  globalIgnores([
    "**/routeTree.gen.ts",
    "**/_generated/",
    "**/migrations/",
    "**/.tanstack/",
    "**/dist/",
    "**/build/",
  ]),
  js.configs.recommended,
  ts.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.bunBuiltin,
        ...globals.browser,
      },
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/only-throw-error": [
        "error",
        {
          allow: [
            {
              package: "@tanstack/router-core",
              name: "Redirect",
              from: "package",
            },
            {
              package: "@tanstack/router-core",
              name: "NotFoundError",
              from: "package",
            },
          ],
        },
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  perfectionist.configs["recommended-line-length"],
  tanstackRouter.configs["flat/recommended"],
  reactHooks.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  prettier,
]);
