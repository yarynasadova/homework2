1. https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript?fbclid=IwAR3J8Va36SHpGPklVPn72VW30ceR1FyrM_u_JOreFen6ko5boRsRBMkca6Y

class SmallestIntegerFinder {
 findSmallestInt(args) {
    var min = args[0];
    for (let i = 0; i <= args.length; i++) {
    let num = args[i]; 
     if (num<min) {
        min = num;      
     }
    }
    console.log(min);
    return min;
 }
}


2. https://www.codewars.com/kata/training-js-number-4-basic-data-types-array/train/javascript

function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr[0];
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1];
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el);
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop();
  return arr
}

3. https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript?fbclid=IwAR20sIQVX-TFa6-i-2IV8wJgdZjuhcm-NW2lJSYkE2LaF_X7-25XfiZmIcQ

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.replace(/T/g, "U");
}

4. https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript?fbclid=IwAR1u3duPEU9vBd8u6HVNhKT2nx1-PhbKMQ1aFEAvR0Hb4vKqqJfUwE8aw8g

function giveMeFive(obj){
var ar = [];
  for (var key in obj){
  if (key.length === 5){
   ar.push(key);
  }
   if (obj[key].length === 5) {
    ar.push(obj[key]);
  }
}
return ar;
}

5. https://www.codewars.com/kata/beginner-lost-without-a-map/train/javascript

function maps(x){
var ar = x.map(function(i) { return i*2 });
return ar;
}