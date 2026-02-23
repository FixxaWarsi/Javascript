// Empty array (literal)
// let students = [];


// Empty array (object notation)
// let studentsObj = new Array();


// Strings array
// let fruits = ["Apple", "Banana", "Mango"];


// Numbers array
// let numbers = [10, 20, 30, 40];


// Boolean array
// let flags = [true, false, true];


// Mixed array
// let mixed = ["Zaid", 25, true];


// Qualifications
// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "MPhil", "PhD"];

// document.write("<h3>Qualifications:</h3>");
// for (let i = 0; i < qualifications.length; i++) {
//   document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }


// Student scores
// let names = ["Michael", "John", "Tony"];
// let scores = [320, 230, 480];
// let totalMarks = 500;

// for (let i = 0; i < names.length; i++) {
//   let percentage = (scores[i] / totalMarks) * 100;
//   document.write("Score of " + names[i] + " is " + scores[i] + 
//   ". Percentage: " + percentage + "%<br>");
// }


// Colors Array Operations
// let colors = ["Red", "Green", "Blue"];
// document.write(colors + "<br>");

// a
// let addStart = prompt("Add color to beginning:");
// colors.unshift(addStart);
// document.write(colors + "<br>");

// b
// let addEnd = prompt("Add color to end:");
// colors.push(addEnd);
// document.write(colors + "<br>");

// c
// colors.unshift("Pink", "Purple");
// document.write(colors + "<br>");

// d
// colors.shift();
// document.write(colors + "<br>");

// e
// colors.pop();
// document.write(colors + "<br>");

// f
// let indexAdd = +prompt("Index to add color:");
// let colorName = prompt("Color name:");
// colors.splice(indexAdd, 0, colorName);
// document.write(colors + "<br>");

// g
// let indexDel = +prompt("Index to delete:");
// let countDel = +prompt("How many colors to delete:");
// colors.splice(indexDel, countDel);
// document.write(colors + "<br>");


// Sort scores
// let scoresArr = [320, 230, 480, 120];

// document.write("Scores: " + scoresArr + "<br>");

// scoresArr.sort(function(a, b) {
//   return a - b;
// });

// document.write("Sorted Scores: " + scoresArr);


// Cities 
// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// let selectedCities = cities.slice(2, 4);

// document.write("Cities: " + cities + "<br>");
// document.write("Selected Cities: " + selectedCities);


// Join array into string
// let arr = ["This", "is", "my", "cat"];

// document.write("Array: " + arr + "<br>");

// let str = arr.join(" ");
// document.write("String: " + str);


// FIFO & LIFO
// FIFO 
// let queue = [];

// queue.push("Keyboard");
// queue.push("Mouse");
// queue.push("Printer");
// queue.push("Monitor");

// document.write("<h3>FIFO:</h3>");

// while (queue.length > 0) {
//   document.write("Out: " + queue.shift() + "<br>");
// }

// LIFO 
// let stack = [];

// stack.push("Keyboard");
// stack.push("Mouse");
// stack.push("Printer");
// stack.push("Monitor");

// document.write("<h3>LIFO:</h3>");

// while (stack.length > 0) {
//   document.write("Out: " + stack.pop() + "<br>");
// }


// Dropdown menu
let phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");

for (let i = 0; i < phones.length; i++) {
  document.write("<option>" + phones[i] + "</option>");
}

document.write("</select>");