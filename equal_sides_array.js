function equalSidesOfArray(arr){
  let totalSum = arr.reduce((acc,num)=> acc+num , 0);

  let leftSum = 0 ;

  for (var i = 0 ; i < arr.length ; i++){
    let rightSum = totalSum - leftSum - arr[i];

    if (rightSum===leftSum){
      return i ;
    }

    leftSum+= arr[i];
  }

  return -1 ;
}

console.log(equalSidesOfArray([1,2,3,4,3,2,1]));