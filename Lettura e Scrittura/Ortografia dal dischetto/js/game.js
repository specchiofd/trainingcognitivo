


        var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameDiv');

		var ordine = [0,5,1,6,2,7,3,8,4,9];
		var parole_gruppi = [
		["chiavi","circo","macinare","richiesta","cornici","parchi","comici","marcire","calcio","arancia","uccello","macellaio","mucche","parcheggio","oche","dicembre"],
		["giallo","girasole","gesto","gelato","giardino","giornale","margherita","unghia","ringhiera","cinghiale","preghiera","alghe","dipingere","sorgere","spaghetti","magia"],
		["sciare","schiavo","viscido","proboscide","mischiare","maschio","scendere","scelta","vasche","scimmia","sciabola","rischio","liscio","scheda","scherzo","muschio"],
		["ascensore","scienza","nascere","scegliere","crescere","sceriffo","coscienza","conoscere","pesce","scegliere","vascello","scena","ascella","scendere","usciere","fantascienza"],
		["palio","paglia","maglietta","cespuglio","olio","aglio","moglie","petrolio","foglio","ciglia","vigilia","scoglio","sfogliare","svogliato","tagliente","biglietto"],
		["Antonio","sinfonia","bisogno","cigno","disegno","colonia","Spagna","lavagna","sostegno","ragno","lasagna","Stefania","assegno","insegnante","alluminio","unione"],
		["cuore","cucina","quaranta","quindi","incudine","quasi","squalo","scuotere","Pasqua","scusare","scuola","cugino","sequenza","circuito","quota","quello"],		
		["aspetto","sapone","doppio","antenna","matita","rasoio","mobile","valigetta","cartello","segnale","antenato","avvitare","forbici","abbaiare","doccia","freccia"]
		];
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
		var gruppo_ort = 0;
		var gruppo_sprite = ["cichi","gighi","scischi","sce","ligli","nigni","cuqu","doppie"];
		var gruppi = ["ci-chi","gi-ghi","sci-schi","sce-scie","li-gli","ni-gni","cu-qu","doppie"]
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
		