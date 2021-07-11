//Implements segmented sieve of Eratosthenes algo.
//This algo is better for large array.
class PrimeNumbersSegmentedSieve {
    getPrimeNumbersUntil(n) {
        let arrayPrime = [];
        let arrayPrimeNotWorked = [];

        for (let i = 2; i < n; i++)
            arrayPrimeNotWorked[i] = 0;

        for (let i = 2; i < n; i++) {

            if (arrayPrimeNotWorked[i] == 0) {
                arrayPrimeNotWorked[i] = i
                arrayPrime.push(i)
            }

            for (let j = 0; arrayPrime[j] <= arrayPrimeNotWorked[i] && (i * arrayPrime[j]) <= n; j++) {
                arrayPrimeNotWorked[i * arrayPrime[j]] = arrayPrime[j];
            }
        }

        return arrayPrime;
    }
}


module.exports = PrimeNumbersSegmentedSieve;