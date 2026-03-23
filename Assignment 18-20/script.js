
// ============ 1. Empty Multidimensional Array ============
// var multiArray = [];
// console.log("Empty Array:", multiArray);


// ============ 2. Matrix ============
// var matrix = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];

// console.log("Matrix:");
// for(var i = 0; i < matrix.length; i++){
//     console.log(matrix[i].join(" "));
// }


// ============ 3. Counting 1 to 10 ============
// console.log("Counting 1 to 10:");
// for(var i = 1; i <= 10; i++){
//     console.log(i);
// }


// ============ 4. Multiplication Table ============
// var number = prompt("Enter table number");
// var length = prompt("Enter table length");

// console.log("Multiplication Table of " + number);

// for(var i = 1; i <= length; i++){
//     console.log(number + " x " + i + " = " + (number * i));
// }


// ============ 5. Fruits Array ============
// var fruits = ["apple","banana","mango","orange","strawberry"];

// for(var i = 0; i < fruits.length; i++){
//     console.log("Element at index " + i + " is " + fruits[i]);
// }


// ============ 6. Series ============

// Counting
// var counting = "";
// for(var i = 1; i <= 15; i++){
//     counting += i + ", ";
// }
// console.log("Counting:", counting);

// Reverse
// var reverse = "";
// for(var i = 10; i >= 1; i--){
//     reverse += i + ", ";
// }
// console.log("Reverse:", reverse);

// Even
// var even = "";
// for(var i = 0; i <= 20; i += 2){
//     even += i + ", ";
// }
// console.log("Even:", even);

// Odd
// var odd = "";
// for(var i = 1; i < 20; i += 2){
//     odd += i + ", ";
// }
// console.log("Odd:", odd);

// Series
// var series = "";
// for(var i = 2; i <= 20; i += 2){
//     series += i + "k, ";
// }
// console.log("Series:", series);


// ============ 7. Bakery Search ============
// var A = ["cake","apple pie","cookie","chips","patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want?");
// var found = false;

// for(var i = 0; i < A.length; i++){
//     if(A[i] === userInput.toLowerCase()){
//         console.log(userInput + " is available at index " + i);
//         found = true;
//         break;
//     }
// }

// if(found === false){
//     console.log("We are sorry. " + userInput + " is not available");
// }


// ============ 8. Largest Number ============
// var arr = [24,53,78,91,12];
// var largest = arr[0];

// for(var i = 1; i < arr.length; i++){
//     if(arr[i] > largest){
//         largest = arr[i];
//     }
// }

// console.log("Array items:", arr.join(", "));
// console.log("Largest number is:", largest);


// ============ 9. Smallest Number ============
// var smallest = arr[0];

// for(var i = 1; i < arr.length; i++){
//     if(arr[i] < smallest){
//         smallest = arr[i];
//     }
// }

// console.log("Array items:", arr.join(", "));
// console.log("Smallest number is:", smallest);


// ============ 10. Multiples of 5 ============
var multiples = "";

for(var i = 5; i <= 100; i += 5){
    multiples += i + ", ";
}

console.log("Multiples of 5:", multiples);