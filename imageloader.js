	//PHARAH
	Pharah_Image1 = new Image();
	Pharah_Image1.src = 'images/Pharah/Pharahidleright.png';
	Pharah_Image2 = new Image();
	Pharah_Image2.src = 'images/Pharah/Pharahidleleft.png';


	Pharah_Image3 = [null,null]
	for (pharahimage3loop = 0; pharahimage3loop < 17; pharahimage3loop++){
		Pharah_Image3[pharahimage3loop] = new Image();
		Pharah_Image3[pharahimage3loop].src = 'images/Pharah/Pharahrunright/Comp 2_000'+pharahimage3loop+'.png';
	}

	Pharah_Image4 = [null,null]
	for (pharahimage4loop = 0; pharahimage4loop < 17; pharahimage4loop++){
		Pharah_Image4[pharahimage4loop] = new Image();
		Pharah_Image4[pharahimage4loop].src = 'images/Pharah/Pharahrunleft/Comp 2_000'+pharahimage4loop+'.png';
	}

	Pharah_Image5 = new Image();
	Pharah_Image5.src = 'images/Pharah/Pharahflightright.png';
	Pharah_Image6 = new Image();
	Pharah_Image6.src = 'images/Pharah/Pharahflightleft.png';
	Pharah_Image7 = new Image();
	Pharah_Image7.src = 'images/Pharah/Pharahduckright.png';
	Pharah_Image8 = new Image();
	Pharah_Image8.src = 'images/Pharah/Pharahduckleft.png';


	//CROSSHAIR
	Crosshair1_Image = new Image();
	Crosshair1_Image.src = 'images/Crosshair1.png';







	//ROCKETS AND EXPLOSIONS PHARAH
	Rocket_Image = new Image();
	Rocket_Image.src = 'images/rocket/rocket1.png';

	RocketExplosion_Image = [null,null];
	for (explloop = 0; explloop < 19; explloop++){
	RocketExplosion_Image[explloop] = new Image();
	RocketExplosion_Image[explloop].src = 'images/rocketexplosion1/frame_'+explloop+'_delay-0.02s.png';
	}