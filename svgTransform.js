export default {
	process() {
		return { code: "export default {};" };
	},
	getCacheKey() {
		// The output is always the same.
		return "svgTransform";
	},
};
