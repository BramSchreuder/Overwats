

var rockets = [null,null];
var rocketscount = 0;
var rocketSnelheid = 10;
function createRocket(startX,startY,destX,destY,){						// ROCKET MAKEN
rocketscount++;
if (rocketscount> 20) {rocketscount = 1;}				// max rockets!
var distance = Math.sqrt(Math.pow(startX-destX, 2) + Math.pow(startY-destY, 2));
rockets[rocketscount]=[startX,startY,destX,destY,distance,0];

}



function drawRockets() {												// ROCKET TEKENEN
for (i=1;i < 21; i++){												// max rockets drawing
if (rockets[i] != null){												// Draw rockets when they exist
		
		var rocketlocationx = rockets[i][0] - (rockets[i][5]/rockets[i][4])*(rockets[i][0]-rockets[i][2])  //x verplaatsen 
		var rocketlocationy = rockets[i][1] - (rockets[i][5]/rockets[i][4])*(rockets[i][1]-rockets[i][3])-(	-0.001*Math.pow((rockets[i][5] - rockets[i][4]/2),2) + 0.00023*Math.pow(rockets[i][4],2) + 0.017*rockets[i][4]-4)//y verplaatsen
		ctx.beginPath();
		if (rockets[i][0]<=rockets[i][2]){
		var angle = (Math.atan((rockets[i][3]-rocketlocationy)/(rockets[i][2]-rocketlocationx)))*180/Math.PI;
		} else
		{angle = ((Math.atan((rockets[i][3]-rocketlocationy)/(rockets[i][2]-rocketlocationx)))*180/Math.PI)+180}

		drawImageRotated(Rocket_Image,rocketlocationx,rocketlocationy,Rocket_Image.width/2,Rocket_Image.height/2,angle);
		ctx.fillStyle = "#FF0000";
		ctx.fill();
		ctx.closePath();
		rockets[i][5] += rocketSnelheid;
		if (rocketlocationx > canvas.width || rocketlocationy > canvas.height || rocketlocationx < 0 || rocketlocationy < 0) {rockets[i] = null}; //delete rocket buiten scherm
		if (rockets[i][5] >=rockets[i][4]){createRocketExplosion(rocketlocationx,rocketlocationy);rockets[i]= null;}
						}

						}
						}






	canvas.addEventListener('click', function (evt) {
   createRocket(x+640/3,y+80,mousePos.x,mousePos.y);
}, false);




var rocketExplosions = [null,null];
var rocketExplosionsCount = 0;
function createRocketExplosion(expx,expy){	// ROCKETEXPLOSION MAKEN
rocketExplosionsCount++;
if (rocketExplosionsCount> 20) {rocketExplosionsCount = 1;}				// max rocketexplosions!
rocketExplosions[rocketExplosionsCount]=[expx,expy,0];					// position and frame

}

function drawRocketExplosions() {												// ROCKET TEKENEN
for (z=1;z < 21; z++){												// max rockets drawing
if (rocketExplosions[z] != null){												// Draw rockets when they exist

		ctx.beginPath();
		ctx.drawImage(RocketExplosion_Image[Math.floor(rocketExplosions[z][2])],rocketExplosions[z][0]-RocketExplosion_Image[1].width/2,rocketExplosions[z][1]-RocketExplosion_Image[1].height/2,RocketExplosion_Image[1].width,RocketExplosion_Image[1].height);
		ctx.fillStyle = "#FF0000";
		ctx.fill();
		ctx.closePath();
		rocketExplosions[z][2] += 0.3;
		if (rocketExplosions[z][2] > 18){rocketExplosions[z]= null}

						}

}

}