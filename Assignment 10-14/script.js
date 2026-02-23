// City Welcome
// let city = prompt("Enter your city name:");

// if (city.toLowerCase() === "karachi") {
//   alert("Welcome to city of lights");
// }


// Gender Greeting
// let gender = prompt("Enter your gender (male/female):");

// if (gender.toLowerCase() === "male") {
//   alert("Good Morning Sir.");
// } else if (gender.toLowerCase() === "female") {
//   alert("Good Morning Ma’am.");
// }


// Traffic Signal
// let color = prompt("Enter traffic signal color:");

// if (color.toLowerCase() === "red") {
//   alert("Must Stop");
// } else if (color.toLowerCase() === "yellow") {
//   alert("Ready to move");
// } else if (color.toLowerCase() === "green") {
//   alert("Move now");
// }


// Fuel Check
// let fuel = parseFloat(prompt("Enter remaining fuel (litres):"));

// if (fuel < 0.25) {
//   alert("Please refill the fuel in your car");
// }


// Conditions Testing
// a
// var a = 4;
// if (++a === 5){
//   alert("given condition for variable a is true");
// }

// b
// var b = 82;
// if (b++ === 83){
//   alert("given condition for variable b is true");
// }

// c
// var c = 12;
// if (c++ === 13){
//   alert("condition 1 is true");
// }
// if (c === 13){
//   alert("condition 2 is true");
// }
// if (++c < 14){
//   alert("condition 3 is true");
// }
// if (c === 14){
//   alert("condition 4 is true");
// }

// d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost){
//   alert("The cost equals");
// }

// e
// if (true){
//   alert("True");
// }
// if (false){
//   alert("False");
// }

// f
// if ("car" < "cat"){
//   alert("car is smaller than cat");
// }


// Marks Sheet
// let sub1 = +prompt("Enter marks for subject 1:");
// let sub2 = +prompt("Enter marks for subject 2:");
// let sub3 = +prompt("Enter marks for subject 3:");
// let totalMarks = +prompt("Enter total marks:");

// let obtained = sub1 + sub2 + sub3;
// let percentage = (obtained / totalMarks) * 100;

// let grade, remarks;

// if (percentage >= 80) {
//   grade = "A-one";
//   remarks = "Excellent";
// } else if (percentage >= 70) {
//   grade = "A";
//   remarks = "Good";
// } else if (percentage >= 60) {
//   grade = "B";
//   remarks = "You need to improve";
// } else {
//   grade = "Fail";
//   remarks = "Sorry";
// }

// document.write("<h2>Marks Sheet</h2>");
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + obtained + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks);


// Guess Game
// let secret = 7; 
// let guess = +prompt("Guess the number (1 to 10):");

// if (guess === secret) {
//   alert("Bingo! Correct answer");
// } else if (guess + 1 === secret) {
//   alert("Close enough to the correct answer");
// }


// Divisible by 3
// let num = +prompt("Enter a number:");

// if (num % 3 === 0) {
//   alert("Number is divisible by 3");
// } else {
//   alert("Number is NOT divisible by 3");
// }


// Even or Odd
// let number = +prompt("Enter a number:");

// if (number % 2 === 0) {
//   alert("Even number");
// } else {
//   alert("Odd number");
// }


// Temperature Message
// let temp = +prompt("Enter temperature:");

// if (temp > 40) {
//   alert("It is too hot outside.");
// } else if (temp > 30) {
//   alert("The Weather today is Normal.");
// } else if (temp > 20) {
//   alert("Today’s Weather is cool.");
// } else if (temp > 10) {
//   alert("OMG! Today’s weather is so Cool.");
// }


// Calculator
// let num1 = +prompt("Enter first number:");
// let num2 = +prompt("Enter second number:");
// let op = prompt("Enter operation (+, -, *, /, %):");

// let result;

// if (op === "+") {
//   result = num1 + num2;
// } else if (op === "-") {
//   result = num1 - num2;
// } else if (op === "*") {
//   result = num1 * num2;
// } else if (op === "/") {
//   result = num1 / num2;
// } else if (op === "%") {
//   result = num1 % num2;
// } else {
//   alert("Invalid operator");
// }

// if (result !== undefined) {
//   alert("Result: " + result);
// }


// Check input type (number / uppercase / lowercase)
// let ch = prompt("Enter a character:");

// let code = ch.charCodeAt(0);

// if (code >= 48 && code <= 57) {
//   alert("It is a number");
// } else if (code >= 65 && code <= 90) {
//   alert("It is an uppercase letter");
// } else if (code >= 97 && code <= 122) {
//   alert("It is a lowercase letter");
// } else {
//   alert("Other character");
// }


// Compare two integers
// let num1 = +prompt("Enter first number:");
// let num2 = +prompt("Enter second number:");

// if (num1 > num2) {
//   alert("First number is larger");
// } else if (num2 > num1) {
//   alert("Second number is larger");
// } else {
//   alert("Both numbers are equal");
// }


// Positive, Negative or Zero
// let number = +prompt("Enter a number:");

// if (number > 0) {
//   alert("Positive number");
// } else if (number < 0) {
//   alert("Negative number");
// } else {
//   alert("Zero");
// }


// Vowel Checker
// let char = prompt("Enter a single character:");

// char = char.toLowerCase();

// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//   alert("True (It is a vowel)");
// } else {
//   alert("False (Not a vowel)");
// }


// Password Validation
// let correctPassword = "abc123";

// let userPassword = prompt("Enter your password:");

// if (!userPassword) {
//   alert("Please enter your password");
// } else if (userPassword === correctPassword) {
//   alert("Correct! The password you entered matches the original password");
// } else {
//   alert("Incorrect password");
// }


// Fix the if/else error
// var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// alert(greeting);


// Time-based Greeting (24-hour format)
let time = +prompt("Enter time in 24-hour format (e.g. 1900):");

if (time >= 0 && time < 1200) {
  alert("Good morning");
} else if (time >= 1200 && time < 1700) {
  alert("Good afternoon");
} else if (time >= 1700 && time < 2100) {
  alert("Good evening");
} else if (time >= 2100 && time <= 2359) {
  alert("Good night");
} else {
  alert("Invalid time");
}