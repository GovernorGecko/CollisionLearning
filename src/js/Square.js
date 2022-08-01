/*
    Simple Square
        Vector2, Float, Float

    Used for rendering purposes of the Collision Engine
*/
class Square {
    constructor(position, width, height) {

        // We won't store any of the passed in values,
        // all can be retrieved from the underlyingAABB
        // object.
        let halfWidth = width / 2;
        let halfHeight = height / 2;
        this.AABB = new AABB(
            new Vector2(
                position.X - halfWidth,
                position.Y - halfHeight
            ),
            new Vector2(
                position.X + halfWidth,
                position.Y + halfHeight
            )
        );
    }

    // Draws our AABB
    Draw(context) {
        context.strokeRect(
            this.AABB.Min.X,
            this.AABB.Min.Y,
            this.AABB.Width,
            this.AABB.Height
        );
    }

}