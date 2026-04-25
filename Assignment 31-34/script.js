// 1. Current Date and Time
// var currentDate = new Date();
// console.log("Current Date & Time:", currentDate);


// 2. Current Month in Words
// var months = ["January", "February", "March", "April", "May", "June",
//               "July", "August", "September", "October", "November", "December"];

// var currentMonth = currentDate.getMonth();
// console.log("Current Month:", months[currentMonth]);


// 3. First 3 Letters of Current Day
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = currentDate.getDay();
// console.log("Today is:", days[currentDay]);


// 4. Fun Day (Saturday or Sunday)
// if (currentDay === 0 || currentDay === 6) {
//     console.log("It's Fun day");
// }


// 5. First or Last Days of Month
// var date = currentDate.getDate();

// if (date < 16) {
//     console.log("First fifteen days of the month");
// } else {
//     console.log("Last days of the month");
// }


// 6. Minutes since Jan 1, 1970
// var now = new Date();
// var minutesSince1970 = now.getTime() / (1000 * 60);

// console.log("Minutes since Jan 1, 1970:", minutesSince1970);


// 7. AM or PM
// var hours = currentDate.getHours();

// if (hours < 12) {
//     console.log("It's AM");
// } else {
//     console.log("It's PM");
// }


// 8. Last Day of Last Month of 2020
// var laterDate = new Date(2020, 11, 31); // December = 11
// console.log("Later Date:", laterDate);


// 9. Days Passed Since 1st Ramadan (June 18, 2015)
// var ramadanStart = new Date("June 18, 2015");
// var today = new Date();

// var diffTime = today.getTime() - ramadanStart.getTime();
// var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

// console.log("Days passed since 1st Ramadan 2015:", diffDays);


// 10. Seconds Since Beginning of 2015
// var start2015 = new Date("Jan 1, 2015");
// var nowTime = new Date();

// var secondsPassed = Math.floor((nowTime.getTime() - start2015.getTime()) / 1000);

// console.log("Seconds since Jan 1, 2015:", secondsPassed);


// 11. Add 1 Hour to Current Time
// var current = new Date();
// console.log("Current Time:", current);

// current.setHours(current.getHours() + 1);
// console.log("1 Hour Ahead:", current);


// 12. Date 100 Years Back
// var pastDate = new Date();
// pastDate.setFullYear(pastDate.getFullYear() - 100);

// console.log("100 Years Back Date:", pastDate);


// 13. Calculate Birth Year
// var age = prompt("Enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;

// console.log("Your Age:", age);
// console.log("Your Birth Year:", birthYear);


// 14. K-Electric Bill Generator
// var customerName = "Ali Khan";
// var billingMonth = months[currentDate.getMonth()];
// var units = 410;
// var chargesPerUnit = 16;
// var lateSurcharge = 350;

// var netAmount = units * chargesPerUnit;
// var grossAmount = netAmount + lateSurcharge;

// Round to 2 decimal places
// netAmount = netAmount.toFixed(2);
// grossAmount = grossAmount.toFixed(2);

// console.log("K-Electric Bill");
// console.log("Customer Name:", customerName);
// console.log("Month:", billingMonth);
// console.log("Units:", units);
// console.log("Charges per Unit:", chargesPerUnit);
// console.log("Net Amount Payable (within Due Date):", netAmount);
// console.log("Late Payment Surcharge:", lateSurcharge);
// console.log("Gross Amount Payable (after Due Date):", grossAmount);