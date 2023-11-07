//        TODO: Handle window resize

let canvas = document.getElementById("welcome_canvas");
let ctx = canvas.getContext("2d");

let container = document.getElementById("welcome-container");
var w = container.clientWidth;
var h = container.clientHeight;

// Properly setting the canvas size:
canvas.width = w;
canvas.height = h;

window.onscroll = function() { centerY = (window.scrollY/3) + canvas.height / 1.5; drawScene(); };

var width = 250;
var edge = 30;

var centerX = canvas.width / 1.2;
var centerY = canvas.height / 1.5;

//window.onresize(drawScene);

function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, width - edge*1, 0, Math.PI * 2);
    ctx.closePath();
    // Fill with gradient
    ctx.fillStyle = "#8B0000";
    ctx.globalAlpha = 0.2;
    ctx.fill();

    // Draw the circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, width - edge*2, 0, Math.PI * 2);
    ctx.closePath();
    // Fill with gradient
    ctx.fillStyle = "#B22222";
    ctx.globalAlpha = 0.4;
    ctx.fill();

    // Draw the circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, width - edge*3, 0, Math.PI * 2);
    ctx.closePath();
    // Fill with gradient
    ctx.fillStyle = "#DC143C";
    ctx.globalAlpha = 0.6;
    ctx.fill();

    // Draw the circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, width - edge*4, 0, Math.PI * 2);
    ctx.closePath();
    // Fill with gradient
    ctx.fillStyle = "#E34234";
    ctx.globalAlpha = 0.8;
    ctx.fill();

    // Draw the circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, width - edge*5, 0, Math.PI * 2);
    ctx.closePath();
    // Fill with gradient
    ctx.fillStyle = "#FF9F00";
    ctx.globalAlpha = 1;
    ctx.fill();

    // Draw the circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, width - edge*6, 0, Math.PI * 2);
    ctx.closePath();
    // Fill with gradient
    ctx.fillStyle = "#FFD700";
    ctx.globalAlpha = 1;
    ctx.fill();
}

drawScene();