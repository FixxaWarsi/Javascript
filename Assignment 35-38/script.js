// 1. Current Date & Time

// function showDateTime() {
//     var currentDate = new Date();
//     console.log(currentDate);
// }

// showDateTime();


// 2. Greeting User with Full Name

// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     console.log("Hello " + fullName);
// }

// greetUser("Zaid", "Khan");


// 3. Add Two Numbers

// function addNumbers(num1, num2) {
//     return num1 + num2;
// }

// var sum = addNumbers(10, 20);
// console.log("Sum is: " + sum);


// 4. Calculator

// function calculator(num1, num2, operator) {

//     if (operator === "+") {
//         return num1 + num2;
//     }

//     else if (operator === "-") {
//         return num1 - num2;
//     }

//     else if (operator === "*") {
//         return num1 * num2;
//     }

//     else if (operator === "/") {
//         return num1 / num2;
//     }

//     else {
//         return "Invalid Operator";
//     }
// }

// console.log("Sum is: " + calculator(10, 5, "+"));
// console.log("Subtraction is: " + calculator(10, 5, "-"));
// console.log("Multiplication is: " + calculator(10, 5, "*"));
// console.log("Division is: " + calculator(10, 5, "/"));


// 5. Square of a Number

// function square(number) {
//     return number * number;
// }

// console.log("Square is: " + square(6));


// // 6. Factorial of a Number

// function factorial(number) {

//     var result = 1;

//     for (var i = 1; i <= number; i++) {
//         result = result * i;
//     }

//     return result;
// }

// console.log("Factorial is: " + factorial(5));


// 7. Counting Function

// function counting(start, end) {

//     for (var i = start; i <= end; i++) {
//         console.log(i);
//     }
// }

// counting(1, 10);


// 8. Nested Function - Hypotenuse

// function calculateHypotenuse(base, perpendicular) {

//     function calculateSquare(number) {
//         return number * number;
//     }

//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);

//     var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

//     return hypotenuse;
// }

// console.log("Hypotenuse is: " + calculateHypotenuse(3, 4));


// 9. Area of Rectangle

// function rectangleArea(width, height) {
//     return width * height;
// }

// i. Arguments as values
// console.log("Area is: " + rectangleArea(5, 10));

// ii. Arguments as variables
// var width = 7;
// var height = 4;

// console.log("Area is: " + rectangleArea(width, height));


// 10. Palindrome Checker

// function checkPalindrome(word) {

//     var reverseWord = word.split("").reverse().join("");

//     if (word === reverseWord) {
//         return "It is a palindrome";
//     }

//     else {
//         return "It is not a palindrome";
//     }
// }

// console.log(checkPalindrome("madam"));
// console.log(checkPalindrome("hello"));


// 11. First Letter Capital

// function capitalizeWords(sentence) {

//     var words = sentence.split(" ");

//     for (var i = 0; i < words.length; i++) {

//         words[i] =
//             words[i][0].toUpperCase() +
//             words[i].slice(1);
//     }

//     return words.join(" ");
// }

// console.log(capitalizeWords("the quick brown fox"));


// 12. Longest Word in String

// function findLongestWord(sentence) {

//     var words = sentence.split(" ");
//     var longestWord = "";

//     for (var i = 0; i < words.length; i++) {

//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }

//     return longestWord;
// }

// console.log(findLongestWord("Web Development Tutorial"));


// 13. Count Letter Occurrences

// function countLetter(str, letter) {

//     var count = 0;

//     for (var i = 0; i < str.length; i++) {

//         if (str[i] === letter) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countLetter("JSResourceS.com", "o"));


// 14. The Geometrizer

// Circumference Function
// function calcCircumference(radius) {

//     var circumference = 2 * Math.PI * radius;

//     console.log("The circumference is: " + circumference);
// }

// calcCircumference(5);


// Area Function
// function calcArea(radius) {

//     var area = Math.PI * radius * radius;

//     console.log("The area is: " + area);
// }

// calcArea(5);