/*
    Simple Body
        Shape, Vector2, Float, Float, Boolean
*/
class Body {

    constructor(shape, position, mass, restitution, isStatic) {

        // Shape this Body uses for Colliding
        this.Shape = shape

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

    }

    // Applies the given Linear Impulse
    ApplyLinearImpulse(impulse) {
        if (!this.IsStatic) {
            this.LinearVelocity.Add(impulse.MultiplyN(this.InverseMass));
        }
    }

    // Normally we'd want to render a player/monster/item but instead
    // we are just going to call our shape and let it render.
    Draw(context, canvas) {
        this.Shape.Draw(context, canvas, this.Position)
    }    

    // Update our Linear Velocity, given a velocity
    UpdateLinearVelocity(velocity) {
        if (!this.IsStatic) {
            this.LinearVelocity.Add(velocity);            
        }
    }

    // Updates our Position, using our Linear Velocity and the
    // given Frame Step
    UpdatePosition(step) {
        if(!this.IsStatic) {            
            this.Position.Add(this.LinearVelocity.MultiplyN(step));
        }
    }

}