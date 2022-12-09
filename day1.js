const {readFileSync, promises: fsPromises} = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8'); 
  const arr = contents.split(/\r?\n/);
  return arr;
}

let data = syncReadFile('./day1Input.txt');
let totalCalsEachElf = [];
let elfCalories = 0;

// Number of calories per Elf
for (let i = 0 ; i <= data.length; i++ ){
  if ( data[i] ){
    elfCalories += Number(data[i]);
  }
  else{
    totalCalsEachElf.push(elfCalories);
    elfCalories = 0
  }
}

// Total number of calories for top three elves

let totalNumberOfCals = 0

for (let i = 0; i < 3; i++){
  const max = totalCalsEachElf.reduce((a, b) => { return Math.max(a, b) });
  totalNumberOfCals += max;
  console.log(max);
  const index = totalCalsEachElf.indexOf(max);
  if (index > -1) { // only splice array when item is found
    totalCalsEachElf.splice(index, 1); // 2nd parameter means remove one item only
  }
}
console.log(totalNumberOfCals);
