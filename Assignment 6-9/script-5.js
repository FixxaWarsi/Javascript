// Q5 — Subject Marks Table
var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");

var totalMarksPerSub = 100;

var marks1 = +prompt("Enter obtained marks for " + sub1);
var marks2 = +prompt("Enter obtained marks for " + sub2);
var marks3 = +prompt("Enter obtained marks for " + sub3);

var totalMarks = totalMarksPerSub * 3;
var obtained = marks1 + marks2 + marks3;
var percentage = (obtained / totalMarks) * 100;

document.write("<h3>Q5 Output — Subject Marks Table</h3>");

document.write("<table border='1' cellpadding='8'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

document.write("<tr><td>" + sub1 + "</td><td>" + totalMarksPerSub + "</td><td>" + marks1 + "</td><td>" + (marks1/totalMarksPerSub*100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + totalMarksPerSub + "</td><td>" + marks2 + "</td><td>" + (marks2/totalMarksPerSub*100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + totalMarksPerSub + "</td><td>" + marks3 + "</td><td>" + (marks3/totalMarksPerSub*100).toFixed(2) + "%</td></tr>");

document.write("<tr><th></th><th>" + totalMarks + "</th><th>" + obtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");