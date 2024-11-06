function breakCamelCase(word){
  return word.replace(/([A-Z])/g , ' $1');
}

console.log(breakCamelCase("brEak"));