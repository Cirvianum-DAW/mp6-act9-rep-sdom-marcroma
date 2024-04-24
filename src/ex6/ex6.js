const d = document;
let x = 0;
let y = 0;

function moveBall(e, ball, stage) {
  const ballElement = d.querySelector(ball);
  const stageElement = d.querySelector(stage);
  const limitBall = ballElement.getBoundingClientRect();
  const limitStage = stageElement.getBoundingClientRect();

  switch (e.keyCode) {
    case 37:
      e.preventDefault();
      if (limitBall.left > limitStage.left) x--;
      break;

    case 38:
      e.preventDefault();
      if (limitBall.top > limitStage.top) y--;
      break;

    case 39:
      e.preventDefault();
      if (limitBall.right < limitStage.right) x++;
      break;

    case 40:
      e.preventDefault();
      if (limitBall.bottom < limitStage.bottom) y++;
      break;

    default:
      break;
  }
  ballElement.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}

document.addEventListener('keydown', (e) => moveBall(e, '#ball', '#stage'));
