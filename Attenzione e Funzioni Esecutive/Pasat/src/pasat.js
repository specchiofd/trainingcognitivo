first = true;

var Pasat = {
	start:function(){
		Pasat.nome = "";
		Pasat.modalita = "Concordante";
		Pasat.operazione = "Addizione";
		Pasat.stimoli = 10;
		Pasat.span = 2;
		Pasat.feedback = "Attivo";
		Pasat.range = 9;
		Pasat.tempo = 4000;
		Pasat.tastiera = "Nascosta";
	},
	
	setOptions:function(){
		$("#game").hide();
		Pasat.assign($("#nome"),Pasat.nome);
		Pasat.assign($("#modalita"),Pasat.modalita);
		Pasat.assign($("#operazione"),Pasat.operazione);
		Pasat.assign($("#stimoli"),Pasat.stimoli);
		Pasat.assign($("#span"),Pasat.span);
		Pasat.assign($("#feedback"),Pasat.feedback);
		Pasat.assign($("#range"),Pasat.range);
		Pasat.assign($("#tempo"),Pasat.tempo);
		Pasat.assign($("#tastiera"),Pasat.tastiera);
		if(first){
			Pasat.doubleBind();
		}
		$("#options").show();
		$("#results").hide();
	},
	
	
	assign:function(obj,variabile){
		obj.val(variabile);
	},
	
	doubleBind:function(){
		$("#nome").change(function(){
		Pasat.nome = $(this).val();
		});
		$("#stimoli").change(function(){
		Pasat.stimoli = parseInt($(this).val());
		});
		$("#span").change(function(){
		Pasat.span = parseInt($(this).val());
		});
		$("#range").change(function(){
		Pasat.range = parseInt($(this).val());
		});
		$("#tempo").change(function(){
		Pasat.tempo = parseInt($(this).val());	
		});
		$("#modalita").change(function(){
		Pasat.modalita = $(this).val();
		});
		$("#operazione").change(function(){
		Pasat.operazione = $(this).val();
		console.log(Pasat.operazione);
		});
		$("#feedback").change(function(){
		Pasat.feedback = $(this).val();
		});
		$("#tastiera").change(function(){
		Pasat.tastiera = $(this).val();
		});
		first = false;
	},
	
	gamestart:function(){
		$("#bar").css("width",0);
		$("#bar").text("");		
		$("#game").show();
		$("#options").hide();
		Pasat.actual_time = Pasat.tempo +100;
		Pasat.stimoli_visivi = [];
		Pasat.stimoli_uditivi = [];
		Pasat.per_esatte;
		Pasat.per_errate;
		Pasat.array_index = 0;
		Pasat.tempi_risposta = [];
		Pasat.corretto = [];
		Pasat.answer = 0;
		Pasat.non_risposte = 0;
		Pasat.risposte_esatte = 0;
		Pasat.risposte_errate = 0;
		Pasat.media_esatte = 0;
		Pasat.media_errate = 0;
		Pasat.game_end = false;
		Pasat.crea_array();
	},
	
	crea_array:function(){
		switch(Pasat.modalita){
			case "Concordante":
				for(var i=0;i<Pasat.stimoli;i++)
				{Pasat.stimoli_visivi[i] = Pasat.getRandomInt(1,Pasat.range);}
				 Pasat.stimoli_uditivi = Pasat.stimoli_visivi;
				 Pasat.which_answer = "Visiva";
				 break;
			case "Visiva":
				for(var i=0;i<Pasat.stimoli;i++)
				{Pasat.stimoli_visivi[i] = Pasat.getRandomInt(1,Pasat.range);}
				Pasat.which_answer = "Visiva";
				 break;
			case "Uditiva":
				for(var i=0;i<Pasat.stimoli;i++)
				{Pasat.stimoli_uditivi[i] = Pasat.getRandomInt(1,Pasat.range);}
				 Pasat.which_answer = "Uditiva";
				 break;
			case "DiscordanteVisiva":
				for(var i=0;i<Pasat.stimoli;i++)
				{Pasat.stimoli_visivi[i] = Pasat.getRandomInt(1,Pasat.range);}
				for(var j=0;j<Pasat.stimoli;j++)
				{Pasat.stimoli_uditivi[j] = Pasat.getRandomInt(1,Pasat.range);}
				 Pasat.which_answer = "Visiva";
				 break;
			case "DiscordanteUditiva":
				for(var i=0;i<Pasat.stimoli;i++)
				{Pasat.stimoli_visivi[i] = Pasat.getRandomInt(1,Pasat.range);}
				for(var j=0;j<Pasat.stimoli;j++)
				{Pasat.stimoli_uditivi[j] = Pasat.getRandomInt(1,Pasat.range);}
				 Pasat.which_answer = "Uditiva";
				 break;
		};
		Pasat.little_erase();
	},
	

	
	trueStart:function(){
		Pasat.mainloop = setInterval(function(){Pasat.countdown()},10);
	},
	
	countdown:function(){
	$("#bar").css("width",(400/Pasat.stimoli)*Pasat.array_index);
	$("#bar").text(Math.round((Pasat.array_index/Pasat.stimoli)*100)+"%");
	//Funzione che si aggiorna ogni centesimo di secondo
	if (Pasat.array_index < Pasat.stimoli){
	
	//Controlla che non sia arrivata la fine dell'array di stimoli
		if(Pasat.actual_time == Pasat.tempo){
		$("#casella").prop('disabled', false);
		$("#casella").focus();
		//Inizia il ciclo, mostra il video e/o l'audio a seconda della modalità
			switch(Pasat.modalita){
				case "Concordante":
				Pasat.mostra();
				createjs.Sound.play(Pasat.audio_sources[Pasat.stimoli_visivi[Pasat.array_index]]);
				break;
				case "DiscordanteVisiva":
				case "DiscordanteUditiva":
					Pasat.mostra();
					createjs.Sound.play(this.audio_sources[this.stimoli_uditivi[this.array_index]]);
					break;
				case "Visiva":
					Pasat.mostra();
					break;
				case "Uditiva":
				createjs.Sound.play(this.audio_sources[this.stimoli_uditivi[this.array_index]]);
					break;
			
				}
			}
		else if (Pasat.actual_time == 0) {
			if (Pasat.array_index > (Pasat.span-2)){
			//Caso in cui ci si attende una risposta invia come risposta quello che c'è attualmente nella casella di testo
			Pasat.tempi_risposta[Pasat.array_index-(Pasat.span-1)] = Pasat.tempo;
			Pasat.check_answer(parseInt($('#casella').val()));
			$('#casella').val("");
			}
			else
			{
			Pasat.array_index += 1;
			Pasat.actual_time = Pasat.tempo + 10;
			
			}
		}
		else if (Pasat.actual_time < -500) {
			Pasat.postfeedback();
			
			}
		
		else if((Pasat.actual_time < Pasat.tempo/2) && (Pasat.actual_time > 0))
		//Fa sparire lo stimolo a metà del tempo
			{
			Pasat.little_erase();
			}
	
		}
		
		else {
		//Fine del gioco
		clearInterval(Pasat.mainloop);
		$("#casella").prop('disabled', true);
		Pasat.little_erase();
		Pasat.per_esatte = Math.round(Pasat.risposte_esatte/(Pasat.n_stimoli -(Pasat.span-1))*100);
		Pasat.per_errate = Math.round(Pasat.risposte_errate/(Pasat.n_stimoli-(Pasat.span-1))*100);
		Pasat.media_ponderata = Math.round(Pasat.calcola_media());
		Pasat.show_scores();
		Pasat.game_end = true;
		}
		Pasat.actual_time -= 10;
	},
	
	postfeedback: function(){
	//Avanza l'array, riporta il tempo al massimo e interrompe la visualizzazione del feedback
		Pasat.little_erase();
		Pasat.array_index += 1;
		Pasat.actual_time = Pasat.tempo + 10;
		},
		
	little_erase:function(){
		$("#right").hide();
		$("#wrong").hide();
		$("#numero").hide();
	},
	
	calcola_media: function(){
media_temporanea = 0;
for (i = 0; i < Pasat.tempi_risposta.length; i++){
media_temporanea += Pasat.tempi_risposta[i];
}
media_temporanea = media_temporanea/Pasat.tempi_risposta.length;

n_stimoli_utili = 0;
seconda_media = 0;
for (j=0; j < Pasat.tempi_risposta.length; j++)
{
if (Pasat.corretto[j] == true || (Pasat.corretto[j] == false && Pasat.tempi_risposta[j] > media_temporanea)){
	console.log(Pasat.tempi_risposta[j]);
n_stimoli_utili += 1;
seconda_media += Pasat.tempi_risposta[j];
}
}
seconda_media /= n_stimoli_utili;
n_stimoli_utili = 0;
terza_media = 0;
for (l=0; l < Pasat.tempi_risposta.length; l++)
{
if (Pasat.corretto[l] == true){
n_stimoli_utili += 1;
terza_media += Pasat.tempi_risposta[l];
}
}
terza_media = terza_media/n_stimoli_utili;
n_stimoli_utili = 0;
quarta_media = 0;
for (m=0; m < Pasat.tempi_risposta.length; m++)
{
if (this.corretto[m] == false){
n_stimoli_utili += 1;
quarta_media += this.tempi_risposta[m];
}
}
quarta_media = quarta_media/n_stimoli_utili;

this.media_esatte = terza_media;
this.media_errate = quarta_media;
return seconda_media;
},
	
	check_answer: function(user_answer) {
	//Controlla la correttezza della risposta e fa partire il post-feedback
	$("#casella").prop('disabled', true);
	Pasat.answer = Pasat.get_right_answer(Pasat.which_answer);
	Pasat.actual_time = -10;
	if (((Pasat.operazione == "Addizione" || Pasat.operazione == "Sottrazione" || Pasat.operazione == "PiuGrande" || Pasat.operazione == "PiuPiccolo") && user_answer == this.answer) || Pasat.operazione == "Sottrazione" && user_answer == (this.answer*-1)){
	Pasat.risposte_esatte += 1;
	Pasat.corretto.push(true);
	if(Pasat.feedback){
			Pasat.get_feedback(1);
			}
	}
	else {
	Pasat.risposte_errate += 1;
	Pasat.corretto.push(false);
	if(Pasat.feedback){
			Pasat.get_feedback(0);
			}
	}
},

get_right_answer: function(quale_risposta){
	right_answer = 0;
	switch(quale_risposta){
	case "Visiva":
		if (Pasat.operazione == "Addizione" || Pasat.operazione == "Sottrazione"){
		for (var i = Pasat.array_index; i>Pasat.array_index-(Pasat.span); i--){
			right_answer += Pasat.stimoli_visivi[i];}
			if (Pasat.operazione == "Sottrazione"){
			right_answer = Pasat.stimoli_visivi[Pasat.array_index-Pasat.span+1]*2 - right_answer;
			
			}
			}
		else
			{
			if (Pasat.operazione == "PiuGrande"){
			if (Pasat.stimoli_visivi[Pasat.array_index] >= Pasat.stimoli_visivi[Pasat.array_index - Pasat.span]){
			right_answer = Pasat.stimoli_visivi[Pasat.array_index];
			return right_answer;
			}
			else
			{
			right_answer = Pasat.stimoli_visivi[Pasat.array_index - Pasat.span];
			return right_answer;
			}
			}
			else
			{
			if (Pasat.stimoli_visivi[Pasat.array_index] >= Pasat.stimoli_visivi[Pasat.array_index - Pasat.span]){
			right_answer = Pasat.stimoli_visivi[Pasat.array_index - Pasat.span];
			}
			else
			{
			right_answer = Pasat.stimoli_visivi[Pasat.array_index];
			}
			}
			}
		break;
	case "Uditiva":
		if (Pasat.operazione == "Addizione" || Pasat.operazione == "Sottrazione"){
		for (var i = Pasat.array_index; i>Pasat.array_index-(Pasat.span); i--){
			if (Pasat.operazione == "Addizione"){
			right_answer += Pasat.stimoli_uditivi[i];}
			else
			{
			right_answer -= Pasat.stimoli_uditivi[i];}
			}
		}
		else
			{
			if (Pasat.operazione == "PiuGrande"){
			if (Pasat.stimoli_uditivi[this.array_index] >= Pasat.stimoli_uditivi[Pasat.array_index - Pasat.span]){
			right_answer == Pasat.stimoli_uditivi[Pasat.array_index];
			}
			else
			{
			right_answer = Pasat.stimoli_uditivi[Pasat.array_index - Pasat.span];
			}
			}
			else
			{
			if (Pasat.stimoli_uditivi[Pasat.array_index] >= Pasat.stimoli_uditivi[Pasat.array_index - Pasat.span]){
			right_answer = Pasat.stimoli_uditivi[Pasat.array_index - Pasat.span];
			}
			else
			{
			right_answer = Pasat.stimoli_uditivi[Pasat.array_index];
			}
			}
			}
		break;
	
		}

	return right_answer;
},
	
	audioPreload:function(){
	createjs.Sound.registerSound("assets/suoni/zero.mp3", "zero");
	createjs.Sound.registerSound("assets/suoni/uno.mp3", "uno");
	createjs.Sound.registerSound("assets/suoni/due.mp3", "due");
	createjs.Sound.registerSound("assets/suoni/tre.mp3", "tre");
	createjs.Sound.registerSound("assets/suoni/quattro.mp3", "quattro");
	createjs.Sound.registerSound("assets/suoni/cinque.mp3", "cinque");
	createjs.Sound.registerSound("assets/suoni/sei.mp3", "sei");
	createjs.Sound.registerSound("assets/suoni/sette.mp3", "sette");
	createjs.Sound.registerSound("assets/suoni/otto.mp3", "otto");
	createjs.Sound.registerSound("assets/suoni/nove.mp3", "nove");
	Pasat.audio_sources = ["zero","uno","due","tre","quattro","cinque","sei","sette","otto","nove"];
	},
	
	getRandomInt: function(min, max) {
	//Genera un numero casuale tra min e max
	return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	
	mostra: function(){
		$("#right").hide();
		$("#wrong").hide();
		$("#numero").text(Pasat.stimoli_visivi[Pasat.array_index]);
		$("#numero").show();
	},
	
	get_feedback: function(quale_feedback){
	// Disegna il feedback
	if(Pasat.feedback == "Attivo"){
	if(quale_feedback == 0){
	$("#wrong").show();
		}
		else
	{
	$("#right").show();
		}	
	}
	},
	
	show_scores:function(){
		$("#game").hide();
		$("#stimoliTotali").text(Pasat.stimoli);
		$("#stimoliUtili").text(Pasat.stimoli-(Pasat.span-1));
		$("#tempoEsposizione").text(Pasat.tempo+ " ms");
		$("#mediaCorretta").text(String(Math.floor(Pasat.media_ponderata))+ " ms");
		$("#risposteEsatte").text(String(Pasat.risposte_esatte));
		$("#risposteErrate").text(String(Pasat.risposte_errate));
		$("#tempiRisposta").text(String(Pasat.tempi_risposta));
		$("#correttezzaRisposte").text(Pasat.elabora(String(Pasat.corretto)));
		$("#results").show();
	},
	
	elabora:function(arr){

		tmp_arr_due = arr.split(',');

		tmp_arr = [];
		for(i=0;i<tmp_arr_due.length;i++){
			console.log(tmp_arr_due[i]);
			if(tmp_arr_due[i] == "true"){
				tmp_arr.push("Sì");
			}
			else{
				tmp_arr.push("No");
			}
		}
		return tmp_arr;
	}

}

$(document).ready(function(){
	$("#game").hide();
	$("#results").hide();
	Pasat.audioPreload();
	Pasat.start();
	Pasat.setOptions();
	$("#avvia").click(function(){
		$("#casella").prop('disabled', false);
	$("#casella").attr("placeholder","Clicca per iniziare");
	Pasat.in_game = false;
	Pasat.gamestart();
	});
		$("#casella").click(function(){
		//Aspetta il click sulla casella di testo per far partire il gioco
		if (!Pasat.in_game) {     
		Pasat.in_game = true;
							 this.placeholder = "";
							 Pasat.trueStart();
		Pasat.little_erase();}
		$("#riavvia").click(function(){
			Pasat.setOptions();
		});

   });

      $("#casella").keydown(function(e){
   //Controlla gli input della casella di testo e se ci si attende una risposta, invia il risultato alla funzione chec_answer
		var key = e.which;
		if(key== 13 && Pasat.array_index > Pasat.span-2 && Pasat.actual_time > 0 && ($("#casella").val() != "")) {
			Pasat.tempi_risposta[Pasat.array_index-(Pasat.span-1)] = Pasat.tempo - Pasat.actual_time;
			Pasat.little_erase();
			var user_answer = this.value;
			Pasat.check_answer(user_answer);
			this.value = "";
			
		}
   });
   
   });