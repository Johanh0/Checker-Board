const boardElement = document.querySelector("#board");

window.addEventListener("DOMContentLoaded", () => {
  for (let index = 0; index <= 64; index++) {
    const cellElement = document.createElement("div");
    ` cellElement.classList.add("cell");`;

    if (index % 2 === 0) {
      cellElement.classList.add("cell--black");
    } else {
      //   cellElement.classList.add("cell--white");
    }

    boardElement.appendChild(cellElement);
  }
});
