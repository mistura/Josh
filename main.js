// et menuicon = document.getElementById(`menuicon1`);
// let menu = document.getElementById(`hide`);
// menu.style.display = `none`;

// menuicon.addEventListener(`click`, display);
// function display() {
//     if (menu.style.display=="none") {
//         menu.style.display = "block";
//     }
//     else{
//         menu.style.display = "none";
//     }
    
// }



let icon = document.getElementById("icon");
let menu = document.getElementById("men");
menu.style.display = "none";

icon.addEventListener("click", display);
function display() {
    if (menu.style.display=="none") {
        menu.style.display = "block";
    }
    else{
        menu.style.display = "none";
    }
}
