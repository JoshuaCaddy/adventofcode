const {readFileSync, promises: fsPromises} = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8'); 
  const arr = contents.split(/\r?\n/);
  return arr;
}

let data = syncReadFile('./day2Input.txt');
let totalScore = 0

// Day2 part 1

for(let i = 0; i <= data.length; i++){
  switch(data[i]){
    case ('A X'):
    case ('B X'):
    case ('C X'):  
      totalScore += 1;
      break;
    case ('A Y'):
    case ('B Y'):
    case ('C Y'):  
      totalScore += 2;
      break;
    case ('A Z'):
    case ('B Z'):
    case ('C Z'):  
      totalScore += 3;
      break;  
  }
  switch(data[i]){
    case ('A X'):
    case ('B Y'):
    case ('C Z'):  
      totalScore += 3;
      break;
    case ('A Y'):
    case ('B Z'):
    case ('C X'):  
      totalScore += 6;
      break;  
  } 
}

console.log(totalScore);

totalScore = 0;

for(let i = 0; i <= data.length; i++){
  switch(data[i]){
    case ('A X'):
      totalScore += 3;
      break;
    case ('B X'):
      totalScore += 1;
      break;
    case ('C X'):  
      totalScore += 2;
      break;
    case ('A Y'):
      totalScore += 4;
      break;
    case ('B Y'):
      totalScore += 5;
      break;
    case ('C Y'):  
      totalScore += 6;
      break;
    case ('A Z'):
      totalScore += 8;
      break;
    case ('B Z'):
      totalScore += 9;
      break;
    case ('C Z'):  
      totalScore += 7;
      break;
  }
}

console.log(totalScore);