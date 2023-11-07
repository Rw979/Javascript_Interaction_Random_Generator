let heading = document.getElementById("title");
let inputElement = document.getElementById("myInput");
let executeButton = document.getElementById("executeButton");
let outputParagraph = document.getElementById("outputText");

let times = ["latte", "Iced peach green tea", "Iced Oolong tea", "orange juice", "matcha latte", "water"];

executeButton.addEventListener("click", function () {
    var currentInputText = inputElement.value;
    generate(currentInputText);
    colorRestyle(); 
    fontSizeRestyle(); 
    fontRestyle(); 
});

function generate(UserInput) {
    let randomIndex = Math.floor(Math.random() * times.length);
    console.log(randomIndex);
    let selectedRandomTimeText = times[randomIndex];
    outputParagraph.innerText = UserInput + ", you should drink " + selectedRandomTimeText;
}

function colorRestyle() {
    outputParagraph.style.color = getRandomColor();
}

function getRandomColor() {
    let colors = ["#B1B479", "#B5CAA0", "#66BAB7", "#7B90D2", "#FFC408"]; 
    return colors[Math.floor(Math.random() * colors.length)];
}



function fontSizeRestyle() {
    outputParagraph.style.fontSize = getRandomFontSize();
}

function getRandomFontSize() {
    let fontSizes = ["16px", "18px", "24px", "30px", "35px", "42px",]; 
    return fontSizes[Math.floor(Math.random() * fontSizes.length)];
}



function fontRestyle() {
    outputParagraph.style.fontFamily = getRandomFontFamily();
}

function getRandomFontFamily() {
    let fonts = ["Arial", "Georgia", "Palatino","Verdana", "Helvetica", "Times New Roman"]; 
    return fonts[Math.floor(Math.random() * fonts.length)];
}


