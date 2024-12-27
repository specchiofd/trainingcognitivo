var playState = {
	
	
	
	create:function(){
		console.log("Current=" + current);
		console.log("LoopCount:"+loopCount);
		firstTurn = true;
		var homeflag, awayflag, home_idle, home_shooting, away_idle, away_shooting;
		homegoal = 0;
		awaygoal = 0;
		fischio = game.add.audio('whistle');
		goal_sound = game.add.audio('goal');
		fail_sound = game.add.audio('fail');
		fischio.volume -= 0.5;
		calcio = game.add.audio('kick');
		loopCount = 0;
		console.log("LoopCount:"+loopCount);
		this.chooseOrder();
		current = 0;
		var bg = game.add.sprite(game.world.centerX, game.world.centerY, 'bg');
		bg.anchor.setTo(0.5, 0.5);
		palla = game.add.sprite(game.world.centerX-40, game.world.centerY+70, 'palla');
		palla.animations.add('ruota', [0,1,2,3,4,5,6], 30, true);
		portiere = game.add.sprite(game.world.centerX-40, game.world.centerY-15, 'gk_idle');
		portiere.animations.add('fermo', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17], 50, true);
		gr_players = game.add.group();
		gr_players.add(palla);
		gr_players.visible = false;
		gr_tab = game.add.group();
		portiere_tuffo = game.add.sprite(222, game.world.centerY-15,'gk_tuffo');
		portiere_tuffo.animations.add('destra', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 24, false);
		portiere_tuffo.animations.add('sinistra', [19,20,21,22,23,24,25,26,27,28,29,30,31,32], 24, false);
		portiere_tuffo.visible = false;
		var tabellone = game.add.sprite(game.world.centerX, game.world.centerY, 'tabellone');
		tabellone.anchor.setTo(0.5, 0.5);
		gr_tab.add(tabellone);
		uno = game.add.sprite(250, 300, 'numeri');
		due = game.add.sprite(580, 300, 'numeri');	
		uno.events.onInputDown.add(this.unolistener,this);
		due.events.onInputDown.add(this.duelistener,this);
		uno.visible = false;
		due.visible = false;
		audio_txt = game.add.sprite(650, 30,"audio");
		audio_txt.scale.setTo(0.7,0.7);
		audio_txt.inputEnabled = true;
		audio_txt.events.onInputDown.add(this.audio_change,this);
		txt_goal = game.add.sprite(game.world.centerX, -200, 'goal');
		txt_goal.anchor.set(0.5);
		txt_goal.scale.setTo(0.3,0.3);
		bar = game.add.graphics();
		bar.beginFill(0x000000, 0.6);
		bar.drawRect(0, 100, 800, 100);
		bar.visible = false;
		var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
		//  The Text is positioned at 0, 100
		risultato = game.add.text(0, 0, "0 - 0", style);
		risultato.setTextBounds(0, 0, 800, 600);
		risultato.visible = false;
		parola_esatta = game.add.text(0, 0, testoparolaesatta, style);
		parola_esatta.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
		//  We'll set the bounds to be from x0, y100 and be 800px wide by 100px high
		parola_esatta.setTextBounds(0, 100, 800, 100);
		parola_esatta.visible = false;
		avanti = game.add.sprite(game.world.centerX-100, 450, 'avanti');
		avanti.inputEnabled = false;
		avanti.visible = false;
		avanti.events.onInputDown.add(playState.avanza,this);
		this.setFlags(homeflag,awayflag,home_idle,home_shooting,away_idle,away_shooting,palla,portiere);
		this.setScoresBg();
		rigioca = game.add.sprite(game.world.centerX-80, 450,"rigioca");
		rigioca.scale.setTo(0.5,0.5);
		rigioca.inputEnabled = false;
		rigioca.visible = false;
		rigioca.events.onInputDown.add(this.rigioca,this);
	},

	audio_change:function(){
		audio = !audio;
		if(audio){
			audio_txt.animations.frame = 0;
		}
		else{
			audio_txt.animations.frame = 1;
		}
	},
	
	rigioca:function(){
		game.state.start('select');
	},



	
	setFlags:function(homeflag,awayflag,homeidle,homeshooting,awayidle,awayshooting, palla,portiere){
		
		switch(team_one){	
			case 1:
			homeflag = game.add.sprite(game.world.centerX-222, 192, 'argentina_flag');
			hometiro = game.add.sprite(game.world.centerX-100, 200,'arg_shot');
			break;
			case 2:
			homeflag = game.add.sprite(game.world.centerX-222, 192, 'brazil_flag');
			hometiro = game.add.sprite(game.world.centerX-100, 200,'bra_shot');
			break;
			case 3:
			homeflag = game.add.sprite(game.world.centerX-222, 192, 'england_flag');
			hometiro = game.add.sprite(game.world.centerX-100, 200,'eng_shot');
			break;
			case 4:
			homeflag = game.add.sprite(game.world.centerX-222, 192, 'france_flag');
			hometiro = game.add.sprite(game.world.centerX-100, 200,'fra_shot');
			break;
			case 0:
			homeflag = game.add.sprite(game.world.centerX-222, 192, 'italy_flag');
			hometiro = game.add.sprite(game.world.centerX-100, 200,'ita_shot');
			break;
			case 5:
			homeflag = game.add.sprite(game.world.centerX-222, 192, 'germany_flag');
			hometiro = game.add.sprite(game.world.centerX-100, 200,'ger_shot');
			break;			
		};
				switch(team_two){
			case 1:
			awayflag = game.add.sprite(game.world.centerX-222, 350, 'argentina_flag');
			awaytiro = game.add.sprite(game.world.centerX-100, 200,'arg_shot');
			break;
			case 2:
			awayflag = game.add.sprite(game.world.centerX-222, 350, 'brazil_flag');
			awaytiro = game.add.sprite(game.world.centerX-100, 200,'bra_shot');
			break;
			case 3:
			awayflag = game.add.sprite(game.world.centerX-222, 350, 'england_flag');
			awaytiro = game.add.sprite(game.world.centerX-100, 200,'eng_shot');
			break;
			case 4:
			awayflag = game.add.sprite(game.world.centerX-222, 350, 'france_flag');
			awaytiro = game.add.sprite(game.world.centerX-100, 200,'fra_shot');
			break;
			case 0:
			awayflag = game.add.sprite(game.world.centerX-222, 350, 'italy_flag');
			awaytiro = game.add.sprite(game.world.centerX-100, 200,'ita_shot');
			break;
			case 5:
			awayflag = game.add.sprite(game.world.centerX-222, 350, 'germany_flag');
			awaytiro = game.add.sprite(game.world.centerX-100, 200,'ger_shot');
			break;			
		};

		hometiro.animations.add('tiro', [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 12, false);
		hometiro.animations.add('idle',[10],12,false);
		awaytiro.animations.add('tiro', [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 12, false);
		awaytiro.animations.add('idle',[10],12,false);
		gr_tab.add(homeflag);
		gr_tab.add(awayflag);
		gr_players.add(portiere_tuffo);
		gr_players.add(hometiro);
		gr_players.add(awaytiro);
		gr_players.add(palla);
		gr_players.add(portiere);
		palla.z = 1;
		hometiro.z = 2;
		awaytiro.z = 3;
		portiere.z = 0;
		portiere_tuffo.z = 0;
		gr_players.sort('z', Phaser.Group.SORT_ASCENDING);
		
	},
	
	setScoresBg:function(){
		for(i=0;i<10;i++){
			dabattere_bg[i] = game.add.sprite(280 + 70*(i%5), 187+153*Math.floor(i/5),'rig');
			dabattere_bg[i].animations.add('dabattere', [0], 50, false);
			dabattere_bg[i].animations.add('attuale', [1], 50, false);
			dabattere_bg[i].animations.add('segnato', [2], 50, false);
			dabattere_bg[i].animations.add('parato', [3], 50, false);
			dabattere_bg[i].animations.play('dabattere',50,false);
			gr_tab.add(dabattere_bg[i]);
		}
		dabattere_bg[dabattere].animations.play('attuale',50,false);
		this.updateTestorisultato();
		gr_tab.visible = true;
		var timer = game.time.create();
    timer.add(2 * Phaser.Timer.SECOND, this.dabattere, this);
    timer.start();
	},
	
	updateTestorisultato:function(){
		risultato.text = homegoal + " - " + awaygoal;
		risultato.visible = true;
	},
	
	dabattere: function(){
		bar.visible = true;
		testoparolaesatta = ""+fattorea[current]+" x " + fattoreb[current] + " = ";
		parola_esatta.text = testoparolaesatta; 
		parola_esatta.visible = true;
if(audio){
fischio.play();}
	risultato.visible = false;
	gr_players.visible = true;
	gr_tab.visible = false;
	palla.x = game.world.centerX-40;
	palla.y = game.world.centerY+70;
	palla.scale.setTo(1,1);
	if(firstTurn){
	hometiro.animations.play('idle', 30, false);
	hometiro.visible = true;
	awaytiro.visible = false;
	}
	else{
	hometiro.visible = false;
	awaytiro.animations.play('idle', 30, false);
	awaytiro.visible = true;
	}
	palla.visible = true;
	portiere.animations.play('fermo',24,true);
	
	playState.setRisposte();

	},
	
	shuffle:function(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
},

	chooseOrder:function(){
		for(i=0;i<10;i++){
			fattorea[i] = this.getRandomInt(1,finoa);
			do{fattoreb[i] = this.getRandomInt(1,10);}
			while(fattorea[i] == 10 && fattoreb[i] == 10);
		}
	},
	
	setRisposte:function(){
		
		uno.animations.frame = fattorea[current]*fattoreb[current];
		due.animations.frame = this.seconda();
		giusta_dx = this.getRandomInt(0,2); 
		if(!giusta_dx){
			uno.x = 200;
			due.x = 480;
		}else{
			uno.x = 480;
			due.x = 200;
		}
		
		uno.visible = true;
		due.visible = true;
		uno.inputEnabled = true;
		due.inputEnabled = true;
		
	},
	
	seconda:function(){
		risposta = 0;
		if(this.getRandomInt(0,1)){
			//Primo termine
		if(this.getRandomInt(0,1)){
			risposta = (fattorea[current]+1)*fattoreb[current];
		}
		else{
			risposta = (fattorea[current]-1)*fattoreb[current];
		}
		}
		else{
			//Secondo termine
			if(this.getRandomInt(0,1)){
			risposta = fattorea[current]*(fattoreb[current]+1);}
			else{
			risposta = fattorea[current]*(fattoreb[current]-1);	
			}
		}
		if (risposta == 0 || risposta > 100){
			do{riposta = this.getRandomInt(2,100)}while(risposta == fattorea[current]*fattoreb[current])
		}
		return risposta;
	},
	
 getRandomInt:function(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
},

	unolistener: function(){
		//GOAL
		uno.visible = false;
		due.visible = false;
		uno.inputEnabled = false;
		due.inputEnabled = false;
		if(audio){
		calcio.play();}
		palla.animations.play("ruota");
		if(giusta_dx){
			if(firstTurn){
			hometiro.animations.play('tiro', 30, false);}
			else{
			awaytiro.animations.play('tiro', 30, false);	
			}
		game.add.tween(palla.scale).to( { x: 0.4, y: 0.4 }, 1000, Phaser.Easing.Elastic.None, true);
		movimento = game.add.tween(palla).to( { x:520, y:295 }, 1000, Phaser.Easing.Cubic.None, true);
		movimento.onComplete.add(function(){if(audio){goal_sound.play();} game.add.tween(palla).to( { x:520, y:355 }, 1500, Phaser.Easing.Bounce.Out,true); 		palla.animations.stop("ruota"); this.goal();}, this);	
		portiere.visible = false;
		portiere_tuffo.visible = true;
		portiere_tuffo.x = 222;
		portiere_tuffo.animations.play("destra",12);
		}
		else{
			if(firstTurn){
			hometiro.animations.play('tiro', 30, false);}
			else{
			awaytiro.animations.play('tiro', 30, false);	
			}
		game.add.tween(palla.scale).to( { x: 0.4, y: 0.4 }, 1000, Phaser.Easing.Elastic.None, true);
		movimento = game.add.tween(palla).to( { x:220, y:295 }, 1000, Phaser.Easing.Cubic.None, true);
		movimento.onComplete.add(function(){if(audio){goal_sound.play();} game.add.tween(palla).to( { x:220, y:355 }, 1500, Phaser.Easing.Bounce.Out, true);		palla.animations.stop("ruota");this.goal();}, this);	
		portiere.visible = false;
		portiere_tuffo.visible = true;
		portiere_tuffo.x= 352;
		portiere_tuffo.animations.play("sinistra",12);
		}
	},
	
	duelistener: function(){
		uno.visible = false;
		due.visible = false;
		uno.inputEnabled = false;
		due.inputEnabled = false;
		if(audio){
		calcio.play();}
		palla.animations.play("ruota");
		if(!giusta_dx){
			if(firstTurn){
			hometiro.animations.play('tiro', 30, false);}
			else{
			awaytiro.animations.play('tiro', 30, false);	
			}
		game.add.tween(palla.scale).to( { x: 0.6, y: 0.6 }, 800, Phaser.Easing.Elastic.None, true);
		movimento = game.add.tween(palla).to( { x:520, y:345 }, 800, Phaser.Easing.Cubic.None, true);
		movimento.onComplete.add(function(){if(audio){fail_sound.play();}game.add.tween(palla.scale).to( { x: 0.8, y: 0.8 }, 800, Phaser.Easing.Elastic.None, true);game.add.tween(palla).to( { x:850, y:375 }, 800, Phaser.Easing.Cubic.None, true); 		palla.animations.stop("ruota");this.noGoal();}, this);	
		portiere.visible = false;
		portiere_tuffo.visible = true;
		portiere_tuffo.x = 352;
		portiere_tuffo.animations.play("sinistra",12);
		}
		else{
			if(firstTurn){
			hometiro.animations.play('tiro', 30, false);}
			else{
			awaytiro.animations.play('tiro', 30, false);	
			}
		game.add.tween(palla.scale).to( { x: 0.6, y: 0.6 }, 800, Phaser.Easing.Elastic.None, true);
		movimento = game.add.tween(palla).to( { x:220, y:345 }, 800, Phaser.Easing.Cubic.None, true);
		movimento.onComplete.add(function(){if(audio){fail_sound.play();}game.add.tween(palla.scale).to( { x: 0.8, y: 0.8 }, 800, Phaser.Easing.Elastic.None, true);game.add.tween(palla).to( { x:-50, y:375 }, 800, Phaser.Easing.Cubic.None, true);		palla.animations.stop("ruota");this.noGoal();}, this);	
		portiere.visible = false;
		portiere_tuffo.visible = true;
		portiere_tuffo.x= 222;
		portiere_tuffo.animations.play("destra",12);
		}
		
	},
	
	goal:function(){
		dabattere_bg[ordine[current]].animations.frame = 2;
		
		if(firstTurn){
			homegoal +=1;
			
		}
		else{
			awaygoal +=1;
		}
		game.add.tween(txt_goal.scale).to( { x: 0.6, y: 0.6 }, 4000, Phaser.Easing.Elastic.None, true);
		anim_gol = game.add.tween(txt_goal).to( { y: game.world.centerY }, 4000, Phaser.Easing.Bounce.Out, true);
		anim_gol.onComplete.add(this.switch_turn);
	},
	
	noGoal:function(){
		dabattere_bg[ordine[current]].animations.frame = 3;

		testoparolaesatta = "La risposta esatta era " + fattorea[current] + " x " + fattoreb[current] + " = "  + (fattorea[current]*fattoreb[current]);
		bar.visible = true;
		parola_esatta.visible = true;
		parola_esatta.text = testoparolaesatta;
		avanti.visible = true;
		avanti.inputEnabled = true;

	},	
	
	switch_turn:function(){
		current+=1;

		if(current!=10){

			dabattere_bg[ordine[current]].animations.frame = 1;
			firstTurn = !firstTurn;
			playState.riposiziona();
		}
		else{
			//Fine gioco
			playState.updateTestorisultato();
			risultato.visible = true;
			rigioca.visible = true;
			if(audio){
			fischio.loopFull(0.6);
			fischio.onLoop.add(playState.hasLooped, this);}
					rigioca.inputEnabled = true;
		rigioca.visible = true;
					bar.visible = true;
					if(homegoal != awaygoal){
					parola_esatta.text = "Vittoria per " + playState.vincitore() + "!";}
					else{
					parola_esatta.text = "Pareggio!";	
					}
					parola_esatta.visible = true;
					gr_tab.visible = true;
					hometiro.visible = false;
					palla.visible = false;
					awaytiro.visible = false;
					portiere.visible;
					portiere_tuffo.visible = false;
					txt_goal.y=-200;
					txt_goal.scale.setTo(0.3,0.3);
		}
	},
	
	hasLooped:function(){
		    loopCount++;
			console.log(loopCount);
    if (loopCount === 3)
    {
		fischio.stop();
		fischio.loop = false;
	}
	},
	
	
	vincitore:function(){
		if(homegoal > awaygoal){
			switch(team_one){
				case 0:
				return "l'Italia";
				break;
				case 1:
				return "l'Argentina";
				break;
				case 2:
				return "il Brasile";
				break;
				case 3:
				return "l'Inghilterra";
				break;
				case 4:
				return "la Francia";
				break;
				case 5:
				return "la Germania"
				break;
			}
		}
		else{
						switch(team_two){
				case 0:
				return "l'Italia";
				break;
				case 1:
				return "l'Argentina";
				break;
				case 2:
				return "il Brasile";
				break;
				case 3:
				return "l'Inghilterra";
				break;
				case 4:
				return "la Francia";
				break;
				case 5:
				return "la Germania"
				break;
			}
		}
	},
	riposiziona:function(){
		bar.visible = false;
		parola_esatta.visible = false;
		playState.updateTestorisultato();
		gr_tab.visible = true;
		hometiro.visible = false;
		palla.visible = false;
		awaytiro.visible = false;
		portiere.visible;
		portiere_tuffo.visible = false;
		txt_goal.y=-200;
		txt_goal.scale.setTo(0.3,0.3);
		var timer = game.time.create();
		timer.add(2 * Phaser.Timer.SECOND, playState.dabattere);
		timer.start();
	},
	
	avanza:function(){
		avanti.inputEnabled = false;
		avanti.visible = false;
		playState.switch_turn();
	}



	
}
