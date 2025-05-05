//lab3

let students = ["ali", "Ahmed", "Sara", "Hassan", "Fatima", 'Omar', 'Lana', 'Noor'];

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

let totalLetters = students.reduce((acc, name) => acc + name.length, 0);
console.log(`Total of letters: ${totalLetters}`);

let evenNames = students.filter((name) => name.length % 2 === 0);
console.log(`Even names: ${evenNames}`);
let reversedNames = students.map((name) => name.split("").reverse().join(""));
console.log(`reversed Names: ${reversedNames}`);

let removedNames = students.filter((name) => !name.includes('o') && !name.includes('O'));
console.log(`names without 'o' or 'O' : ${removedNames}`);

let studentsGpa = [
    ["Ali", [90, 83, 72, 95]],
    ["Ahmed", [85, 78, 92, 70]],
    ["Sara", [88, 91, 95,90]],
    ["Hassan", [80, 75, 70, 60]],
    ["Fatima", [95, 98, 100,32]],
    ["Omar", [70, 80, 85,40]],
    ["Lana", [88, 70, 92,66]],
    ["Noor", [75, 80, 85,87]]
];

let studentGpa= studentsGpa.map((student) => {
    let name = student[0];
    let gpa = student[1].reduce((acc, grade) => acc + grade, 0) / student[1].length;
    return [name, gpa];
});
console.log(`Student GPA: ${studentGpa}`);

let student80 = studentGpa.filter((student) => student[1] >= 80);
console.log(`Students with over 80 GPA: ${student80}`);