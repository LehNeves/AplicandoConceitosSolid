// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: "coverage/",
	coveragePathIgnorePatterns: [
		"node_modules/*"
	],
	coverageProvider: "v8",
	testEnvironment: "node",
	testMatch: [
		"<rootDir>/src/**/*.spec.ts"
	],
		transform: {
			'^.+\\.ts$' : 'ts-jest'
		}
};
