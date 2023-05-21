//grab div container i made in html to javascript
const divBody = document.getElementById("boxHome");
let rainbowMode = false;

//create 256 divs initially
for(let i=0; i<256; i++) {
    createDiv();
    }

//Declare createDiv function, creates newDiv "boxes" and appends to divBody
function createDiv() {

    const newDiv = document.createElement("div");
    newDiv.setAttribute('class','boxes');
    divBody.appendChild(newDiv);
        if (rainbowMode === false) {
        newDiv.addEventListener("mouseover",(e) => {
        e.target.classList.add("hover")});
        } else if (rainbowMode === true) {
        newDiv.addEventListener("mouseover",(e) => {
        e.target.style.backgroundColor= (randomColor())});
        }
}

const newDiv = document.querySelectorAll("div.boxes");


//grab sizing button
const button = document.querySelector("button.sizing");

//grab rainbow button
const buttonRainbow = document.querySelector("button.rainbow")

//on click, prompt for size & change gridSize
button.addEventListener("click",gridSize);

//on click, rainbowMode = true
buttonRainbow.addEventListener("click", () => {
    //flip rainbowMode from true to false and vice versa upon click;
    if (rainbowMode === false) rainbowMode = true;
    else if (rainbowMode === true) rainbowMode =false;
    gridSize();

} );

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

        //equation for flexBasis to be calculated for resizing grid.
        const flexBasis = (`${((600/size)-6)/600}`);


        for (let i=0;i<divBody.children.length;i++) {
            divBody.children[i].style.flex = 1;
            divBody.children[i].style.flexBasis = ""+ flexBasis*100 +"%";
    }





} else alert("Read again! Choose a number between 0 and 100!");
}
//Mouseover eventlistener to initial newDivs
newDiv.forEach(box => box.addEventListener("mouseover",(e) => {
    e.target.classList.add("hover");
}));


//random color function

function randomColor () {
    let randNumber1 = parseInt(Math.random()*256);
    let randNumber2 = parseInt(Math.random()*256);
    let randNumber3 = parseInt(Math.random()*256);


    let color = `rgb(${randNumber1},${randNumber2},${randNumber3})`;
    return color;
}