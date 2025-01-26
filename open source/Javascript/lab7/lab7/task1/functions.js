const addStudent = function (student, studentArray) {

    let trObject = document.createElement("tr");
    let tdObject = null;

    for (let proprty in student) {
        if (proprty == 'department') continue;
        tdObject = document.createElement("td");
        tdObject.innerText = student[proprty];
        trObject.appendChild(tdObject);
    }

    tdObject = document.createElement("td");
    deleteImg = document.createElement("img");
    deleteImg.src = '/images/delete.png';
    deleteImg.style.width = '30px';
    deleteImg.style.height = '30px';
    deleteImg.style.cursor = 'pointer';
    tdObject.appendChild(deleteImg);
    trObject.appendChild(tdObject);

    trObject.classList.add(student['department']);

    deleteImg.addEventListener('click', function () {
        // console.log(trObject)
        //update the array
        const studentIndex = studentArray.findIndex((ele) => (ele.name === student.name && ele.grade === student.grade));
        if (studentIndex !== -1) {
            studentArray.splice(studentIndex, 1);
        }
        //update table
        trObject.remove();

    })


    return trObject;


}



const handlingErrors = function (studentArray, nameTextBox, nameError, gradeTextBox, gardeError) {
    error = '';
    // It checks if at least one element in the array satisfies the condition specified in the callback function.
    const isNameDuplicate = studentArray.some(
        (ele) => ele.name.trim().toLowerCase() === nameTextBox.value.trim().toLowerCase()
    );
    if (nameTextBox.value.trim() == '' || nameTextBox.value.trim().includes(' ') || isNameDuplicate) {
        console.log(nameTextBox.value)
        error = 'error';
        nameError.style.display = 'block';
    }
    else {
        nameError.style.display = 'none';
    }
    if (isNaN(gradeTextBox.value) || gradeTextBox.value.trim() == '' || gradeTextBox.value.trim().includes(' ') || gradeTextBox.value.trim() > 100 || gradeTextBox.value.trim() < 0) {
        error = 'error';
        gardeError.style.display = 'block';
    }
    else {
        gardeError.style.display = 'none';
    }


    return error;
}





const studentsAppear = function (studentTable, studentArray, state, search,sort) {
    studentTable.innerText = '';
    let studentAppearState = [];
    if (search == '') {
        console.log(sortStudents(filterStudents(studentArray, state),sort))
        studentAppearState = sortStudents(filterStudents(studentArray, state),sort)
        
        console.log(studentAppearState);
    }
    else {
        
        // studentAppearState = filterStudents(studentArray.filter((ele) => ele.name.toLowerCase().includes(search.toLowerCase())), state);
        studentAppearState = sortStudents(filterStudents(studentArray.filter((ele) => ele.name.toLowerCase().startsWith(search.toLowerCase())), state),sort);
        console.log(state)
        console.log(filterStudents(studentArray.filter((ele) => ele.name.toLowerCase().startsWith(search.toLowerCase())),state))
        console.log(studentAppearState);
    }

    studentAppearState.forEach(student => {
        let trElement = addStudent(student, studentArray);
        studentTable.appendChild(trElement);
    });
}

const filterStudents = function (studentArray, state) {
    if (state == 'all') {
        return studentArray;
    }
    else if (state == 'success') {
        return studentArray.filter((student) => student.grade >= 60)

    }
    else if (state == 'fail') {
        return studentArray.filter((student) => student.grade < 60)
    }
}


const sortStudents = function (studentArray, sort) {
    let sortedArray = studentArray.map((item) => item)
    // console.log(sort)
    if (sort == 'none') {
        return studentArray;
    }
    else if (sort == 'name') {
        sortedArray.sort((a, b) => {
            console.log(a.name);
            let aName = a.name.toLowerCase();
            let bName = b.name.toLowerCase();
            if (aName > bName) return 1;
            if (aName < bName) return -1;
            return 0;
            
        });
        return sortedArray

        // console.log(sortedArray)
    }
    else if (sort == 'grade') {
        sortedArray.sort((a, b) => {

            if (parseInt(a.grade) > parseInt(b.grade)) return 1;
            else if (parseInt(a.grade) <parseInt( b.grade)) return -1;
            else return 0;
        })
        console.log(sortedArray)
        return sortedArray
    }
}