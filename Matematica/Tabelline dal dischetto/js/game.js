


        var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameDiv');

		var ordine = [0,5,1,6,2,7,3,8,4,9];
		var fattorea = [];
		var fattoreb = [];
		var testoparolaesatta = "";
		var bar;
		var parola_esatta;
		var gr_tab;
		var gr_players;
		var txt_goal;
		var homegoal = 0;
		var awaygoal = 0;
		var team_one = 0;
		var team_two = 1;
		var text_one;
		var text_two;
		var player_one;
		var player_two;
		var finoa = 10;
		var teams_sprite = ["italy_idle","argentina_idle","brazil_idle","england_idle","france_idle","germany_idle"];
		var teams = ["Italia","Argentina","Brasile","Inghilterra","Francia","Germania"];
		var dabattere_bg = [];	
		var dabattere = 0;
		var firstTurn = true;
		var uno;
		var due;
		var risposte;
		var current;
		var giusta_dx;
		var palla;
		var hometiro;
		var awaytiro;
		var portiere;
		var portiere_tuffo;
		var risultato;
		var avanti;
		var goal_sound;
		var fail_sound;
		var fischio;
		var loopCount = 0;
		var audio = true;
		var audio_txt;
		game.state.add('load',loadState);
		game.state.add('menu',menuState);
		game.state.add('select',selectState);
		game.state.add('play',playState);

		
		game.state.start('load');
		