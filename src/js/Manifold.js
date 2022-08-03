/*
    Manifold, represents the Collision information
    between two objects.



*/
class Manifold
{
    constructor(objectA, objectB, penetration, normal) {
        this.ObjectA = objectA;
        this.ObjectB = objectB;
        this.Penetration = penetration;
        this.Normal = normal;
    }
};