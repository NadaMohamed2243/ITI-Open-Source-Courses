// Using location Object with simple HTML Form Page 
// With post method, after clicking submit button show the Name 
// and Age on page console. 
document.querySelector("form").addEventListener("submit",
    function (event) {
        event.preventDefault();
        const name = document.querySelector("#name").value;
        const age = document.querySelector("#age").value;
        console.log("Name: " + name); 
        console.log("Age: " + age);
    });