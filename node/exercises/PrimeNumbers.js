const prime = require("get-primes");
const PrimeNumbers = require("../../node/algorithms/PrimeNumbers");

const number = 100000;

function sort_prime(num) {
  var prime_num1 = [], prime_num2 = [];
  for (var i = 0; i <= num; i++) {
    prime_num2.push(true);
  }
  for (var i = 2; i <= num; i++) {
    if (prime_num2[i]) {
      prime_num1.push(i);
      for (var j = 1; i * j <= num; j++) {
        prime_num2[i * j] = false;
      }
    }
  }

  return prime_num1;
}

console.log("");
console.log("lib");
console.time("lib");
let primeLib = prime(number);
console.log(primeLib.length);
console.log(primeLib);
console.timeEnd("lib");

console.log("");
console.log("Func");
console.time("Func");
let primeFunc = sort_prime(number);
console.log(primeFunc.length);
console.log(primeFunc);
console.timeEnd("Func");

console.log("");
console.log("MyClass");
console.time("MyClass");
let primeMyClass = new PrimeNumbers().getPrimeNumbersUntil(number);
console.log(primeMyClass.length);
console.log(new PrimeNumbers().getPrimeNumbersUntil(number));
console.timeEnd("MyClass");


setTimeout(() => { }, 100);