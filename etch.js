//grab div container i made in html to javascript
const divBody = document.getElementById("boxHome");

//create 256 divs initially
for(let i=0; i<256; i++) {
    createDiv();
        
    }

//Declare createDiv function, creates newDiv "boxes" and appends to divBody
function createDiv() {
    const newDiv = document.createElement("div");
    newDiv.setAttribute('class','boxes');
    divBody.appendChild(newDiv);
}

const newDiv = document.querySelectorAll("div.boxes");


//grab sizing button
const button = document.querySelector("button");
//on click, prompt for size & change gridSize
button.addEventListener("click",gridSize);

function gridSize () {
const size =prompt("Please choose a grid size between 0 and 100");
//only work if size is between 0 and 100
if (size >0 && size <=100) {
//remove all children of divBody.
while (divBody.firstChild) {
    divBody.removeChild(divBody.lastChild);
}
//input new amount of newDivs based on the prompt selected
for(let i=0; i<(size*size); i++) {
    createDiv();
    }

//check to see my equation for flex-basis percentage works
console.log(`${((600/size)-6)/600}`);

const flexBasis = (`${((600/size)-6)/600}`);
console.log(parseFloat(flexBasis));

for (let i=0;i<divBody.children.length;i++) {
    divBody.children[i].style.flex = 1;
    divBody.children[i].style.flexBasis = ""+ flexBasis*100 +"%";
}





} else alert("Read again! Choose a number between 0 and 100!");
}
//Mouseover eventlistener to newDiv
newDiv.forEach(box => box.addEventListener("mouseover",(e) => {
    e.target.classList.add("hover");
}));


/*Incase needed, this makes it so divs are not permanently grey,
only when mouse is on them
newDiv.forEach(box => box.addEventListener("mouseout",(e) => {
    e.target.classList.remove("hover");
})); */