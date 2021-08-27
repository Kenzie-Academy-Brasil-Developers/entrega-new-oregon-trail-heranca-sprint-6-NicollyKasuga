const Traveler = require("./Traveler");

class Hunter extends Traveler {
  constructor(name, isHealthy) {
    super(isHealthy);
    (this.name = name), (this.food = 2);
  }

  giveFood(traveler, numOfFoodUnits) {
    if (this.food > numOfFoodUnits) {
      traveler.food += numOfFoodUnits;
      this.food -= numOfFoodUnits;
    }
  }

  eat() {
    if (this.food < 2) {
      this.food = 0;
      this.isHealthy = false;
    } else {
      this.food -= 2;
      this.isHealthy = true;
    }
  }

  hunt() {
    return (this.food += 5);
  }
}

module.exports = Hunter;
