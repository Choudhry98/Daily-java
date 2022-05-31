console.log("working");
let a = 12;
let b = 15;
result = a+b;
console.log(result);

//in the creation phase, all the variable are allocated memories(space to store values) and assignd witha a default value as undefiend.They are not intialized with their intial value/assigned values.
// in the execution phase, we allocate the actual values to the variable instead of the default value, undefined.



// //Functions

// function add(a,b,){//parameters
//     let result = a+b;
//     console.log(result);
// }
// let valueOne = 3;
// let valueTwo = 9;
// let valueThree = 22;
// let valueFour = 25;
// addition(valueOne,valueTwo);//arguments

// //The very first thing that gets created while we write and execute a code is a Global Execuation Context.
// //It has Two  parts :
// //1.Creation Phase
// //2.Execution Phase


var name1 = "Abhi";
var name2 = "Ashu";

function operation(a,b,c){
    var res1 = a+b;
    var res2 = res1 + c;
    return res2;

}
var finalresult = operation(10,10,12);
console.log(finalresult);