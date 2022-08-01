/*
    Simple Square
        Vector2, Float, Float, Boolean

    Used for rendering purposes of the Collision Engine
*/
class Square {
    constructor(position, width, height, mass, isStatic) {

        // Mass, used for collisions to determine how much we move.
        this.Mass = mass;

        // Linear Velocity of this object
        this.LinearVelocity = new Vector2(0, 0);

        // Store our Position, we'll use it Transform
        this.Position = position;

        // Is this a Static Square?  Doesn't move, acts like ground.
        this.IsStatic = isStatic;

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
        this._AABB.Transform(this.Position);

    }

    // Applies the given Linear Impulse
    ApplyLinearImpulse(impulse) {

        // Can't apply Impulses to Static Objects
        if (this.IsStatic)
        {
            return;
        }

        // Update our Velocity, based off the impulse
        this.LinearVelocity.Plus(impulse * this.GetInverseMass());

    }

    // Draws our AABB
    Draw(context) {        
        context.strokeRect(
            this._AABB.Min.X,
            this._AABB.Min.Y,
            this._AABB.Width,
            this._AABB.Height
        );
    }

    // Inverse Mass
    GetInverseMass() {

        // Static Objects have a Mass of 0
        if(this.IsStatic) {
            return 0;
        }
        
        return 1 / this.Mass;

    }

    // Update our Linear Velocity, given a velocity
    UpdateLinearVelocity(velocity) {

        // Static objects don't have Velocity
        if (!this.IsStatic)
        {
            this.LinearVelocity.Plus(velocity);
        }

    }

    // Updates our Position, using our Linear Velocity and the
    // given Frame Step
    UpdatePosition(step) {
        if(!this.IsStatic) {
            //this.Position += this.LinearVelocity * step;
            this._AABB.Transform(this.Position);
        }
    }

}