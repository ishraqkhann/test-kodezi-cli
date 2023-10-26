/**
 * The port number to be used by the proxy server.
 */
export const proxyPort = 9000;
/**
 * A fully qualified URL to the Intern proxy.
 * @type {string}
 */
export const proxyUrl = 'http://localhost:9000/';
/**
 * Default desired capabilities for all environments. Individual capabilities can be overridden by any of the
 * specified browser environments in the `environments` array below as well. See
 * https://code.google.com/p/selenium/wiki/DesiredCapabilities for standard Selenium capabilities and
 * https://saucelabs.com/docs/additional-config#desired-capabilities for Sauce Labs capabilities.
 * Note that the `build` capability will be filled in with the current commit ID from the Travis CI environment
 * automatically
 * 
 * @export
 * @const capabilities
 * @type {Object}
 * @property {boolean} 'browserstack.debug' - Debug mode for BrowserStack. Default is false.
 * @property {string} project - The name of the project. Default is 'Dojo 2'.
 * @property {string} name - The name of the test suite. Default is 'Typescript Examples'.
 */
export const capabilities = {
	'browserstack.debug': false,
	project: 'Dojo 2',
	name: 'Typescript Examples'
};
/**
 * Browsers to run integration testing against. Note that version numbers must be strings if used with Sauce
 * OnDemand. Options that will be permutated are browserName, version, platform, and platformVersion; any other
 * capabilities options specified for an environment will be copied as-is
 * 
 * @type {Array} environments - An array of objects, each representing a browser environment for testing.
 * Each object has properties for browserName, version (optional), and platform.
 */
export const environments = [
	{ browserName: 'IE', version: [ '10.0', '11.0' ], platform: 'Windows' },
	{ browserName: 'Edge', platform: 'Windows' },
	{ browserName: 'Firefox', platform: 'Windows' },
	{ browserName: 'Chrome', platform: 'Windows' },
	{ browserName: 'Opera', platform: 'Windows' },
	{ browserName: 'Safari', version: [ '8.0', '9.0' ], platform: 'MAC' }
];
/**
 * Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service.
 */
export const maxConcurrency = 1;
/**
 * The name of the tunnel class to use for WebDriver tests.
 * 
 * @export
 * @type {string}
 */
export const tunnel = 'BrowserStackTunnel';
/**
 * Initial base URL for the application.
 *
 * If the location object is defined and the pathname contains '__intern/', 
 * the initial base URL is set to '/'.
 * Otherwise, it is set to null.
 */
export const initialBaseUrl: string = (function () {
	if (typeof location !== 'undefined' && location.pathname.indexOf('__intern/') > -1) {
		return '/';
	}
	return null;
})();
/**
 * The desired AMD loader to use when running unit tests (client.html/client.js). Omit to use the default Dojo
 * loader.
 * 
 * @exports loaders
 * @property {string} 'host-browser' - Path to the AMD loader for the browser.
 * @property {string} 'host-node' - Name of the AMD loader for Node.js.
 */
export const loaders = {
	'host-browser': 'node_modules/dojo-loader/dojo.js',
	'host-node': 'dojo-loader'
};
/**
 * Configuration options for the module loader; any AMD configuration options supported by the specified AMD loader
 * can be used here.
 * 
 * @export
 * @const
 * @type {Object}
 */
export const loaderOptions = {
	/**
     * Packages that should be registered with the loader in each testing environment.
     * 
     * @type {Array}
     */
	packages: [
		{ name: 'src', location: '_build/src' },
		{ name: 'tests', location: '_build/tests' },
		{ name: 'node_modules', location: '_build/node_modules' },
		{ name: 'dojo-core', location: 'node_modules/dojo-core/dist/umd' }
	]
};
/**
 * Non-functional test suite(s) to run in each browser
 * 
 * @type {string[]} An array of test suite names.
 */
export const suites = [ 'tests/unit/all' ];
/**
 * Exports an array of functional test suites to be run in each browser once non-functional tests are completed.
 * @type {string[]} functionalSuites - An array of strings representing the paths to the functional test suites.
 */
export const functionalSuites = [ 'tests/functional/all' ];
/**
 * A regular expression matching URLs to files that should not be included in code coverage analysis.
 * 
 * @export
 * @const
 * @type {RegExp}
 */
export const excludeInstrumentation = /(?:node_modules|bower_components|tests)[\/\\]/;