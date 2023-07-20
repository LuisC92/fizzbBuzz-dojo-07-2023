const fizzBuzz = (number) => {
  // Start here

  // return fizzbuzz if number multiple of both 3 and 5
  // if (number % 3 === 0 && number % 5 === 0) {

  // if(number % 15 === 0) return "fizzbuzz";

  if(number % 15 === 0){
    return "fizzbuzz";
  }
  
  // return fizz if number multiple of 3.
  if (number % 3 === 0) {
    return "fizz";
  }

  // return buzz if number multiple of 5.
  if (number % 5 === 0) {
    return "buzz";
  }

  // return number
  return number;
  // every logic in one line
  // return number % 15 === 0 ? "fizzbuzz" : number % 3 === 0 ? "fizz": number % 5 === 0 ? "buzz" : number
};

module.exports = fizzBuzz;
