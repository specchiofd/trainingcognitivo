//Docstring

function preload(){
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

startable = true;
};   

var Pasat = {


evaluate: function(){
// Parsing dell'oggetto JSON, in questo momento ignorato
	this.audio_sources = ["zero","uno","due","tre","quattro","cinque","sei","sette","otto","nove"];
	this.nome = $("#nome").val();
	Pasat.n_stimoli = $("#numero_stimoli").val();
	Pasat.span = $("#span").val();
	Pasat.feedback = $("#feedback").is(':checked');
	Pasat.tempo_esposizione = parseInt($("#exposition_time").val())*10;
	Pasat.operazione = $("#operazione").val();
	Pasat.presentation_mode = $("#modalita").val();
	Pasat.max_range = $("#range_max").val();
	//Visiva, uditiva, solo visiva, solo uditiva, alternata per canale, alternata per operazione
	Pasat.actual_time = Pasat.tempo_esposizione;
	Pasat.stimoli_visivi = [];
	Pasat.stimoli_uditivi = [];
	this.crea_array();
	Pasat.start_screen();
	this.per_esatte = 0;
	this.per_errate = 0;
// Carica le variabili di gioco e inizia
this.w = $("#canvas").width();
this.h = $("#canvas").height();
this.array_index = 0;
this.tempi_risposta = [];
this.corretto = [];
this.answer = 0;
this.non_risposte = 0;
this.risposte_esatte = 0;
this.risposte_errate = 0;

this.media_esatte = 0;
this.media_errate = 0;
this.game_end = false;
},

getRandomInt: function(min, max) {
//Genera un numero casuale tra min e max
return Math.floor(Math.random() * (max - min + 1)) + min;
},

crea_array: function(){
	//Crea l'array di numeri a seconda della modalità di gioco
	switch(this.presentation_mode)
	{
	case "Concordante":
		for (var i = 0; i<this.n_stimoli; i++)
		{
		this.stimoli_visivi[i] = this.getRandomInt(1, this.max_range);
		}
		this.stimoli_uditivi = this.stimoli_visivi;
		break;
	case "Visiva":
		for (var i = 0; i<this.n_stimoli; i++)
		{
		this.stimoli_visivi[i] = this.getRandomInt(1, this.max_range);
		}
		break;
	case "Uditiva":
		for (var i = 0; i<this.n_stimoli; i++)
		{
		this.stimoli_uditivi[i] = this.getRandomInt(1, this.max_range);
		}
		break;
	case "Discordante visiva":
	case "Discordante uditiva":
		for (var i = 0; i<this.n_stimoli; i++)
		{
		this.stimoli_visivi[i] = this.getRandomInt(1, this.max_range);
		}
		for (var j = 0; j<this.n_stimoli; j++)
		{
		this.stimoli_uditivi[j] = this.getRandomInt(1, this.max_range);
		}
		break;
	}
	},
	
start: function() {

this.little_erase();
this.select_mode(this.presentation_mode);
//Fa partire il gioco
this.mainloop = setInterval(function(){Pasat.countdown()},10);
},

select_mode: function(modalita_di_gioco){
switch(modalita_di_gioco){
case "Concordante":
case "Visiva":
case "Discordante visiva":
this.which_answer = "Visiva";
break;
case "Uditiva":
case "Discordante uditiva":
this.which_answer = "Uditiva";
break;
case "Alternata per operazione":
this.which_answer = "Visiva";
this.paint_indizio("Primo");
break;
case "Alternata per canale":
this.paint_indizio("Primo");
break;
}
},
	


countdown: function(){ 

//Funzione che si aggiorna ogni centesimo di secondo
	if (this.array_index < this.n_stimoli){
	//Controlla che non sia arrivata la fine dell'array di stimoli
		if(this.actual_time == this.tempo_esposizione){
		$("#casella").prop('disabled', false);
		$("#casella").focus();
		//Inizia il ciclo, mostra il video e/o l'audio a seconda della modalità
			switch(this.presentation_mode){
				case "Concordante":
				case "Alternata per operazione":
				this.paint();
				createjs.Sound.play(this.audio_sources[this.stimoli_visivi[this.array_index]]);
				break;
				case "Discordante visiva":
				case "Discordante uditiva":
				case "Alternata per canale":
					this.paint();
					createjs.Sound.play(this.audio_sources[this.stimoli_uditivi[this.array_index]]);
					break;
				case "Visiva":
					this.paint();
					break;
				case "Uditiva":
				createjs.Sound.play(this.audio_sources[this.stimoli_uditivi[this.array_index]]);
					break;
			
				}
			}
		else if (this.actual_time == 0) {
			if (this.array_index > (this.span-2)){
			//Caso in cui ci si attende una risposta invia come risposta quello che c'è attualmente nella casella di testo
			this.tempi_risposta[this.array_index-(this.span-1)] = this.tempo_esposizione;
			this.check_answer(parseInt($('#casella').val()));
			$('#casella').val("");
			}
			else
			{
			this.array_index += 1;
			this.actual_time = this.tempo_esposizione + 10;
			
			}
		}
		else if (this.actual_time < -500) {
			this.postfeedback();
			
			}
		
		else if((this.actual_time < this.tempo_esposizione/2) && (this.actual_time > 0))
		//Fa sparire lo stimolo a metà del tempo
			{
			this.erase();
			}
	
		}
		
		else {
		//Fine del gioco
		clearInterval(this.mainloop);
		$("#casella").prop('disabled', true);
		this.erase();
		this.per_esatte = Math.round(this.risposte_esatte/(this.n_stimoli -(this.span-1))*100);
		this.per_errate = Math.round(this.risposte_errate/(this.n_stimoli-(this.span-1))*100);
		this.media_ponderata = Math.round(this.calcola_media());
		this.show_scores();
		this.send_score();
		this.game_end = true;
		//this.send_json();
		}
		this.actual_time -= 10;
		
},

send_score: function(){
UrlToSend = "src/add.php?nome=" + this.nome + "&modalita=" + this.presentation_mode + "&operazione=" + this.operazione + "&nstimoli=" + this.n_stimoli + "&span=" + this.span + "&feedback=" + this.feedback_to_php() + "&ranges=" + this.max_range + "&tempoesposizione=" + this.tempo_esposizione + "&peresatte=" + this.per_esatte + "&pererrate=" + this.per_errate + "&mediaponderata=" + this.media_ponderata + "&mediaesatte=" + this.media_esatte + "&mediaerrate=" + this.media_errate ;
xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET", UrlToSend, false);
xmlhttp.send();
},

feedback_to_php: function(){
if (this.feedback) {
return 1;
}
else
{
return 0;
}
},

calcola_media: function(){
media_temporanea = 0;
for (i = 0; i < this.tempi_risposta.length; i++){
media_temporanea += this.tempi_risposta[i];
}
media_temporanea = media_temporanea/this.tempi_risposta.length;

n_stimoli_utili = 0;
seconda_media = 0;
for (j=0; j < this.tempi_risposta.length; j++)
{
if (this.corretto[j] == true || (this.corretto[j] == false && this.tempi_risposta[j] > media_temporanea)){
n_stimoli_utili += 1;
seconda_media += this.tempi_risposta[j];
}
}
seconda_media /= n_stimoli_utili;
n_stimoli_utili = 0;
terza_media = 0;
for (l=0; l < this.tempi_risposta.length; l++)
{
if (this.corretto[l] == true){
n_stimoli_utili += 1;
terza_media += this.tempi_risposta[l];
}
}
terza_media = terza_media/n_stimoli_utili;
n_stimoli_utili = 0;
quarta_media = 0;
for (m=0; m < this.tempi_risposta.length; m++)
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


play_audio: function(audio){
audio.play();
},

get_right_answer: function(quale_risposta){
	right_answer = 0;
	switch(quale_risposta){
	case "Visiva":
		if (this.operazione == "Addizione" || this.operazione == "Sottrazione"){
		for (var i = this.array_index; i>this.array_index-(this.span); i--){
			right_answer += this.stimoli_visivi[i];}
			if (this.operazione == "Sottrazione"){
			right_answer = this.stimoli_visivi[this.array_index-this.span+1]*2 - right_answer;
			
			}
			}
		else
			{
			if (this.operazione == "Grande"){
			if (this.stimoli_visivi[this.array_index] >= this.stimoli_visivi[this.array_index - this.span]){
			right_answer = this.stimoli_visivi[this.array_index];
			return right_answer;
			}
			else
			{
			right_answer = this.stimoli_visivi[this.array_index - this.span];
			return right_answer;
			}
			}
			else
			{
			if (this.stimoli_visivi[this.array_index] >= this.stimoli_visivi[this.array_index - this.span]){
			right_answer = this.stimoli_visivi[this.array_index - this.span];
			}
			else
			{
			right_answer = this.stimoli_visivi[this.array_index];
			}
			}
			}
		break;
	case "Uditiva":
		if (this.operazione == "Addizione" || this.operazione == "Sottrazione"){
		for (var i = this.array_index; i>this.array_index-(this.span); i--){
			if (this.operazione == "Addizione"){
			right_answer += this.stimoli_uditivi[i];}
			else
			{
			right_answer -= this.stimoli_uditivi[i];}
			}
		}
		else
			{
			if (this.operazione == "Grande"){
			if (this.stimoli_uditivi[this.array_index] >= this.stimoli_uditivi[this.array_index - this.span]){
			right_answer == this.stimoli_uditivi[this.array_index];
			}
			else
			{
			right_answer = this.stimoli_uditivi[this.array_index - this.span];
			}
			}
			else
			{
			if (this.stimoli_uditivi[this.array_index] >= this.stimoli_uditivi[this.array_index - this.span]){
			right_answer = this.stimoli_uditivi[this.array_index - this.span];
			}
			else
			{
			right_answer = this.stimoli_uditivi[this.array_index];
			}
			}
			}
		break;
	
		}
		
	return right_answer;
},

check_answer: function(user_answer) {
	//Controlla la correttezza della risposta e fa partire il post-feedback
	$("#casella").prop('disabled', true);
	this.answer = this.get_right_answer(this.which_answer);
	this.actual_time = -10;
	if (((this.operazione == "Addizione" || this.operazione == "Sottrazione" || this.operazione == "Grande" || this.operazione == "Piccolo") && user_answer == this.answer) || this.operazione == "Sottrazione" && user_answer == (this.answer*-1)){
	this.risposte_esatte += 1;
	this.corretto.push(true);
	if(this.feedback){
			Pasat.get_feedback(1);
			}
	}
	else {
	this.risposte_errate += 1;
	this.corretto.push(false);
	if(this.feedback){
			Pasat.get_feedback(0);
			}
	}
},

postfeedback: function(){
	//Avanza l'array, riporta il tempo al massimo e interrompe la visualizzazione del feedback
		this.erase();
		this.array_index += 1;
		this.actual_time = this.tempo_esposizione + 10;
		if (this.presentation_mode == "Alternata per canale"){
		a_random_number = this.getRandomInt(0,1);
		if (a_random_number == 0){
		this.paint_indizio(this.which_answer);
		}
		}
		else if (this.presentation_mode == "Alternata per operazione"){
		a_random_number = this.getRandomInt(0,1);
		if (a_random_number == 0){
		this.paint_indizio(this.which_answer);
		}
		}
		},


get_feedback: function(quale_feedback){
	// Disegna il feedback
	if(quale_feedback == 0){
	ctx.drawImage(wrong,this.w/2-100,this.h/2-150);
		}
		else
	{
	ctx.drawImage(right,this.w/2-100,this.h/2-150);
		}	
	},
	
paint: function() {
		//Mostra il numero a video
		ctx.fillStyle = "white";
		ctx.fillRect(0, 120, this.w, this.h-20);
		ctx.fillStyle = "blue";
		ctx.font="150px Helvetica";
		ctx.textAlign="center"; 
		ctx.fillText(this.stimoli_visivi[this.array_index], this.w/2, this.h/2);
	},
	
mostra_topbar: function(){
	//Disegna la barra in alto con le informazioni principali

	ctx.fillStyle="lightblue";
	ctx.fillRect(0,0,this.w, 20);
	ctx.fillStyle = "black";
	ctx.font="14px Helvetica";
	ctx.textAlign="left";
	ctx.fillText("Span: " + this.span + "    Operazione: " + this.operazione + "     Modalità: " + this.presentation_mode, 5, 16);
},

	
erase: function() {
		//Ripulisce la schermata
		ctx.fillStyle = "white";
		ctx.fillRect(0, 120, this.w, this.h-20);
	},
	
little_erase: function() {
		//Ripulisce la schermata
		ctx.fillStyle = "white";
		ctx.fillRect(0, 20, this.w, 120);
	},
	
paint_indizio: function(quale_indizio) {

		//Mostra il tipo di risposta atteso
		if (this.presentation_mode == "Alternata per canale"){
		//Per convenzione 0 = visiva, 1 = uditiva
		if (quale_indizio == "Visiva" || quale_indizio == "Primo" ){
		this.which_answer = "Uditiva";
		this.little_erase();
		ctx.drawImage(audio_black,300,20); 
		ctx.drawImage(video_grey,400,20); 
		}
		else if(quale_indizio == "Uditiva" ){
		this.which_answer = "Visiva";
		this.little_erase();
		ctx.drawImage(audio_grey,300,20); 
		ctx.drawImage(video_black,400,20);
		}}
		else if (this.presentation_mode == "Alternata per operazione"){
		//Per convenzione 0 = somma, 1 = sottrazione
		if (this.operazione == "Addizione" || quale_indizio == "Primo" ){
		this.operazione = "Sottrazione";
		this.little_erase();
		ctx.drawImage(piu_grey,300,20); 
		ctx.drawImage(meno_black,400,20); 
		}
		else if (this.operazione == "Sottrazione"){
		this.operazione = "Addizione";
		this.little_erase();
		ctx.drawImage(piu_black,300,20); 
		ctx.drawImage(meno_grey,400,20); 
		}}
	},
	
helper_operazione: function(operazione){
	//Helper per la visualizzazione delle istruzioni - modalità
	if (this.operazione == "ADDIZIONE" && this.presentation_mode != "Alternata per operazione"){
		return "sommare"
		}
	else if (this.operazione == "SOTTRAZIONE" && this.presentation_mode != "Alternata per operazione")
		{return "sottrarre"}
	else if (this.presentation_mode == "Alternata per operazione");
		{return "sommare o sottrarre"}
	},

helper_modalita: function(){
	// Helper per la visualizzazione delle istruzioni - modalità
	switch(this.presentation_mode)
	{
	case "Concordante":
	case "Alternata per canale":
	case "Alternata per operazione":
	return "visti o ascoltati";
	break;
	case "Uditiva":
	case "Discordante uditiva":
	return "ascoltati";
	break;
	case "Visiva":
	case "Discordante visiva":
	return "visti";
	break;
	
	}
	},

start_screen: function() {
		//Schermata iniziale
	    ctx.strokeStyle = "black";
		ctx.fillStyle = "black";
		ctx.font="30px Helvetica";
		ctx.textAlign="center";
		ctx.fillText("Benvenuto!", 400, 30);
		ctx.font="25px Helvetica";
		stringa = "Lo scopo del gioco è " + this.helper_operazione(this.operazione) + " gli ultimi " + String(this.span) + " numeri " + this.helper_modalita();
		stringa2 = "e scrivere il risultato nella casella in basso.";
		stringa3 = "Buon divertimento!";
		ctx.fillText(stringa, 400, 140);
		ctx.fillText(stringa2, 400, 180);
		ctx.fillText(stringa3, 400, 220);
		ctx.drawImage(img,0,350); 
	},	

	
show_scores: function() {

		//Schermata finale
		var DISPLAY_INTERVAL = 30;
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, this.w, this.h);
		ctx.strokeStyle = "black";
		ctx.strokeRect(0, 0, this.w, this.h);
		ctx.fillStyle = "black";
		ctx.font="20px Helvetica";
		ctx.textAlign="center";
		ctx.fillText("Riepilogo", this.w/2, DISPLAY_INTERVAL);
		ctx.fillText("(clicca qui per ricominciare)", this.w/2, 2*DISPLAY_INTERVAL);
		ctx.fillText("Numero di stimoli totali: " + String(this.n_stimoli), this.w/2, 4*DISPLAY_INTERVAL);
		ctx.fillText("Numero di stimoli utili: " + String(this.n_stimoli-(this.span-1)), this.w/2, 5*DISPLAY_INTERVAL);
		ctx.fillText("Tempo di esposizione: " + String(this.tempo_esposizione) + " ms", this.w/2, 7*DISPLAY_INTERVAL);
		ctx.fillText("Media corretta: " + String(Math.floor(this.media_ponderata)) + " ms", this.w/2, 8*DISPLAY_INTERVAL);
		ctx.fillText("Risposte esatte: " + String(this.risposte_esatte) + " - " + String(this.per_esatte) + "%", this.w/2, 10*DISPLAY_INTERVAL);
		ctx.fillText("Risposte errate: " + String(this.risposte_errate) + " - " + String(this.per_errate) + "%", this.w/2, 11*DISPLAY_INTERVAL);
		ctx.fillText("Tempi di risposta (cs): " + String(this.tempi_risposta), this.w/2, 13*DISPLAY_INTERVAL);
		ctx.fillText("Correttezza risposte: " + String(this.corretto), this.w/2, 14*DISPLAY_INTERVAL);
	},
	/*
send_json: function(){
	for (var i = 0; i < this.toserver.esercizio.items.length; i++)
	{
	this.toserver.esercizio.items[i].corretto = this.corretto[i];
	this.toserver.esercizio.items[i].tempoRisposta = this.tempi_risposta[i];
	}
	this.toserver.esercizio.idUtente = 1;
	console.log(this.toserver);
	}
*/
};

$(document).ready(function(){

	//Crea canvas e contex vt, carica le immagini e mostra la schermata iniziale
    canvas = $("#canvas")[0];
	ctx = canvas.getContext("2d");
	img = document.getElementById("inizio");
	right = document.getElementById("right");
	wrong = document.getElementById("wrong");
	audio_black = new Image();
	audio_black.src = "assets/AudioBlack.png";
	audio_grey = new Image();
	audio_grey.src = "assets/AudioGrey.png";
	video_black = new Image();
	video_black.src = "assets/VideoBlack.png";
	video_grey = new Image();
	video_grey.src = "assets/VideoGrey.png";
	piu_black = new Image();
	piu_black.src = "assets/PlusBlack.png";
	piu_grey = new Image();
	piu_grey.src = "assets/PlusGrey.png";
	meno_black = new Image();
	meno_black.src = "assets/MinusBlack.png";
	meno_grey = new Image();
	meno_grey.src = "assets/MinusGrey.png";
	in_game = false;
	
	startable=false;
	preload();

	
	

    

   $("#casella").keydown(function(e){
   //Controlla gli input della casella di testo e se ci si attende una risposta, invia il risultato alla funzione chec_answer
		var key = e.which;
		if(key== 13 && Pasat.array_index > Pasat.span-2 && Pasat.actual_time > 0 && ($("#casella").val() != "")) {
			Pasat.tempi_risposta[Pasat.array_index-(Pasat.span-1)] = Pasat.tempo_esposizione - Pasat.actual_time;
			Pasat.erase();
			var user_answer = this.value;
			Pasat.check_answer(user_answer);
			this.value = "";
			
		}
   });

   
   $("#casella").click(function(){
		//Aspetta il click sulla casella di testo per far partire il gioco
		if (!in_game) {     $( "#game_options" ).hide();
							in_game = true;
							 this.placeholder = "";
							 Pasat.start();
							 Pasat.mostra_topbar();
							 Pasat.erase();}

   });

      $("#canvas").click(function(){
		//Aspetta il click sulla casella di testo per far partire il gioco
		if (Pasat.game_end) {     Pasat.game_end = false;
							$( "#game_options" ).show();
							$( "#canvas" ).hide();
							$( "#casella" ).hide();
							Pasat.erase();
							Pasat.little_erase();
							$("#casella").prop('disabled', false);
							in_game = false;
							}
   });
   

});