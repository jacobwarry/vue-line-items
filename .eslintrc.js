module.exports = {
	root: true, env: {
		node: true
	}, "extends": ["plugin:vue/essential", "eslint:recommended", "@vue/typescript/recommended"], parserOptions: {
		ecmaVersion: 2020
	}, rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"object-property-newline": "warn",
		"quotes": ["warn", "double"],
		"max-len": ["warn", {
			"code": 80, "tabWidth": 4
		}],
		"indent": ["warn", 4, {
			"SwitchCase": 1
		}],
		"one-var-declaration-per-line": ["warn", "always"],
		"vue/html-indent": ["warn", 4, {
			"attribute": 1, "baseIndent": 1, "alignAttributesVertically": true
		}],
		"vue/html-self-closing": "warn",
		"vue/mustache-interpolation-spacing": ["warn", "always"],
		"vue/no-multi-spaces": ["warn", {
			ignoreProperties: false
		}],
		"vue/html-quotes": ["warn", "double"],
		"vue/html-closing-bracket-newline": ["warn", {
			singleline: "never", multiline: "always"
		}],
		"vue/max-attributes-per-line": ["warn", {
			singleline: {
				max: 1
			}, multiline: {
				max: 1
			}
		}],
		"vue/component-definition-name-casing": ["warn", "PascalCase"],
		"vue/attribute-hyphenation": 2,
		"vue/valid-v-slot": ["error", {
			allowModifiers: true
		}]
	}
}
