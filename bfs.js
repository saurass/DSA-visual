function bfs(displayClass) {
  // let inputGrid = [
  //   [0, 1, 1, 1, 1],
  //   [0, 1, 1, 1, 1],
  //   [0, 1, 1, 1, 1],
  //   [0, 1, 0, 0, 0],
  //   [0, 0, 0, 1, 0]
  // ];
  let inputGrid = Grid.populateGrid(18, 18)
  let inputStart = [0, 0];
  let inputEnd = [4, 4];
  let displayObj = new displayClass()

  let grid = new Grid(inputGrid, inputStart, inputEnd, [displayObj]);


  let rws = [0, 0, 1, -1];
  let cls = [1, -1, 0, 0];
  let n = grid.getHeight();
  let m = grid.getWidth();

  function isValid(x, y) {
    if(x < 0 || y < 0 || x >= n || y >= m)
      return false;
    return true; 
  }

  async function solve() {
    let stack = [];
    stack.push({
      x: inputStart[0],
      y: inputStart[1]
    })

    grid.markVisited(inputStart[0], inputStart[1]);

    while(stack.length != 0) {
      let {x, y} = stack[stack.length - 1];
      stack.pop();
      await sleep(50);
      if(x == inputEnd[0] && y == inputEnd[1])
        break;
      
      for(let i = 0; i < 4; i++) {
        let tpx = x + rws[i];
        let tpy = y + cls[i];

        if(isValid(tpx, tpy) && !grid.isVisited(tpx, tpy) && !grid.isWall(tpx, tpy)) {
          grid.markVisited(tpx, tpy);
          stack.push({x: tpx, y: tpy});
        }
      }
    }
  }

  solve();

  async function sleep(waitTime) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, waitTime)
    })
  }
}

module.exports = bfs