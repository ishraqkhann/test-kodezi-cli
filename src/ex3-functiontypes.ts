interface DrawMethod {
	(target: Node): void;
	(target: number, options?: Object): void;
}
/**
 * A method that represents a drawing function.
 * 
 * @param {any} target - The target to draw on.
 */
let method: DrawMethod = function(target: any) {
    /**
     * Represents a drawing method.
     *
     * @param {any} target - The target to draw on.
     */
};
/**
 * Represents a method for drawing.
 * 
 * @param target The target to draw on.
 * @param options Optional parameters for the drawing method.
 */
let anotherMethod: DrawMethod = function(target: any, options?: Object) {
    /**
     * This is a method for drawing on a target with optional parameters.
     * 
     * @param {any} target - The target to draw on.
     * @param {Object} [options] - Optional parameters for the drawing method.
     */
};