interface IPrototype {
  clone(type: number): IPrototype;
}

class ConcretePrototype implements IPrototype {
  field: number[];

  constructor(field: number[] = []) {
    this.field = field;
  }

  public clone(type: number): IPrototype {
    switch (type) {
      case 1:
        return Object.assign({}, this); // shallow copy
      case 2:
        return JSON.parse(JSON.stringify(this)); // deep copy
      default:
        throw new Error("Invalid type");
    }
  }
}

const objectOne = new ConcretePrototype([1, 2, 3]);
const objectTwo = objectOne.clone(2);

console.log("Object one:", objectOne);
console.log("Object two:", objectTwo);

objectOne.field.push(4);

console.log("Object one:", objectOne);
console.log("Object two:", objectTwo);
