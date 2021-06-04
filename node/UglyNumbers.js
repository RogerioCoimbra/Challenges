let currentUglyNumber = 1;
let currentPosition = 2;

class Solution {



    getNthUglyNo(N){
        

        
        if(N==1)
            return 1;
        
        while(true)
        {
            if(this.checkUgly2(currentPosition) || this.checkUgly3(currentPosition) || this.checkUgly5(currentPosition))
            {
                currentUglyNumber++;
            }
            
            alert("".concat("if(N==currentUglyNumber) ", " - ", N, " - ", currentUglyNumber, " - ", currentPosition));
            
            if(N==currentUglyNumber) 
                return currentPosition;
            
						currentPosition++;
        }
    }
    
    checkUgly2(N){
    alert("".concat("checkUgly2: ", N, " - ", N%2===0, " - ", currentUglyNumber, " - ", currentPosition));
        return N%2===0;
    }
    
    checkUgly3(N){
    alert("".concat("checkUgly3: ", N, " - ", N%3===0, " - ", currentUglyNumber, " - ", currentPosition));
        return N%3===0;
    }
    
    checkUgly5(N){
    alert("".concat("checkUgly5: ", N, " - ", N%5===0, " - ", currentUglyNumber, " - ", currentPosition));
        return N%5===0;
    }
}





let solution = new Solution();
alert(solution.getNthUglyNo(11));





//User function Template for javascript

/**
 * @param {number} N
 * @return {number}
*/

/* class Solution {

    getNthUglyNo(N){
        
        //code here
        
    }
}
 */