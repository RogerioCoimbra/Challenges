const prime = require("get-primes");
const PrimeNumbers = require("../../node/algorithms/PrimeNumbers");

const number = 100;

console.log("");
console.log("lib");
console.time("lib");
console.log(prime(number));
console.timeEnd("lib");

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
console.log("Func");
console.time("Func");
console.log(sort_prime(number));
console.timeEnd("Func");

console.log("");
console.log("MyClass");
console.time("MyClass");
console.log(new PrimeNumbers().getPrimeNumbersUntil(number));
console.timeEnd("MyClass");


  setTimeout(() => { }, 100);