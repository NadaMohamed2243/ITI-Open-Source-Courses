// 1- Using document object method on the lecture’s HTML page 
//------------------------------------------------------------------

// a- Find all images in page by two ways (document default 
// collection and document methods). 

let imagesCollection = document.images;
console.log(imagesCollection);    //html collections
//or
let imagesCollection2 = document.getElementsByTagName("img");
console.log(imagesCollection2);    //html collections


let image = document.querySelectorAll("img");
console.log(image);               //nodelist

//------------------------------------------------------------------
// b- Find all options for City drop down list. 
let options = document.querySelectorAll("form[name=regForm] select[name=City] option");
console.log(options);
// foreach

for (let i = 0; i < options.length; i++) {

    console.log(options[i], options[i].value, options[i].textContent);
}

//------------------------------------------------------------------
// c- Find all rows for second table in page. 
let secondTableRows = document.querySelectorAll("table.bPink tr");
console.log(secondTableRows);


for (let i = 0; i < secondTableRows.length; i++) {

    console.log(secondTableRows[i], secondTableRows[i].textContent);
}

//------------------------------------------------------------------
// d- Find all elements that contain class name fontBlue and BGrey. 

//same element that contain fontBlue and BGrey class (we can say this and)
// the order is not important

console.log(document.querySelectorAll(".fontBlue.BGrey"));        //no elements because we don't have class called BGray  

//elements that contain fontBlue and elements that contain BGrey (we can say this or)
console.log(document.querySelectorAll(".fontBlue , .BGrey"));      //elements that contain .fontBlue only because we don't have class called BGray

// we don't have class named BGrey --> we have bGrey




//----------------------------------------------------------------------------------------------------------------------------------------------------------


// 2- Do the following actions on the following HTML elements  
// a- Get first anchor inside the second table then change its’ href 
// property to training.com and it’s text to “Training”  

// first anchor --> querySelector
let firstAnchorSecondTable = document.querySelector("table.bPink a");
firstAnchorSecondTable.href ='training.com';
firstAnchorSecondTable.textContent="Training"
console.log(firstAnchorSecondTable);

// b- Find all images and change its borders to : solid pink 2px  

let imageStyle = document.querySelectorAll("img");
console.log(imageStyle)

for (let i=0;i<imageStyle.length;i++) {

    imageStyle[i].style.border="solid pink 2px";
}

// c- Find all checkboxes (checked) in userData form and alert 
// their values  

let checkedCheckboxes= document.querySelectorAll("form[name=regForm] input[name=hoppy]:checked");
console.log(checkedCheckboxes);
for (let i=0;i<checkedCheckboxes.length;i++) {

    console.log(checkedCheckboxes[i].value);
    alert(`the values of checked checkboxes is ${checkedCheckboxes[i].value}`);
}

// d- Find element with id value “example” then change it’s 
// background color to pink  

let eleWithId = document.querySelector("#example");
console.log(eleWithId);
eleWithId.style.backgroundColor='pink';




