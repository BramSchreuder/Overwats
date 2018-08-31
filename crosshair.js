
canvas.addEventListener("mousemove", function (evt) {
    mousePos = getMousePos(canvas, evt);

}, false);

//Get Mouse Position
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}



function drawCrosshair() {
		ctx.beginPath();									// ball tekenen
		ctx.drawImage(Crosshair1_Image,mousePos.x-32,mousePos.y-32,Crosshair1_Image.width/10,Crosshair1_Image.height/10);
		ctx.fillStyle = "#FF0000";
		ctx.fill();
		ctx.closePath();
}