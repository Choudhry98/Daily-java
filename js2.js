// console.log("working");

// let numberOne = 34;//integer
// let numberTwo = 17.34;//float/decimal

// let isTrue = false;//boolean

// let myName = "Abhishek";//string

// let myAddress = "c2, urvashi enclave raj nagar extension (201017)";//

// //Naming convention for the variable

// //keyword- let, var, const(all are small)

// //1.Try to keep it as descriptive as possible.
// //2.We have to keep our variable name in camel case. (Pascal case for component name,Kebab Case only for class name)
// //3.Try to avoid numbers in integer format ( instead use it in string format) and characters in your variable names.

// //declaration & Intialization = 
// //Declartion - Let myName;
// //declaration & Intialization - Let myNameOne ="Abhishek";
// //Intialization - myName = "Abhi";


// //Let - This keyword is use to declare a variable in a line which can or cannot be assigned the value instantly.
// //This can't have variable with same name.
// //They aren't hosted


// let aNumber;
// aNumber = 23;
// let aNumberOne = 25;
// let value = 34;

// let result = 0;
// result= result+2;

// //const - This keyword has to be declared and initialized with the value in one line only.
// //This cant have variable with same name.
// //This variable value can never change.If changed will give you an error.
// //this isn't hosted

// const newInteger = 33;

// //var - Tjis keyword is used to declare a variable in a line which can  or can not be assigned the value instantly or on the same line.
// //This can have variable with same name -Tjis leads to overwrite privious values.
// //var keyword are hosted
// var myHobby;
// myHobby= "sketch";

// var myHobby = "dance";

// //............Hoisting.........//

// //It Allows u to use the variable name even before declaring them.
// //It is inly supported by the var keyword and functions.
// //Hosting is only supported for declartion and not initialization.
// //It brings the code declartion to the top of the code.


//for keywords let and const, the declartion and intialization needs to be done before using that variable.
//They do not support hoisting.

//variable with "var" keywords only allow u to access the variable before instialization.



console.log(myStreet);//undefined
ar myStreet;
myStreet = "Howrah";
console.log(myStreet);//Howrah