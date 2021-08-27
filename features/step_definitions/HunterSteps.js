const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { cacador } = require("./../../app");
const Traveler = require("../../models/Traveler");
const Hunter = require("../../models/Hunter");

Given("um Hunter de nome {string}", function (string) {
  // Write code here that turns the phrase above into concrete actions
  cacador.nome = string;
});

Given("ele sempre comecara viagem com {int} refeicao", function (float) {
  // Given('ele sempre comeca a viagem com {float} refeicao', function (float) {
  // Write code here that turns the phrase above into concrete actions
  cacador.food = float;
});

Given("ele sempre começara a viagem saudável.", function () {
  // Write code here that turns the phrase above into concrete actions
  cacador.isHealthy = true;
  assert.strictEqual(cacador.isHealthy, true);
});

When("ele sai para cacar {int} vezes", function (int) {
  // When('ele sai para cacar {float} vezes', function (float) {
  // Write code here that turns the phrase above into concrete actions
  for (let i = 0; i < int; i++) {
    cacador.hunt();
  }
});

When("um Hunter parar pra comer {int} vez", function (int) {
  // When('um Hunter parar pra comer {float} vezes', function (float) {
  // Write code here that turns the phrase above into concrete actions
  for (let i = 0; i < int; i++) {
    cacador.eat();
  }
});

When("o Hunter quiser doar {int} para o {string}", function (int, string) {
  // When('o Hunter quiser doar {float} para o {string}', function (float, string) {
  // Write code here that turns the phrase above into concrete actions
  cacador.giveFood(string, int);
});

When("ele tiver {int} de refeição", function (int) {
  // When('ele tiver {float} de refeição', function (float) {
  // Write code here that turns the phrase above into concrete actions
  assert.strictEqual(cacador.isHealthy, true);
});

When("um Hunter parar pra comer {int} vezes", function (int) {
  // When('um Hunter parar pra comer {float} vezes', function (float) {
  // Write code here that turns the phrase above into concrete actions
  for (let i = 0; i < int; i++) {
    cacador.eat();
  }
});

Then("o Hunter nao ficara doente", function () {
  // Write code here that turns the phrase above into concrete actions
  cacador.isHealthy = true;
});

Then("o Hunter ficara doente", function () {
  // Write code here that turns the phrase above into concrete actions
  cacador.isHealthy = false;
});

Then("ele fica com {int} de refeição", function (int) {
  // Then('ele fica com {float} de refeição', function (float) {
  // Write code here that turns the phrase above into concrete actions
  cacador.food = int;
});
Then("a quantidade de refeicao e igual a {int}", function (int) {
  // Then('a quantidade de refeicao e igual a {float}', function (float) {
  // Write code here that turns the phrase above into concrete actions
  assert.strictEqual(cacador.food, int);
});
