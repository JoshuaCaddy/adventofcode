const {readFileSync, promises: fsPromises} = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8'); 
  const arr = contents.split(/\r?\n/);
  return arr;
}

const commonCharacters = function(string1, string2) {
  let duplicateCharacter = '';
  for (let i = 0; i < string1.length; i += 1) {
    if (duplicateCharacter.indexOf(string1[i]) === -1) {
      if (string2.indexOf(string1[i]) !== -1) {
        duplicateCharacter += string1[i];
      }
    }
  }
  return duplicateCharacter;
};

const commonCharacters3strings = function(string1, string2, string3) {
  let duplicateCharacter = '';
  for (let i = 0; i < string1.length; i += 1) {
    if (duplicateCharacter.indexOf(string1[i]) === -1) {
      if (string2.indexOf(string1[i]) !== -1 && string3.indexOf(string1[i]) !== -1) {
        duplicateCharacter += string1[i];
        console.log(duplicateCharacter)
      }
    }
  }
  return duplicateCharacter;
};


let data = syncReadFile('./day3Input.txt');
let totalScore = 0;

// day3 part 1
// for (let i = 0; i < data.length; i++){
//   const partOne = data[i].slice(0, data[i].length / 2);
//   const partTwo = data[i].slice(data[i].length / 2, data[i].length);
//   let commonChar = commonCharacters(partOne, partTwo);
//   if (commonChar == commonChar.toUpperCase()) {
//     totalScore += Number(commonChar.charCodeAt(0)) - 38;
//    }
//    if (commonChar == commonChar.toLowerCase()){
//     totalScore += Number(commonChar.charCodeAt(0)) - 96;
//    }
// }
// console.log(totalScore);

// totalScore = 0;

// day3 part 3
for (let i = 0; i < data.length; i+=3){
  let commonChar = commonCharacters3strings(data[i], data[i+1], data[i+2]);
  if (commonChar == commonChar.toUpperCase()) {
    totalScore += Number(commonChar.charCodeAt(0)) - 38;
   }
   if (commonChar == commonChar.toLowerCase()){
    totalScore += Number(commonChar.charCodeAt(0)) - 96;
   }
}
console.log(totalScore);