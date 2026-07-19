// 1. Custom power(a,b) Function!
// function power(a, b) {
//     var result = 1;
//     var i;

//     for (i = 1; i <= b; i++) {
//         result = result * a;
//     }

//     return result;
// }

// var a = Number(prompt("Enter base:"));
// var b = Number(prompt("Enter power:"));

// alert("Answer = " + power(a, b));


// 2. Leap Year Function!
// function checkLeapYear(year) {
//     if (year % 400 == 0) {
//         return true;
//     }
//     else if (year % 100 == 0) {
//         return false;
//     }
//     else if (year % 4 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// var year = Number(prompt("Enter year:"));

// if (checkLeapYear(year)) {
//     alert(year + " is a Leap Year");
// }
// else {
//     alert(year + " is not a Leap Year");
// }


// 3. Area of Triangle Using 2 Functions!
// function calculateS(a, b, c) {
//     var s;

//     s = (a + b + c) / 2;

//     return s;
// }

// function calculateArea(a, b, c) {
//     var s;
//     var area;

//     s = calculateS(a, b, c);

//     area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

//     return area;
// }

// var a = Number(prompt("Enter side a:"));
// var b = Number(prompt("Enter side b:"));
// var c = Number(prompt("Enter side c:"));

// alert("Area of Triangle = " + calculateArea(a, b, c));


// 4. Average and Percentage Using 3 Functions!
// function calculateAverage(marks1, marks2, marks3) {
//     var average;

//     average = (marks1 + marks2 + marks3) / 3;

//     return average;
// }

// function calculatePercentage(marks1, marks2, marks3) {
//     var total;
//     var percentage;

//     total = marks1 + marks2 + marks3;

//     percentage = (total / 300) * 100;

//     return percentage;
// }

// function mainFunction() {
//     var marks1;
//     var marks2;
//     var marks3;
//     var average;
//     var percentage;

//     marks1 = Number(prompt("Enter marks of Subject 1:"));
//     marks2 = Number(prompt("Enter marks of Subject 2:"));
//     marks3 = Number(prompt("Enter marks of Subject 3:"));

//     average = calculateAverage(marks1, marks2, marks3);

//     percentage = calculatePercentage(marks1, marks2, marks3);

//     alert("Average = " + average +
//           "\nPercentage = " + percentage + "%");
// }

// mainFunction();


// 5. Custom "indexOf()"" Function!
// function myIndexOf(text, character) {
//     var i;

//     for (i = 0; i < text.length; i++) {
//         if (text[i] == character) {
//             return i;
//         }
//     }

//     return -1;
// }

// var text = prompt("Enter a sentence:");
// var character = prompt("Enter a character:");

// var result = myIndexOf(text, character);

// alert("Character found at index: " + result);


// 6. Delete All Vowels from a Sentence!
// function removeVowels(sentence) {
//     var result = "";
//     var i;
//     var character;

//     for (i = 0; i < sentence.length; i++) {
//         character = sentence[i];

//         if (character != "a" &&
//             character != "e" &&
//             character != "i" &&
//             character != "o" &&
//             character != "u" &&
//             character != "A" &&
//             character != "E" &&
//             character != "I" &&
//             character != "O" &&
//             character != "U") {

//             result = result + character;
//         }
//     }

//     return result;
// }

// var sentence = prompt("Enter a sentence:");

// alert(removeVowels(sentence));


// 7. Count Two Vowels in Succession Using switch!
// function countVowelPairs(text) {
//     var count = 0;
//     var i;
//     var pair;

//     for (i = 0; i < text.length - 1; i++) {

//         pair = text[i] + text[i + 1];

//         switch (pair) {

//             case "aa":
//             case "ae":
//             case "ai":
//             case "ao":
//             case "au":

//             case "ea":
//             case "ee":
//             case "ei":
//             case "eo":
//             case "eu":

//             case "ia":
//             case "ie":
//             case "ii":
//             case "io":
//             case "iu":

//             case "oa":
//             case "oe":
//             case "oi":
//             case "oo":
//             case "ou":

//             case "ua":
//             case "ue":
//             case "ui":
//             case "uo":
//             case "uu":

//                 count++;
//                 break;
//         }
//     }

//     return count;
// }

// var text = prompt("Enter a sentence:");

// alert("Number of vowel pairs = " + countVowelPairs(text));


// 8. Distance Conversions!
// function convertToMeters(km) {
//     return km * 1000;
// }

// function convertToFeet(km) {
//     return km * 3280.84;
// }

// function convertToInches(km) {
//     return km * 39370.1;
// }

// function convertToCentimeters(km) {
//     return km * 100000;
// }

// var distance = Number(prompt("Enter distance in kilometers:"));

// alert(
//     "Meters = " + convertToMeters(distance) +
//     "\nFeet = " + convertToFeet(distance) +
//     "\nInches = " + convertToInches(distance) +
//     "\nCentimeters = " + convertToCentimeters(distance)
// );


// 9. Overtime Pay!
// function calculateOvertimePay(hours) {
//     var overtimeHours;
//     var overtimePay;

//     if (hours > 40) {
//         overtimeHours = hours - 40;

//         overtimePay = overtimeHours * 12;
//     }
//     else {
//         overtimePay = 0;
//     }

//     return overtimePay;
// }

// var hours = Number(prompt("Enter total hours worked:"));

// alert("Overtime Pay = Rs. " + calculateOvertimePay(hours));


// 10. Currency Notes!
// function calculateNotes(amount) {
//     var hundredNotes;
//     var fiftyNotes;
//     var tenNotes;
//     var remaining;

//     hundredNotes = Math.floor(amount / 100);

//     remaining = amount % 100;

//     fiftyNotes = Math.floor(remaining / 50);

//     remaining = remaining % 50;

//     tenNotes = Math.floor(remaining / 10);

//     alert(
//         "100 notes = " + hundredNotes +
//         "\n50 notes = " + fiftyNotes +
//         "\n10 notes = " + tenNotes
//     );
// }

// var amount = Number(prompt("Enter amount to withdraw:"));

// calculateNotes(amount);