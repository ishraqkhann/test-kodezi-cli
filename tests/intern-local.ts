export * from './intern';
/**
 * Exports a variable named 'tunnel' with a default value of 'NullTunnel'.
 */
export var tunnel = 'NullTunnel';
/**
 * Options for a tunnel connection.
 *
 * @export
 * @var {Object} tunnelOptions - The options for the tunnel connection.
 * @property {string} hostname - The hostname for the tunnel connection.
 * @property {string} port - The port for the tunnel connection.
 */
export var tunnelOptions = {
	hostname: 'localhost',
	port: '4444'
};
/**
 * Array of objects representing different environments.
 * Each object in the array represents a different environment with specific properties.
 * In this case, the property is 'browserName'.
 *
 * @type {Array<{browserName: string}>}
 */
export var environments = [
	{ browserName: 'chrome' }
];