// 2-  Page containing only Three Div elements with box appearance, 
// when user click at any div a copy from this div will be added to the 
// end (the fired div wont be clickable any more, and the new div will 
// beclickable). And so on…..


window.addEventListener("load", function () {
    let parentdiv = document.querySelector(".parentClass");
    console.log(parentdiv);
    parentdiv.addEventListener("click", function (event) {
        console.log(event.target.className);
        if (event.target.className != 'parentClass') {
            event.target.classList.add("unclickable");
            let clonedDiv = event.target.cloneNode(true);
            clonedDiv.classList.remove("unclickable");
            parentdiv.appendChild(clonedDiv);

            event.stopPropagation();
        }

    });
});