function narcissistic(value){
  
  // validation input 

  if(!Number.isInteger(value) && value <0){
    throw new Error("Input must be a positive number");
  }
  
  const numstr = String(value);
  const power = numstr.length ;

  let sum = 0 ;

  for (let digit of numstr){
    sum+= Math.pow(Number(digit),power);
  }

  if(sum===value){
    console.log(sum + ' is a narcissistic number');
  }
}

narcissistic(153)