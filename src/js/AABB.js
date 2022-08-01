// Simple AABB
// Vector2, Vector2  
class AABB {
    constructor(min, max) {
        this.Min = min;
        this.Max = max;
    }

    // Our Width
    get Width() {
        return this.Max.X - this.Min.X;
    }
    
    // Our Height
    get Height() {
        return this.Max.Y - this.Min.Y;
    }   

    // Are we Colliding with another AABB?
    CollidesWithAABB(otherAABB) {
        return (
            this.Min.X < otherAABB.Max.X &&
            this.Max.X > otherAABB.Min.X &&
            this.Min.Y < otherAABB.Max.Y &&
            this.Max.Y > otherAABB.Min.Y
        );
    }

}