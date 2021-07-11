//Simple algo
class PrimeNumbersSimple {
    getPrimeNumbersUntil(n) {
        let arrayPrime = [];

        for (let i = 2; i <= n; i++)
            if (this.checkPrimeNumber(i))
                arrayPrime.push(i)

        return arrayPrime;
    }

    checkPrimeNumber(n) {
        let result = true;

        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                result = false;
                break;
            }
        }

        return result;
    }
}


module.exports = PrimeNumbersSimple;