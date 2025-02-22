type Invoice = {
  product: string;
  total: number;
};

type InvoiceBuilderInput = {
  product: string;
  amount: number;
  quantity: number;
  taxRate: number;
};

class InvoiceBuilder<T extends Partial<InvoiceBuilderInput>> {
  #actual: T;

  private constructor(actual: T) {
    this.#actual = actual;
  }

  static create(product: string) {
    return new InvoiceBuilder({ product });
  }

  setAmount(amount: number) {
    return new InvoiceBuilder({ ...this.#actual, amount });
  }

  setQuantity(quantity: number) {
    return new InvoiceBuilder({ ...this.#actual, quantity });
  }

  setTaxRate(taxRate: number) {
    return new InvoiceBuilder({ ...this.#actual, taxRate });
  }

  build(this: InvoiceBuilder<InvoiceBuilderInput>): Invoice {
    return {
      product: this.#actual.product,
      total:
        this.#actual.amount *
        this.#actual.quantity *
        (1 + this.#actual.taxRate),
    };
  }
}

const invoiceData = InvoiceBuilder.create("Laptop")
  .setAmount(1000)
  .setQuantity(2)
  .setTaxRate(0.2)
  .build();

console.log("Invoice:", invoiceData);
