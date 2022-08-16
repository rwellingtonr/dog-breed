/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

export default {
	clearMocks: true,

	coverageProvider: "v8",

	setupFilesAfterEnv: ["<rootDir>/src/test/setup.ts"],

	testEnvironment: "jsdom",
	globals: {
		"ts-jest": {
			tsconfig: "./tsconfig.json",
			useESM: true,
		},
	},
	transform: {
		"^.+\\.(t|j)sx?$": [
			"@swc/jest",
			{
				jsc: {
					parser: {
						syntax: "typescript",
						tsx: true,
						decorators: true,
					},
					keepClassNames: true,
					transform: {
						legacyDecorator: true,
						decoratorMetadata: true,
						react: {
							runtime: "automatic",
						},
					},
				},
				module: {
					type: "es6",
					noInterop: false,
				},
			},
		],
		"^.+\\.scss$": "jest-scss-transform",
	},

	testPathIgnorePatterns: ["/node_modules/", "/.next/", "/.out/", "/public/"],
	preset: "ts-jest",
	testMatch: ["**/**/*.spec.tsx"],
}
