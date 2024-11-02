function replaceNumber(string){
  let parts = string.split('')

  parts = parts.map(part=>{
    if(!isNaN(part) && part.trim()!==''){
      return "!";
    }
     return part;
  });

  let result = parts.join('');
  console.log("The new results are:" + result);
  return result
}

replaceNumber("Hello123");