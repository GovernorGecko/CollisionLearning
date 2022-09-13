/*
    Simple Vector2
        Float, Float
*/
class Vector2 {
    constructor(x, y) {
        this.X = x;
        this.Y = y;
    }

    // Operator Overloads... sort of.
    _Operator(value, returnCopy, operation) {
        const instance = returnCopy ? new Vector2(this.X, this.Y) : this;
        if(value instanceof Vector2) {
            instance.X = operation(instance.X, value.X);
            instance.Y = operation(instance.Y, value.Y);
        }
        else {
            instance.X = operation(instance.X, value);
            instance.Y = operation(instance.Y, value);
        }
        return instance;
    }

    // Add Operator
    _AddOp(value1, value2) {
        return value1 + value2;
    }

    // Add return New
    AddN(value) {
        return this._Operator(value, true, this._AddOp)
    }

    // Add return This
    Add(value) {
        return this._Operator(value, false, this._AddOp);
    }

    // Divide Operator, check for 0s
    _DivideOp(value1, value2) {
        if(value1 === 0 || value2 === 0) {
            return 0;
        }
        return value1 / value2;
    }

    // Divide return New
    DivideN(value) {
        return this._Operator(value, true, this._DivideOp);
    }

    // Divide return This
    Divide(value) {
        return this._Operator(value, false, this._DivideOp);
    }

    // Multiply Operator
    _MultiplyOp(value1, value2) {
        return value1 * value2;
    }

    // Multiply return New
    MultiplyN(value) {
        return this._Operator(value, true, this._MultiplyOp);
    }

    // Multiply return This
    Multiply(value) {
        return this._Operator(value, false, this._MultiplyOp);
    }

    // Subtract Operator
    _SubtractOp(value1, value2) {
        return value1 - value2;
    }

    // Subtract return New
    SubtractN(value) {
        return this._Operator(value, true, this._SubtractOp);
    }

    // Subtract return This
    Subtract(value) {
        return this._Operator(value, false, this._SubtractOp);
    }

    // Angle Between Two Vectors, in Radians
    // α = arccos[(a · b) / (|a| * |b|)]
    // angle = arccos[(xa * xb + ya * yb) / (√(pow(xa, 2) + pow(ya, 2)) * √(pow(xb, 2) + pow(yb, 2)))]
    AngleBetweenVectors(vector) {
        return Math.acos(this.DotProduct(vector) / (this.Magnitude() * vector.Magnitude()));
    }

    // Dot/Cross Product Between us and another Vector2
    // v1.x * v2.x + v1.y * v2.y;
    DotProduct(vector) {
        return (this.X * vector.X) + (this.Y * vector.Y);
    }

    // Magnitude of this Vector
    // ||v|| = √(pow(X, 2), pow(Y, 2))
    Magnitude() {
        let xSquared = Math.pow(this.X, 2);
        let ySquared = Math.pow(this.Y, 2);
        return Math.sqrt(xSquared + ySquared);
    }

    // Normalize this Vector2
    Normalize() {
        return this.Divide(this.Magnitude());
    }

}

