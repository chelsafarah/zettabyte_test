/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

// function result(data) {
//   for(var key of Object.keys(data)){
//     if (Array.isArray(key)){
//       for (var key2 of Object.keys(key)){
//         if (Array.isArray(key2)){
//           for (let c of b){
//             console.log(c+"<br");
//           }
//         }
//       }
//     }else{
//       if(key)
//     }
//   }
//   return JSON.stringify(data, null, "  ");
// }
function result(data){
  
}

//console.log(result(data));
for(let i=0 ; i<data.length;i++){
  var x = data[i];
  console.log(data[i]["session_name"]);
  for(let j=0 ; j<x.length;j++){
    console.log(data[i][j]);
  }
}
