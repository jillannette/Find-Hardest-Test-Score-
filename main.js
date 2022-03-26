let findHardestTest = (grades) => {
  let numGrades = grades[Object.keys(grades)[0]].length;
  let testAverages = [];
    
  for (let i = 0; i < numGrades; i++) {
    let testTotal = 0;
    let totalPeople = 0;
  
  for (prop in grades) {
    totalPeople += 1;
    // console.log(prop);
    // console.log(grades[prop][i]);
  
  testTotal += grades[prop][i];
  }
  testAverages.push(Math.floor(testTotal / totalPeople));
  }
  let hardestTestGrade = Math.min(...testAverages);
  
  console.log(hardestTestGrade);
  console.log(testAverages);
  
  let hardestTestNumber = testAverages.indexOf(hardestTestGrade) + 1;
  
  
  console.log('The hardest test was test number ' + hardestTestNumber);
};

let mainCharacterGrades = {
  Ron: [90, 89, 99, 87, 100, 74],
  Leslie: [78, 74, 92, 87, 77, 81],
  Tom: [77, 61, 89, 47, 57, 83],
  Andy: [35, 54, 44, 58, 39, 41],
};

findHardestTest(mainCharacterGrades);



// 1) convert to object
// 2) loop through the object (compare indexes between each array)
// 
  // need to find length of arrays (process needs to be scalable)
// need to find properties - get keys to find properties
// use console to try to find properties
// let grades = {
//   Ron: [90, 89, 99, 87, 100, 74],
//   Leslie: [78, 74, 92, 87, 77, 81],
//   Tom: [77, 61, 89, 47, 57, 83],
//   Andy: [35, 54, 44, 58, 39, 41],
// };
// undefined
// Object.keys(grades);
// (4) ['Ron', 'Leslie', 'Tom', 'Andy']
// Object.keys(grades)[0]
// 'Ron'
// grades[Ron]
// VM444:1 Uncaught ReferenceError: Ron is not defined
//     at <anonymous>:1:8
// (anonymous) @ VM444:1
// grades['Ron'].length
// 6
// grades[Object.key(grades)[0].length;
// VM586:1 Uncaught SyntaxError: Unexpected token ';'
// grades[Object.key(grades)[0]].length;
// VM699:1 Uncaught TypeError: Object.key is not a function
//     at <anonymous>:1:15
// (anonymous) @ VM699:1
// grades[Object.keys(grades)[0]].length;
// 6

//plugging grades[Object.keys(grades)[0]].length; into the for loop causes a loop between the arrays but it is not determinign anything 
// console.log(i) in addition to the loop shows that i is each index, looping through each array 
//  console.log(prop); shows the "name" of each array instead of the index of each array 
// adding [i] to the for loop (prop[i]) will then compare the first grade in each array, then the 2nd,, etc
//this now lists everyone's first grade, then 2nd, etc. 
// next need to average everyone's first grade, then 2nd, etc. (total grade scored / total of people)
//find how to compare test totals - console.log testtotals (6) [280, 278, 324, 279, 273, 279]
//  added testAverages.push(Math.floor(testTotal / totalPeople)); to get average score / 6
//console.log let hardestTest = Math.min(...testAverages);
//let hardestTest = Math.min(...testAverages);
//console.log(hardestTest);  shows us that 68 was the lowest average, but we need to ID which test it was 
// can console.log(testAverages) which will list all test averages;  we can see that 68 is the 5th test 
//  Google find index of item in array (indexOf)//  
//console.log(testAverages.indexOf(hardestTest)); shows that it is index 4, 5th test 
//  change hardestTest to hardestTestGrade;
//The hardest test was test number 5
// can make this all a function by defining function in global scope, making sure all is within the local scope, and then invoking the function at the end 
