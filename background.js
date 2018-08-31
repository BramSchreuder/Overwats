var backgroundFrame = 0;
Background_Image = new Image();
Background_Image.src = 'images/background1/frame_'+backgroundFrame+'_delay-0.08s.gif';

function drawBackground(){
		ctx.beginPath();									// ball tekenen
		ctx.drawImage(Background_Image,0,0,canvas.width,canvas.height);
		ctx.fillStyle = "#FF0000";
		ctx.fill();
		ctx.closePath();
		if (currentFrame % 5 == 0){backgroundFrame++; }
		if (backgroundFrame > 89){backgroundFrame = 0;}
	
		Background_Image.src = 'images/background1/frame_'+backgroundFrame+'_delay-0.08s.gif';
}