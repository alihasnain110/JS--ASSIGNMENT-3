// JS ASSIGNMENT 3 

// CHAPTER ARRAY 

// Q1 

// var studentName = [];
// console.log(studentName);

// Q2

// var studentName = new Array();
// console.log(studentName);

// Q3

// var string = ["Ali", "Hasnain", "Shahid"];
// console.log(string);

// Q4


// var Number = [15, 66, 34];
// console.log(Number);

// Q5


// var booleanArray = [true, false, true, false];
// console.log(booleanArray);

// Q6 

// var mixArray = ["ali", 15, true,];
// console.log(mixArray);


// Q7

// var Qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// listsofQualification = Qualification;
// console.log(listsofQualification);

// Q8 


// let students = ["Ali", "Sara", "Ahmed"];
// let scores = [400, 450, 380];
// let totalMarks = 500;

// // Using if statements to display scores and percentages
// for (let i = 0; i < students.length; i++) {
//     let percentage = (scores[i] / totalMarks) * 100;
//     if (percentage >= 0) { // Simple check to ensure valid scores
//         console.log(`Score of ${students[i]} is Score = ${scores[i]}, Percentage = ${percentage.toFixed(2)}%<br>`);
//     }
// }


// Q9(a)

// var color = prompt("Enter Color to Add to the Beginning of list :");
// var colorName = ["yellow", "red", "green", "blue", "orange"];
// colorName.unshift(color);
// console.log(colorName);

// // Q9(b)

// var color = prompt("Enter Color to Add to the END of list :");
// var colorName = ["yellow", "red", "green", "blue", "orange"];
// colorName.push(color);
// console.log(colorName);


// // Q9(c)

// var colorName = ["yellow", "red", "green", "blue", "orange"];
// colorName.unshift("Black","white");
// console.log(colorName);


// Q9(d)

// var colorName = ["yellow", "red", "green", "blue", "orange"];
// colorName.shift();
// console.log(colorName);

// Q9(e)

// var colorName = ["yellow", "red", "green", "blue", "orange"];
// colorName.pop();
// console.log(colorName);

// Q9(f)


// var colors = ["Red", "Green", "Blue", "Yellow"];
// // Ask user for the index where they want to add the color
// var index = parseInt(prompt("Enter the index at which you want to add a color (0-" + (colors.length) + "):"));

// // Ask user for the color name they want to add
// var newColor = prompt("Enter the color name you want to add:");

// // Add the color at the specified index
// if (index >= 0 && index <= colors.length) {
//     colors.splice(index, 0, newColor); // Add color without removing any elements
// } else {
//     alert("Invalid index!"); // Alert if the index is invalid
// }

// console.log(colors);



// Q9(g)


// var colors = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple"];
// var index = parseInt(prompt("Enter the index from which you want to delete colors (0-" + (colors.length - 1) + "):"));
// var numberOfColorsToDelete = parseInt(prompt("How many colors do you want to delete?"));
// if (index >= 0 && index < colors.length && numberOfColorsToDelete > 0) {
//     // Ensure we do not go out of bounds when deleting
//     let colorsToDelete = Math.min(numberOfColorsToDelete, colors.length - index);
//     colors.splice(index, colorsToDelete); // Remove colors from the specified index
// } else {
//     alert("Invalid input! Please enter a valid index and number of colors to delete.");
// }
// console.log(colors);



// Q10 

// var scores = [75, 85, 60, 95, 80, 70];

// // Sort the array in ascending order
// scores.sort((a, b) => a - b);
// console.log(scores);



// Q11 

// let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"];
// let selectedCities = cities.slice(1, 4);
// console.log(selectedCities);


// Q12 

// var cats = ["this","is","my","cat"]
// var output = cats.join('')
// console.log(output)



// Q13 


// var country = []
// country.push("pakistan", "india");

// console.log(country);


// Q14 



// let stack = [];
// // Add values
// stack.push(10);
// stack.push(20);
// stack.push(30);

// // Remove and return the last added value
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());








// ****************CHAPTER 15 (ARRAY I)****************

// Q1
var Arr = [];
console.log(Arr);

// Q2

var city = ["karachi "];
console.log(city);

// Q3 

var alphabet = ["h","j","s","k"];
console.log(alphabet[1]);

// Q4
var alphabet = ["h","j","s","k"];
console.log(alphabet.length);

// Q5 

var a = ["ali"];
a[1] = "hasnain";
console.log(a);

// Q6 

var num = [1,2];
num.push(3);
console.log(num);

// Q7

var num = ["a","b","k"];
num.pop();
console.log(num);

// Q8 

var num = [1,2];
num.push(3);
console.log(num);

// Q9 

var sizes = [ "S","A","V","C"];
sizes.shift();
console.log(sizes);

// Q10

var sizes = [ "S","A","V","C"];
sizes.unshift("R","E","W");
console.log(sizes);

// Q11
var sizes = [ "S","A","V","C"];
sizes.splice(2,0,"L");
console.log(sizes);


// Q12

var sizes = [ "S","A","V","C","D","E","R"];
var newarray = sizes.slice("S","A","V");
console.log(newarray);

// Q13

var pets = ["dog","cat","ox","frog","duck"]
pets.splice(1,4,"zebra","kitten");
console.log(pets);  



// Q14 


var pets = ["dog","cat","ox","frog","duck","kitten"];
pets.splice(1,2);

console.log(pets);


// Q15

var pets = ["dog","cat","ox","frog","duck","kitten"];
var newpets = pets.slice(3,5)
console.log(newpets)
