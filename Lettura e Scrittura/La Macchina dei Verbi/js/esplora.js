var verb = {
	voce:0,
	coniugazione:-1,
	modo:0,
	tempo:0,
	composto:false,
	persona:1,
	attivo:true,
	transitivo:false
};

var guess = {
	voce:0,
	coniugazione:-1,
	modo:0,
	tempo:0,
	composto:false,
	persona:1,
	attivo:true,
	transitivo:false
};

var to_guess = {
	voce:0,
	coniugazione:-1,
	modo:0,
	tempo:0,
	composto:false,
	persona:1,
	attivo:true,
	transitivo:false
};

var game_mode = 0;
waiting = false;
var ex_state = 0;
var array_modi = [];
var current = database[verb.voce];
var chkindicativo = true;
var chkcongiuntivo = true;
var chkcondizionale =true;
var chkimperativo = false;
var chkinfinito = false;
var chkparticipio = false;
var chkgerundio = false;

function avviaEsplora(){
		$("#bottom_check").hide();
		$("#area_random").show();
		$("#acaso").show();
		$("#area_suggerimento").hide();
		$("#piuconiugazione").css("opacity",0.5);
		$("#menoconiugazione").css("opacity",0.5);
		$("#piutransitivo").css("opacity",0.5);
		$("#menotransitivo").css("opacity",0.5);
				$("#minpiuconiugazione").css("opacity",0.5);
		$("#minmenoconiugazione").css("opacity",0.5);
		$("#minpiutransitivo").css("opacity",0.5);
		$("#minmenotransitivo").css("opacity",0.5);
		game_mode = 0;
		$("#intro").hide();
		$("#esplora").show();
		$(".parametri").show();
		$("#switch_another").hide();
		$("#switch_esercizio").show();
		$("#switch_esplora").hide();
		f_clean();
		$("#area_testo").removeClass("win");
		$("#haiscritto_area").hide();
		setDefault();
		generateVerb();
		window.scrollTo(0, 0);
		
}

function avviaEsercizio(){
	$("#bottom_check").show();
	$("#area_random").show();
		$("#acaso").hide();
		$("#area_testo").removeClass("win");
		$("#area_suggerimento").show();
		$("#piuconiugazione").css("opacity",1);
		$("#menoconiugazione").css("opacity",1);
		$("#piutransitivo").css("opacity",1);
		$("#menotransitivo").css("opacity",1);
				$("#minpiuconiugazione").css("opacity",1);
		$("#minmenoconiugazione").css("opacity",1);
		$("#minpiutransitivo").css("opacity",1);
		$("#minmenotransitivo").css("opacity",1);
		game_mode = 1;
		toGuessGeneration();
		waiting = false;
		$("#switch_another").show();
		$("#switch_esplora").show();
		$("#switch_esercizio").hide();
		$("#intro").hide();
		$("#esplora").show();
		$(".parametri").show();
		setDefault();
		var ex_state = 0;
		suggerimento();
		window.scrollTo(0, 0);
}

function setChecks(){
		$("#indicativo").click(function(){
				chkindicativo = !chkindicativo;
				console.log(chkindicativo);
				if(sumvar() == 0){
				chkindicativo = !chkindicativo;
				$(this).prop('checked', true);}		
		});
				$("#congiuntivo").click(function(){
				chkcongiuntivo = !chkcongiuntivo;
				if(sumvar() == 0){
				chkcongiuntivo = !chkcongiuntivo;
				$(this).prop('checked', true);}		
		});
				$("#condizionale").click(function(){
				chkcondizionale = !chkcondizionale;
				if(sumvar() == 0){
				chkcondizionale = !chkcondizionale;
				$(this).prop('checked', true);}		
		});
				$("#imperativo").click(function(){
				chkimperativo = !chkimperativo;
				if(sumvar() == 0){
				chkimperativo = !chkimperativo;
				$(this).prop('checked', true);}		
		});
				$("#infinito").click(function(){
				chkinfinito = !chkinfinito;
				if(sumvar() == 0){
				chkinfinito = !chkinfinito;
				$(this).prop('checked', true);}		
		});
						$("#participio").click(function(){
				chkparticipio = !chkparticipio;
				if(sumvar() == 0){
				chkparticipio = !chkparticipio;
				$(this).prop('checked', true);}		
		});
								$("#gerundio").click(function(){
				chkgerundio = !chkgerundio;
				if(sumvar() == 0){
				chkgerundio = !chkgerundio;
				$(this).prop('checked', true);}		
		});
}




function sumvar(){
	console.log(chkindicativo + chkcongiuntivo + chkcondizionale + chkimperativo+chkinfinito+chkparticipio+chkgerundio);
	return chkindicativo + chkcongiuntivo + chkcondizionale + chkimperativo+chkinfinito+chkparticipio+chkgerundio;
}

$(document).ready(function(){
	$("#bottom_check").hide();
	$("#area_random").hide();
	setChecks();
	$("#acaso").click(function(){
		toObserveGeneration();
	});
	
	$("#haiscritto_area").hide();
	 $('[data-toggle="popover"]').popover(); 

	$("#checkagain").click(
	function(){
		window.scrollTo(0, 0);
			check();
	});
		$("#bottom_check").click(
	function(){
		window.scrollTo(0, 0);
			check();
	});
	$("#acaso").hide();
	$("#switch_esplora").hide();
	$("#switch_esercizio").hide();
	$("#switch_another").hide();
	$("#intro").show();
	$("#esplora").hide();
	$(".parametri").hide();;
	$("#esplora_btn").click(function(){

	avviaEsplora();
});
	$("#piuconiugazione").click(function(){
		if(game_mode == 1 && !waiting){
			if(guess.coniugazione == -1){
				guess.coniugazione = 3
			}
			else if(guess.coniugazione == 2 || guess.coniugazione == 3){
				guess.coniugazione -= 1;
			}
			else if(guess.coniugazione == 1){
				guess.coniugazione = -1;
			}
					updateConiugazione();
		}

		});
	
	$("#menoconiugazione").click(function(){
				if(game_mode == 1 && !waiting){
			
			if(guess.coniugazione == 3){
				guess.coniugazione = -1;
			}
			else if(guess.coniugazione == -1){
				guess.coniugazione = 1;
			}
			else{
				guess.coniugazione += 1;
			}
			updateConiugazione();
		}
	});
	$("#menotransitivo").click(function(){
		if(game_mode == 1 && !waiting){
			guess.transitivo = !guess.transitivo;
			updateTransitivo();
		}
 	});
	
	$("#piutransitivo").click(function(){
				if(game_mode == 1 && !waiting){
			guess.transitivo = !guess.transitivo;
			updateTransitivo();		
				}
	});
		$("#minpiuconiugazione").click(function(){
		if(game_mode == 1 && !waiting){
			if(guess.coniugazione == -1){
				guess.coniugazione = 3
			}
			else if(guess.coniugazione == 2 || guess.coniugazione == 3){
				guess.coniugazione -= 1;
			}
			else if(guess.coniugazione == 1){
				guess.coniugazione = -1;
			}
					updateConiugazione();
		}

		});
	
	$("#minmenoconiugazione").click(function(){
				if(game_mode == 1 && !waiting){
			
			if(guess.coniugazione == 3){
				guess.coniugazione = -1;
			}
			else if(guess.coniugazione == -1){
				guess.coniugazione = 1;
			}
			else{
				guess.coniugazione += 1;
			}
			updateConiugazione();
		}
	});
	$("#minmenotransitivo").click(function(){
		if(game_mode == 1 && !waiting){
			guess.transitivo = !guess.transitivo;
			updateTransitivo();
		}
 	});
	
	$("#minpiutransitivo").click(function(){
				if(game_mode == 1 && !waiting){
			guess.transitivo = !guess.transitivo;
			updateTransitivo();		
				}
	});
$("#switch_another").click(function(){
		
		f_clean();
		avviaEsercizio();
});

	$("#switch_esplora").click(function(){
		f_clean();
		avviaEsplora();
});
	$("#switch_esercizio").click(function(){
		f_clean();
	avviaEsercizio();
});


	$("#esercizio_btn").click(function(){

	avviaEsercizio();
});

	$(".meno").click(function(){

		switch($(this).attr("target")){
			case "voce":
				if(game_mode == 0){
				verb.voce +=1;
				if(verb.voce == database.length){
					verb.voce = 0;
				}
				current = database[verb.voce];
				verb.coniugazione = current.coniugazione;
				verb.transitivo = current.transitivo;
				updateVoce();
				updateConiugazione();
				updateTransitivo();}
				else{
					if(!waiting){
						guess.voce+=1;
						if(guess.voce == database.length){
						guess.voce = 0;
						}
						updateVoce();
					}
				}
				break;
			case "modo":
				if(game_mode == 0){
				verb.modo += 1;
				if(verb.modo == modi.length){
					verb.modo = 0;
				}
				verb.tempo = 0;
				if(verb.modo == 3 && verb.persona == 1){
					verb.persona = 2;
					updatePersona();
				}
				updateModo();
				updateTempo();}
				else{
					if(!waiting){
					guess.modo += 1;
					if(guess.modo == modi.length){
					guess.modo = 0;
					}
					guess.tempo = 0;
					if(guess.modo == 3 && guess.persona == 1){
						guess.persona = 2;
						updatePersona();
					}
					updateModo();
					updateTempo();
					}
				}
				break;
			case "tempo":
				if(game_mode == 0){
				verb.tempo +=1;
				if(verb.tempo == whichModi(verb).length){
					verb.tempo = 0;

				}
									updateTempo();
				}
				else{
				if(!waiting){
				guess.tempo +=1;
				if(guess.tempo == whichModi(guess).length){
					guess.tempo = 0;
					
				}
				updateTempo();
				}
				}		
				break;
			case "numpersona":
			if(game_mode == 0){
				if(verb.persona <4){
				verb.persona+=1;
				if(verb.persona == 4){
					verb.persona = 1;
				}
				if(verb.modo == 3 && verb.persona == 1){
					verb.persona = 2;
				}
				}
				else{
					verb.persona+=1;
					if(verb.persona == 7){
						verb.persona = 4;
					}
				}
			updatePersona();}
			else{
				if(!waiting){
					if(guess.persona <4){
				guess.persona+=1;
				if(guess.persona == 4){
					guess.persona = 1;
				}
				if(guess.modo == 3 && guess.persona == 1){
					guess.persona = 2;
				}
				}
				else{
					guess.persona+=1;
					if(guess.persona == 7){
						guess.persona = 4;
					}
				}
			updatePersona();
				}
			}
			break;
			case "singplur":
			if(game_mode == 0){
				if(verb.persona > 3){
					verb.persona = (verb.persona+3)%7 + 1;
					if(verb.modo == 3 && verb.persona == 1){
						verb.persona = 2;
					}
				}
				else{
					verb.persona +=3;
				}
			updateSingPlur();}
			else{
				if(!waiting){
				if(guess.persona > 3){
					guess.persona = (guess.persona+3)%7 + 1;
					if(guess.modo == 3 && guess.persona == 1){
						guess.persona = 2;
					}
				}
				else{
					guess.persona +=3;
				}
			updateSingPlur();
				}
			}
			break;
		}
		if(game_mode == 0){
		generateVerb();}
	});
	$(".piu").click(function(){
		switch($(this).attr("target")){
			case "voce":
				if(game_mode == 0){
				verb.voce -=1;
				if(verb.voce == -1){
					verb.voce = database.length-1;
				}
				current = database[verb.voce];
				verb.transitivo = current.transitivo;
				verb.coniugazione = current.coniugazione;
				updateVoce();
				updateConiugazione();
				updateTransitivo();
				}
				else{
					if(!waiting){
				guess.voce -=1;
				if(guess.voce == -1){
					guess.voce = database.length-1;
				}
				updateVoce();			
					}
				}
				break;
			case "modo":
							if(game_mode == 0){
				verb.modo -= 1;
				if(verb.modo == -1){
					verb.modo = modi.length-1;
				}
				verb.tempo = 0;
				if(verb.modo == 3 && verb.persona == 1){
					verb.persona = 2;
					updatePersona();
				}
				updateModo();
							updateTempo();}
							else{
								if(!waiting){
												guess.modo -= 1;
				if(guess.modo == -1){
					guess.modo = modi.length-1;
				}
				guess.tempo = 0;
				if(guess.modo == 3 && guess.persona == 1){
					guess.persona = 2;
					updatePersona();
				}
				
				updateModo();
							updateTempo();	
								}
				}
				break;
			case "tempo":
			if(game_mode == 0){
				verb.tempo -=1;
				if(verb.tempo == -1){
					verb.tempo = whichModi(verb).length-1;
				}
			updateTempo();
			
			}
			else{
				if(!waiting){
				guess.tempo -=1;
				if(guess.tempo == -1){
					guess.tempo = whichModi(guess).length-1;
				}

			updateTempo();					
				}
			}
				break;
			case "numpersona":
						if(game_mode == 0){
				if(verb.persona <4){
				verb.persona-=1;
				if(verb.persona == 0){
					verb.persona = 3;
				}
				if(verb.modo == 3 && verb.persona == 1){
					verb.persona = 2;
				}
				}
				else{
					verb.persona-=1;
					if(verb.persona == 3){
						verb.persona = 6;
					}
				}
						updatePersona();}
						else{
							if(!waiting){
				if(guess.persona <4){
				guess.persona-=1;
				if(guess.persona == 0){
					guess.persona = 3;
				}
				if(guess.modo == 3 && guess.persona == 1){
					guess.persona = 2;
				}
				}
				else{
					guess.persona-=1;
					if(guess.persona == 3){
						guess.persona = 6;
					}
				}
							updatePersona();}
							
						}
			break;
			case "singplur":
						if(game_mode == 0){			
				if(verb.persona > 3){
					verb.persona = (verb.persona+3)%7 + 1;
					if(verb.modo == 3 && verb.persona == 1){
						verb.persona = 2;
					}
				}
				else{
					verb.persona +=3;
				}
				updateSingPlur();	
			break;
	
		}
		else{
			if(!waiting){
				if(guess.persona > 3){
					guess.persona = (guess.persona+3)%7 + 1;
					if(guess.modo == 3 && guess.persona == 1){
						guess.persona = 2;
					}
				}
				else{
					guess.persona +=3;
				}
				updateSingPlur();
			break;				
			}
		}
		}
		if(game_mode == 0){
		generateVerb();}
	});

		$(".min_meno").click(function(){

		switch($(this).attr("target")){
			case "voce":
				if(game_mode == 0){
				verb.voce +=1;
				if(verb.voce == database.length){
					verb.voce = 0;
				}
				current = database[verb.voce];
				verb.coniugazione = current.coniugazione;
				verb.transitivo = current.transitivo;
				updateVoce();
				updateConiugazione();
				updateTransitivo();}
				else{
					if(!waiting){
						guess.voce+=1;
						if(guess.voce == database.length){
						guess.voce = 0;
						}
						updateVoce();
					}
				}
				break;
			case "modo":
				if(game_mode == 0){
				verb.modo += 1;
				if(verb.modo == modi.length){
					verb.modo = 0;
				}
				verb.tempo = 0;
				if(verb.modo == 3 && verb.persona == 1){
					verb.persona = 2;
					updatePersona();
				}
				updateModo();
				updateTempo();}
				else{
					if(!waiting){
					guess.modo += 1;
					if(guess.modo == modi.length){
					guess.modo = 0;
					}
					guess.tempo = 0;
					if(guess.modo == 3 && guess.persona == 1){
						guess.persona = 2;
						updatePersona();
					}
					updateModo();
					updateTempo();
					}
				}
				break;
			case "tempo":
				if(game_mode == 0){
				verb.tempo +=1;
				if(verb.tempo == whichModi(verb).length){
					verb.tempo = 0;

				}
									updateTempo();
				}
				else{
				if(!waiting){
				guess.tempo +=1;
				if(guess.tempo == whichModi(guess).length){
					guess.tempo = 0;
					
				}
				updateTempo();
				}
				}		
				break;
			case "numpersona":
			if(game_mode == 0){
				if(verb.persona <4){
				verb.persona+=1;
				if(verb.persona == 4){
					verb.persona = 1;
				}
				if(verb.modo == 3 && verb.persona == 1){
					verb.persona = 2;
				}
				}
				else{
					verb.persona+=1;
					if(verb.persona == 7){
						verb.persona = 4;
					}
				}
			updatePersona();}
			else{
				if(!waiting){
					if(guess.persona <4){
				guess.persona+=1;
				if(guess.persona == 4){
					guess.persona = 1;
				}
				if(guess.modo == 3 && guess.persona == 1){
					guess.persona = 2;
				}
				}
				else{
					guess.persona+=1;
					if(guess.persona == 7){
						guess.persona = 4;
					}
				}
			updatePersona();
				}
			}
			break;
			case "singplur":
			if(game_mode == 0){
				if(verb.persona > 3){
					verb.persona = (verb.persona+3)%7 + 1;
					if(verb.modo == 3 && verb.persona == 1){
						verb.persona = 2;
					}
				}
				else{
					verb.persona +=3;
				}
			updateSingPlur();}
			else{
				if(!waiting){
				if(guess.persona > 3){
					guess.persona = (guess.persona+3)%7 + 1;
					if(guess.modo == 3 && guess.persona == 1){
						guess.persona = 2;
					}
				}
				else{
					guess.persona +=3;
				}
			updateSingPlur();
				}
			}
			break;
		}
		if(game_mode == 0){
		generateVerb();}
	});
	$(".min_piu").click(function(){
		switch($(this).attr("target")){
			case "voce":
				if(game_mode == 0){
				verb.voce -=1;
				if(verb.voce == -1){
					verb.voce = database.length-1;
				}
				current = database[verb.voce];
				verb.transitivo = current.transitivo;
				verb.coniugazione = current.coniugazione;
				updateVoce();
				updateConiugazione();
				updateTransitivo();
				}
				else{
					if(!waiting){
				guess.voce -=1;
				if(guess.voce == -1){
					guess.voce = database.length-1;
				}
				updateVoce();			
					}
				}
				break;
			case "modo":
							if(game_mode == 0){
				verb.modo -= 1;
				if(verb.modo == -1){
					verb.modo = modi.length-1;
				}
				verb.tempo = 0;
				if(verb.modo == 3 && verb.persona == 1){
					verb.persona = 2;
					updatePersona();
				}
				updateModo();
							updateTempo();}
							else{
								if(!waiting){
												guess.modo -= 1;
				if(guess.modo == -1){
					guess.modo = modi.length-1;
				}
				guess.tempo = 0;
				if(guess.modo == 3 && guess.persona == 1){
					guess.persona = 2;
					updatePersona();
				}
				
				updateModo();
							updateTempo();	
								}
				}
				break;
			case "tempo":
			if(game_mode == 0){
				verb.tempo -=1;
				if(verb.tempo == -1){
					verb.tempo = whichModi(verb).length-1;
				}
			updateTempo();
			
			}
			else{
				if(!waiting){
				guess.tempo -=1;
				if(guess.tempo == -1){
					guess.tempo = whichModi(guess).length-1;
				}

			updateTempo();					
				}
			}
				break;
			case "numpersona":
						if(game_mode == 0){
				if(verb.persona <4){
				verb.persona-=1;
				if(verb.persona == 0){
					verb.persona = 3;
				}
				if(verb.modo == 3 && verb.persona == 1){
					verb.persona = 2;
				}
				}
				else{
					verb.persona-=1;
					if(verb.persona == 3){
						verb.persona = 6;
					}
				}
						updatePersona();}
						else{
							if(!waiting){
				if(guess.persona <4){
				guess.persona-=1;
				if(guess.persona == 0){
					guess.persona = 3;
				}
				if(guess.modo == 3 && guess.persona == 1){
					guess.persona = 2;
				}
				}
				else{
					guess.persona-=1;
					if(guess.persona == 3){
						guess.persona = 6;
					}
				}
							updatePersona();}
							
						}
			break;
			case "singplur":
						if(game_mode == 0){			
				if(verb.persona > 3){
					verb.persona = (verb.persona+3)%7 + 1;
					if(verb.modo == 3 && verb.persona == 1){
						verb.persona = 2;
					}
				}
				else{
					verb.persona +=3;
				}
				updateSingPlur();	
			break;
	
		}
		else{
			if(!waiting){
				if(guess.persona > 3){
					guess.persona = (guess.persona+3)%7 + 1;
					if(guess.modo == 3 && guess.persona == 1){
						guess.persona = 2;
					}
				}
				else{
					guess.persona +=3;
				}
				updateSingPlur();
			break;				
			}
		}
		}
		if(game_mode == 0){
		generateVerb();}
	});
	
	});

function whichModi(ogg){
	switch(modi[ogg.modo]){
		case "indicativo":
		return tempiindicativo;
		case "congiuntivo":
		return tempicongiuntivo;
		case "condizionale":
		return tempicondizionale;
		case "imperativo":
		return tempiimperativo;
		case "infinito":
		return tempiinfinito;
		case "participio":
		return tempiparticipio;
		case "gerundio":
		return tempigerundio;
	}
}

function halfShow(obj){
	obj.css("opacity",1);
}

function halfHide(obj){
	obj.css("opacity",0.5);
}

function cheTempo(ogg){
	modeToSwitch = ogg.modo;
	timeToSwitch = ogg.tempo;
	switch(modeToSwitch){
		case 0:
			switch(timeToSwitch){
				case 0:
				ogg.composto = false;
				return "presente";
				case 1:
				ogg.composto = false;
				return "imperfetto";
				case 2:
				ogg.composto = false;
				return "passato remoto";
				case 3:
				ogg.composto = false;
				return "futuro semplice";
				case 4:
				ogg.composto = true;
				return "passato prossimo";
				case 5:
				ogg.composto = true;
				return "trapassato prossimo";
				case 6:
				ogg.composto = true;
				return "trapassato remoto";
				case 7:
				ogg.composto = true;
				return "futuro anteriore";
				}
			case 1:
					switch(timeToSwitch){
				case 0:
				ogg.composto = false;
				return "presente";
				case 1:
				ogg.composto = false;
				return "imperfetto";
				case 2:
				ogg.composto = true;
				return "passato";
				case 3:
				ogg.composto = true;
				return "trapassato";
					}
			case 2:
				switch(timeToSwitch){
				case 0:
				ogg.composto = false;
				return "presente";
				case 1:
				ogg.composto = true;
				return "passato";
					}	
			case 3:
			switch(timeToSwitch){
				case 0:
				ogg.composto = false;
				return "presente";
			}
			case 4:
				switch(timeToSwitch){
					case 0:
				ogg.composto = false;
				return "presente";
				case 1:
				ogg.composto = true;
				return "passato";
					}	
			case 5:
				switch(timeToSwitch){
					case 0:
				ogg.composto = false;
				return "presente";
				case 1:
				ogg.composto = false;
				return "passato";
					}	
			case 6:
				switch(timeToSwitch){
					case 0:
				ogg.composto = false;
				return "presente";
				case 1:
				ogg.composto = true;
				return "passato";
					}	
										
	}
}


function setDefault(){
	updateVoce();
	updateConiugazione();
	updateModo();
	updateTempo();
	updatePersona();
	updateSingPlur();
	updateAttivo();
	updateTransitivo();
	

}

function updateVoce(){
	if(game_mode == 0){
	$("#voce").text(database[verb.voce].voce);}
	else{
	$("#voce").text(database[guess.voce].voce);	
	}
}

function updateConiugazione(){
		if(game_mode == 0){
	if(verb.coniugazione == -1){
	$("#coniugazione").text("Propria")}
	else{
	$("#coniugazione").text(verb.coniugazione)
		};}else{
				if(guess.coniugazione == -1){
	$("#coniugazione").text("Propria")}
	else{
	$("#coniugazione").text(guess.coniugazione)
		};
		}
}

function updateModo(){
	if(game_mode == 0){
	$("#modo").text(modi[verb.modo]);
		switch(modi[verb.modo]){
		case "indicativo":
		halfShow($("#tempo_wrapper"));
		halfShow($("#numpersona_wrapper"));
		halfShow($("#singplur_wrapper"));
		break;
		case "congiuntivo":
		halfShow($("#tempo_wrapper"));
		halfShow($("#numpersona_wrapper"));
		halfShow($("#singplur_wrapper"));
		break;
		case "condizionale":
		halfShow($("#tempo_wrapper"));
		halfShow($("#numpersona_wrapper"));
		halfShow($("#singplur_wrapper"));
		break;
		case "imperativo":
		halfHide($("#tempo_wrapper"));
		halfShow($("#numpersona_wrapper"));
		halfShow($("#singplur_wrapper"));
		break;
		case "infinito":
		halfShow($("#tempo_wrapper"));
		halfHide($("#numpersona_wrapper"));
		halfHide($("#singplur_wrapper"));
		break;
		case "participio":
		halfShow($("#tempo_wrapper"));
		halfHide($("#numpersona_wrapper"));
		halfHide($("#singplur_wrapper"));
		break;
		case "gerundio":
		halfShow($("#tempo_wrapper"));
		halfHide($("#numpersona_wrapper"));
		halfHide($("#singplur_wrapper"));
		break;
	}
	}else{
	$("#modo").text(modi[guess.modo]);
		switch(modi[guess.modo]){
		case "indicativo":
		halfShow($("#tempo_wrapper"));
		halfShow($("#numpersona_wrapper"));
		halfShow($("#singplur_wrapper"));
		break;
		case "congiuntivo":
		halfShow($("#tempo_wrapper"));
		halfShow($("#numpersona_wrapper"));
		halfShow($("#singplur_wrapper"));
		break;
		case "condizionale":
		halfShow($("#tempo_wrapper"));
		halfShow($("#numpersona_wrapper"));
		halfShow($("#singplur_wrapper"));
		break;
		case "imperativo":
		halfHide($("#tempo_wrapper"));
		halfShow($("#numpersona_wrapper"));
		halfShow($("#singplur_wrapper"));
		break;
		case "infinito":
		halfShow($("#tempo_wrapper"));
		halfHide($("#numpersona_wrapper"));
		halfHide($("#singplur_wrapper"));
		break;
		case "participio":
		halfShow($("#tempo_wrapper"));
		halfHide($("#numpersona_wrapper"));
		halfHide($("#singplur_wrapper"));
		break;
		case "gerundio":
		halfShow($("#tempo_wrapper"));
		halfHide($("#numpersona_wrapper"));
		halfHide($("#singplur_wrapper"));
		break;		
	}
}
}

function updateTempo(){
	if(game_mode == 0){
	$("#tempo").text(cheTempo(verb));}
	else{
	$("#tempo").text(cheTempo(guess));	
	}
	
}

function updatePersona(){
	if(game_mode == 0){
	$("#numpersona").text(conversion(verb.persona));}
	else{
	$("#numpersona").text(conversion(guess.persona));	
	}
}

function updateSingPlur(){
		if(game_mode == 0){
		$("#singplur").text(singconversion(verb.persona));}
		else{
		$("#singplur").text(singconversion(guess.persona));	
		}
}



function updateTransitivo(){
	if(game_mode == 0){
	if(verb.transitivo){
	$("#transitivo").text("tran.")}
	else{
	$("#transitivo").text("intr.")	
	}}
	else{
	if(guess.transitivo){
	$("#transitivo").text("tran.")}
	else{
	$("#transitivo").text("intr.")	
	}
	}
}

function updateAttivo(){
		if(game_mode == 0){
	if(verb.attivo){
	$("#attivopassivo").text("attivo")	
	}else{
	$("#attivopassivo").text("passivo")	
		}}
		else{
	if(guess.attivo){
	$("#attivopassivo").text("attivo")	
	}else{
	$("#attivopassivo").text("passivo")	
		}			
		}
}

function conversion(per){
	
	switch(per){
		case 1:
		return "1a ";
		case 2:
		return "2a ";
		case 3:
		return "3a ";
		case 4:
		return "1a ";
		case 5:
		return "2a ";
		case 6:
		return "3a ";
	}
}

function singconversion(per){
	return per < 4? "singolare" : "plurale";
}


function generateVerb(){
	generated = "";
	generated = congiuntivo(verb) + " " + persona(verb) + " " + verbo(verb) + " " + alpassato(verb);
	$("#verbo").text(generated);
}

function generate_toGuess(){
	generated = "";

	
	generated = congiuntivo(to_guess) + " " + persona(to_guess) + " " + verbo(to_guess) + " " + alpassato(to_guess);

	$("#verbo").text(generated);
}


function generate_answer(){
	generated = "";
	generated = congiuntivo(guess) + " " + persona(guess) + " " + verbo(guess) + " " + alpassato(guess);
	return generated;
}





function persona(ogg){
	return ogg.modo < 3? persone[ogg.persona-1]:"";
}

function congiuntivo(ogg){
	
	return modi[ogg.modo] == "congiuntivo" ? "che" : "";
}

function alpassato(ogg){

	if(ogg.persona <4){
	return ogg.composto? database[ogg.voce].participiopassato[0]:"";}
	else{
	return ogg.composto? database[ogg.voce].participiopassato[1]:"";}	

	
}

function verbo(ogg){
		if(ogg.modo == 0){
		switch(cheTempo(ogg)){
			case "presente":
			return database[ogg.voce].presente[ogg.persona-1];
			case "passato prossimo":
			return database[database[ogg.voce].reggenza].presente[ogg.persona-1];
			case "imperfetto":
			return database[ogg.voce].imperfetto[ogg.persona-1];
			case "trapassato prossimo":
			return database[database[ogg.voce].reggenza].imperfetto[ogg.persona-1];
			case "passato remoto":
			return database[ogg.voce].passatoremoto[ogg.persona-1];
			case "trapassato remoto":
			return database[database[ogg.voce].reggenza].passatoremoto[ogg.persona-1];
			case "futuro semplice":
			return database[ogg.voce].futurosemplice[ogg.persona-1];
			case "futuro anteriore":
			return database[database[ogg.voce].reggenza].futurosemplice[ogg.persona-1];
		}
		}
		else if(ogg.modo == 1){
			switch(cheTempo(ogg)){
			case "presente":
			return database[ogg.voce].congiuntivopresente[ogg.persona-1];
			case "passato":
			return database[database[ogg.voce].reggenza].congiuntivopresente[ogg.persona-1];
			case "imperfetto":
			return database[ogg.voce].congiuntivoimperfetto[ogg.persona-1];
			case "trapassato":
			return database[database[ogg.voce].reggenza].congiuntivoimperfetto[ogg.persona-1];
			}			
		}
		else if(ogg.modo == 2){
			switch(cheTempo(ogg)){
			case "presente":
			return database[ogg.voce].condizionale[ogg.persona-1];
			break;
			case "passato":
			return database[database[ogg.voce].reggenza].condizionale[ogg.persona-1];
			break;
		}}
		
		else if(ogg.modo == 3){
			return database[ogg.voce].imperativo[ogg.persona-1];
		}
		else if(ogg.modo == 4){
			switch(cheTempo(ogg)){
			case "presente":
			return database[ogg.voce].infinito;
			break;
			case "passato":
			return database[database[ogg.voce].reggenza].infinito;
			break;
		}
		}
		else if(ogg.modo == 5){
								switch(cheTempo(ogg)) {
													case "presente":
														return database[ogg.voce].participiopresente;		
													break;
													case "passato":
													return database[ogg.voce].participiopassato[0];	
													break;
													}
								}		
		else{
			switch(cheTempo(ogg)){
								case "presente":
									return database[ogg.voce].gerundiopresente;		
								break;
								case "passato":
									return database[database[ogg.voce].reggenza].gerundiopresente;	
								break;
						}	
		
}
}




function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildArray(){
	tmpArray = [];
	if(chkindicativo){
		tmpArray.push(0);
	}
		if(chkcongiuntivo){
		tmpArray.push(1);
	}
		if(chkcondizionale){
		tmpArray.push(2);
	}
		if(chkimperativo){
		tmpArray.push(3);
	}
		if(chkinfinito){
		tmpArray.push(4);
	}
			if(chkparticipio){
		tmpArray.push(5);
	}
			if(chkgerundio){
		tmpArray.push(6);
	}

	return tmpArray;
}

function toGuessGeneration(){
	to_guess.voce = getRandomInt(0,database.length-1);
	to_guess.transitivo = database[to_guess.voce].transitivo;
	to_guess.coniugazione = database[to_guess.voce].coniugazione;
	to_guess.reggenza = database[to_guess.voce].reggenza;
	randDb = buildArray();
	modeChoice = getRandomInt(0,randDb.length-1);
	to_guess.modo = randDb[modeChoice];
	switch(to_guess.modo){
		case 0:
		to_guess.tempo = getRandomInt(0,tempiindicativo.length-1);
		to_guess.composto = to_guess.tempo <4? false : true;
		break;
		case 1:
		to_guess.tempo = getRandomInt(0,tempicongiuntivo.length-1);
		to_guess.composto = to_guess.tempo <2? false : true;
		break;
		case 2:
		to_guess.tempo = getRandomInt(0,tempicondizionale.length-1);
		to_guess.composto = to_guess.tempo <1? false : true;
		break;
		case 3:
		to_guess.tempo = 0;
		to_guess.composto = false;
		break;
		case 4:
		to_guess.tempo = getRandomInt(0,1);
		to_guess.composto = to_guess.tempo <4? false : true;
		break;
		case 5:
		to_guess.tempo = getRandomInt(0,1);
		to_guess.composto = to_guess.tempo <4? false : true;
		break;
		case 6:
		to_guess.tempo =getRandomInt(0,1);
		to_guess.composto = to_guess.tempo <4? false : true;
		break;
	}
	switch(to_guess.modo){
		case 0:
		case 1:
		case 2:
		case 4:
		case 5:
		case 6:
		to_guess.persona = getRandomInt(1,6);
		
		break;
		case 3:
		to_guess.persona = getRandomInt(2,6);
		break;
	}
	window.scrollTo(0, 0);
	generate_toGuess();
}

function toObserveGeneration(){
	verb.voce = getRandomInt(0,database.length-1);
	verb.transitivo = database[verb.voce].transitivo;
	verb.coniugazione = database[verb.voce].coniugazione;
	verb.reggenza = database[verb.voce].reggenza;
	randDb = buildArray();
	modeChoice = getRandomInt(0,randDb.length-1);
	verb.modo = randDb[modeChoice];
	switch(verb.modo){
		case 0:
		verb.tempo = getRandomInt(0,tempiindicativo.length-1);
		verb.composto = verb.tempo <4? false : true;
		break;
		case 1:
		verb.tempo = getRandomInt(0,tempicongiuntivo.length-1);
		verb.composto = verb.tempo <2? false : true;
		break;
		case 2:
		verb.tempo = getRandomInt(0,tempicondizionale.length-1);
		verb.composto = verb.tempo <1? false : true;
		break;
		case 3:
		verb.tempo = 0;
		verb.composto = false;
		break;
		case 4:
		verb.tempo = getRandomInt(0,1);
		verb.composto = verb.tempo <4? false : true;
		break;
		case 5:
		verb.tempo = getRandomInt(0,1);
		verb.composto = verb.tempo <4? false : true;
		break;
		case 6:
		verb.tempo =getRandomInt(0,1);
		verb.composto = verb.tempo <4? false : true;
		break;
	}
	switch(verb.modo){
		case 0:
		case 1:
		case 2:
		case 4:
		case 5:
		case 6:
		verb.persona = getRandomInt(1,6);
		
		break;
		case 3:
		verb.persona = getRandomInt(2,6);
		break;
	}
	setDefault();
		window.scrollTo(0, 0);
	generateVerb();
}

var err;

function check(){
	if(ex_state == 0){
	waiting = true;
	err = false;
	compare(guess.voce,to_guess.voce,$("#bl_voce"));
	compare(guess.coniugazione,to_guess.coniugazione,$("#bl_coniugazione"));
	compare(guess.modo,to_guess.modo,$("#bl_modo"));
	if(to_guess.modo !=3){
	compare(guess.tempo,to_guess.tempo,$("#tempo_wrapper"));}
	if(to_guess.modo == 3 && guess.modo!=3){
		$("tempo_wrapper").addClass("wrong");
	}
	if(to_guess.modo <4){
	checkPersona();
	}
	if(to_guess.modo > 3 && ((to_guess.modo != guess.modo) && guess.modo <4)){
		$("#numpersona_wrapper").addClass("wrong");
		$("#singplur_wrapper").addClass("wrong");
	}
	compare(guess.transitivo,to_guess.transitivo,$("#bl_transitivo"));
	if(err){
		ex_state = 1;
		suggerimento();		
	}
	else{
		ex_state = 2;
		suggerimento();				
	}
	}
	else if(ex_state == 1){
		waiting = false;
		f_clean();
		ex_state = 0;
		suggerimento();
	}
	else if(ex_state == 2){
		ex_state = 0;
		suggerimento();
		f_clean();
		avviaEsercizio();
	}
}

function compare(a,b,ogg){

	if (a==b){
		ogg.addClass("aright");
	}
	else{
		ogg.addClass("wrong");
		err = true;
	}
}

function checkPersona(){
	if((to_guess.persona < 4 && guess.persona <4) || (to_guess.persona > 3 && guess.persona > 3)){
		$("#singplur_wrapper").addClass("aright");
	}
	else{
		$("#singplur_wrapper").addClass("wrong");
		err = true;
	}
	if((to_guess.persona == guess.persona) || ((to_guess.persona+3)%6 == guess.persona) || (to_guess +3  == guess.persona)){
		$("#numpersona_wrapper").addClass("aright");
	}
	else{
		$("#numpersona_wrapper").addClass("wrong");
		err = true;
	}
}

function f_clean(){
	s_clean($("#bl_voce"));
		s_clean($("#bl_coniugazione"));
			s_clean($("#bl_modo"));
				s_clean($("#tempo_wrapper"));
					s_clean($("#numpersona_wrapper"));
						s_clean($("#singplur_wrapper"));
							s_clean($("#bl_transitivo"));
}

function s_clean(ogg){
	if(ogg.hasClass("aright") || ogg.hasClass("wrong")){
		ogg.removeClass("aright");
		ogg.removeClass("wrong");
	}
}

function suggerimento(){
	//0 = iniziale 1 = errore 2 = vittoria

	switch(ex_state){
		case 0:
		$("#bottom_check").text("VERIFICA");
		$("#txt_suggerimento").text("Clicca sulle frecce per fare l'analisi del verbo e premi sul pulsante a destra quando sei sicuro della risposta!");
		$("#haiscritto_area").hide();
		$("#ch").show();
		$("#ed").hide();
		$("#re").hide();
		break;
		case 1:
		$("#bottom_check").text("MODIFICA");
		$("#txt_suggerimento").text("Oh no, c'è qualcosa che non va! Guarda il verbo che hai scritto, clicca sulla matita e modifica i parametri! Controlla anche la coniugazione e la transitività del verbo!");
		$("#haiscritto_area").show();
		$("#haiscritto").text(generate_answer() );
		$("#ch").hide();
		$("#ed").show();
		$("#re").hide();
		break;
		case 2:
		$("#bottom_check").text("NUOVO");
		$("#txt_suggerimento").text("Complimenti! Tutto giusto! Clicca sul pulsante a destra per generare un altro verbo!");
		$("#area_testo").addClass("win");
		$("#haiscritto_area").hide();
		$("#ch").hide();
		$("#ed").hide();
		$("#re").show();
		break;		
	}
}