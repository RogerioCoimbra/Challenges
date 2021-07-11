//Implements sieve of Eratosthenes algo.
class PrimeNumbersSieve {
    getPrimeNumbersUntil(n) {
        let arrayPrime = [];
        let arrayPrimeNotWorked = [];

        for (let i = 2; i < n; i++)
        arrayPrimeNotWorked[i] = 0;

        for (let i = 2; i < n; i++)
            if (arrayPrimeNotWorked[i] == 0){
                arrayPrime.push(i)

                for (let j = 1; j*i<= n; j++) {
                    arrayPrimeNotWorked[j*i] = i;
                }
            }

        return arrayPrime;
    }
}


module.exports = PrimeNumbersSieve;