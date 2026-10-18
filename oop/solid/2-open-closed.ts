/**
 * O — Open/Closed Principle (OCP)
 *
 * "Software entities should be open for extension, but closed for modification."
 *
 * You should be able to add new behaviour WITHOUT editing existing, tested code.
 * Typically achieved with interfaces/abstractions + polymorphism instead of
 * growing if/else or switch statements.
 *
 * Smell: every time a new "type" is added, you edit the same switch statement.
 */

// ❌ BAD: adding a new shape means modifying this function
type ShapeBad =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number };

function areaBad(shape: ShapeBad): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    // Adding "triangle" => must edit this function again
  }
}

// ✅ GOOD: new shapes are added by creating new classes, not editing old ones
interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  area(): number {
    return this.width * this.height;
  }
}

// New requirement? Just extend — no existing code touched.
class Triangle implements Shape {
  constructor(private base: number, private height: number) {}
  area(): number {
    return 0.5 * this.base * this.height;
  }
}

// This function is CLOSED for modification but works with any future Shape
function totalArea(shapes: Shape[]): number {
  return shapes.reduce((sum, s) => sum + s.area(), 0);
}

// Usage
console.log(areaBad({ kind: "circle", radius: 1 }));
console.log(totalArea([new Circle(1), new Rectangle(2, 3), new Triangle(4, 5)]));

export {};
