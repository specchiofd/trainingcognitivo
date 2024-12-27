var loadState = {
	
	preload:function(){
		var loadingLabel = game.add.text(80,250,'caricamento...',{font:'30px Courier',fill:'#ffffff'});
		game.load.audio('whistle', ['assets/whistle3.mp3','assets/whistle.ogg']);
		game.load.audio('kick', ['assets/kick.mp3','assets/kick.ogg']);
		game.load.audio('goal', ['assets/goal.mp3','assets/goal.ogg']);
		game.load.audio('fail', ['assets/fail.mp3','assets/fail.ogg']);
		game.load.spritesheet('audio', 'assets/audio.png', 115, 115);  
		game.load.image('goal', 'assets/txt_goal.png', 800, 540);  
		game.load.image('rigioca', 'assets/rigioca.png', 325, 120);  
		game.load.image('avanti', 'assets/avanti.png', 200, 80);  
		game.load.spritesheet('palla', 'assets/ball_sprite.png', 60, 60);
		game.load.spritesheet('numeri', 'assets/numeri.png', 75, 75);
		game.load.spritesheet('rig', 'assets/rig_frames.png', 65, 64);
		game.load.spritesheet('gk_tuffo', 'assets/goalkeeper_med.png', 229, 114); 
		game.load.spritesheet('gk_idle', 'assets/goalkeeper_idle.png', 91, 122);
		game.load.spritesheet('arg_shot', 'assets/argentina_shot.png', 160, 240);
		game.load.spritesheet('bra_shot', 'assets/brazil_shot.png', 160, 240);
		game.load.spritesheet('eng_shot', 'assets/england_shot.png', 160, 240);
		game.load.spritesheet('fra_shot', 'assets/france_shot.png', 160, 240);
		game.load.spritesheet('ita_shot', 'assets/italy_shot.png', 160, 240);
		game.load.spritesheet('ger_shot', 'assets/germany_shot.png', 160, 240);

		game.load.image('bg','assets/bg.png')
		game.load.image('gioca','assets/gioca.png')
		game.load.image('home', 'assets/home.png');
		game.load.image('select', 'assets/select.png');
		game.load.image('left', 'assets/left.png');
		game.load.image('right', 'assets/right.png');
		game.load.image('up', 'assets/up.png');
		game.load.image('down', 'assets/down.png');
		game.load.spritesheet('brazil_idle_dx','assets/brazil_idledx.png',160,240);
		game.load.spritesheet('argentina_idle_dx','assets/argentina_idledx.png',160,240);
		game.load.spritesheet('italy_idle_dx','assets/italy_idledx.png',160,240);
		game.load.spritesheet('france_idle_dx','assets/france_idledx.png',160,240);
		game.load.spritesheet('england_idle_dx','assets/england_idledx.png',160,240);
		game.load.spritesheet('germany_idle_dx','assets/germany_idledx.png',160,240);
		game.load.spritesheet('brazil_idle','assets/brazil_idle.png',160,240);
		game.load.spritesheet('argentina_idle','assets/argentina_idle.png',160,240);
		game.load.spritesheet('italy_idle','assets/italy_idle.png',160,240);
		game.load.spritesheet('france_idle','assets/france_idle.png',160,240);
		game.load.spritesheet('england_idle','assets/england_idle.png',160,240);
		game.load.spritesheet('germany_idle','assets/germany_idle.png',160,240);
		game.load.image('tabellone','assets/tabellone.png');
		game.load.image('brazil_flag','assets/brazil_flag1.png');
		game.load.image('france_flag','assets/france_flag1.png');
		game.load.image('england_flag','assets/england_flag1.png');
		game.load.image('italy_flag','assets/italy_flag1.png');
		game.load.image('germany_flag','assets/germany_flag1.png');
		game.load.image('argentina_flag','assets/argentina_flag1.png');
	},
	
	create:function(){

	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
this.scale.maxWidth = 1024;this.scale.maxHeight = 768;	
this.scale.updateLayout(true);
game.scale.windowConstraints.bottom = "visual";
this.game.scale.refresh();

		this.state.start('menu');
	} 
	
	
};