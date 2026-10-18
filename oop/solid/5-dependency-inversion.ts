/**
 * D — Dependency Inversion Principle (DIP)
 *
 * 1. "High-level modules should not depend on low-level modules.
 *     Both should depend on abstractions."
 * 2. "Abstractions should not depend on details.
 *     Details should depend on abstractions."
 *
 * In practice: depend on interfaces, and inject concrete implementations
 * (usually via the constructor — "dependency injection"). This makes code
 * easy to swap, extend, and unit test with mocks.
 *
 * Smell: `new ConcreteThing()` hard-coded inside business logic.
 */

// ❌ BAD: high-level service is welded to a specific low-level class
class MySQLDatabaseBad {
  save(data: string): void {
    console.log(`MySQL: saving "${data}"`);
  }
}

class UserServiceBad {
  private db = new MySQLDatabaseBad(); // hard dependency — can't swap or mock

  register(name: string): void {
    this.db.save(name);
  }
}

// ✅ GOOD: both sides depend on an abstraction
interface Database {
  save(data: string): void;
}

// Low-level details implement the abstraction
class MySQLDatabase implements Database {
  save(data: string): void {
    console.log(`MySQL: saving "${data}"`);
  }
}

class MongoDatabase implements Database {
  save(data: string): void {
    console.log(`MongoDB: saving "${data}"`);
  }
}

class InMemoryDatabase implements Database {
  public records: string[] = [];
  save(data: string): void {
    this.records.push(data);
  }
}

// High-level module depends only on the interface, injected from outside
class UserService {
  constructor(private db: Database) {}

  register(name: string): void {
    this.db.save(name);
  }
}

// Usage — swap implementations freely without touching UserService
new UserServiceBad().register("Alice");
new UserService(new MySQLDatabase()).register("Bob");
new UserService(new MongoDatabase()).register("Carol");

// Great for tests: inject a fake
const fakeDb = new InMemoryDatabase();
new UserService(fakeDb).register("Dave");
console.log(fakeDb.records); // ["Dave"]

export {};
