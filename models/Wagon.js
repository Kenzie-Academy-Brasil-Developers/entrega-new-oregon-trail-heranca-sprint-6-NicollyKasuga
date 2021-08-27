class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }

  get() {
    this.capacity;
  }
  set(_capacity) {
    this.capacity = _capacity;
  }

  getAvailableSeatCount() {
    return this.capacity - this.passengers.length;
  }

  join(passageiro) {
    if (this.getAvailableSeatCount() > 0) {
      this.passengers.push(passageiro);
    }
  }

  shouldQuarantine() {
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].isHealthy === false) {
        return true;
      }
    }
  }

  totalFood() {
    return this.passengers.reduce((result, num) => num.food + result, 0);
  }
}

module.exports = Wagon;
