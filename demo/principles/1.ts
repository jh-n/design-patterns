interface Vehicle {
  run(vehicle: string): void;
}

class RoadVehicle implements Vehicle {
  public run(vehicle: string) {
    console.log(vehicle, "runs on the road");
  }
}

class AirVehicle implements Vehicle {
  public run(vehicle: string) {
    console.log(vehicle, "flies in the sky");
  }
}

class MAIN {
  public static main() {
    const roadVehicle: Vehicle = new RoadVehicle();
    const airVehicle: Vehicle = new AirVehicle();
    roadVehicle.run("Car");
    roadVehicle.run("Motocycle");
    airVehicle.run("Plane");
  }
}

MAIN.main();
