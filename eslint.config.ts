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
			"no-unused-vars": "warn",
			"no-undef": "off",
			"no-console": ["off"],
			eqeqeq: "warn",
			curly: "off",
			semi: "off",
		},
	},
] satisfies Linter.Config[];
