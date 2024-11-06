// 2 solutions 

// solution 1 , very short and consice . 

function FindShort(s){
  return Math.min(...s.split(" ").map(s=>s.length));
}

// solution 2 , very descriptive 

function FindShorts(s){
  const words = s.split(' ');

  let minLength = words[0].length;

  for (var i = 0 ; i < words.length ; i++){
    if (words[i].length < minLength){
      minLength = words[i].length ;
    }
  }

  return minLength ; 
}

console.log(FindShort("My name"));
console.log(FindShorts("My name"));