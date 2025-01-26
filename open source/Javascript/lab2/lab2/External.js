// Task 1 :  
// Take students Grades from user through Javascript function name it 
// getStudentGrades 
// The following Tasks will evaluate the ability to manage loops and operators in 
// problem solving techniques 
// started from simple to more complicated 

//------------------------------------------------------------------------
//------------------------------------------------------------------------

// Task 1.1:    
// When the function called display 3 prompts on the page one by one to take 3 grades for  3 
// students . 
// Then display the grades on console after taking them 
// Note:  use normal for loop 
//------------------------------------------------------------------------

//print degrees as string after function

// function getStudentGrades()
// {
//     let degree = '';
//     for(let i=0;i<3;i++)
//     {
//        degree +=` ${prompt("enter the student grade : ")}`;
//     }
//     return degree;
// }

// console.log(`students Grades : ${getStudentGrades()}`);

//------------------------------------------------------------------------
//print degrees one by one


// const getStudentGrades=function()
// {
//     let degree;
//     for(let i=0;i<3;i++)
//     {
//        degree =prompt("enter the student grade : ");
//        console.log(degree);
//     }
// }

// getStudentGrades();


//------------------------------------------------------------------------
//------------------------------------------------------------------------

// Task 1.2:   
// From 1.1. Instead of display the grade values , I want you to display grads summation 
// Did you find any problem ?? 
// Note:  to solve any problem try to use parseInt or parseFloat  built-in javascript functions

//------------------------------------------------------------------------


// const getStudentGrades=function()
// {
//     let degreesum = 0 ;
//     for(let i=0;i<3;i++)
//     {
//         //prompt return string --> string + string --> cooncatination
//         //without parseInt will concatinate the degress as (degree1 degree2 degree3)
//         degreesum +=parseInt(prompt("enter the student grade : "));
//     }
//     return degreesum;
// }


// console.log(`Grades summation : ${getStudentGrades()}`);


// ------------------------------------------------------------------------
//------------------------------------------------------------------------

// Task 1.3: 
// From 1.2 .  Now instead of take 3 students from user, Ask the user first about how many 
// students grads do we have by a prompt  
// Then start take the grades and display their summation

//------------------------------------------------------------------------


// const getStudentGrades=function(gradesNumber)
// {
//     let degreesum = 0 ;
//     for(let i=0;i<gradesNumber;i++)
//     {
//         //without parseInt will concatinate the degress as (degree1 degree2 degree3)
//         degreesum +=parseInt(prompt("enter the student grade : "));
//     }
//     return degreesum;
// }

// let gradesNumber = prompt("enter the number of grades : ");
// console.log(`Grades summation : ${getStudentGrades(gradesNumber)}`);


//------------------------------------------------------------------------
// ------------------------------------------------------------------------

// Task 1.4: 
// From 1.3 .   Now we are ready to make some validations on how many students grades do we 
// have? 
// add a check after taking number of grades from user to make sure that the number between 2 
// and 10 
// display error message USING alert method instead of print the summation value, otherwise 
// display the summation 

//------------------------------------------------------------------------

// const getStudentGrades=function(gradesNumber)
// {
//     let degreesum = 0 ;
//     for(let i=0;i<gradesNumber;i++)
//     {
//         //without parseInt will concatinate the degress as (degree1 degree2 degree3)
//         degreesum +=parseInt(prompt("enter the student grade : "));
//     }
//     return degreesum;
// }


// let gradesNumber = prompt("enter the number of grades : ");
// if(gradesNumber>2 && gradesNumber<10)
// {
//     console.log(`Grades summation : ${getStudentGrades(gradesNumber)}`);
// }
// else
// {
//     alert("you must input num between 2 and 10");
// }


// ------------------------------------------------------------------------
//------------------------------------------------------------------------

// Task 1.5: 
// From 1.4 .   we need to add more validations on the grades  
// what if the user insert a grade like this       
// 3eman  ?? 
// we will have a problem with the summation result! (try it with previous task 1.4) 
// So we need to make sure that user inserted a numeric value , if not the number will be 
// considered as ZERO 
// Note:   we will need isNaN()  javascript built-in method

//------------------------------------------------------------------------


// const getStudentGrades=function(gradesNumber)
// {
//     let degreesum = 0 ;
//     for(let i=0;i<gradesNumber;i++)
//     {
//         degree =prompt("enter the student grade : ");
//         if(!isNaN(degree))
//         {
//             //without parseInt will concatinate the degress as (degree1 degree2 degree3)
//             degreesum +=Number(degree);
//         }
//         else
//         {
//             degreesum +=0;
//         }
//     }
//     return degreesum;
// }



// let gradesNumber = prompt("enter the number of grades : ");
// if(gradesNumber>2 && gradesNumber<10)
// {
//     console.log(`Grades summation : ${getStudentGrades(gradesNumber)}`);
// }
// else
// {
//     alert("you must input num between 2 and 10");
// }








//------------------------------------------------------------------------
//------------------------------------------------------------------------
// Task 1.6: 
// From 1.5.   we need to be more advanced  
// Instead of considering the wrong grade value as Zero we will show the prompt again asking for 
// the correct grad until the user inserted correctly

//------------------------------------------------------------------------



// const getStudentGrades=function(gradesNumber)
// {
//     let degreesum = 0 ;
//     for (let i = 0; i < gradesNumber; i++) 
//     {
//         degree =prompt("enter the student grade : ");
//         //if degree is non a number  --> input the value again
//         while(isNaN(degree))
//         {
//             degree =prompt("please input the student grade correctly to be integer : ");
//         }
//         degreesum += Number(degree);
//     }
//     return degreesum;
// }



// let gradesNumber = prompt("enter the number of grades : ");
// if(gradesNumber>2 && gradesNumber<10)
// {
//     console.log(`Grades summation : ${getStudentGrades(gradesNumber)}`);
// }
// else
// {
//     alert("you must input num between 2 and 10");
// }










//------------------------------------------------------------------------
//------------------------------------------------------------------------
// Task 1.7: 
// From 1.6.   now add an extra validation on grades to be between 0 and 100 
//------------------------------------------------------------------------

//--------------------------------------------------with while

// const getStudentGrades=function(gradesNumber)
// {
//     let degreesum = 0 ;
//     for (let i = 0; i < gradesNumber; i++) 
//     {
//         degree =prompt(`enter the student grade ${i+1} : `);
//         //if degree is non a number  --> input the value again 
//         //if the degree not between 0 & 100 
//         //if user enter ok without value
//         //if user make only space and enter ok
//         while(isNaN(degree) || degree<0 || degree>100 || degree=='' || degree.trim()=='')
//         {
//             degree =prompt(`please input the student grade ${i+1} correctly to be integer : `);
//         }
//         degreesum += Number(degree);
//     }
//     return degreesum;
// }

// let gradesNumber;
// do{
//     gradesNumber = prompt("enter the number of grades : ");
// }
// while(gradesNumber<=2 || gradesNumber>=10 || isNaN(gradesNumber))

// console.log(`Grades summation : ${getStudentGrades(gradesNumber)}`);









//--------------------------------------------------without while
//without canel handeling

// const getStudentGrades=function(gradesNumber)
// {
//     let degreesum = 0 ;
//     for (let i = 0; i < gradesNumber; i++) 
//     {
//         //if degree is non a number  --> input the value again 
//         //if the degree not between 0 & 100 
//         //if user enter ok without value
//         //if user make only space and enter ok
//         do{
//             degree =prompt(`please enter the student grade ${i+1} : `);
//         }
//         while(isNaN(degree) || degree<0 || degree>100 || degree=='' || degree.trim()=='')

//         degreesum += Number(degree);
//     }
//     return degreesum;
// }

// let gradesNumber;
// do{
//     gradesNumber = prompt("enter the number of grades : ");
// }
// while(gradesNumber<=2 || gradesNumber>=10 || isNaN(gradesNumber))

// console.log(`Grades summation : ${getStudentGrades(gradesNumber)}`);











//with cancel handeling

const getStudentGrades = function (gradesNumber) {
    let degreesum = 0;
    let degreeFlag = 0;

    grades: for (let i = 0; i < gradesNumber; i++) {
        //if degree is non a number  --> input the value again 
        //if the degree not between 0 & 100 
        //if user enter ok without value
        //if user make only space and enter ok
        do {
            degree = prompt(`please enter the student grade ${i + 1} : `);
            //press cancel
            if (degree == null) {
                degreeFlag = 1;
                break grades;
            }
        }
        while (isNaN(degree) || degree < 0 || degree > 100 || degree == '' || degree.trim() == '')

        degreesum += Number(degree);
    }
    if (degreeFlag == 1) {
        return -1;
    }
    else {
        return degreesum;
    }

}



let gradesNumber;
let gradesNumberFlag = 0;
do {
    gradesNumber = prompt("enter the number of grades : ");
    //press cancel
    if (gradesNumber == null) {
        gradesNumberFlag = 1;
        break;
    }
}
while (gradesNumber <= 2 || gradesNumber >= 10 || isNaN(gradesNumber))




if (gradesNumberFlag == 1) {
    console.log(`the process cancelled`);
}
else {
    let sumGrade = getStudentGrades(gradesNumber);
    if (sumGrade == -1) {
        console.log(`the process cancelled`);
    }
    else {
        console.log(`Grades summation : ${sumGrade}`);
    }
}
