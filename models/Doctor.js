const Traveler = require("./Traveler");

class Doctor extends Traveler {
  constructor(name, food, isHealthy) {
    super(food, isHealthy);
  }
  heal() {}
}

module.exports = Doctor;
