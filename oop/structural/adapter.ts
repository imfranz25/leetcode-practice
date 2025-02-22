interface Phone {
  useCharger(): void;
}

class IPhone implements Phone {
  useCharger(): void {
    console.log("Using lightning cable");
  }
}

class AndroidPhone implements Phone {
  useCharger(): void {
    console.log("Using micro USB cable");
  }
}

interface PowerOutlet {
  useOutlet(): void;
}

class PowerOutletAdapter implements PowerOutlet {
  private phone: Phone;

  constructor(phone: Phone) {
    this.phone = phone;
  }

  useOutlet(): void {
    this.phone.useCharger();
  }
}

const iphone = new IPhone();
const androidPhone = new AndroidPhone();
const iPhoneWithAdapter = new PowerOutletAdapter(iphone);
const androidPhoneWithAdapter = new PowerOutletAdapter(androidPhone);

iPhoneWithAdapter.useOutlet();
androidPhoneWithAdapter.useOutlet();
