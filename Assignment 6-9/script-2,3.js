// Q2 — Expression Result
var a = 2, b = 1;

document.write("<h3>Q2 Output — Expression</h3>");

document.write("Initial values → a = 2, b = 1 <br><br>");

document.write("--a = " + (--a) + "<br>"); 
// a becomes 1

a = 2; b = 1; // reset

document.write("--a - --b = " + (--a - --b) + "<br>");
// a=1, b=0 → 1 - 0 = 1

a = 2; b = 1; // reset

document.write("--a - --b + ++b = " + (--a - --b + ++b) + "<br>");
// a=1, b=0 → ++b = 1 → 1 - 0 + 1 = 2

a = 2; b = 1; // reset

var result = --a - --b + ++b + b--;
// a=1, b=0 → ++b=1 → b-- uses 1 then becomes 0
// result = 1 - 0 + 1 + 1 = 3

document.write("--a - --b + ++b + b-- = " + result + "<br><br>");
document.write("Final values → a = " + a + ", b = " + b + ", result = " + result + "<hr>");


// Q3 — Greet User
var userName = prompt("Enter your name:");

document.write("<h3>Q3 Output — Greeting</h3>");
document.write("Hello " + userName + "! Welcome!<hr>");