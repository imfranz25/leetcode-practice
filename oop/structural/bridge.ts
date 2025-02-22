interface IPaymentProcessor {
  pay(amount: number): void;
}

class PayPal implements IPaymentProcessor {
  pay(amount: number): void {
    console.log(`Paying ${amount} using PayPal`);
  }
}

class Stripe implements IPaymentProcessor {
  pay(amount: number): void {
    console.log(`Paying ${amount} using Stripe`);
  }
}

class PaymentProcessor {
  protected paymentProcessor: IPaymentProcessor;

  constructor(paymentProcessor: IPaymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  pay(amount: number): void {
    this.paymentProcessor.pay(amount);
  }
}

const paypal = new PayPal();
const stripe = new Stripe();
const paymentProcessorPaypal = new PaymentProcessor(paypal);
const paymentProcessorStripe = new PaymentProcessor(stripe);

paymentProcessorPaypal.pay(100);
paymentProcessorStripe.pay(100);
