/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function getprefix(string1,string2){
  let prefixword = "";

  for(let i = 0; i<string1.length;i++){
    if(i<string2.length){
      if(string1[i]!=string2[i]){
        break
      }else{
        prefixword+=string1[i];
      }
    }
  }
  return prefixword;
}

function result(words) {
  let prefix = words[0];
  for (let i = 1; i < words.length; i++){
    prefix = getprefix(prefix,words[i]);
  }
  return prefix;
}

console.log(result(words));