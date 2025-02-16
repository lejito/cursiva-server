import type { Linter } from "eslint";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";

export default [
	js.configs.recommended,
	{
		files: ["**/*.ts"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			parser: tsParser,
		},
		rules: {
			"no-console": ["off"],
			eqeqeq: "warn",
			curly: "warn",
			semi: "error",
		},
	},
] satisfies Linter.Config[];
