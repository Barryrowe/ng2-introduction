
var babel = require('babel');
var wallabyWebpack = require('wallaby-webpack');

var webpackPostprocessor = wallabyWebpack({});
module.exports = function (w) {

	return {
		files: [
			{ pattern: 'node_modules/babel-polyfill/browser.js', instrument: false},
			{ pattern: 'src/**/*.ts', load: false },
			{ pattern: 'src/**/*spec.ts', ignore: true }
		],

		tests: [
			{ pattern: 'src/**/*spec.ts', load: false }
		],

		testFramework: "jasmine@2.1.3",
		compilers: {
			'**/*.ts': w.compilers.typeScript({
				typescript: require('typescript'),
				emitDecoratorMetadata: true,
				experimentalDecorators: true
			})
		},
		postprocessor: webpackPostprocessor,
		bootstrap: function () {
			window.__moduleBundler.loadTests();
		}
	};
};