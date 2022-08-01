
/*
// Resolve the Collision between two Objects
const ResolveCollision = (objectA, objectB) => {


  // Calculate relative velocity
   rv = B.velocity - A.velocity
 
  // Calculate relative velocity in terms of the normal direction
  float velAlongNormal = DotProduct( rv, normal )
 
  // Do not resolve if velocities are separating
  if(velAlongNormal > 0)
    return;
 
  // Calculate restitution
  float e = min( A.restitution, B.restitution)
 
  // Calculate impulse scalar
  float j = -(1 + e) * velAlongNormal
  j /= 1 / A.mass + 1 / B.mass
 
  // Apply impulse
  Vec2 impulse = j * normal
  A.velocity -= 1 / A.mass * impulse
  B.velocity += 1 / B.mass * impulse

}
*/