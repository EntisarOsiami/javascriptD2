//lab3

let students = ["ali", "Ahmed", "Sara", "Hassan", "Fatima",'Omar','Lana','Noor'];

let nameA = students.filter((name) => name.charAt(0) === "A" || name.charAt(0) === "a");

console.log(nameA);

let names4 = students.filter((name) => name.length === 4);
console.log(names4);

let nameCapitalized = students.map((name) => name.toUpperCase());
console.log(nameCapitalized);

let letterR = students.find((name) => name.includes("r") || name.includes("R")); // the method includes takes one element or string, not multiples.
console.log(letterR);


let orderedNames = students.sort((a, b) => a.localeCompare(b));
console.log(orderedNames);

let OmarHere = students.some((name) => name === "Omar");
console.log(OmarHere);