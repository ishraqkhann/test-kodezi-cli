export * from './intern';
/**
 * Exported variable representing the tunnel type.
 * 
 * @type {string}
 */
export var tunnel = 'NullTunnel';
/**
 * Options for a tunnel connection.
 * 
 * @property {string} hostname - The hostname of the tunnel server.
 * @property {string} port - The port of the tunnel server.
 */
export var tunnelOptions = {
	hostname: 'localhost',
	port: '4444'
};
/**
 * An array of environments for testing. Each environment is an object with a `browserName` property.
 * 
 * @type {Array}
 */
export var environments = [
	{ browserName: 'chrome' }
];