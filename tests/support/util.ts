/**
 * Thenable represents any object with a callable `then` property.
 */
export interface Thenable<T> {
	then<U>(onFulfilled?: (value?: T) => U | Thenable<U>, onRejected?: (error?: any) => U | Thenable<U>): Thenable<U>;
}
/**
 * Checks if a promise is eventually rejected.
 *
 * @export
 * @template T - The type of the promise.
 * @param {Thenable<T>} promise - The promise to check.
 * @returns {Thenable<boolean>} - A promise that resolves to true if the input promise is rejected, and throws an error otherwise.
 */
export function isEventuallyRejected<T>(promise: Thenable<T>): Thenable<boolean> {
    /**
     * Returns a promise that resolves to true if the input promise is rejected, and throws an error otherwise.
     *
     * @returns {Thenable<boolean>} - A promise that resolves to true if the input promise is rejected, and throws an error otherwise.
     */
	return promise.then<any>(function () {
		throw new Error('unexpected code path');
	}, function () {
		return true; // expect rejection
	});
}
/**
 * Immediately throws an error with a specific message.
 *
 * @throws {Error} When this function is called.
 */
export function throwImmediatly() {
    /**
     * This function immediately throws an error with a specific message.
     *
     * @throws {Error} When this function is called.
     */
    throw new Error('unexpected code path');
}