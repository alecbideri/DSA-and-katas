function replace_numbers(string){
  let new_word = string.split('')

  new_word = new_word.map(word=>{
    if(!isNaN(word) && word.trim()!==''){
      return '!';
    }
    return word 
  });

  const  result = new_word.join('');
  return result;
}

console.log(replace_numbers('Hello123'));