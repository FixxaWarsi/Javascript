// Q4 — Multiplication Table 
var num = prompt("Enter a number for multiplication table:", "5");

if (num === "" || num === null) {
    num = 5;
}

document.write("<h3>Q4 Output — Table of " + num + "</h3>");

for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}

document.write("<hr>");