/**
 * S — Single Responsibility Principle (SRP)
 *
 * "A class should have one, and only one, reason to change."
 *
 * Each class/module should do ONE job. If a class handles business logic,
 * persistence, AND formatting, then a change to any of those concerns forces
 * you to touch (and risk breaking) the others.
 *
 * Ask yourself: "Who would ask me to change this class?" If the answer is
 * more than one stakeholder (e.g. accounting AND the DBA AND the UI team),
 * it has too many responsibilities.
 */

// ❌ BAD: one class with three reasons to change
class InvoiceBad {
  constructor(public customer: string, public amount: number) {}

  // Reason 1: business rules change (tax rate)
  calculateTotal(): number {
    return this.amount * 1.1;
  }

  // Reason 2: output format changes
  print(): string {
    return `Invoice for ${this.customer}: $${this.calculateTotal()}`;
  }

  // Reason 3: storage mechanism changes (file → DB)
  saveToDatabase(): void {
    console.log(`INSERT INTO invoices VALUES ('${this.customer}', ${this.amount})`);
  }
}

// ✅ GOOD: each class has a single responsibility

// Only business logic
class Invoice {
  constructor(public customer: string, public amount: number) {}

  calculateTotal(): number {
    return this.amount * 1.1;
  }
}

// Only presentation
class InvoicePrinter {
  print(invoice: Invoice): string {
    return `Invoice for ${invoice.customer}: $${invoice.calculateTotal()}`;
  }
}

// Only persistence
class InvoiceRepository {
  save(invoice: Invoice): void {
    console.log(`INSERT INTO invoices VALUES ('${invoice.customer}', ${invoice.amount})`);
  }
}

// Usage
const invoice = new Invoice("Acme Corp", 100);
console.log(new InvoicePrinter().print(invoice));
new InvoiceRepository().save(invoice);

export {};
