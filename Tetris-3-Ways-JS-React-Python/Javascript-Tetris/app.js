//  making sure the script tag at top of file(vs the bottom) is working by
// putting it into the DOM event listener.
//  so JS is read after the HTML as has loaded
document.addEventListener("DOMContentLoaded", () => {
  // all code goes here
  const grid = document.querySelector(".grid");
  let squares = Array.from(document.querySelectorAll(".grid div"));
  const ScoreDisplay = document.querySelector("#score");
  const StartBtn = document.querySelector("#start-button");
  const width = 10;
  // Draw the Tetrominoes using classList.add()
  //   the L tetromino array with 4 arrays inside it that its 4 rotations
  // use grid indexes
  const lTetromino = [
    // each array is one of the four rotations
    // draw with grid indexes
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2 + 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2],
  ];
  //   console.log(lTetromino);
  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
  ];
  //   console.log(zTetromino);
  //   37:54
  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1],
  ];
  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
  ];
  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
  ];

  const theTetrominoes = [
    lTetromino,
    zTetromino,
    tTetromino,
    oTetromino,
    iTetromino,
  ];
  //   console.log("The L tetromimoes first rotation ", theTetrominoes[0][0]);
  let currentPosition = 4;
  // Make the first rotation of any tetromino chosen 0
  let currentRotation = 0;
  //   getting a random tetrominoe for the array theTetrominos
  let random = Math.floor(Math.random() * theTetrominoes.length);
  console.log(random);
  let current = theTetrominoes[random][currentRotation];
  // draw the current tetromino
  function draw() {
    current.forEach((index) => {
      squares[currentPosition + index].classList.add("tetromino");
    });
  }
  //  undraw or remove the current tetromimo
  function undraw() {
    current.forEach((index) => {
      squares[currentPosition + index].classList.remove("tetromino");
    });
  }
  //  move the tetrominos down every second,  call moveDown Qsec
  timerId = setInterval(moveDown, 1000);
  //  keyCode functions for moving tetrominos    keycode.info
  function control(e) {
    if (e.keyCode === 37) {
      moveLeft();
    } else if (e.keyCode === 38) {
      rotate();
    } else if (e.keyCode === 39) {
      moveRight();
    } else if (e.keyCode === 40) {
      moveDown();
    }
  }
  document.addEventListener("keyup", control);
  function moveDown() {
    //  draw and undraw every second and change position inbetwee
    undraw();
    currentPosition += width;
    draw();
    freeze();
  }
  function freeze() {
    if (
      current.some((index) =>
        squares[currentPosition + index + width].classList.contains("taken")
      )
    ) {
      current.forEach((index) =>
        squares[currentPosition + index].classList.add("taken")
      );
      // get a new tetronimo and start it falling
      random = Math.floor(Math.random() * theTetrominoes.length);
      current = theTetrominoes[random][currentRotation];
      currentPosition = 4;
      draw();
    }
  }
  // move tetromino left unless is is at the edge or there is another tetrominoe in that space
  function moveLeft() {
    undraw();
    // current position+index divided by width has no remainder
    const isAtLeftEdge = current.some(
      //condition is at left hand side is true
      (index) => (currentPosition + index) % width === 0
    );
    if (!isAtLeftEdge) currentPosition -= 1;
    if (
      current.some((index) =>
        squares[currentPosition + index].classList.contains("taken")
      )
    ) {
      currentPosition += 1;
    }
    draw();
  }
  // move tetromino right  unless is is at the edge or there is another tetrominoe in that space
  function moveRight() {
    undraw();
    // current position+index divided by width has no remainder
    const isAtRightEdge = current.some(
      //condition is at right hand side is true
      (index) => (currentPosition + index) % width === width - 1
    );
    if (!isAtRightEdge) currentPosition += 1;
    if (
      current.some((index) =>
        squares[currentPosition + index].classList.contains("taken")
      )
    ) {
      currentPosition -= 1;
    }
    draw();
  }
  // rotate the tetromino
  function rotate() {
    undraw();
    currentRotation++;
    if (currentRotation === current.length) {
      // if the current rotation is 4 go back to 0
      currentRotation = 0;
    }
    current = theTetrominoes[random][currentRotation];
    draw();
  }
  // show next peice in mini gird
  const displaySquares = d;
});
