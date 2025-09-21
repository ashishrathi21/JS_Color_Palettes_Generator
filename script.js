let generateBtn = document.querySelector(".btn");

function generatePalette() {
  const colors = [];

  for (let i = 0; i < 5; i++) {
    colors.push(generateRandomColors());
  }

  updatePaletteColors(colors);
}

function generateRandomColors() {
  const letters = "123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }

  return color;
}

function updatePaletteColors(colors) {
  const colorBoxes = document.querySelectorAll(".color-wrapper");

  colorBoxes.forEach((box, index) => {
    const color = colors[index];
    const colorDiv = box.querySelector(".color-box");
    const hexValue = box.querySelector(".hex-code");

    colorDiv.style.backgroundColor = color;
    hexValue.textContent = color;
  });
}

generateBtn.addEventListener("click", generatePalette);

generatePalette();
