/**
 * I — Interface Segregation Principle (ISP)
 *
 * "Clients should not be forced to depend on methods they do not use."
 *
 * Prefer several small, focused interfaces over one large "fat" interface.
 * Classes then implement only the capabilities they actually have.
 *
 * Smell: implementations full of empty methods or `throw new Error("Not implemented")`.
 */

// ❌ BAD: one fat interface forces every device to implement everything
interface MachineBad {
  print(doc: string): void;
  scan(doc: string): void;
  fax(doc: string): void;
}

class OldPrinterBad implements MachineBad {
  print(doc: string): void {
    console.log(`Printing: ${doc}`);
  }
  scan(_doc: string): void {
    throw new Error("Not supported"); // forced to implement
  }
  fax(_doc: string): void {
    throw new Error("Not supported"); // forced to implement
  }
}

// ✅ GOOD: small, role-specific interfaces
interface Printer {
  print(doc: string): void;
}

interface Scanner {
  scan(doc: string): void;
}

interface Fax {
  fax(doc: string): void;
}

// Implements only what it can do
class SimplePrinter implements Printer {
  print(doc: string): void {
    console.log(`Printing: ${doc}`);
  }
}

// Combine interfaces when a class genuinely supports more
class MultiFunctionPrinter implements Printer, Scanner, Fax {
  print(doc: string): void {
    console.log(`Printing: ${doc}`);
  }
  scan(doc: string): void {
    console.log(`Scanning: ${doc}`);
  }
  fax(doc: string): void {
    console.log(`Faxing: ${doc}`);
  }
}

// Clients depend only on the capability they need
function printReport(printer: Printer): void {
  printer.print("Quarterly report");
}

// Usage
new OldPrinterBad().print("Legacy doc");
printReport(new SimplePrinter());
printReport(new MultiFunctionPrinter());

export {};
