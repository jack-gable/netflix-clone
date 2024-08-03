/** @type {import('jest').Config} */
const config = {
	collectCoverageFrom: [
		"<rootDir>/src/**/*.js",
		"!<rootDir>/src/app.js",
		"!<rootDir>/src/helpers/routes.js",
		"!<rootDir>/src/lib/firebase.js",
		"!<rootDir>/src/lib/firebase.prod.js",
		"!<rootDir>/src/index.js",
		"!<rootDir>/src/seed.js",
		"!<rootDir>/src/utils/index.js",
		"!<rootDir>/src/pages/index.js",
		"!<rootDir>/src/global-styles.js",
		"!<rootDir>/src/components/index.js",
		"!<rootDir>/src/firebase.prod.js",
		"!<rootDir>/src/hooks/*.js",
		"!<rootDir>/src/context/*.js",
		"!<rootDir>/src/constants/*.js",
	],
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: 90,
		},
	},
	coverageReporters: ["html", "text"],
	transform: {
		"^.+\\.svg$": "<rootDir>/svgTransform.js",
	},
};

export default config;
