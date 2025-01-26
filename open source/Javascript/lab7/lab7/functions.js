const addStudent = function (student) {

    let trObject = document.createElement("tr");
    let tdObject = null;

    for (let proprty in student) {
        
        if(student[proprty])
        tdObject = document.createElement("td");
        tdObject.innerText = student[proprty];
        trObject.appendChild(tdObject);
    }
    tdObject.classList.add(student['department']);
    return trObject;


}