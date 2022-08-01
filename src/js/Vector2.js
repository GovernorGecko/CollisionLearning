/*
    Simple Vector2
        Float, Float
*/
class Vector2 {
    constructor(x, y) {
        this.X = x;
        this.Y = y;
    }

    // Multiplies the given value by our X/Y
    // Returns a new Copy of our Vector2
    MultiplyN(value) {
        return this._Multiply(value, true);
    }

    // Multiplies the given value by our X/Y
    // Returns us modified.
    Multiply(value) {
        return this._Multiply(value, false);
    }

    // Multiplies the given value by our X/Y
    // This is the internal function that handles
    // returning us or a copy that has been modified.
    _Multiply(value, returnCopy) {
        const instance = returnCopy ? new Vector2(this.X, this.Y) : this;
        if(value instanceof Vector2) {
            instance.X *= value.X;
            instance.Y *= value.Y;
        }
        else {
            instance.X *= value;
            instance.Y *= value;
        }
        return instance;
    }

    // Adds the given value to our X/Y
    // Returns a new Copy of our Vector2
    PlusN(value) {
        return this._Plus(value, true);
    }

    // Adds the given value to our X/Y
    // Returns us modified.
    Plus(value) {
        return this._Plus(value, false);
    }

    // Adds the given value to our X/Y
    // This is the internal function that handles
    // returning us or a copy that has been modified.
    _Plus(value, returnCopy) {
        const instance = returnCopy ? new Vector2(this.X, this.Y) : this;
        if(value instanceof Vector2) {
            instance.X += value.X;
            instance.Y += value.Y;
        }
        else {
            instance.X += value;
            instance.Y += value;
        }
        return instance;
    }

}

