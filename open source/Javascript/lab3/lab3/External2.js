// 10. Create an array called students with the names of the seven 
// students (write down any names). 
// names=[“Elina”,”ahmed”,”Mona”,”eman”,”Ali”,”maha”,”zyad”] 

let students = new Array("Elina", "ahmed", "Mona", "eman", "Ali", "maha", "zyad");
console.log(students);


//--------------------------------------------------------
//--------------------------------------------------------

// 11. sort names Ascending 
students.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    else if (a.toLowerCase() < b.toLowerCase()) return -1;
    else return 0;
})
console.log(`sorted : ${students}`);


//--------------------------------------------------------
//--------------------------------------------------------

// 12. create a function takes a string as input and return string pascal 
// case. 


// const capitalizeWords = function (sentence) {
//     let newSentence = sentence[0].toUpperCase();
//     //we already take the first char so the loop start from 1
//     for (let i = 1; i < sentence.length; i++) {
//         //if before me a space so i am a new word 
//         if (sentence[i - 1] == ' ') {
//             newSentence += sentence[i].toUpperCase();
//         }
//         else {
//             newSentence += sentence[i];
//         }
//     }
//     return newSentence;
// }

const convertPascalCase = function(wordToConvert)
{
    let converted = wordToConvert
    .toLowerCase()
    .trim()
    .split(" ")
    .map((ele) => ele[0].toUpperCase() + ele.substring(1))
    .join(""); 
    return converted;
}

//--------------------------------------------------------
//--------------------------------------------------------

// 13. Use previous function to convert students’ names array to
// PascalCase(Note: map)

let studentsPascalCase = students.map(convertPascalCase);

console.log(`PascalCase : ${studentsPascalCase}`);

//--------------------------------------------------------
//--------------------------------------------------------

// 14.Find student with 4 or more letters. (search find, findIndex)
// get olt one element 
// let specificStudents = students.find((element)=>element.length>=4);
console.log(students.filter((element)=>element.length>=4));

//--------------------------------------------------------
//--------------------------------------------------------

// 15. Combine the students array with the grades array to create new 
// array contains student ‘name and grade in a string 
// [‘Ahmed 85’, ‘Elina 92’,… etc] 
// console.log(grades);

console.log(studentsPascalCase.map((item,index)=> item +" "+grades[index]));



//--------------------------------------------------------
//--------------------------------------------------------
// 16. Combine it again to looks like this [[‘Ahmed’,85],[‘Elina’,92]]
console.log(studentsPascalCase.map((item,index)=> [item,grades[index]]));