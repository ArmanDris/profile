let canvas = document.getElementById("welcome_canvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(10, 10, 5, 0, Math.PI * 2);
ctx.fillStyle = "#210033";
ctx.fill();
ctx.stroke();