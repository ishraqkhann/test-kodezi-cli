export interface Drawable {
	id: number;
	name?: string;
	draw: (target: Node) => void;
}
/**
 * Represents a rectangle that can be drawn on a target node.
 */
class Rect implements Drawable {
	id: number;

	/**
	 * Draws the rectangle on a target node.
	 *
	 * @param target - The node where the rectangle will be drawn.
	 */
	draw(target: Node) {}
}
const thing: Drawable = {
	id: 0,
	draw: function (target: Node) { }
};