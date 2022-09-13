/*
    Simple Square
        Float, Float
*/
class Square {
    constructor(width, height) {

        // Simplify for later addition
        let halfWidth = width / 2;
        let halfHeight = height / 2;

        // Create our AABB.
        this._AABB = new AABB(
            new Vector2(
                -halfWidth,
                -halfHeight
            ),
            new Vector2(
                halfWidth,
                halfHeight
            )
        );

    }

    // Draw
    Draw(context, canvas, transform) {
        let aabbTransformed = this._AABB.Transform(transform)
        context.strokeRect(
            aabbTransformed.Min.X,
            canvas.height - aabbTransformed.Min.Y,
            aabbTransformed.Width,
            aabbTransformed.Height
        );
    }

    // Gets our bounding box
    GetBoundingBox() {
        return this._AABB;
    }

    // Gets our possible contact
    GetContacts() {
        return [this._AABB];
    }   

}