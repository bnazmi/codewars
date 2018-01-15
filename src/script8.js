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
  squareDigits(232);