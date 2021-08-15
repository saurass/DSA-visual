class CliDisplay {
  #grid

  display(grid) {
    this.#grid = grid
    this.#clearDisplay()
    this.#draw()
  }

  #draw() {
    for(var i = 0; i < this.#grid.getHeight(); i++) {
      let tableRow = this.#createRow()
      for(var j = 0; j < this.#grid.getWidth(); j++) {
        tableRow = this.#addGridBox(tableRow, i, j);
      }
      this.#displayRow(tableRow)
    }
  }

  #createRow() {
    return "";
  }

  #addGridBox(tableRow, i, j) {
    if(this.#grid.isWall(i, j)) {
      tableRow = this.#addWall(tableRow);
    } else if(this.#grid.isVisited(i, j)) {
      tableRow = this.#addVisited(tableRow);
    } else {
      tableRow = this.#addSpace(tableRow);
    }

    return tableRow
  }

  #createBox(color = "white") {
    let retval = ` ${color} `
    return ` ${color} `;
  }

  #addWall(tableRow) {
    let gridBox = this.#createBox("X");
    return tableRow + gridBox
  }

  #addSpace(tableRow) {
    let gridBox = this.#createBox(".");
    return tableRow + gridBox
  }

  #addVisited(tableRow) {
    let gridBox = this.#createBox("*");
    return tableRow + gridBox
  }

  #displayRow(tableRow) {
    console.log(tableRow)
  }

  #clearDisplay() {
    console.clear()
  }

}

module.exports = CliDisplay