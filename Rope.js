class Rope {
    constructor(b1, b2) {
        var options = {
            bodyA: b1,
            bodyB: b2,
            length: 10,
            stiffness: 0.2

        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display() {

        var pointa = this.rope.bodyA.position;
        var pointb = this.rope.bodyB.position;
        strokeWeight(3);
        line(pointa.x, pointa.y, pointb.x, pointb.y);



    }
}