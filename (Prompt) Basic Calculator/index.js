// // Topic: Variables Declaration & Alert Property

// // String Declaration:
// var firstname = "Syed";
// var middlename = "Hamza";
// var lastname = "Ali";

// // String Concatenation:
// var fullname = firstname + middlename + lastname;

// alert(fullname);

// // Number Declaration:
// var maths = 90;
// var geography = 70;
// var science = 80;

// // Number value Concatenation:
// var total = maths + geography + science;
// alert(total);

// // Number & String Value Declaration:
// var maths = 90;
// var geography = "70";
// var science = 80;

// // Number & String value Concatenation:
// var Total = maths + geography + science;
// alert(Total);

// Multiplication Table of 2:

// var tablestring = "2";
// var tablenumber = 2;

// console.log("2" + "*" + "1" + "=" + (tablenumber * 1));
// console.log("2" + "*" + "2" + "=" + (tablenumber * 2));
// console.log("2" + "*" + "3" + "=" + (tablenumber * 3));
// console.log("2" + "*" + "4" + "=" + (tablenumber * 4));
// console.log("2" + "*" + "5" + "=" + (tablenumber * 5));
// console.log("2" + "*" + "6" + "=" + (tablenumber * 6));
// console.log("2" + "*" + "7" + "=" + (tablenumber * 7));
// console.log("2" + "*" + "8" + "=" + (tablenumber * 8));
// console.log("2" + "*" + "9" + "=" + (tablenumber * 9));
// console.log("2" + "*" + "10" + "=" + (tablenumber * 10));

// // Multiplication Table of 3:

// var tablestring = "3";
// var tablenumber = 3;

// console.log("3" + "*" + "1" + "=" + (tablenumber * 1));
// console.log("3" + "*" + "2" + "=" + (tablenumber * 2));
// console.log("3" + "*" + "3" + "=" + (tablenumber * 3));
// console.log("3" + "*" + "4" + "=" + (tablenumber * 4));
// console.log("3" + "*" + "5" + "=" + (tablenumber * 5));
// console.log("3" + "*" + "6" + "=" + (tablenumber * 6));
// console.log("3" + "*" + "7" + "=" + (tablenumber * 7));
// console.log("3" + "*" + "8" + "=" + (tablenumber * 8));
// console.log("3" + "*" + "9" + "=" + (tablenumber * 9));
// console.log("3" + "*" + "10" + "=" + (tablenumber * 10));

// var num = 1;
// var newNum = num++;
// console.log(num);
// console.log(newNum);

// function increment() {
//   var output = document.getElementById("output");

//   output.innerHTML = Number(output.innerHTML) + 1;
// }

// function decrement() {
//   var output = document.getElementById("output");

//   output.innerHTML = Number(output.innerHTML) - 1;
// }

var num1 = +prompt('Enter 1st Number:');
var opt = prompt('Enter Operator:');
var num2 = +prompt('Enter 2nd Number:');

var output = document.getElementById("output");

if (opt === '+') {
  output.innerHTML = num1 + num2;  
} else if (opt === '-'){
    output.innerHTML = num1 - num2;
} else if (opt === '*'){
   output.innerHTML = num1 * num2; 
} else if (opt === '/'){
   output.innerHTML = num1 / num2; 
} else {
    output.innerHTML = "Invalid Operator Provided";
}


console.log(num1, opt, num2)


