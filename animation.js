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

