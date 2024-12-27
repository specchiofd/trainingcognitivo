var selectState = {
		create:function(){
		
		var select = game.add.sprite(game.world.centerX, game.world.centerY, 'select');
		select.anchor.setTo(0.5, 0.5);
		var left_one = game.add.sprite(30, 360, 'left');
		var right_one = game.add.sprite(100, 360, 'right');
		var up = game.add.sprite(370, 140, 'up');
		var down = game.add.sprite(game.world.centerX-30, 260, 'down');
		var left_two = game.add.sprite(642, 360, 'left');
		var right_two = game.add.sprite(712, 360, 'right');
		var gioca = game.add.sprite(game.world.centerX-150, 330, 'gioca');
		left_one.inputEnabled = true;
		left_two.inputEnabled = true;
		right_one.inputEnabled = true;
		right_two.inputEnabled = true;
		up.inputEnabled = true;
		down.inputEnabled = true;
		gioca.inputEnabled = true;
		var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
		var finoa_txt = game.add.text(0, 0, "Tabelline fino a", style);
				finoa_txt.setTextBounds(0, 50, 800, 100);
		gioca.events.onInputDown.add(this.avvia,this);
		left_one.events.onInputDown.add(this.left_one_change,this);
		left_two.events.onInputDown.add(this.left_two_change,this);
		right_one.events.onInputDown.add(this.right_one_change,this);
		right_two.events.onInputDown.add(this.right_two_change,this);
		up.events.onInputDown.add(this.down_change,this);
		down.events.onInputDown.add(this.up_change,this);
		 
		text_one = game.add.text(35, 490, teams[team_one], {
        font: "40px Arial",
        fill: "#ffffff",
        align: "center"
    });
		text_two = game.add.text(600, 490, teams[team_two], {
        font: "40px Arial",
        fill: "#ffffff",
        align: "right"
    });
		text_three = game.add.text(0, 100, finoa, {
        font: "40px Arial",
        fill: "#ffffff",
        boundsAlignH: "center", boundsAlignV: "middle" 
    });
	text_three.setTextBounds(0, 100, 800, 70);

		
		player_one = game.add.sprite(0, 100, 'italy_idle');
		player_two = game.add.sprite(550, 100, 'argentina_idle');

		this.changeAnim(0);
		this.changeAnim(1);

	},
	
	left_one_change:function(){
		team_one -=1;
		if(team_one == -1){
			if(team_two == 5){
			team_one = 4;}
			else{
				team_one = 5;
			}
		}
		else if(team_one == team_two){
			team_one -= 1;
			if(team_one == -1){
				team_one = 5;
			}
		}
		this.changeAnim(0);
	},
	
	right_one_change:function(){
		team_one +=1;
		if(team_one == 6){
			if(team_two == 0){
			team_one = 1;}
			else{
				team_one = 0;
			}
		}
		else if(team_one == team_two){
			team_one += 1;
			if(team_one == 6){
				team_one = 0;
			}
		}
		this.changeAnim(0);
	},
	
	left_two_change:function(){
		team_two -=1;
		if(team_two == -1){
			if(team_one == 5){
			team_two = 4;}
			else{
				team_two = 5;
			}
		}
		else if(team_two == team_one){
			team_two -= 1;
			if(team_two == -1){
				team_two = 5;
			}
		}
		this.changeAnim(1);		
	},
	
	right_two_change:function(){
				team_two +=1;
		if(team_two == 6){
			if(team_one == 0){
			team_two = 1;}
			else{
				team_two = 0;
			}
		}
		else if(team_one == team_two){
			team_two += 1;
			if(team_two == 6){
				team_two = 0;
			}
		}
		this.changeAnim(1);
	},
	
	up_change:function(){
		finoa -= 1;
		if(finoa < 2){
			finoa = 10;
		}
		text_three.setText(finoa);
		
	},
	
	down_change:function(){
				finoa += 1;
		if(finoa == 11){
			finoa = 2;
		}
		text_three.setText(finoa);
	},
	
	avvia:function(){
		game.state.start('play');
	},
	
	changeAnim:function(team){
		team == 0?  this.changeTeamOne(team) : this.changeTeamTwo(team) ;
		},
		
	changeTeamOne:function(team){
		text_one.setText(teams[team_one]);
		player_one.destroy();
		player_one = game.add.sprite(5, 100, teams_sprite[team_one]+"_dx");
		player_one.animations.add('idle',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],10,true);
		player_one.animations.play('idle');
	},
	
	changeTeamTwo:function(team){
		text_two.setText(teams[team_two]);
		player_two.destroy();
		player_two = game.add.sprite(640, 100, teams_sprite[team_two]);
		player_two.animations.add('idle',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],10,true);
		player_two.animations.play('idle');
	}
}