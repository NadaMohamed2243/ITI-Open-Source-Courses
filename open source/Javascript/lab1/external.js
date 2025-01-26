
//print the value of number1 on console before number1 definition line
//in js --> jit (meaning that before interpriting process he read all the file and put the definition 
//without assignment in the begin of the script in global part(hoisting))

//in ES5 --> with only var --> don't make exeption 
//number1 --> var //the result -->undefined

// console.log("the value of number1(var) before definition line" , number1);  


//in ES6 --> with let --> make exeption 
//number2 --> let //the result -->Cannot access 'number2' before initialization

//console.log("the value of number1(var) before definition line" , number2);  



//in ES6 --> with const --> make exeption 
//number3 --> const //the result -->Cannot access 'number3' before initialization

// console.log("the value of number3(const) before definition line" , number3);  



//number3 --> const //the result -->Cannot access 'number3' before initialization

// console.log("the value of number3(const) before definition line" , number3);  


//number --> without var //the result -->num is not defined
//console.log("the value of number(without var) before definition line" , number4);  


//js take the type from your assigned value 
var number1 = 3;
let number2 = 2.9;
const number3 = 0xff;

number4 = 3;


//if trying to new declare num1(var)  --> valid (not error)
//if trying to new declare num2(let)  --> not valid (error)
//if trying to new declare num3(const) --> not valid (error)


//number1 = 3;
//number2 = 2.9;
///number3 = 0xff;   //error can't change const valid

//if trying to change the value of num1(var) --> valid
//if trying to change the value of num2(let) --> valid
//if trying to change the value of num3(const) --> not valid

//var number1 = 3;
//let number2 = 2.9;
//const number3 = 0xff;

//either int or float or hex here in javascript --> is number
console.log("the type of number1 that take int :",typeof number1);
console.log("the type of number2 that take float :",typeof number2);
console.log("the type of number3 that take 0xff :",typeof number3);

//string can defined with "" or '' or `` (backtick)
var firstName = "Nada";
var middleName = 'Mohamed';
var lastName = `Ahmed`;

//get
console.log("(before change)firstName[0]=>nada --> ",firstName[0])
//set not valid // will not make error // will make nothing
firstName[0] = "g";
console.log("(after change)firstName[0]=>nada --> ",firstName[0])


//boolen datatype
var flag = true;
console.log("the type of flag :",typeof flag);


console.log("This is the External JavaScript file");


console.log("--------------------------------------------------");


console.log("number1+number2 = ",number1+number2);
console.log(" flag+ number1 = ", flag+ number1);      //true -> 1  //result 4]
console.log("firstName+flag ", firstName+flag );      //concatination --> nadatrue
console.log("number1+firstName", number1+firstName );      //concatination --> 3nada
console.log(" number1+number2+firstName",  number1+number2+firstName );      //concatination --> 5.9nada
console.log("number1+firstName+number2 ",number1+firstName+number2  );      //concatination --> 3nada2.9
console.log("number1*flag",number1*flag);      //concatination --> 3
console.log(`Our full name : ${firstName} ${middleName} ${lastName}`);      //concatination --> NAN
