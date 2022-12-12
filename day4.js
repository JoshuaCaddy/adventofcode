const {readFileSync, promises: fsPromises} = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8'); 
  const arr = contents.split(/\r?\n/);
  return arr;
}

let data = syncReadFile('./day4Input.txt');


// day4 part 1

let matching = 0;

for (let i = 0; i < data.length; i++){
  let pair = data[i].split(',');
  let elf1 = pair[0].split('-');
  let elf2 = pair[1].split('-');
  console.log(elf1);
  if ((Number(elf1[0]) >= Number(elf2[0])) && (Number(elf1[1]) <= Number(elf2[1]))){
    matching ++;
  }
  else if ((Number(elf2[0]) >= Number(elf1[0])) && (Number(elf2[1]) <= Number(elf1[1]))){
    matching ++;
  }
  else if ((Number(elf2[0]) >= Number(elf1[0])) && (Number(elf2[0]) <= Number(elf1[1]))){
    matching ++;
  }
  else if ((Number(elf1[0]) >= Number(elf2[0])) && (Number(elf1[0]) <= Number(elf2[1]))){
    matching ++;
  }
}

console.log(matching);