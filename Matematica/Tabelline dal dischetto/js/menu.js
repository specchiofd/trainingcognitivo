var menuState = {
	
	create:function(){
		var home = game.add.sprite(game.world.centerX, game.world.centerY, 'home');
		home.anchor.setTo(0.5, 0.5);
		var gioca = game.add.sprite(game.world.centerX-150, 400, 'gioca');
		gioca.inputEnabled = true;
		gioca.events.onInputDown.add(this.avvia,this);
	},
	
	avvia:function(){
		game.state.start('select');
	}
}