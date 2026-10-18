/**
 * L — Liskov Substitution Principle (LSP)
 *
 * "Objects of a superclass should be replaceable with objects of a subclass
 *  without breaking the program."
 *
 * A subclass must honour the contract (expectations) of its parent:
 *  - don't throw where the parent didn't
 *  - don't strengthen preconditions or weaken postconditions
 *  - don't silently change behaviour callers rely on
 *
 * Smell: `if (x instanceof SomeSubclass)` checks, or overridden methods that
 * throw "Not supported".
 */

// ❌ BAD: Penguin IS-A Bird, but breaks the Bird contract
class BirdBad {
  fly(): string {
    return "Flying high!";
  }
}

class SparrowBad extends BirdBad {}

class PenguinBad extends BirdBad {
  fly(): string {
    throw new Error("Penguins can't fly!"); // surprises any code expecting a Bird
  }
}

function makeBirdFly(bird: BirdBad): string {
  return bird.fly(); // crashes when given a PenguinBad
}

// ✅ GOOD: model the hierarchy so every subtype keeps its parent's promises
abstract class Bird {
  abstract move(): string;
}

abstract class FlyingBird extends Bird {
  abstract fly(): string;
  move(): string {
    return this.fly();
  }
}

class Sparrow extends FlyingBird {
  fly(): string {
    return "Sparrow flapping through the sky";
  }
}

class Penguin extends Bird {
  move(): string {
    return "Penguin waddling and swimming";
  }
}

// Any Bird can be substituted here safely
function moveAll(birds: Bird[]): string[] {
  return birds.map((b) => b.move());
}

// Only birds that can fly are accepted here — enforced by the type system
function launch(bird: FlyingBird): string {
  return bird.fly();
}

// Usage
console.log(makeBirdFly(new SparrowBad()));
// makeBirdFly(new PenguinBad()); // 💥 runtime error

console.log(moveAll([new Sparrow(), new Penguin()]));
console.log(launch(new Sparrow()));
// launch(new Penguin()); // ❌ compile-time error — caught early

export {};
