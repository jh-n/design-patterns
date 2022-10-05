/**
 * 接口隔离原则
 */

interface IRepairable {
  repair(): void;
}
interface ISellable {
  sell(): void;
}

class Car implements IRepairable, ISellable {
  repair(): void {}
  sell(): void {}
}

class Mechanic {
  repair(vehicle: IRepairable) {}
}
class Dealer {
  sell(vehicle: ISellable) {}
}
