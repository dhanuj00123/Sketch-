// Select the elements on the page - canvas, shake button

const canvas = document.querySelector("#sketch");
const ctx = canvas.getContext("2d");
const shakebutton = document.querySelector(".shake");
const colorbutton = document.querySelector(".color");
// set up our canvas for drawing
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;
const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// write a handler for the keys
const MOVE_AMOUNT = 10;
function handleKey(e) {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ key: e.key });
  }
}
window.addEventListener("keydown", handleKey);

function draw({ key }) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (key) {
    case "ArrowUp":
      y -= MOVE_AMOUNT;
      break;
    case "ArrowRight":
      x += MOVE_AMOUNT;
      break;
    case "ArrowDown":
      y += MOVE_AMOUNT;
      break;
    case "ArrowLeft":
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}
// clear or shake function
function clearCanvas() {
  canvas.classList.add("shake");
  ctx.strokeStyle = `hsl(0%, 100%, 0%)`;
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    "animationend",
    function () {
      canvas.classList.remove("shake");
    },
    { once: true }
  );
}
function changecolor() {
  let hue = Math.floor(Math.random() * 360);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
}
// listen for arrow keys
window.addEventListener("keydown", handleKey);
shakebutton.addEventListener("click", clearCanvas);
colorbutton.addEventListener("click", changecolor);
