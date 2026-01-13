// ========== Assignment-1 ==========
// Greeting alert
// alert("Welcome to our website!");

// Error message
// alert("Error! Please enter a valid password!");

// Welcome message with line break
// alert("Welcome to JS Land...\nHappy Coding!");

// Two alerts
// alert("Welcome to JS Land...");
// alert("Happy Coding!\nPrevent this page from creating additional dialogues");

// Console message
// console.log("Hello! I can run JS through my web browser console");


// ========== Assignment-2 ==========
// Username
// var username;

// Full name
// var myName = "Your Full Name";

// Hello World message
// var message = "Hello World!";
// alert(message);

// Student bio data
// var studentName = "S. Fizza Rehman";
// var studentAge = "16 years old";
// var studentCourse = "Web Development";

// alert(studentName);
// alert(studentAge);
// alert(studentCourse);

// Pizza pattern
// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);

// Email
// var email = "example@gmail.com";
// alert("My email address is " + email);

// Book
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);

// HTML through JS
// document.write("Yah! I can write HTML content through JavaScript<br>");

// Special string
// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);
// document.write(design + "<br>");


// ========== Assignment-3 ==========
// Age
// var age = 16;
// alert("I am " + age + " years old");

// Visit counter
// var visits = 5;
// document.write("You have visited this site " + visits + " times<br>");

// Birth year
// var birthYear = 2008;
// document.write ("My birth year is " + birthYear + "<br>Data type of my declared variable is number<br>";)

// Online store order
// var visitorName = "John Doe";
// var productTitle = "T-Shirts";
// var quantity = 5;

// document.write (visitorName + " ordered " + quantity + " " +
//   productTitle + " on XYZ Clothing store<br>";)


// ========== Assignment-4 ==========
// 3 variables in one statement
// var a, b, c;

// Legal variables
// var name;
// var $price;
// var _count;
// var user1;
// var totalAmount;

// Illegal variables 
// var 1user;
// var my-name;
// var var;
// var @test;
// var user name;

// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("Variable names can only contain numbers, $, and _. For example: $my_1stVariable<br>");
// document.write("Variables must begin with a letter, $ or _. For example: $name, _name or name<br>");
// document.write("Variable names are case sensitive<br>");
// document.write("Variable names should not be JS keywords<br>");


// ========== Assignment-5 ==========
// Addition
// var num1 = 3;
// var num2 = 5;
// var sum = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

// Subtraction
// document.write("Subtraction is " + (num1 - num2) + "<br>");

// Multiplication
// document.write("Multiplication is " + (num1 * num2) + "<br>");

// Division
// document.write("Division is " + (num1 / num2) + "<br>");

// Modulus
// document.write("Modulus is " + (num1 % num2) + "<br><br>");

// Variable operations
// var number;
// document.write("Value after variable declaration is: " + number + "<br>");

// number = 5;
// document.write("Initial value: " + number + "<br>");

// number++;
// document.write("Value after increment is: " + number + "<br>");

// number += 7;
// document.write("Value after addition is: " + number + "<br>");

// number--;
// document.write("Value after decrement is: " + number + "<br>");

// document.write("The remainder is: " + (number % 3) + "<br><br>");

// Movie tickets
// var ticketPrice = 600;
// var totalCost = ticketPrice * 5;

// document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR<br><br>");

// Multiplication table
// var tableNumber = prompt("Enter a number to display its table:");
// document.write("<h3>Multiplication Table of " + tableNumber + "</h3>");

// var i = 1; i <= 10; i++
// document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");

// Celsius to Fahrenheit
// var celsius = prompt("Enter temperature in Celsius:");
// var fahrenheit = (celsius * 9/5) + 32;
// document.write("<br>" + celsius + "°C is " + fahrenheit + "°F<br>");

// Fahrenheit to Celsius
// var fTemp = prompt("Enter temperature in Fahrenheit:");
// var cTemp = (fTemp - 32) * 5/9;
// document.write(fTemp + "°F is " + cTemp + "°C<br>");

// Shopping Cart - Checkout System
// var priceItem1 = 650;
// var priceItem2 = 100;
// var qtyItem1 = 3;
// var qtyItem2 = 7;
// var shippingCharges = 100;

// var totalCost =
//   (priceItem1 * qtyItem1) +
//   (priceItem2 * qtyItem2) +
//   shippingCharges;

// document.write("<h3>Shopping Cart</h3>");
// document.write("Price of Item 1: " + priceItem1 + "<br>");
// document.write("Quantity of Item 1: " + qtyItem1 + "<br>");
// document.write("Price of Item 2: " + priceItem2 + "<br>");
// document.write("Quantity of Item 2: " + qtyItem2 + "<br>");
// document.write("Shipping Charges: " + shippingCharges + "<br>");
// document.write("<b>Total cost of your order is " + totalCost + "</b><br>");

// Marksheet
// var totalMarks = prompt("Enter total marks:");
// var obtainedMarks = prompt("Enter obtained marks:");

// var percentage = (obtainedMarks / totalMarks) * 100;

// document.write("<h3>Mark Sheet</h3>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage + "%<br>");

// Currency Converter
// var totalPKR = (10 * 104.80) + (25 * 28);

// document.write("<h3>Currency Conversion</h3>");
// document.write("Total Currency in PKR: " + totalPKR + "<br>");

// Arithmetic Operations
// var number = prompt("Enter a number:");

// var result = ((number + 5) * 10) / 2;

// document.write("<h3>Arithmetic Result</h3>");
// document.write("Final result is: " + result + "<br>");

// Age Calculator
// var currentYear = prompt("Enter current year:");
// var birthYear = prompt("Enter birth year:");

// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;

// document.write("<h3>Age Calculator</h3>");
// document.write("They are either " + age2 + " or " + age1 + " years old<br>");

// The Geometrizer (Circle)
// var radius = prompt("Enter radius of circle:");
// var pi = 3.142;

// var circumference = 2 * pi * radius;
// var area = pi * radius * radius;

// document.write("<h3>Circle Calculations</h3>");
// document.write("Radius: " + radius + "<br>");
// document.write("The circumference is " + circumference + "<br>");
// document.write("The area is " + area + "<br>");

// Lifetime Supply Calculator
// var snack = prompt("Enter your favorite snack:");
// var currentAge = prompt("Enter your current age:");
// var maxAge = prompt("Enter your maximum age:");
// var perDay = prompt("How many snacks per day?");

// var totalSnacks = (maxAge - currentAge) * 365 * perDay;

// document.write("<h3>Lifetime Supply Calculator</h3>");
// document.write("You will need " + totalSnacks + " " + snack + " to last you until the ripe old age of " + maxAge);
