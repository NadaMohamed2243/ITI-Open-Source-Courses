window.addEventListener("load", function () {
    let studentsTable = this.document.querySelector("#studentsData");
    let studentsArray = [];
    let addBtn = document.querySelector("input[value=Add]");
    let nameTextBox = document.querySelector("input[name=studentName]");
    let gradeTextBox = document.querySelector("input[name=studentGrade]");

    let TableFilter = document.querySelectorAll("select");
    console.log(TableFilter);

    //---------- add student
    addBtn.onclick = function () {

        let studentObject = {
            name: nameTextBox.value,
            grade: gradeTextBox.value,
            department: document.querySelector("input[name=Department]:checked").value
        };

        studentsArray.push(studentObject);
        let trElement = addStudent(studentObject);
        studentsTable.append(trElement);

    }

    //-----
    for(let i=0;i<TableFilter.length;i++ )
    {
        let inputvalue = document.querySelectorAll("select input");
        // if(TableFilter.value == '')
        console.log(inputvalue);
    }

})
