var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(Tiger) {
  kittens.push(Tiger)
  return kittens;
}
//passed
function destructivelyPrependKitten(Bob) {
  kittens.unshift(Bob)
  return kittens;
}
//passed
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
//passed
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
//passed

function appendKitten(Broom) {
  var newKittens = ["Broom"];
  newKittens = kittens.concat(newKittens);
  return newKittens;
}
//passed
function prependKitten(Bob) {
  var newKittens = ["Bob"];
  newKittens = newKittens.concat(kittens);
  return kittens;
}
