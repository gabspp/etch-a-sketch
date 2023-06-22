
//Define variáveis para armazenar a cor atual (paintColor), tamanho do pixel (pixelSize) e número total de divs (numOfDivs).
let paintColor = "green";
let pixelSize = 16
let numOfDivs = pixelSize * pixelSize;
//Cria botões (resetButton, greenButon, yellowButon, rainbow) e os adiciona à página.
var board = document.getElementById("board");
var yellowButon = document.createElement('button')
var resetButton = document.createElement('button')
var buttonWrapper = document.getElementsByClassName("button-wrapper")[0]
var greenButon = document.createElement('button')
var rainbow = document.createElement('button')
buttonWrapper.appendChild(resetButton);
buttonWrapper.appendChild(greenButon);
buttonWrapper.appendChild(yellowButon)
buttonWrapper.appendChild(rainbow);
rainbow.innerHTML = "Rainbow";
rainbow.classList.add('rainbow-button', 'button');
resetButton.innerHTML = "Reset";
resetButton.classList.add('reset-button', 'button');
yellowButon.innerHTML = "Yellow";
yellowButon.classList.add('yellow-button', 'button');
greenButon.innerHTML = "Green";
greenButon.classList.add('green-button', 'button');


//Adiciona eventos de clique aos botões para definir a cor atual (paintColor) e chamar a função hoverColor().


resetButton.addEventListener("click", function () {

  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  pixelSizePrompt = prompt("Chose the pixel count between 1 and 100", "16");

  if (pixelSizePrompt <= 0 || pixelSizePrompt > 100 || pixelSizePrompt != typeof("number")) {
    pixelSizePrompt = prompt("ERROR! Chose the pixel count between 1 and 100", "");
  } else { pixelSize = pixelSizePrompt }
  myPixelDiv = [],
    multiplyDivs()
  hoverColor()
}
);

yellowButon.addEventListener("click", function () {
  paintColor = "yellow"
  hoverColor()

})

greenButon.addEventListener("click", function () {
  paintColor = "green"
  hoverColor()

})


rainbow.addEventListener("click", function () {
  paintColor = getRandomColor()
  hoverColor()
})


// Esta função cria um pixel do grid
function createDiv() {
  var squarePixel = document.createElement("div");

  squarePixel.className = "square-pixel-16"
  squarePixel.style.width = 480 / pixelSize + "px"
  squarePixel.style.height = 480 / pixelSize + "px"

  return squarePixel
}

// Esta função multiplica os pixels de acordo com o imput
function multiplyDivs() {

  myPixelDiv = [],
    i = 0,
    numOfDivs = pixelSize * pixelSize;

  for (i; i < numOfDivs; i += 1) {
    myPixelDiv.push(createDiv());
    board.appendChild(myPixelDiv[i]);
  }

}
multiplyDivs();

// função que randomiza cores
function getRandomColor() {
  let latters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += latters[Math.floor(Math.random() * 16)]
  }

  return color;
}

//função que pinta o grid
function hoverColor() {
  var squarePixels16 = document.getElementsByClassName("square-pixel-16");

  for (var i = 0; i < squarePixels16.length; i++) {
    if (paintColor === "yellow") {
      squarePixels16[i].addEventListener("mouseover", function () {
        this.style.background = "#eef40a";

      });
    } else if (paintColor === "green") {
      squarePixels16[i].addEventListener("mouseover", function () {
        this.style.backgroundColor = "green";
      })
    } else {
      squarePixels16[i].addEventListener("mouseover", function () {
        this.style.backgroundColor = getRandomColor();
      })
    };
  }
}

hoverColor()