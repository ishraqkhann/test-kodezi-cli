/**
 * The port number to be used by the proxy.
 */
export const proxyPort = 9000;
/**
 * A constant that represents a fully qualified URL to the Intern proxy.
 */
export const proxyUrl = 'http://localhost:9000/';
/**
 * Default desired capabilities for all environments. Individual capabilities can be overridden by any of the
 * specified browser environments in the `environments` array below as well. See
 * https://code.google.com/p/selenium/wiki/DesiredCapabilities for standard Selenium capabilities and
 * https://saucelabs.com/docs/additional-config#desired-capabilities for Sauce Labs capabilities.
 * Note that the `build` capability will be filled in with the current commit ID from the Travis CI environment
 * automatically.
 *
 * @export
 * @const
 * @type {Object}
 * @property {boolean} 'browserstack.debug' - Whether to enable debugging on BrowserStack.
 * @property {string} project - The name of the project.
 * @property {string} name - The name of the test suite.
 */
export const capabilities = {
	'browserstack.debug': false,
	project: 'Dojo 2',
	name: 'Typescript Examples'
};
/**
 * List of browsers to run integration testing against.
 * Version numbers must be strings if used with Sauce OnDemand.
 * Options that will be permutated are browserName, version, platform, and platformVersion;
 * any other capabilities options specified for an environment will be copied as-is.
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
 * @type {string}
 */
export const tunnel = 'BrowserStackTunnel';
/**
 * Determines the initial base URL based on the location pathname.
 * If the location pathname includes '__intern/', it returns '/', otherwise it returns null.
 *
 * @returns {string | null} The initial base URL.
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
 * @type {Object}
 * @property {string} 'host-browser' - The path to the AMD loader for the browser.
 * @property {string} 'host-node' - The name of the AMD loader for Node.js.
 */
export const loaders = {
	'host-browser': 'node_modules/dojo-loader/dojo.js',
	'host-node': 'dojo-loader'
};
/**
 * Configuration options for the module loader; any AMD configuration options supported by the specified AMD loader
 * can be used here.
 * 
 * @exports loaderOptions
 * @type {Object}
 * @property {Array} packages - Packages that should be registered with the loader in each testing environment.
 */
export const loaderOptions = {
	// Packages that should be registered with the loader in each testing environment
	packages: [
		{ name: 'src', location: '_build/src' },
		{ name: 'tests', location: '_build/tests' },
		{ name: 'node_modules', location: '_build/node_modules' },
		{ name: 'dojo-core', location: 'node_modules/dojo-core/dist/umd' }
	]
};
// Non-functional test suite(s) to run in each browser

/**
 * An array containing the paths to the test suites to be run.
 * @type {string[]}
 */
export const suites = [ 'tests/unit/all' ];
/**
 * Exports an array of functional test suites to be run in each browser once non-functional tests are completed.
 * 
 * @type {string[]} functionalSuites - An array of paths to functional test suites.
 */
export const functionalSuites = [ 'tests/functional/all' ];
/**
 * A regular expression matching URLs to files that should not be included in code coverage analysis.
 * 
 * @type {RegExp}
 * @export
 */
export const excludeInstrumentation = /(?:node_modules|bower_components|tests)[\/\\]/;