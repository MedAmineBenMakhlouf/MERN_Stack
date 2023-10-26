function repeatHello(n) {
    var result = ""
    for(var i=0;i<n;i++){
        result+= "Hello \n"
    }
    return result
}

// console.log(repeatHello(5))

function repeatHelloRecursive(n){
    //  break point = base case
    if(n<=1){
        return "Hello \n"
    }
    return "Hello \n" + repeatHelloRecursive(n-1)
}
// console.log(repeatHelloRecursive(5));

/* 
  Recursive Factorial

  Input: integer
  Output: integer, product of ints from 1 up to given integer
  
  If less than zero, treat as zero.
  Bonus: If not integer, truncate (remove decimals).
  
  Experts tell us 0! is 1.
  
  rFact(3) = 6 (1*2*3)
  rFact(6.8) = 720 (1*2*3*4*5*6)
*/

const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;


function factorial(n) {
    if (n==0)
    {
        return 1
    }
    if(n<=1){
        return n
    }
    return Math.floor(n) * factorial(Math.floor(n)-1)
}

console.log(factorial(num3)); 