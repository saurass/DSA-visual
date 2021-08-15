class Grid {
  constructor(matrix = [[0,1],[1,0]], start = [0, 0], end = [1,1], displays = [new Display()]) {
    this.#matrix = matrix;
    this.#visited = this.#makeVisitedMatrix()
    this.#start = start;
    this.#end = end;
    this.#displays = displays
    this.#publish()
  }

  #matrix
  #start
  #end
  #visited
  #displays

  getHeight() {
    return this.#matrix.length;
  }

  getWidth() {
    return this.#matrix[0].length;
  }

  isWall(row, col) {
    return this.#matrix[row][col] == 1
  }

  isVisited(row, col) {
    return this.#visited[row][col] == true;
  }

  markVisited(row, col) {
    this.#visited[row][col] = true;
    this.#publish()
  }

  markUnVisited(row, col) {
    this.#visited[row][col] = false;
    this.#publish()
  }

  #makeVisitedMatrix() {
    return Array(this.getHeight()).fill().map(
      () => Array(this.getWidth()).fill(false)
    );
  }

  #publish() {
    this.#displays.forEach(display => display.display(this) )
  }

  static populateGrid(height, width) {
    let grid = Array(height).fill().map(
      () => Array(width).fill(0)
    );
    let blockCount = height * width;
    let walledBlocks = Math.floor(0.3 * blockCount);

    for(let i = 0; i < height; i++) {
      for(let j = 0; j < width; j++) {
        if((i == 0 && j == 0) || (i == height - 1 && j == width - 1))
          continue;
        let randomNum = Math.round(Math.random());
        if(walledBlocks > 0 && randomNum == 1) {
          grid[i][j] = 1;
          walledBlocks--;
        }
      }
    }

    return grid
  }

}

module.exports = Grid