/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4,10];

function result(data) {
  let unique=[];
  function iterate(items){
    if(unique.includes(items)==false){
      unique.push(items)
    }
  }
  data.forEach(iterate);
  unique=unique.sort();
  return unique;
}

console.log(result(data));
