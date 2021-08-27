const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { doutor } = require("./../../app");
const Traveler = require("../../models/Traveler");
const Doctor = require("../../models/Doctor");

Given("um  Doctor de nome {string}", function (string) {
  // Write code here that turns the phrase above into concrete actions
  doutor.name = string;
});

Given("sempre começa a viagem com {int} refeição", function (int) {
  // Given('ele sempre começa a viagem com {float} refeição', function (float) {
  // Write code here that turns the phrase above into concrete actions
  doutor.food = 1;
});

Given("sempre começa a viagem saudável.", function () {
  // Write code here that turns the phrase above into concrete actions
  doutor.isHealthy = true;
  assert.strictEqual(doutor.isHealthy, true);
});

When("um viajante saudável chegar", function () {
  // Write code here that turns the phrase above into concrete actions
  Traveler.isHealthy = true;
});

When("um viajante doente chegar", function () {
  // Write code here that turns the phrase above into concrete actions
  if (!Traveler.isHealthy) {
    doutor.heal(Traveler);
  }
});

Then("ele não precisará cura-lo", function () {
  // Write code here that turns the phrase above into concrete actions
  return Traveler.isHealthy;
});

Then("ele irá cura-lo", function () {
  // Write code here that turns the phrase above into concrete actions
  return Traveler.isHealthy;
});
