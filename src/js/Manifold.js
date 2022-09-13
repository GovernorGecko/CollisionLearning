/*
    Manifold, represents the Collision information
    between two Bodies.
        Body, Body, Float, Vector2
*/
class Manifold {
    
    constructor(objectA, objectB, penetration, normal) {
        this.ObjectA = objectA;
        this.ObjectB = objectB;
        this.Penetration = penetration;
        this.Normal = normal;
    }

    // To adjust for "Sinking" into 0 Mass Objects
    Correction() {

        // Usually 20% to 80%
        const percent = 0.2;

        // Usually 0.01 to 0.1
        const slop = 0.01;
        
        // Calculate the Correction
        const correction = this.Normal.MultiplyN((Math.max(this.Penetration - slop, 0.0) / (this.ObjectA.InverseMass + this.ObjectB.InverseMass)) * percent)

        // Update Positions Directly
        this.ObjectA.Position.Subtract(correction.MultiplyN(this.ObjectA.InverseMass));
        this.ObjectB.Position.Add(correction.MultiplyN(this.ObjectB.InverseMass));

    } 

    // Resolve
    Resolve() {

        // Calculate relative velocity
        const relativeVelocity = this.ObjectB.LinearVelocity.SubtractN(this.ObjectA.LinearVelocity);

        // Calculate relative velocity in terms of the normal direction
        const velocityAlongNormal = relativeVelocity.DotProduct(this.Normal);
        
        // Do not resolve if velocities are separating
        if(velocityAlongNormal > 0)
            return;

        // Calculate restitution
        const minimumRestitution = Math.min(this.ObjectA.Restitution, this.ObjectB.Restitution);

        // Calculate impulse scalar
        let impulseScalar = -(1 + minimumRestitution) * velocityAlongNormal;

        // Distributes our Impulse Scalar, by each object's Mass
        impulseScalar /= (this.ObjectA.InverseMass + this.ObjectB.InverseMass);

        // Calculate Impulse
        const impulse = this.Normal.MultiplyN(impulseScalar);

        // Apply Impulse
        this.ObjectA.ApplyLinearImpulse(impulse.MultiplyN(-1));
        this.ObjectB.ApplyLinearImpulse(impulse);

        // If either Mass is 0, we'll need to check for Positional Correction
        if(this.ObjectA.InverseMass === 0 || this.ObjectB.InverseMass === 0) {
            this.Correction();
        }

    }

};