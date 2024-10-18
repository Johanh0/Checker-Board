const boardElement = document.querySelector("#board");

window.addEventListener("DOMContentLoaded", () => {
  // Count the rows and for each row do something
  for (let row = 1; row <= 8; row++) {
    // Count the columns and for each column do something
    for (let column = 1; column <= 8; column++) {
      // Create thee cell that will go inside of the board
      const cellElement = document.createElement("div");
      cellElement.classList.add("cell");

      // Logic decided which color cell should go
      if (row % 2 !== 0) {
        if (column % 2 !== 0) {
          cellElement.classList.add("cell--black");
        } else if (column % 2 === 0) {
          cellElement.classList.add("cell--white");
        }

        boardElement.appendChild(cellElement);
      }

      if (row % 2 === 0) {
        if (column % 2 === 0) {
          cellElement.classList.add("cell--black");
        } else if (column % 2 !== 0) {
          cellElement.classList.add("cell--white");
        }
        boardElement.appendChild(cellElement);
      }
    }
  }
});
