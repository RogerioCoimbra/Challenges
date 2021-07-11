const prime = require("get-primes");
const PrimeNumbersSimple = require("../algorithms/PrimeNumbersSimple");
const PrimeNumbersSieve = require("../algorithms/PrimeNumbersSieve");
const PrimeNumbersSegmentedSieve = require("../algorithms/PrimeNumbersSegmentedSieve");

//const number = 100000000;
  const number = 100000000;

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

/* console.log("");
console.log("My PrimeNumbersSimple");
console.time("My primeNumbersSimple");
let primeNumbersSimple = new PrimeNumbersSimple().getPrimeNumbersUntil(number);
console.log(primeNumbersSimple.length);
console.log(primeNumbersSimple);
console.timeEnd("My primeNumbersSimple"); */

console.log("");
console.log("My PrimeNumbersSieve");
console.time("My PrimeNumbersSieve");
let primeNumbersSieve = new PrimeNumbersSieve().getPrimeNumbersUntil(number);
console.log(primeNumbersSieve.length);
console.log(primeNumbersSieve);
console.timeEnd("My PrimeNumbersSieve");

console.log("");
console.log("My PrimeNumbersSegmentedSieve");
console.time("My PrimeNumbersSegmentedSieve");
let primeNumbersSegmentedSieve = new PrimeNumbersSegmentedSieve().getPrimeNumbersUntil(number);
console.log(primeNumbersSegmentedSieve.length);
console.log(primeNumbersSegmentedSieve);
console.timeEnd("My PrimeNumbersSegmentedSieve");


setTimeout(() => { }, 100);