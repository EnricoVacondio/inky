/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
	"**/*.{js,jsx,ts,tsx}": ["prettier --write"],
	"**/*.{html,json,css,scss,md,mdx}": ["prettier -w"],
};
