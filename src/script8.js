/**
 Find Maximum and Minimum Values of a List


Your task is to make two functions, max and min (maximum and minimum in PHP) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

#Examples

max([4,6,2,1,9,63,-134,566]) returns 566
min([-52, 56, 30, 29, -54, 0, -110]) returns -110
max([5]) returns 5
min([42, 54, 65, 87, 0]) returns 0

 */

var min = function(list){
    for(var i=1;i < list.length ;i++){
        if(list[i]<list[0]){
            list[0]=list[i];
        }
    }
    return list[0];
}

var max = function(list){
    for(var i=1;i < list.length ;i++){
        if(list[i]>list[0]){
            list[0]=list[i];
        }
    }
    return list[0];
}
max([4,6,2,1,9,63,-134,566]);
min([-52, 56, 30, 29, -54, 0, -110]);

/**
 * A Needle in the Haystack
 Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle

So
 */

function findNeedle(haystack) {
    if(haystack.indexOf('needle') === -1){
        return 'can not found the needle at haystack';        
    }else {
        return 'found the needle at position '+haystack.indexOf('needle');
        
    }
  }

/**
 * Grasshopper - Summation
 
Summation

Write a program that finds the summation of every number between 1 and num. 
The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
 */

var summation = function (num) {
    var sum=1;
    for(var i=num;i>1;i--){
        sum=sum+i;
    }
    return sum;
  }

/**
 * Square Every Digit
 * 
 *  Welcome. In this kata, you are asked to square every digit of a number.

    For example, if we run 9119 through the function, 811181 will come out.

    Note: The function accepts an integer and returns an integer
 */


function squareDigits(num){
    var numToString = num.toString();
    var seqNum=Math.pow(numToString[0],2);
    for(var i =1;i < numToString.length;i++){
        seqNum=  seqNum +''+ Math.pow(numToString[i],2) ;
    }
    return parseInt(seqNum);
  }

/**
 * Remove String Spaces

Simple, remove the spaces from the string, then return the resultant string.
noSpace('8aaaaa dddd r     ');
 */

function noSpace(x){
    return x.replace(/\s/g,'')
  }

/**
 * Array Deep Count

 Array.prototype.length will give you the number of top-level elements in an array.

Your task is to create a function deepCount that returns the number of ALL elements within an array,
 including any within inner-level arrays.

For example:

deepCount([1, 2, 3]);  
//>>>>> 3
deepCount(["x", "y", ["z"]]);  
//>>>>> 4
deepCount([1, 2, [3, 4, [5]]]);  
//>>>>> 7
The input will always be an array.
// Solution
  1-GET lenth of top level array
  2-Check if any element isArray 
  3-If true we will call function again
  4-sumation evry array element length  
 */
// []
// [1,2]
// [1,[2,[3,2]]]
function deepCount(a){
    var numofAllElment=a.length;
    for(var i = 0; i < numofAllElment; i++){
        if(Array.isArray(a[i])) {
            numofAllElment += deepCount(a[i]);
          } 
    }
    return numofAllElment;
  }


/**
 * Find the missing term in an Arithmetic Progression
An Arithmetic Progression is defined as one in which there is a constant difference between
 the consecutive terms of a given series of numbers. 
 You are provided with consecutive elements of an Arithmetic Progression. 
 There is however one hitch: exactly one term from the original series is missing from the set of numbers
  which have been given to you. The rest of the given series is the same as the original AP.
  Find the missing term.

You have to write the function findMissing(list), 
list will always be at least 3 numbers. The missing term will never be the first or last one.

Example :

findMissing([1,3,5,9,11]) == 7
PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!

sample 
[1,3,5,9,11]
[1, 3, 4]
[5,15,20]
[9,27,36,45]
[10,8,4,2]
[1,2,3,4]

Role
at least 3 elment 
the missing never be a first or last element  
hints
Common Difference = lastelment - first elment / lenth-1
 */
var findMissing = function (list) {  
    var missingElement;
    var commonDifference=(list[list.length - 1] - list[0]) / list.length;
    for(var i = 0 ;i < list.length -1;i++){
        if((list[i+1]-list[i])!==commonDifference){
            missingElement=list[i]+commonDifference;
        }
    }
    return missingElement ;
    
  }

/**
 * Sum of Digits / Digital Root
In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

Here's how it works (Ruby example given):

digital_root(16)
=> 1 + 6
=> 7

7777 =>21=>3
 */
function digital_root(n) {
   if(n < 10 ){
    return n;
       
   }else {
       var numberToString=n.toString();
       var sum=0;
       for(var i=0 ;i< numberToString.length ;i++){
            sum += parseInt(numberToString[i]);
       }
      return digital_root(sum);       
   }
   
  }

/**
 * Calculating with Functions
This time we want to write calculations using functions and get the results. Let's have a look at some examples:


Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
 
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
*/

function recur(n, op) { return (op) ? op.call(op, n) : n; }
function zero(op)     { return recur(0, op); }
function one(op)      { return recur(1, op); }
function two(op)      { return recur(2, op); }
function three(op)    { return recur(3, op); }
function four(op)     { return recur(4, op); }
function five(op)     { return recur(5, op); }
function six(op)      { return recur(6, op); }
function seven(op)    { return recur(7, op); }
function eight(op)    { return recur(8, op); }
function nine(op)     { return recur(9, op); }

function plus(num) {
    return function(res) {
        return res + num;
    };
}
function minus(num) {
    return function(res) {
        return res - num;
    };
}
function times(num) {
    return function(res) {
        return res * num;
    };
}
function dividedBy(num) {
    return function(res) {
        return res / num;
    };
}

//clever solotion 

var n = function(digit) {
    return function(op) {
      return op ? op(digit) : digit;
    }
  };
  var zero = n(0);
  var one = n(1);
  var two = n(2);
  var three = n(3);
  var four = n(4);
  var five = n(5);
  var six = n(6);
  var seven = n(7);
  var eight = n(8);
  var nine = n(9);
  
  function plus(r) { return function(l) { return l + r; }; }
  function minus(r) { return function(l) { return l - r; }; }
  function times(r) { return function(l) { return l * r; }; }
  function dividedBy(r) { return function(l) { return l / r; }; }


  /**
   * RGB To Hex Conversion
    The rgb() method is incomplete. Complete the method so that passing in RGB decimal 
    values will result in a hexadecimal representation being returned. 
    The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that 
    fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

   */
  function rgb(r, g, b){ 
    // complete this function 
    var hexaColor = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 
    function checkColor(color){
        if(color < 0){
            return 0;
        }else if(color >255){
            return 255;
        }else {
            return color;
        }
    }
    function convColor(color){
        return hexaColor[(checkColor(color)-(checkColor(color)%16))/16]+""+hexaColor[checkColor(color)%16];
    }
    return convColor(r)+""+convColor(g)+""+convColor(b);
  }

  /**
   * Replace With Alphabet Position
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

a being 1, b being 2, etc.

As an example:

alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.
A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
   */

  function alphabetPosition(text) {
     var alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
     var alphabetPosition='';
     var checkChar=0;     
     for(var i=0;i<text.length;i++){
         if(alphabetArray.indexOf(text[i].toLowerCase()) !==-1){
            alphabetPosition += ( (i==text.length || checkChar === 0) ? +'':' ') + (alphabetArray.indexOf(text[i].toLowerCase())+1) ;
            checkChar++;
            
        }
     }
     return alphabetPosition;
  }