window.addEventListener('load', function () {
    let studentTable = document.querySelector('#studentsData');
    let studentArray = [];
    let addBtn = this.document.querySelector('input[value=Add]');
    let nameTextBox = document.querySelector("input[name=studentName]");
    let gradeTextBox = document.querySelector("input[name=studentGrade]");
    let filterSelect = this.document.querySelector('.filter');
    let sortSelect = this.document.querySelector('.sort');
    let searchBox = this.document.querySelector('input[name=searchTxt]');

    //errors span
    let nameError = this.document.querySelector('#nameError');
    let gardeError = this.document.querySelector('#gardeError');


    addBtn.onclick = function () {
        let error = handlingErrors(studentArray, nameTextBox, nameError, gradeTextBox, gardeError);
        if (error == '') {
            let studendInfo =
            {
                name: nameTextBox.value.trim()[0].toUpperCase() + nameTextBox.value.trim().slice(1).toLowerCase(),
                grade: gradeTextBox.value.trim(),
                department: document.querySelector('input[name=Department]:checked').value
            }
            // console.log(studendInfo)
            studentArray.push(studendInfo);


            // trElement.classList.add(document.querySelector('input[name=Department]:checked').value);
            // console.log(trElement);
            console.log(studentArray);

            // studentTable.appendChild(trElement);
            // studentsAppear(studentTable, studentArray, filterSelect.value, searchBox.value);
            studentsAppear(studentTable, studentArray, filterSelect.value, searchBox.value.trim(),sortSelect.value.trim());
            //clear inputs after press add button
            nameTextBox.value = '';
            gradeTextBox.value = '';
            document.querySelector('input[name=Department][value=SD]').checked = true;
            // document.querySelectorAll('input[name=Department]').forEach(element => {
            //     element.checked = false;
            // });
        }
    }

    filterSelect.addEventListener('change', function () {
        studentsAppear(studentTable, studentArray, filterSelect.value, searchBox.value.trim(),sortSelect.value.trim());
    })

    sortSelect.addEventListener('change', function () {
        console.log(sortSelect.value)

        console.log(sortSelect.value.trim())
        studentsAppear(studentTable, studentArray, filterSelect.value, searchBox.value.trim(),sortSelect.value.trim());
    })

    searchBox.addEventListener('input', function () {
        // let searchArray= studentArray.filter((ele)=>ele.name.toLowerCase().includes(searchBox.value.toLowerCase()));
        studentsAppear(studentTable, studentArray, filterSelect.value, searchBox.value.trim(),sortSelect.value.trim());
    });

})