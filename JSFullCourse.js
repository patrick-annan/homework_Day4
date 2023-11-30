console.log (hello World);

// in line comment
/* multi
line 
comment
*/

// data types: undefined, boolean, null, string, symbol, number, and object 

var myName = "Patrick"

myName = 13

let ourName = "Such And Such"

const pi = 3.

// assignment operator

var a;
var b = 2;
a = 7;
b = a;
console.log(a)

var a = 9;

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + "String!";

//Declarations
var StUdLyCapVaR;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A string";
titleCaseOver = 9000;

var sum = 10 + 0;
console.log(sum)

var difference = 45 - 33;

var product = 8 * 10;

var quotient = 66 / 33;

var myVar = 87;
myVar ++;

var myVar = 11;
myVar--;

var ourDecimal = 5.7;

var product = 2.0 * 2.5;
console.log(product)

var quotient = 4.4/ 2.0;

var remainder;
remainder = 11 % 3;

var a = 3;
var b = 17;
var c = 12;
a += 12;
b += 9;
c += 7;

var a = 11;
var b = 9;
var c = 3;
a -= 6;
b -= 15;
c -= 1

var a = 5;
var b = 12;
var c = 4.6;
a *= 5;
b *= b;
c *= 10;

var a = 48;
var b = 108;
var c = 33;
a /= 12;
b /= 4;
c /= 11;

var firstName = "Patrick";
var lastName= "Annan"

var myStr = "I am a \"Double quoted\" string inside \"double quotes\""

/* 
Code Output
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/

var myStr = "FirstLine\n\";

var ourStr = "I come first. " + "I come second.";

var myStr = "This is the start. " + "This is the end.";


var ourStr = "I come first. ";
ourStr += "I come second.";

var myStr = "This is the first sen]tence. "
myStr += "This is the second sentence"
console.log(myStr);

var anAdjective = "Awesome!";
var ourStr = "FreeCodeCamp is ";
ourStr += anAdjective;

var someAdjective = "worthshile";
var myStr = "Learning to code is ";
myStr += someAdjective;

var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;

var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0];

// string immutability

varmyStr = "Jello world";
myStr[0] = "H";

var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];


var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length -1];

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length-1];

// Word Blanks

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result += "The " + myAdjective + "" + myNoun + "" 
  + myVerb + " to the store";
  return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// Store mult values with arrays

var ourArray = ["John", 23];

var myArray = ["Quincy", 1];


var ourArray = [50,60,70];
var ourData = ourArray[0];

var myArray = [50,60,70];
var myData = myArray[0];


var myArray = [[1, 2, 3,], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

var myData = myArray[2][1];
console.log(myData);

// Manipulate arrays with push

var ourArray = ["Stimson", "J", "cat"];
ourArray.push(["happy", "joy"]);

var myArray = [["John", 23],["cat", 2]];

myArray.push(["dog", 3])

// Manipulating arrays with pop //

var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();

var myArray = [["John", 23], ["\cat", 2]];

var removedFromMyArray = myArray.pop();
console.log(myArray)

// Manipulate arrays with Shift //

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();

var myArray = [["John", 23], ["dog", 3]];

var removedFromMyArray = myArray.shift();

// Unshift 

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");

var myArray = [["John", 23] ["dog", 3]];
myArray.shift();

myArray.unshift(["Paul", 35]);

// Shopping List

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["Juice", 2], ["eggs", 12]];

// reusable code with functions

function ourReusableFunction() {
  console.log("Heyya, World");

}

ourReusableFunction();

function reusableFunction() {
  console.log("Hi World")
}

console.log(reusableFunction);

// parameters

function ourFunctionWithArgs(a,b) {
  console.log(a - b);
}
 
ourFunctionWithArgs(10,5); // outputs 5

function functionWithArgs(a,b) {
  console.log(a+b);
}

functionWithArgs(10, 5);

// global scope of functions

var myGlobal = 10;
function fun1 () {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if(typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


// local scope and functions

function myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}
myLocalScope();

console.log(myVar);

// global vs local scope in functions

var outerWear = "T-shirt";

function myOutfit() {
  var outerWear = "sweater";

  return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

// return a value from a function with return

function minusSeven(num) {
  return num - 7;
}

console.log(minusSeven(10));












