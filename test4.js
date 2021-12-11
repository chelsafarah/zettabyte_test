/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  let num_max = Math.max.apply(null, numbers);
  let missing = "no missing";
  for(let i = 0; i<num_max ; i++){
    if(numbers.includes(i)==false){
      missing=i;
      break
    }
  }
  return missing;
}

console.log(result(numbers));
