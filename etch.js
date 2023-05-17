//grab div container i made in html to javascript
const divBody = document.getElementById("boxHome");



//Declare createDiv function, creates newDiv "boxes" and appends to divBody
function createDiv() {
    const newDiv = document.createElement("div");
    newDiv.setAttribute('class','boxes');
    divBody.appendChild(newDiv);
}


//create 256 divs
for(let i=0; i<256; i++) {
createDiv();
    
}
const newDiv = document.querySelectorAll("div.boxes");





//Mouseover eventlistener to newDiv
newDiv.forEach(box => box.addEventListener("mouseover",(e) => {
    e.target.classList.add("hover");
}));

//grab sizing button
const button = document.querySelector("button");
//on click, prompt for size. Store value in size
button.addEventListener("click",gridSize);

function gridSize () {
const size =prompt("Please choose a grid size between 0 and 100");
}



/*Incase needed, this makes it so divs are not permanently grey,
only when mouse is on them
newDiv.forEach(box => box.addEventListener("mouseout",(e) => {
    e.target.classList.remove("hover");
})); */