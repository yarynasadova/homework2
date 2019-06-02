1. https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript?fbclid=IwAR3YwIirLDrWbMEi3QnLirH5KVQbc0aUkBW_zz8PSusLp2N2j1D8uEhPfbY

function circleCircumference(circle) {
 var circumference = (circle.radius *2*Math.PI)
  return circumference
}

2. https://www.codewars.com/kata/training-js-number-13-number-object-and-its-properties/train/javascript?fbclid=IwAR3zadSZXL2m9CNU5gMRsLXfsp0fK96zF8Q8ysb8OdjJM2-8S-k9PyLCT9Q

function whatNumberIsIt(n){
  if (n == Number.MAX_VALUE) return "Input number is Number.MAX_VALUE";
  if (n == Number.MIN_VALUE) return "Input number is Number.MIN_VALUE";
  if (isNaN(n)) return "Input number is Number.NaN";
  if (n == -Infinity) return "Input number is Number.NEGATIVE_INFINITY";
  if (n == Infinity) return "Input number is Number.POSITIVE_INFINITY";
  return "Input number is " + n;
}


3. https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n){

	var res = []

	for (let i = 0; i< n; i++){
		res.push(function(){
			return i
		})
	}
	return res
}
