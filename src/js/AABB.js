/*
    Simple AABB
        Vector2, Vector2
*/
class AABB {
    constructor(min, max,) {
        this._min = min;
        this._max = max;

        // Simple Direction/Velocity transform
        this._transform = new Vector2(0.0, 0.0);
    }

    // Center
    get Center() {
        return new Vector2(
            this.Min.X + (this.Width / 2),
            this.Min.Y + (this.Height / 2)
        )
    }

    // Maximum
    get Max() {
        return this._max.AddN(this._transform)
    }

    // Maximum Base
    get MaxBase() {
        return this._max;
    }

    // Minimum
    get Min() {
        return this._min.AddN(this._transform)
    }

    // Minimum Base
    get MinBase() {
        return this._min;
    }

    // Width
    get Width() {
        return this._max.X - this._min.X;
    }
    
    // Height
    get Height() {
        return this._max.Y - this._min.Y;
    } 

    // Are we Colliding with another AABB?
    CollidesWithAABB(other) {
        return (
            this.Min.X < other.Max.X &&
            this.Max.X > other.Min.X &&
            this.Min.Y < other.Max.Y &&
            this.Max.Y > other.Min.Y
        );
    }

    // Transform by a given Vector2.  I know these
    // usually are like Matrix4x4 or... Many other things
    // that allow rotations and the such, but we just want
    // direction/velocity.
    Transform(transform) {
        this._transform = transform;        
    }

}