	Spacecooldown_Image = new Image();
	Spacecooldown_Image.src = 'images/spacecooldown.png';


function drawInterface (){
		ctx.beginPath();									
		ctx.drawImage(Spacecooldown_Image,300,840,Spacecooldown_Image.width/1.8,Spacecooldown_Image.height/1.8);
		ctx.fillStyle = "#FF0000";
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();	
		ctx.globalAlpha=0.7;
		ctx.arc(356,895, 41,0, -(spaceCooldown/3000)*1.999999 * Math.PI, false);
		ctx.fillStyle = "#000000";
	
		ctx.fill();
		ctx.globalAlpha=1;
		ctx.closePath();
		}