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

let offset = 0;

function mainMountainSin(x) {
    //return Math.sin(x + offset*2) + 0.5 * Math.sin(2 * x + offset*2) + 0.25 * Math.sin(4 * x + offset*2);
    return -Math.sin(1.75*(x+2*offset)) - Math.sin(3*(x+5*offset)) - Math.sin(6*(x+3*offset)) + Math.sin(8*(x+5*offset));
}

function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(0, 0);

    for (let i = 0; i < canvas.width; i++) {
        var height = 7;
        var zoom = 0.005;
        var y = mainMountainSin(i * zoom) * height + canvas.height / 1.25;
        ctx.lineTo(i, y);
    }
    ctx.lineTo(canvas.width, 0);
    ctx.closePath();

    ctx.lineWidth = 0;

    ctx.fillStyle = 'rgba(198, 144, 223, 0.25)';
    ctx.fill();

    offset+=0.0005;

    requestAnimationFrame(drawScene);
}

requestAnimationFrame(drawScene);