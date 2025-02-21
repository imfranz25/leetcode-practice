class Database {
  private static instance: Database;
  private constructor() {}

  public static getInstance(): Database {
    if (!this.instance) {
      this.instance = new Database();
    }

    return this.instance;
  }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log("db1", db1);
console.log("db2", db2);
console.log("isEqual", db1 === db2);
