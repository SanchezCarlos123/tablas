module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpg,html,json,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};