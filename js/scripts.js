function pigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let newStr ="";

  if (vowels.indexOf(str[0]) > -1) {
    newStr = str + "way";
    return newStr;
  }
  }

  // let vowel[...]
  // for (let i = 0; i < array.length; i++){
  //array[i] = array[i].slice(1) + array[i].charAt(0) + "ay "; 
  //newStr += array[i]
  //} return newStr
  //if (vowel=== null)

function pigIt(str){
  let array = str.split(" ");
  console.log(array)
  let newStr = "";
  for (let i = 0; i < array.length; i++){
  array[i] = array[i].slice(1) + array[i].charAt(0) + "ay "; 
  newStr += array[i]
  
  } return newStr
}

let test = "This is my string";
console.log(pigIt(test));