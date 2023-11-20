/**
 * Generic function that combines all the elements in the input array using the addition operator.
 *
 * @param {T[]} rest - An array of elements to be combined.
 * @returns {T} - The combined result of all elements in the input array.
 */
function combinor<T>(...rest: T[]): T {
	return rest.reduce((previous: T, current: T) => {
		return <any> previous + <any> current;
	}, rest[0] || null);
}

// Example usage with strings
const strs = combinor<string>('one', 'two'); 

// Example usage with numbers
const nums = combinor<number>(1, 2); 