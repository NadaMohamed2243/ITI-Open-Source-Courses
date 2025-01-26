// 1. Create an array called grades and initialize it with the grades of 
// seven students (e.g., [85, 92, 78, 90, 87,61,73]). 

// let grades = new Array(85, 92, 78, 90, 87,61,73);
let grades = [85, 92, 78, 90, 87,61,73];
console.log(`grades : ${grades}`);
// console.log(grades.constructor.name);


//----------------------------------------------------------------------
//----------------------------------------------------------------------


// 2. Calculate and print the average grade of the students in 
// the grades array (Note:  reduce). 

//using for loop

let sumResult=0;
for (index in grades)
{
    sumResult+=grades[index];
}
let averageResult = sumResult/grades.length;
console.log(`using loop : the grade average of the students is ${averageResult}`);


//using reduce   --> make operations on the array elements
//applies a function to an accumulator and each element in the array (from left to right) to reduce it to a single value.
//array.reduce(callbackFn, initialValue)
//callbackFn --> accumulator , currentValue,currentIndex,array
//initialValue --> if exist -->-->--> accumulator=initialValue && currentValue=arr[0]
//             --> if not exist -->-->--> accumulator=arr[0] && currentValue=arr[1]
let sumResultReduce=grades.reduce((accumulator,currentValue)=> accumulator+currentValue);
let averageResultReduce = sumResultReduce/grades.length;
console.log(`useing reduce : the grade average of the students is ${averageResultReduce}`);


//----------------------------------------------------------------------
//----------------------------------------------------------------------

// 3. Find and print the highest grade in the grades array. 
// using loop
let maxGrade = grades[0];

for (index in grades)
{
    if(grades[index] > maxGrade)
    {
        maxGrade=grades[index];
    }
}

console.log(`using loop : highest grade in the grades is ${maxGrade}`);

//using reduce
let maxGradeReduce = grades.reduce((accumulator,currentValue)=>accumulator<currentValue?currentValue:accumulator,grades[0]);
console.log(`using reduce : highest grade in the grades is ${maxGradeReduce}`);

//----------------------------------------------------------------------
//----------------------------------------------------------------------

// 4. Find and print the lowest grade in the grades array.
//using loop
let minGrade = grades[0];


for (index in grades)
{
    if(grades[index] < minGrade)
    {
        minGrade=grades[index];
    }
}
console.log(`using loop : lowest grade in the grades is ${minGrade}`);

//using reduce
let minGradeReduce = grades.reduce((accumulator,currentValue)=>accumulator>currentValue?currentValue:accumulator,grades[0]);
console.log(`using reduce : highest grade in the grades is ${minGradeReduce}`);

//----------------------------------------------------------------------
//----------------------------------------------------------------------

// 5. Replace grade 90 to be 91
const replaceValue = function(array,valueToReplace,NewValue)
{
    array.splice(array.indexOf(valueToReplace) , 1 , NewValue);
    return array;
}


let valueToReplace = 90;
let NewValue = 91;
//validation
if(grades.includes(valueToReplace))
{
    console.log(`replaced grade array : ${replaceValue(grades,valueToReplace,NewValue)}`);
}
else
{
    console.log(`the value ${valueToReplace} is not exist in the array`);
}


//using map 
const replaceValueMap = function(array,valueToReplace,NewValue)
{
    return grades.map((item)=>(item===valueToReplace?NewValue:item));
}


let valueToReplaceMap = 91;
let NewValueMap = 90;
//validation
if(grades.includes(valueToReplaceMap))
{
    console.log(`using map replaced grade array : ${replaceValue(grades,valueToReplaceMap,NewValueMap)}`);
}
else
{
    console.log(`the value ${valueToReplaceMap} is not exist in the array`);
}


//----------------------------------------------------------------------
//----------------------------------------------------------------------

// 6. Sort the grades array in ascending order and print the sorted array.

grades.sort((a,b)=>a-b);
console.log(`the sorted array : ${grades}`);

//----------------------------------------------------------------------
//----------------------------------------------------------------------

// 7. Find students grades greater than or equal 60. name the new array 
// successeStudents.


const filterStudent = function(array,condition)
{
    let resultStudent = [];
    for(let index in array)
    {
        if(condition(array[index]))
        {
            resultStudent.push(array[index]);
        }
    }
    return resultStudent;
}

const successeStudents = function(grades)
{
    return grades>=60
}
console.log(`grades greater than or equal 60 : ${filterStudent(grades,successeStudents)}`);

//using filter
console.log(`using filter : grades greater than or equal 60 : ${grades.filter((element)=>element>60)}`);
//----------------------------------------------------------------------
//----------------------------------------------------------------------

// 8. Convert grades to percentage array [‘85%’,’92%’,…..etc].

let percentGrades = grades.map((item)=>item+"%");
console.log(percentGrades);


// 9. Convert the grades array to a separated by comma. Print the 
// resulting string. 

let stringGrades=grades.join();   // comma ia the default
console.log(`the grades array Converted to a string separated by comma : ${stringGrades}`);
console.log(`type of stringGrades array : ${stringGrades.constructor.name}`);