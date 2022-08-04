/*
    Simple Square
        Vector2, Float, Float, Boolean

    Used for rendering purposes of the Collision Engine
*/
class Square {
    constructor(position, width, height, mass, restitution, isStatic) {

        // Mass, used for collisions to determine how much we move.
        this.Mass = mass;
        this.InverseMass = isStatic || mass === 0 ? 0 : 1 / mass;

        // Linear Velocity of this object
        this.LinearVelocity = new Vector2(0, 0);

        // Store our Position, we'll use it Transform
        this.Position = position;

        // Is this a Static Square?  Doesn't move, acts like ground.
        this.IsStatic = isStatic;

        // Restitution, or bounciness
        this.Restitution = restitution;

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

        if (!this.IsStatic)
        {
            this.LinearVelocity.Add(impulse.MultiplyN(this.InverseMass));
        }       

    }

    // Draws our AABB
    Draw(context, canvas) {        
        context.strokeRect(
            this._AABB.Min.X,
            canvas.height - this._AABB.Min.Y,
            this._AABB.Width,
            this._AABB.Height
        );
    }    

    // Update our Linear Velocity, given a velocity
    UpdateLinearVelocity(velocity) {

        if (!this.IsStatic)
        {
            this.LinearVelocity.Add(velocity);            
        }

    }

    // Updates our Position, using our Linear Velocity and the
    // given Frame Step
    UpdatePosition(step) {

        if(!this.IsStatic) {
            
            // Update our position.
            this.Position.Add(this.LinearVelocity.MultiplyN(step));

            // Update our AABB, for Collision.
            this._AABB.Transform(this.Position);

        }

    }

}