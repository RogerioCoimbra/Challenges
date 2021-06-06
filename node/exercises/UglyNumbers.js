// { Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();    
    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.getNthUglyNo(N);
        console.log(res);
    }

    setTimeout(() => { process.exit() }, 100);
}// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @return {number}
*/

class Solution {

    //Is a ugly number if:
    // - N > 5 and not a prime;
    // - not is divisible for prime bigger than 5 


//25 -> 54 OK
//26 -> 58 NOK (Deveria ser o 60)

    getNthUglyNo(number){
        let primeNumbers = new PrimeNumbers();

        let currentUglyNumber = 1;
        let currentPosition = 1;

        if(number==currentPosition)
            return currentUglyNumber;
        
        let primes = primeNumbers.getPrimeNumbersUntil(number);

        console.log(primes);

        while(true)
        {
            currentPosition++;

            if(primes.filter(element => element <= 5).some(element => this.checkUglyPrime(currentPosition, element)))
            {
                 if(primes.filter(element => element > 5).every(element => !this.checkUglyPrime(currentPosition, element)))
                    currentUglyNumber++;
            }
            
            if(number==currentUglyNumber) 
                return currentPosition;
        }
    }

    checkUglyPrime(number, prime){
        return number%prime===0;
    }
}

class PrimeNumbers{
    getPrimeNumbersUntil(n){
        let arrayPrime = [];

        for (let i=2; i<=n; i++)
            if(this.checkPrimeNumber(i))
                arrayPrime.push(i)

        return arrayPrime;
    }

    checkPrimeNumber(n){
        let result = true;

        for (let i=2; i<n; i++) {
            if(n%i===0)
                result = false;
        }

        return result;
    }
}

/**
 Ugly numbers are numbers whose only prime factors are 2, 3 or 5. The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the first 11 ugly numbers. By convention, 1 is included. Write a program to find Nth Ugly Number.

Example 1:

Input:
N = 10
Output: 12
Explanation: 10th ugly number is 12.
Example 2:

Input:
N = 4
Output: 4
Explanation: 4th ugly number is 4.
 */

process.stdin.emit('data', '1\n26');
process.stdin.emit('end');