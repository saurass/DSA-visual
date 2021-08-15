class WebDisplay {
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
        this.#addGridBox(tableRow, i, j);
      }
      this.#displayRow(tableRow)
    }
  }

  #createRow() {
    let tableRow = document.createElement("tr");
    tableRow.className = "grid-row";
    return tableRow
  }

  #addGridBox(tableRow, i, j) {
    if(this.#grid.isWall(i, j)) {
      this.#addWall(tableRow);
    } else if(this.#grid.isVisited(i, j)) {
      this.#addVisited(tableRow);
    } else {
      this.#addSpace(tableRow);
    }
  }

  #createBox(color = "white") {
    let gridBox = document.createElement("td");
    gridBox.className = "grid-box";
    gridBox.style.backgroundColor = color;
    return gridBox
  }

  #addWall(tableRow) {
    let gridBox = this.#createBox("grey");
    tableRow.appendChild(gridBox);
  }

  #addSpace(tableRow) {
    let gridBox = this.#createBox("white");
    tableRow.appendChild(gridBox);
  }

  #addVisited(tableRow) {
    let gridBox = this.#createBox("purple");
    tableRow.appendChild(gridBox);
  }

  #displayRow(tableRow) {
    document.getElementById("grid").appendChild(tableRow)
  }

  #clearDisplay() {
    document.getElementById("grid").innerHTML = ''
  }

}