function duckduckgoose(players,goose){
  return players[(goose-1)%players.length].name
}

const players = [
  {name : "Alec"},
  {name : "Bideri"},
  {name:"Joseph"}
];

console.log(duckduckgoose(players , 10));