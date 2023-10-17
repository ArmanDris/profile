// To do: If the last row of dots gets just cut off then it will look like there is more padding on the right and bottom.
//        To fix this I will need to make sure that the last dot is drawn at the edge of the space like the first one
//
//        After that I will need to handle window resize

let canvas = document.getElementById("welcome_canvas");

let container = document.getElementsByTagName("header")[0];
var w = container.clientWidth;
var h = container.clientHeight;

// Properly setting the canvas size:
canvas.width = w;
canvas.height = h;

let ctx = canvas.getContext("2d");

var padding = 100;

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x + padding, y + padding, 5, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    ctx.fill();
    ctx.stroke();
}

var dot_spacing = 75;

for (let j = 0; j * dot_spacing + padding < h - padding; j++) {
    for (let i = 0; i * dot_spacing + padding < w - padding; i++) {
        drawCircle(i * dot_spacing, j * dot_spacing);
    }
}

// DIDASDIAOPSDHOUSAHDOUASHG

const hexSize = 50;
const dx = 1.5 * hexSize;
const dy = Math.sqrt(3) * hexSize;
const rows = Math.ceil(canvas.height / dy) + 1;
const cols = Math.ceil(canvas.width / dx) + 1;

let offsetX = 0;
let offsetY = 0;

function drawHex(x, y) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        ctx.lineTo(x + hexSize * Math.cos((Math.PI / 3) * i),
                   y + hexSize * Math.sin((Math.PI / 3) * i));
    }
    ctx.closePath();
    ctx.fill();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let x = col * dx + offsetX;
            let y = row * dy + (col % 2 === 0 ? offsetY : offsetY + dy / 2);
            drawHex(x, y);
        }
    }

    offsetX -= 1; // speed of shift in the x-direction
    if (offsetX <= -dx) {
        offsetX = 0;
    }

    requestAnimationFrame(draw);
}

draw();