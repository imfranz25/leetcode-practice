interface IEngineer {
  salary: number;
  about: () => string;
}

class JuniorEngineer implements IEngineer {
  salary = 30000;

  public about() {
    return `The salary of a junior SE is ${this.salary}`;
  }
}

class MidEngineer implements IEngineer {
  salary = 100000;

  public about() {
    return `The salary of a Mid SE is ${this.salary}`;
  }
}

class SeniorEngineer implements IEngineer {
  salary = 250000;

  public about() {
    return `The salary of a Senior SE is ${this.salary}`;
  }
}

const EngineerMap = {
  junior: JuniorEngineer,
  mid: MidEngineer,
  senior: SeniorEngineer,
};

type EngineerMapType = keyof typeof EngineerMap;

class EngineerFactory {
  static getEngineerInstance(type: EngineerMapType): IEngineer {
    return new EngineerMap[type]();
  }
}

class EngineerService {
  static getEngineerSalary(type: EngineerMapType) {
    return EngineerFactory.getEngineerInstance(type).salary;
  }

  static getEngineerAbout(type: EngineerMapType) {
    return EngineerFactory.getEngineerInstance(type).about();
  }
}

console.log(EngineerService.getEngineerAbout("junior"));
console.log(EngineerService.getEngineerSalary("junior"));
