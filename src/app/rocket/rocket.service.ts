import { Injectable } from '@angular/core';

export enum Gender {
  male = 0,
  female = 1
}


export interface Astronaut {
  displayName: string,
  gender: Gender,
  height: number,
  weight: number,
}


export interface Rocket {
  fuel: number,
  crew: Astronaut[],
}


@Injectable({
  providedIn: 'root'
})
export class RocketService {

  constructor() { }

  public delay(ms: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, ms);
    })
  }

  public async launch(rocket: Rocket) {
    await this.delay(1000);
    if (rocket.fuel < 100) {
      console.log("Out of fuel");
      return false;
    }
    if (rocket.crew.length == 0) {
      console.log("No crew");
      return false;
    }
    console.log("Launch");
    return true;
  }

  public async refill(rocket: Rocket) {
    while (rocket.fuel < 100) {
      rocket.fuel++;
      await this.delay(100);
    }
  }

  public async prepare(rocket: Rocket, crew: Astronaut[]) {
    rocket.crew = [];
    for (let astronaut of crew) {
      rocket.crew.push(astronaut);
      await this.delay(1000);
    }
  }

  public async planA(): Promise<any> {
    console.time("Plan A");
    let rocket: Rocket = {
      fuel: 0,
      crew: []
    };

    console.log("Init plan A");
    await this.prepare(rocket, [{
      displayName: "Alice",
      gender: Gender.female,
      weight: 70,
      height: 180
    }, {
      displayName: "Henry",
      gender: Gender.male,
      weight: 72,
      height: 190
    }, {
      displayName: "Tom",
      gender: Gender.male,
      weight: 78,
      height: 200
    }]);
    console.log("Refill Rocket");
    await this.refill(rocket);
    console.log("Launch Rocket");
    await this.launch(rocket);
    console.timeEnd("Plan A");
  }




}
