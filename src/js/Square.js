// Simple Square
// Vector2, Float, Float
class Square {

    constructor(position, width, height) {
        this.Position = position;
        this.Width = width;
        this.Height = height;

        // Our AABB
        this.AABB = new AABB(new Vector2(0.0, 0.0), new Vector2(5.0, 5.0));
    }

    // Draws our AABB
    Draw(context) {
        context.strokeRect(
            this.Min.X,
            this.Min.Y,
            this.Width,
            this.Height
        );
    }

}