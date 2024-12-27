require('esplora');
var err;

function check(){
	waiting = true;
	err = false;
	compare(guess.voce,to_guess.voce,$("#bl_voce");
	compare(guess.coniugazione,to_guess.coniugazione,$("#bl_coniugazione");
	compare(guess.modo,to_guess.modo,$("#bl_modo");
	compare(guess.tempo,to_guess.tempo,$("#bl_tempo");
	compare(guess.persona,to_guess.persona,$("#bl_persona");
	compare(guess.transitivo,to_guess.transitivo,$("#bl_voce");

}

function compare(a,b,ogg){
	if (a==b){
		ogg.addClass("right");
	}
	else{
		ogg.addClass("wrong");
	}
}