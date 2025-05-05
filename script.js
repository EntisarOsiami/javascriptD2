characters = [
  ["Luke Skywalker", 177, "male", 77, "brown"],
  ["Leia Organa", 160, "female", 56, "blue"],
  ["Han Solo", 180, "male", 80, "brown"],
  ["Chewie", 222, "male", 190, "black"],
  ["kevien", 106, "male", 32.2, "red"],
];

// Question1 -using Map
const names = characters.map((character) => character[0]); 
console.log(names);

const heights = characters.map((character) => character[1]);
console.log(heights);

// Question2 - using reduce
const totalHeight = characters.reduce((total, character) => total + character[1],0); // reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
console.log(totalHeight);

// Question3 - using filter
const filteredHeights = characters.filter((character) => character[1] < 200); 
console.log(filteredHeights);

const maleCharacters = characters.filter((character) => character[2] == "male");
console.log(maleCharacters);

//question4 - using sort
console.log(characters.toSorted((a, b) => a[3] - b[3])); // tosorted does not change the original array instead create a new one. same with toreversed.

const sortedByHeight = characters.sort((a, b) => a[1] - b[1]);
console.log(sortedByHeight);

//question5 - using every
const MoreThan40 = characters.every((character) => character[3] > 40); // every((element)=> condition). return true or false.
console.log(MoreThan40); 
console.log(characters.every((character) => character[1] < 200));

//question6 - using some
console.log(characters.some((character) => character[4] == "blue")); // some((element)=> condition). return true or false.

const tallerThan210 = characters.some((character) => character[1] > 200);
console.log(tallerThan210);


