// 1. Merge first & last name and greet user
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;

// console.log("Hello " + fullName + "! Welcome.");


// 2. Find length of favorite mobile phone model
// var mobile = prompt("Enter your favorite mobile phone model:");

// console.log("My favorite phone is: " + mobile);
// console.log("Length of string: " + mobile.length);


// 3. Find index of 'n' in 'Pakistani'
// var word = "Pakistani";

// console.log("String: " + word);
// console.log("Index of 'n': " + word.indexOf("n"));


// 4. Find last index of 'l' in 'Hello World'
// var text = "Hello World";

// console.log("String: " + text);
// console.log("Last index of 'l': " + text.lastIndexOf("l"));


// 5. Find character at 3rd index in 'Pakistani'
// var country = "Pakistani";

// console.log("String: " + country);
// console.log("Character at index 3: " + country.charAt(3));


// 6. Repeat Q1 using concat()
// var first = prompt("Enter your first name:");
// var last = prompt("Enter your last name:");
// var full = first.concat(" ", last);

// console.log("Hello " + full + "!");


// 7. Replace 'Hyder' with 'Islam'
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");

// console.log("City: " + city);
// console.log("After replacement: " + newCity);


// 8. Replace all 'and' with '&'
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");

// console.log("Before: " + message);
// console.log("After: " + newMessage);


// 9. Convert string "472" to number
// var str = "472";
// var num = Number(str);

// console.log("Value: " + str + " | Type: " + typeof str);
// console.log("Value: " + num + " | Type: " + typeof num);


// 10. Convert user input to uppercase
// var input = prompt("Enter text:");
// console.log("Uppercase: " + input.toUpperCase());


// 11. Convert user input to title case
// var userInput = prompt("Enter text:");
// var firstLetter = userInput.charAt(0).toUpperCase();
// var remaining = userInput.slice(1).toLowerCase();

// console.log("Title Case: " + firstLetter + remaining);


// 12. Remove dot from number
// var numValue = 35.36;
// var strNum = numValue.toString();
// var result = strNum.replace(".", "");

// console.log("Number: " + numValue);
// console.log("Result: " + result);


// 13. Username validation
// var username = prompt("Enter username:");

// for (var i = 0; i < username.length; i++) {
//     var code = username.charCodeAt(i);

//     if (code === 33 || code === 44 || code === 46 || code === 64) {
//         alert("Invalid username! Please avoid special symbols (@ . , !)");
//         break;
//     }
// }


// 14. Search item in array (case insensitive)
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Enter item to search:").toLowerCase();

// var found = false;

// for (var i = 0; i < items.length; i++) {
//     if (items[i] === search) {
//         found = true;
//         console.log(search + " is available at index " + i);
//         break;
//     }
// }

// if (!found) {
//     console.log(search + " is not available");
// }


// 15. Password validation
// var password = prompt("Enter password:");

// var hasLetter = false;
// var hasNumber = false;

// if (password.length < 6) {
//     console.log("Password must be at least 6 characters long");
// } else if (!isNaN(password.charAt(0))) {
//     console.log("Password should not start with a number");
// } else {
//     for (var i = 0; i < password.length; i++) {
//         var code = password.charCodeAt(i);

//         if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//             hasLetter = true;
//         } else if (code >= 48 && code <= 57) {
//             hasNumber = true;
//         }
//     }

//     if (hasLetter && hasNumber) {
//         console.log("Valid password");
//     } else {
//         console.log("Password must contain both letters and numbers");
//     }
// }


// 16. Convert string to array using split()
// var university = "University of Karachi";
// var arr = university.split(" ");

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// 17. Display last character of user input
// var userText = prompt("Enter text:");
// var lastChar = userText.charAt(userText.length - 1);

// console.log("Last character: " + lastChar);


// 18. Count occurrences of "the"
// var sentence = "The quick brown fox jumps over the lazy dog";
// var lowerSentence = sentence.toLowerCase();

// var count = 0;
// var words = lowerSentence.split(" ");

// for (var i = 0; i < words.length; i++) {
//     if (words[i] === "the") {
//         count++;
//     }
// }

// console.log("Occurrences of 'the': " + count);