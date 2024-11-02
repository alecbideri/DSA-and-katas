// Function that takes two numbers and returns their sum in binary
function add_string(a,b){
  // Add the numbers and convert the sum to binary string using toString(2)
  return (a+b).toString(2);
}


// other alternative without using the toString method to solve the binary

function add_string_2(a,b){
  let result = "";
  num = a+b ;

  while (num > 0){
    result = (num%2) + result ;
    num = Math.floor(num/2);
  }

  return result || "0";
}

// calling and testing the functions 

console.log(add_string_2(2,3));
console.log(add_string(2,3));