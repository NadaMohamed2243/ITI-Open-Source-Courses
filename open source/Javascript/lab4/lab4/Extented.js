// 1- Create function to register students data through prompts 
// (firstName, lastName, age, email, and department) 
// Bonus: validate email using regular expressions 
// function should retunes student data as an object 

let firstName, lastName, age, email, department;
const getStudentsData = function (studentIndex) {
    do {
        firstName = prompt(`please enter the first name for student ${studentIndex}:`);
    } while (firstName.trim() == "");
    do {
        lastName = prompt(`please enter the last name for student ${studentIndex}:`);
    } while (lastName.trim() == "")


    do {
        age = Number(prompt(`please enter the age for student ${studentIndex}:`));
    }
    while (isNaN(age) || age==0);

    do{
       email = prompt(`please enter the email for student ${studentIndex}:`); 
    }while(!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email));
    

    do {
        department = prompt(`please enter the department for student ${studentIndex} :`);
    } while (department.trim() == "")
}


const registerStudents = function (studentIndex) {
    getStudentsData(studentIndex);
    let StudentData = {
        firstName, lastName, age, email, department,
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        //override toString method
        toString(){
            return this.getFullName();
        }
    }
    return StudentData;
}

//----------------------------------------------------------------------------------------
// 2- create array of students, then start push students coming from previous function into 
// this array. 
let studentsInfo = [];
let studentNumber;

do {
    studentNumber = prompt("Enter the number of students : ");
}
while (isNaN(Number(studentNumber)) || studentNumber.trim() == "");
studentNumber = Number(studentNumber);


for (let i = 0; i < studentNumber; i++) {
    studentsInfo.push(registerStudents(i + 1));
}
console.log(studentsInfo);

//----------------------------------------------------------------------------------------
// 3- find the oldest student fullName. 

// console.log(studentsInfo[0].getFullName());

//if we have two students has the same old age --> this way will get only one student 
let oldestStudentInfo = studentsInfo.reduce((acc, currentvalue) => acc.age < currentvalue.age ? currentvalue : acc);
console.log(`the full name of the older student is : ${oldestStudentInfo.getFullName()}`);


//if we have more than student has the same old age --> this way will get all student 
let maxStudentsAge = Math.max(...(studentsInfo.map((item) => item.age)));
console.log("the full name of all the older students is : ", studentsInfo.filter((ele) => ele.age == maxStudentsAge).map((item) => item.getFullName()).join());







//-------------------------------------------------------------------------------------------
// 4- Now use your PascalCase Function in previous lab to convert last names and firstNames 
// in objects to PascalCase. 

const convertPascalCase = function (wordToConvert) {
    let converted = wordToConvert
        .toLowerCase()
        .trim()
        .split(" ")
        .map((ele) => ele[0].toUpperCase() + ele.substring(1))
        .join("");
    return converted;
}

let studentsInfoWithPascal = studentsInfo.map((item) => {
    return {
        ...item,
        firstName: convertPascalCase(item.firstName),
        lastName: convertPascalCase(item.lastName)
    }
});

console.log("the student date with first name and last name with pascal case:", studentsInfoWithPascal);

//----------------------------------------------------------------------------------------
// 5- Find all students with ages greater than 20 
let specificStudentsGT20 = studentsInfo.filter((ele) => ele.age > 20);

specificStudentsGT20.length == 0 ? console.log("there is no students greater than 20 ") : console.log("the student date with ages greater than 20 :", specificStudentsGT20);



//----------------------------------------------------------------------------------------
// 6- Get the average age for all students 

let averageAgeStudents = (studentsInfo.map((item) => item.age).reduce((acc, currentvalue) => acc + currentvalue)) / studentsInfo.length;
console.log("the average age for all students =", averageAgeStudents);

//----------------------------------------------------------------------------------------
// 7- Sort students ascending by firstName ,(if you have a match in firstName) then sort 
// descending by lastName 


studentsInfo.sort((a, b) => {
    let a_FirstNameLowerCase = a.firstName.toLowerCase();
    let a_LastNameLowerCase = a.lastName.toLowerCase();

    let b_FirstNameLowerCase = b.firstName.toLowerCase();
    let b_LastNameLowerCase = b.lastName.toLowerCase();

    if (a_FirstNameLowerCase > b_FirstNameLowerCase) return 1;
    else if (a_FirstNameLowerCase < b_FirstNameLowerCase) return -1;
    else {
        if (a_LastNameLowerCase > b_LastNameLowerCase) return 1;
        else if (a_LastNameLowerCase < b_LastNameLowerCase) return -1;
        else return 0;
    }
})

console.log("the sorted students : ", studentsInfo);

//----------------------------------------------------------------------------------------

// 8- Generate a new array contains objects with two properties fullName and age

let studentsfullNameAndAge = studentsInfo.map((item) => {
    return {
        age: item.age,
        fullName: `${item.firstName} ${item.lastName}`
    }
})

console.log("new object with only age and full name",studentsfullNameAndAge);

// 9- try students[0]+””  ? 
//before override tstring method
console.log(studentsInfo[0] + " ");   
//before override tstring method
//output : [object Object] --> this because we don't override the tostring function --> the default thing that it do is [object object] 



//-----------------------------------------------------------------------------
// 10- override toString method to solve the problem by print student fullname 

//after override tstring method
//output : fareeda mohamed (the full name) --> this because we override the tostring function 


// 11- Convert your array to JSON 
// the new output will be without any functions 

let studentsDataInJSON = JSON.stringify(studentsInfo);
console.log(studentsDataInJSON);
