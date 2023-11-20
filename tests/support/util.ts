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
     * Resolves the promise and throws an error if the promise is not rejected.
     * 
     * @returns {Error} - An error indicating an unexpected code path.
     */
    function onFulfillment() {
        throw new Error('unexpected code path');
    }

    /**
     * Handles the rejection of the promise.
     * 
     * @returns {boolean} - True indicating the promise was rejected as expected.
     */
    function onRejection() {
        return true; // expect rejection
    }

    return promise.then<any>(onFulfillment, onRejection);
}
/**
 * Immediately throws an error with a specific message.
 *
 * @throws {Error} When this function is called.
 */
export function throwImmediatly() {
    /**
     * This function throws an Error immediately when called.
     * The error message is 'unexpected code path'.
     */
	throw new Error('unexpected code path');
}