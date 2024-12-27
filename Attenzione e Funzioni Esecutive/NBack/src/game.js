	// Modalità 1=visuospaziale, 2=uditivo, 3=visivo, 4=visuospaziale+uditivo, 5=visuospaziale+visivo, 6=visivo+uditivo,7=tutto
	
var Nback = {
	nome:"",
	lato_quadrato:3,
	n_back:2,
	delay:3000,
	secondi:3000,
	item:10,
	modalita:1,
	set_visivo:["red", "blue", "green", "yellow", "black", "grey", "pink"],
	set_uditivo:audio,
	
	startGame:function(){
		$("#s_visivo").css("color","black");
		$("#s_uditivo").css("color","black");
		$("#s_spaziale").css("color","black");
		$("#bar").css("width",0);
		Nback.lista_visuospaziale = [];
		Nback.lista_uditivo = [];
		Nback.lista_visivo = [];
		Nback.risposte_visuospaziale = [];
		Nback.risposte_uditivo = [];
		Nback.risposte_visivo = [];
		$("#inizia").show();
		Nback.NUMERO_TOTALE_STIMOLI = parseInt(Nback.n_back) + parseInt(Nback.item);
		Nback.risposte_esatte_visivo = 0;
		Nback.risposte_esatte_uditivo = 0;
		Nback.risposte_esatte_visuospaziale = 0;
		Nback.omissioni_visivo = 0;
		Nback.omissioni_uditivo = 0;
		Nback.omissioni_visuospaziale = 0;
		Nback.risposte_errate_visivo = 0;
		Nback.risposte_errate_uditivo = 0;
		Nback.risposte_errate_visuospaziale = 0;
		Nback.cliccato_visivo = true;
		Nback.cliccato_uditivo = true;
		Nback.cliccato_visuospaziale = true;
		Nback.genera_stimoli(this.modalita);
		Nback.elemento_attuale = 0;
		$("#contenitore").show();
		Nback.genera_matrice();
		this.showFeedback();
		this.in_game = true;
	},
	
	showFeedback: function(){
switch (this.modalita)
{
case 1:
$("#feedback_spaziale").show();
$("#feedback_visivo").css("opacity",0);
$("#feedback_uditivo").css("opacity",0);
break;
case 2:
$("#feedback_spaziale").hide();
$("#feedback_visivo").css("opacity",0);
$("#feedback_uditivo").css("opacity",1);
break;
case 3:
$("#feedback_spaziale").hide();
$("#feedback_visivo").css("opacity",0);
$("#feedback_uditivo").css("opacity",1);
break;
case 4:
$("#feedback_spaziale").show();
$("#feedback_visivo").css("opacity",0);
$("#feedback_uditivo").css("opacity",1);
break;
case 5:
$("#feedback_spaziale").show();
$("#feedback_visivo").css("opacity",1);;
$("#feedback_uditivo").css("opacity",0);
break;
case 6:
$("#feedback_spaziale").hide();
$("#feedback_visivo").css("opacity",1);
$("#feedback_uditivo").css("opacity",1);
break;
case 7:
$("#feedback_spaziale").show();
$("#feedback_visivo").css("opacity",1);
$("#feedback_uditivo").css("opacity",1);
break;
}
},
	
	genera_matrice:function(){
		$("#display").empty();
		for (i =0; i<this.lato_quadrato; i++){
		for (j =0; j<this.lato_quadrato; j++){
		$("#display").append("<div class='cella' id='cella_"+(i*this.lato_quadrato+j)+"'></div>");
		$(".cella").css("width",String(Math.floor($("#display").width()/this.lato_quadrato-2))+"px");
		$(".cella").css("height",$(".cella").width());
		}
		}

	},
	
	genera_stimoli: function(modalita){
				console.log("Inizio gen stimoli");
	for (i=0; i<this.NUMERO_TOTALE_STIMOLI; i++)
	{
		if (this.modalita == 1 || this.modalita == 4 || this.modalita == 5 || this.modalita == 7){
		casuale_visuospaziale = this.getRandomInt(0,2);
		if (casuale_visuospaziale == 0 && i>=this.n_back){
		this.lista_visuospaziale.push(this.lista_visuospaziale[i-this.n_back]);
		}
		else
			{
			this.lista_visuospaziale.push(this.getRandomInt(0,this.lato_quadrato*this.lato_quadrato-1));
			}
		}
		if (this.modalita == 2 || this.modalita == 4 || this.modalita == 6 || this.modalita == 7)
		{
		casuale_uditivo = this.getRandomInt(0,2);
		if (casuale_uditivo == 0 && i>=this.n_back){
		this.lista_uditivo.push(this.lista_uditivo[i-this.n_back]);
		}
		else
		{
		this.lista_uditivo.push(this.getRandomInt(0,this.set_uditivo.length -1));
		}
		} 
		if (this.modalita == 3 || this.modalita == 5 || this.modalita == 6 || this.modalita == 7)
		{
		casuale_visivo = this.getRandomInt(0,2);
		if (casuale_visivo == 0 && i>=this.n_back){
		this.lista_visivo.push(this.lista_visivo[i-this.n_back]);
		}
		else
		{
		this.lista_visivo.push(this.getRandomInt(0,this.set_visivo.length -1));
		}
		}
	}
	},
	
	getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	
	inizio_gioco: function(){
	mainloop = setInterval(function(){Nback.countdown()},100);
	},
	
	countdown: function(){
		
$("#bar").css("width",($("#load").width()/Nback.NUMERO_TOTALE_STIMOLI)*Nback.elemento_attuale);
	$("#bar").text((Nback.elemento_attuale)+"/"+Nback.NUMERO_TOTALE_STIMOLI);
if(this.secondi == this.delay){
	console.log("Ok");
	if (this.elemento_attuale == this.NUMERO_TOTALE_STIMOLI){
	
	this.in_game = false;
	clearInterval(mainloop);
	this.responso();
	
	}
	else
	{
		this.cancella_feedback();
		this.cliccato_visivo = false;
		this.cliccato_uditivo = false;
		this.cliccato_visuospaziale = false;
		if (this.modalita != 2){
			this.mostra_immagine(this.modalita);
		}
		if (this.modalita == 2 || this.modalita == 4 || this.modalita == 6 || this.modalita == 7)
		{
			this.play_suono();
		}
		}
}

if(this.secondi < this.delay/2){
		this.nascondi_immagine();
}

if(this.secondi == 0){
	//Controlla se non hai premuto su un item giusto
	this.elemento_attuale += 1;
	if (!Nback.cliccato_uditivo && Nback.elemento_attuale-1 >= Nback.n_back && (Nback.modalita == 2 || Nback.modalita == 4 || Nback.modalita == 6 || Nback.modalita == 7) && (Nback.lista_uditivo[Nback.elemento_attuale-1] == Nback.lista_uditivo[Nback.elemento_attuale-Nback.n_back-1]))
	{
	$("#s_uditivo").css("color","red");
	$("#feedback_uditivo").css("opacity",0);
	$("#feedback_uditivo").fadeTo(500,1);
	Nback.risposte_uditivo.push("O");
	Nback.omissioni_uditivo += 1;
	}
	else if (!Nback.cliccato_uditivo && Nback.elemento_attuale-1 >= Nback.n_back && (Nback.modalita == 2 || Nback.modalita == 4 || Nback.modalita == 6 || Nback.modalita == 7) && (Nback.lista_uditivo[Nback.elemento_attuale-1] != Nback.lista_uditivo[Nback.elemento_attuale-Nback.n_back-1]))
	{
	Nback.risposte_uditivo.push("S");
	Nback.risposte_esatte_uditivo += 1;
	}
	if (!Nback.cliccato_visivo && Nback.elemento_attuale-1 >= Nback.n_back && (Nback.modalita == 3 || Nback.modalita == 5 || Nback.modalita == 6 || Nback.modalita == 7) && (Nback.lista_visivo[Nback.elemento_attuale-1] == Nback.lista_visivo[Nback.elemento_attuale-Nback.n_back-1]))
	{
		$("#s_visivo").css("color","red");
	$("#feedback_visivo").css("opacity",0);
	$("#feedback_visivo").fadeTo(500,1);
	Nback.risposte_visivo.push("O");
	Nback.omissioni_visivo += 1;
	}
	else if (!Nback.cliccato_visivo && Nback.elemento_attuale-1 >= Nback.n_back && (Nback.modalita == 3 || Nback.modalita == 5 || Nback.modalita == 6 || Nback.modalita == 7) && (Nback.lista_visivo[Nback.elemento_attuale-1] != Nback.lista_visivo[Nback.elemento_attuale-Nback.n_back-1]))

	{
	Nback.risposte_visivo.push("S");
	Nback.risposte_esatte_visivo += 1;
	}
	if (!Nback.cliccato_visuospaziale && Nback.elemento_attuale-1 >= Nback.n_back && (Nback.modalita == 1 || Nback.modalita == 4 || Nback.modalita == 5 || Nback.modalita == 7) && (Nback.lista_visuospaziale[Nback.elemento_attuale-1] == Nback.lista_visuospaziale[Nback.elemento_attuale-Nback.n_back-1]))
	{
	$("#s_spaziale").css("color","red");
	$("#feedback_spaziale").css("opacity",0);
	$("#feedback_spaziale").fadeTo(500,1);
	Nback.risposte_visivo.push("O");
	Nback.omissioni_visuospaziale += 1;
	}
	else if (!Nback.cliccato_visuospaziale && Nback.elemento_attuale-1 >= Nback.n_back && (Nback.modalita == 1 || Nback.modalita == 4 || Nback.modalita == 5 || Nback.modalita == 7) && (Nback.lista_visuospaziale[Nback.elemento_attuale-1] != Nback.lista_visuospaziale[Nback.elemento_attuale-Nback.n_back-1]))

	{
	Nback.risposte_visuospaziale.push("S");
	Nback.risposte_esatte_visuospaziale += 1;
	}

	this.secondi = this.delay + 100;
	
	}

this.secondi -= 100;
},


play_suono: function(){
createjs.Sound.play(this.set_uditivo[this.lista_uditivo[this.elemento_attuale]]);
},

mostra_immagine:function(){
if (this.modalita == 3 || this.modalita == 6)
{
dove = 4
}
else
{
dove = this.lista_visuospaziale[this.elemento_attuale];
}
if (this.modalita == 3 || this.modalita ==  5 || this.modalita == 6 || this.modalita == 7)
{
colore = this.set_visivo[this.lista_visivo[this.elemento_attuale]];
}
else
{
colore = "red";
}
$("#cella_"+dove).css("background-color",colore);
},




nascondi_immagine: function(){
$(".cella").css("background-color","white");
$(".cella").css("background-image","none");
},

cancella_feedback: function(){
		$("#s_visivo").css("color","black");
		$("#s_uditivo").css("color","black");
		$("#s_spaziale").css("color","black");
		$("#s_visivo").removeClass("glyphicon-thumbs-up");
		$("#s_spaziale").removeClass("glyphicon-thumbs-up");
		$("#s_uditivo").removeClass("glyphicon-thumbs-up");
		$("#s_visivo").removeClass("glyphicon-thumbs-down");
		$("#s_spaziale").removeClass("glyphicon-thumbs-down");
		$("#s_uditivo").removeClass("glyphicon-thumbs-down");
		$("#s_visivo").addClass("glyphicon-eye-open");
		$("#s_spaziale").addClass("glyphicon-fullscreen");
		$("#s_uditivo").addClass("glyphicon-volume-up");
},

calcola_media: function(){
switch (this.modalita)
{
case 1:
return Math.round(this.risposte_esatte_visuospaziale/(this.item)*100)
break;
case 2:
return Math.round(this.risposte_esatte_uditivo/(this.item)*100)
break;
case 3:
return Math.round(this.risposte_esatte_visivo/(this.item)*100)
break;
case 4:
return (Math.round(this.risposte_esatte_visuospaziale/(this.item)*100) + Math.round(this.risposte_esatte_uditivo/(this.item)*100))/2;
break;
case 5:
return (Math.round(this.risposte_esatte_visuospaziale/(this.item)*100) + Math.round(this.risposte_esatte_visivo/(this.item)*100))/2;
break;
case 6:
return (Math.round(this.risposte_esatte_visivo/(this.item)*100) + Math.round(this.risposte_esatte_uditivo/(this.item)*100))/2;
break;
case 7:
return (Math.round(this.risposte_esatte_visivo/(this.item)*100) + Math.round(this.risposte_esatte_uditivo/(this.item)*100) + Math.round(this.risposte_esatte_visuospaziale/(this.item)*100))/3;
break;
}
},

responso:function(){
$("#contenitore").hide();
switch(this.modalita){
	case 1:
	$("#res_visivo").hide();
	$("#res_uditivo").hide();
	$("#res_spaziale").show();
	this.modtoshow = "Visuospaziale";
	break;
	case 2:
	$("#res_visivo").hide();
	$("#res_uditivo").show();
	$("#res_spaziale").hide();
	this.modtoshow = "Uditiva";
	break;
	case 3:
	$("#res_visivo").show();
	$("#res_uditivo").hide();
	$("#res_spaziale").hide();
	this.modtoshow = "Visiva";
	break;
	case 4:
	$("#res_visivo").hide();
	$("#res_uditivo").show();
	$("#res_spaziale").show();
	this.modtoshow = "Visuospaziale e Uditiva";
	break;
	case 5:
	$("#res_visivo").show();
	$("#res_uditivo").hide();
	$("#res_spaziale").show();
	this.modtoshow = "Visuospaziale e Visiva";
	break;
	case 6:
	$("#res_visivo").show();
	$("#res_uditivo").show();
	$("#res_spaziale").hide();
	this.modtoshow = "Visiva e Uditiva";
	break;
	case 7:
	$("#res_visivo").show();
	$("#res_uditivo").show();
	$("#res_spaziale").show();
	this.modtoshow = "Visuospaziale, Visiva e Uditiva";
	break;
}
$("#res_nome").text(this.nome);
now = new Date();
$("#res_data").text(now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
$("#res_nback").text(this.n_back);
$("#res_item").text(this.NUMERO_TOTALE_STIMOLI);
$("#res_lato").text(this.lato_quadrato);
$("#res_delay").text(this.delay);
$("#res_modalita").text(this.modtoshow);
$("#res_per_esatte_spaziale").text(Math.round(this.risposte_esatte_visuospaziale/(this.item)*100)+"%");
$("#res_per_esatte_visivo").text(Math.round(this.risposte_esatte_visivo/(this.item)*100)+"%");
$("#res_per_esatte_uditivo").text(Math.round(this.risposte_esatte_uditivo/(this.item)*100)+"%");
$("#res_esatte_spaziale").text( this.risposte_esatte_visuospaziale);
$("#res_esatte_visivo").text(this.risposte_esatte_visivo);
$("#res_esatte_uditivo").text(this.risposte_esatte_uditivo);
$("#res_errate_spaziale").text(this.risposte_errate_visuospaziale);
$("#res_errate_visivo").text(this.risposte_errate_visivo);
$("#res_errate_uditivo").text(this.risposte_errate_uditivo);
$("#res_omissioni_spaziale").text( this.omissioni_visuospaziale);
$("#res_omissioni_visivo").text(this.omissioni_visivo);
$("#res_omissioni_uditivo").text(this.omissioni_uditivo);
$("#res_array_spaziale").text(this.risposte_visuospaziale.join(','));
$("#res_array_visivo").text(this.risposte_visivo.join(','));
$("#res_array_uditivo").text(this.risposte_uditivo.join(','));
$("#responso").show();
}



}


$(document).keydown(function(e) {
	//Freccia sinistra uditivo, Freccia destra visivo, Freccia basso spaziale
    switch(e.which) {
        case 37: // left
		if (Nback.in_game && Nback.elemento_attuale >= Nback.n_back && !Nback.cliccato_uditivo && (Nback.modalita == 2 || Nback.modalita == 4 || Nback.modalita == 6 || Nback.modalita == 7))
		{

		Nback.cliccato_uditivo = true;
		if (Nback.lista_uditivo[Nback.elemento_attuale] == Nback.lista_uditivo[Nback.elemento_attuale-Nback.n_back])
		{
		//Feedback positivo
		$("#feedback_uditivo").css("background-color","transparent");
		$("#s_uditivo").removeClass("glyphicon-volume-up");
		$("#s_uditivo").addClass("glyphicon-thumbs-up");
		$("#s_uditivo").css("color","green");
		$("#feedback_uditivo").fadeTo(100,1);
		Nback.risposte_uditivo.push("S");
		Nback.risposte_esatte_uditivo +=1;
		}
		else
		{
		//Feedback negativo
		$("#feedback_uditivo").css("background-color","transparent");
		$("#s_uditivo").removeClass("glyphicon-volume-up");
		$("#s_uditivo").addClass("glyphicon-thumbs-down");
		$("#s_uditivo").css("color","red");
		$("#feedback_uditivo").fadeTo(100,1);
		Nback.risposte_uditivo.push("N");
		Nback.risposte_errate_uditivo +=1;
		}
		}
        break;


        case 40: // down
				if (Nback.in_game && Nback.elemento_attuale >= Nback.n_back && !Nback.cliccato_visuospaziale && (Nback.modalita == 1 || Nback.modalita == 4 || Nback.modalita == 5 || Nback.modalita == 7))
		{
		Nback.cliccato_visuospaziale = true;
		if (Nback.lista_visuospaziale[Nback.elemento_attuale] == Nback.lista_visuospaziale[Nback.elemento_attuale-Nback.n_back])
		{
		//Feedback positivo
		$("#feedback_spaziale").css("background-color","transparent");
		$("#s_spaziale").removeClass("glyphicon-fullscreen");
		$("#s_spaziale").addClass("glyphicon-thumbs-up");
		$("#s_spaziale").css("color","green");
		$("#feedback_spaziale").fadeTo(100,1);
		Nback.risposte_visuospaziale.push("S");
		Nback.risposte_esatte_visuospaziale +=1;
		}
		else
		{
		//Feedback negativo
		$("#feedback_spaziale").css("background-color","transparent");
		$("#s_spaziale").removeClass("glyphicon-fullscreen");
		$("#s_spaziale").addClass("glyphicon-thumbs-down");
		$("#s_spaziale").css("color","red");
		$("#feedback_spaziale").fadeTo(100,1);
		Nback.risposte_visuospaziale.push("N");
		Nback.risposte_errate_visuospaziale +=1;
		}
		}
        break;

        case 39: // right
				if (Nback.in_game && Nback.elemento_attuale >= Nback.n_back && !Nback.cliccato_visivo && (Nback.modalita == 3 || Nback.modalita == 5 || Nback.modalita == 6 || Nback.modalita == 7))
		{
		Nback.cliccato_visivo = true;
		if (Nback.lista_visivo[Nback.elemento_attuale] == Nback.lista_visivo[Nback.elemento_attuale-Nback.n_back])
		{
		//Feedback positivo
		$("#feedback_visivo").css("background-color","transparent");
		$("#s_visivo").removeClass("glyphicon-eye-open");
		$("#s_visivo").addClass("glyphicon-thumbs-up");
		$("#s_visivo").css("color","green");
		$("#feedback_visivo").fadeTo(100,1);
		Nback.risposte_visivo.push("S");
		Nback.risposte_esatte_visivo +=1;
		}
		else
		{
		$("#feedback_visivo").css("background-color","transparent");
		$("#s_visivo").removeClass("glyphicon-eye-open");
		$("#s_visivo").addClass("glyphicon-thumbs-down");
		$("#s_visivo").css("color","red");
		$("#feedback_visivo").fadeTo(100,1);
		Nback.risposte_visivo.push("N");
		Nback.risposte_errate_visivo +=1;
		}
		}
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
