var Nback = {




genera_matrice: function(){

},

play_suono: function(){
this.set_uditivo[this.lista_uditivo[this.elemento_attuale]].play();
},


getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
},

inizio_gioco: function(){
mainloop = setInterval(function(){Nback.countdown()},100);

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

invia_server: function(){
switch(this.modalita){
case 1:
UrlToSend = "src/add.php?nome=" + this.nome + "&nback=" + this.n_back + "&item=" + this.item + "&totali=" + this.NUMERO_TOTALE_STIMOLI + "&lato_quadrato=" + this.lato_quadrato  + "&latenza=" + this.delay + "&modalita=Visuospaziale" + 
"&per_esatte_visivo=" + 0 + "&per_esatte_uditivo=" + 0 + "&per_esatte_spaziale=" + Math.round(this.risposte_esatte_visuospaziale/(this.item)*100) +
"&esatte_visivo=" + 0 + "&esatte_uditivo=" + 0 + "&esatte_spaziale=" + this.risposte_esatte_visuospaziale +
"&errate_visivo=" + 0 + "&errate_uditivo=" + 0 + "&errate_spaziale=" + this.risposte_errate_visuospaziale +
"&omissioni_visivo=" + 0 + "&omissioni_uditivo=" + 0 + "&omissioni_spaziale=" + this.omissioni_visuospaziale +
"&array_visivo=" + "" + "&array_uditivo=" + "" + "&array_spaziale=" + this.risposte_visuospaziale.join(',');
break;
case 2:
UrlToSend = "src/add.php?nome=" + this.nome + "&nback=" + this.n_back + "&item=" + this.item + "&totali=" + this.NUMERO_TOTALE_STIMOLI + "&lato_quadrato=" + this.lato_quadrato  + "&latenza=" + this.delay + "&modalita=Uditiva" + 
"&per_esatte_visivo=" + 0 + "&per_esatte_uditivo=" + Math.round(this.risposte_esatte_uditivo/(this.item)*100) + "&per_esatte_spaziale=" + Math.round(this.risposte_esatte_visuospaziale/(this.item)*100) +
"&esatte_visivo=" + 0 + "&esatte_uditivo=" + this.risposte_esatte_uditivo + "&esatte_spaziale=" + 0 +
"&errate_visivo=" + 0 + "&errate_uditivo=" + this.risposte_errate_uditivo + "&errate_spaziale=" + 0 +
"&omissioni_visivo=" + 0 + "&omissioni_uditivo=" + this.omissioni_uditivo + "&omissioni_spaziale=" + 0+
"&array_visivo=" + "" + "&array_uditivo=" + this.risposte_uditivo.join(',') + "&array_spaziale=" + "";
break;
case 3:
UrlToSend = "src/add.php?nome=" + this.nome + "&nback=" + this.n_back + "&item=" + this.item + "&totali=" + this.NUMERO_TOTALE_STIMOLI + "&lato_quadrato=" + this.lato_quadrato  + "&latenza=" + this.delay + "&modalita=Visiva" + 
"&per_esatte_visivo=" + Math.round(this.risposte_esatte_visivo/(this.item)*100) + "&per_esatte_uditivo=" + 0 + "&per_esatte_spaziale=" + 0 +
"&esatte_visivo=" + this.risposte_esatte_visivo + "&esatte_uditivo=" + 0 + "&esatte_spaziale=" + 0 +
"&errate_visivo=" + this.risposte_errate_visivo + "&errate_uditivo=" + 0 + "&errate_spaziale=" + 0 +
"&omissioni_visivo=" + this.omissioni_visivo + "&omissioni_uditivo=" + 0 + "&omissioni_spaziale=" + 0 +
"&array_visivo=" + this.risposte_visivo.join(',') + "&array_uditivo=" + "" + "&array_spaziale=" + "";
break;
case 4:
UrlToSend = "src/add.php?nome=" + this.nome + "&nback=" + this.n_back + "&item=" + this.item + "&totali=" + this.NUMERO_TOTALE_STIMOLI + "&lato_quadrato=" + this.lato_quadrato  + "&latenza=" + this.delay + "&modalita=Visuospaziale_Uditiva" + 
"&per_esatte_visivo=" + 0 + "&per_esatte_uditivo=" + Math.round(this.risposte_esatte_uditivo/(this.item)*100) + "&per_esatte_spaziale=" + Math.round(this.risposte_esatte_visuospaziale/(this.item)*100) +
"&esatte_visivo=" + 0 + "&esatte_uditivo=" + this.risposte_esatte_uditivo + "&esatte_spaziale=" + this.risposte_esatte_visuospaziale +
"&errate_visivo=" + 0 + "&errate_uditivo=" + this.risposte_errate_uditivo + "&errate_spaziale=" + this.risposte_errate_visuospaziale +
"&omissioni_visivo=" + 0 + "&omissioni_uditivo=" + this.omissioni_uditivo + "&omissioni_spaziale=" + this.omissioni_visuospaziale +
"&array_visivo=" + "" + "&array_uditivo=" + this.risposte_uditivo.join(',') + "&array_spaziale=" + this.risposte_visuospaziale.join(',');
break;
case 5:
UrlToSend = "src/add.php?nome=" + this.nome + "&nback=" + this.n_back + "&item=" + this.item + "&totali=" + this.NUMERO_TOTALE_STIMOLI + "&lato_quadrato=" + this.lato_quadrato  + "&latenza=" + this.delay + "&modalita=Visuospaziale_Visiva" + 
"&per_esatte_visivo=" + Math.round(this.risposte_esatte_visivo/(this.item)*100) + "&per_esatte_uditivo=" + 0 + "&per_esatte_spaziale=" + Math.round(this.risposte_esatte_visuospaziale/(this.item)*100) +
"&esatte_visivo=" + this.risposte_esatte_visivo + "&esatte_uditivo=" + 0 + "&esatte_spaziale=" + this.risposte_esatte_visuospaziale +
"&errate_visivo=" + this.risposte_errate_visivo + "&errate_uditivo=" + 0 + "&errate_spaziale=" + this.risposte_errate_visuospaziale +
"&omissioni_visivo=" + this.omissioni_visivo + "&omissioni_uditivo=" + 0 + "&omissioni_spaziale=" + this.omissioni_visuospaziale +
"&array_visivo=" + this.risposte_visivo.join(',') + "&array_uditivo=" + "" + "&array_spaziale=" + this.risposte_visuospaziale.join(',');
break;
case 6:
UrlToSend = "src/add.php?nome=" + this.nome + "&nback=" + this.n_back + "&item=" + this.item + "&totali=" + this.NUMERO_TOTALE_STIMOLI + "&lato_quadrato=" + this.lato_quadrato  + "&latenza=" + this.delay + "&modalita=Visiva_Uditiva" + 
"&per_esatte_visivo=" + Math.round(this.risposte_esatte_visivo/(this.item)*100) + "&per_esatte_uditivo=" + Math.round(this.risposte_esatte_uditivo/(this.item)*100) + "&per_esatte_spaziale=" + 0 +
"&esatte_visivo=" + this.risposte_esatte_visivo + "&esatte_uditivo=" + this.risposte_esatte_uditivo + "&esatte_spaziale=" + 0 +
"&errate_visivo=" + this.risposte_errate_visivo + "&errate_uditivo=" + this.risposte_errate_uditivo + "&errate_spaziale=" + 0 +
"&omissioni_visivo=" + this.omissioni_visivo + "&omissioni_uditivo=" + this.omissioni_uditivo + "&omissioni_spaziale=" + 0 +
"&array_visivo=" + this.risposte_visivo.join(',') + "&array_uditivo=" + this.risposte_uditivo.join(',') + "&array_spaziale=" + "";
break;
case 7:
UrlToSend = "src/add.php?nome=" + this.nome + "&nback=" + this.n_back + "&item=" + this.item + "&totali=" + this.NUMERO_TOTALE_STIMOLI + "&lato_quadrato=" + this.lato_quadrato  + "&latenza=" + this.delay + "&modalita=Tutte" + 
"&per_esatte_visivo=" + Math.round(this.risposte_esatte_visivo/(this.item)*100) + "&per_esatte_uditivo=" + Math.round(this.risposte_esatte_uditivo/(this.item)*100) + "&per_esatte_spaziale=" + Math.round(this.risposte_esatte_visuospaziale/(this.item)*100) +
"&esatte_visivo=" + this.risposte_esatte_visivo + "&esatte_uditivo=" + this.risposte_esatte_uditivo + "&esatte_spaziale=" + this.risposte_esatte_visuospaziale +
"&errate_visivo=" + this.risposte_errate_visivo + "&errate_uditivo=" + this.risposte_errate_uditivo + "&errate_spaziale=" + this.risposte_errate_visuospaziale +
"&omissioni_visivo=" + this.omissioni_visivo + "&omissioni_uditivo=" + this.omissioni_uditivo + "&omissioni_spaziale=" + this.omissioni_visuospaziale +
"&array_visivo=" + this.risposte_visivo.join(',') + "&array_uditivo=" + this.risposte_uditivo.join(',') + "&array_spaziale=" + this.risposte_visuospaziale.join(',');
break;
}

xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET", UrlToSend, false);
xmlhttp.send();
$("#contenitore").hide();
},

countdown: function(){
if(this.secondi == this.delay){
	if (this.elemento_attuale == this.NUMERO_TOTALE_STIMOLI){
	this.in_game = false;
	this.invia_server();
	media = this.calcola_media();
	if(media >= 90){
	$("#responso").text("Bravo!");
	}
	else if(media < 90 && media > 79)
	{
	$("#responso").text("Ci siamo quasi!");
	}
	else
	{
	$("#responso").text("Puoi fare di meglio");
	}
	$("#responso").show();
	clearInterval(mainloop);
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
	$("#feedback_uditivo").css("background-color","transparent");
	$("#feedback_uditivo").css("background-image","url('src/thumbs_down.png')");
	$("#feedback_uditivo").fadeTo(1,1);
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
	$("#feedback_visivo").css("background-color","transparent");
	$("#feedback_visivo").css("background-image","url('src/thumbs_down.png')");
	$("#feedback_visivo").fadeTo(1,1);
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
	$("#feedback_spaziale").css("background-color","transparent");
	$("#feedback_spaziale").css("background-image","url('src/thumbs_down.png')");
	$("#feedback_spaziale").fadeTo(1,1);
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

nascondi_immagine: function(){
$(".cella").css("background-color","white");
$(".cella").css("background-image","none");
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

cancella_feedback: function(){
		$("#feedback_spaziale").css("background-image","url('src/spaziale.png')");
	    $("#feedback_visivo").css("background-image","url('src/visivo.png')");
	    $("#feedback_uditivo").css("background-image","url('src/uditivo.png')");
}
}



$(document).keydown(function(e) {
	//Freccia sinistra uditivo, Freccia destra spaziale, Freccia basso visivo
    switch(e.which) {
        case 37: // left
		if (Nback.in_game && Nback.elemento_attuale >= Nback.n_back && !Nback.cliccato_uditivo && (Nback.modalita == 2 || Nback.modalita == 4 || Nback.modalita == 6 || Nback.modalita == 7))
		{
		Nback.cliccato_uditivo = true;
		if (Nback.lista_uditivo[Nback.elemento_attuale] == Nback.lista_uditivo[Nback.elemento_attuale-Nback.n_back])
		{
		//Feedback positivo
		$("#feedback_uditivo").css("background-image","url('src/thumb_up.png')");
		$("#feedback_uditivo").fadeTo(100,1);
		Nback.risposte_uditivo.push("S");
		Nback.risposte_esatte_uditivo +=1;
		}
		else
		{
		//Feedback negativo
		$("#feedback_uditivo").css("background-color","transparent");
		$("#feedback_uditivo").css("background-image","url('src/thumbs_down.png')");
		$("#feedback_uditivo").fadeTo(100,1);
		Nback.risposte_uditivo.push("N");
		Nback.risposte_errate_uditivo +=1;
		}
		}
        break;


        case 39: // right
				if (Nback.in_game && Nback.elemento_attuale >= Nback.n_back && !Nback.cliccato_visuospaziale && (Nback.modalita == 1 || Nback.modalita == 4 || Nback.modalita == 5 || Nback.modalita == 7))
		{
		Nback.cliccato_visuospaziale = true;
		if (Nback.lista_visuospaziale[Nback.elemento_attuale] == Nback.lista_visuospaziale[Nback.elemento_attuale-Nback.n_back])
		{
		//Feedback positivo
		$("#feedback_spaziale").css("background-image","url('src/thumb_up.png')");
		$("#feedback_spaziale").fadeTo(100,1);
		Nback.risposte_visuospaziale.push("S");
		Nback.risposte_esatte_visuospaziale +=1;
		}
		else
		{
		//Feedback negativo
		$("#feedback_spaziale").css("background-color","transparent");
		$("#feedback_spaziale").css("background-image","url('src/thumbs_down.png')");
		$("#feedback_spaziale").fadeTo(100,1);
		Nback.risposte_visuospaziale.push("N");
		Nback.risposte_errate_visuospaziale +=1;
		}
		}
        break;

        case 40: // down
				if (Nback.in_game && Nback.elemento_attuale >= Nback.n_back && !Nback.cliccato_visivo && (Nback.modalita == 3 || Nback.modalita == 5 || Nback.modalita == 6 || Nback.modalita == 7))
		{
		Nback.cliccato_visivo = true;
		if (Nback.lista_visivo[Nback.elemento_attuale] == Nback.lista_visivo[Nback.elemento_attuale-Nback.n_back])
		{
		//Feedback positivo

		$("#feedback_visivo").css("background-image","url('src/thumb_up.png')");
		$("#feedback_visivo").fadeTo(100,1);
		Nback.risposte_visivo.push("S");
		Nback.risposte_esatte_visivo +=1;
		}
		else
		{
		//Feedback negativo
		$("#feedback_visivo").css("background-color","transparent");
		
		$("#feedback_visivo").css("background-image","url('src/thumbs_down.png')");
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

$(document).ready(function(){

$("#feedback_spaziale").click(function(){
				if (Nback.in_game && Nback.elemento_attuale >= Nback.n_back && !Nback.cliccato_visuospaziale && (Nback.modalita == 1 || Nback.modalita == 4 || Nback.modalita == 5 || Nback.modalita == 7))
		{
		Nback.cliccato_visuospaziale = true;
		if (Nback.lista_visuospaziale[Nback.elemento_attuale] == Nback.lista_visuospaziale[Nback.elemento_attuale-Nback.n_back])
		{
		//Feedback positivo
		$("#feedback_spaziale").css("background-image","url('src/thumb_up.png')");
		$("#feedback_spaziale").fadeTo(100,1);
		Nback.risposte_visuospaziale.push("S");
		Nback.risposte_esatte_visuospaziale +=1;
		}
		else
		{
		//Feedback negativo
		$("#feedback_spaziale").css("background-color","transparent");
		$("#feedback_spaziale").css("background-image","url('src/thumbs_down.png')");
		$("#feedback_spaziale").fadeTo(100,1);
		Nback.risposte_visuospaziale.push("N");
		Nback.risposte_errate_visuospaziale +=1;
		}
		}
});

$("#feedback_visivo").click(function(){
		if (Nback.in_game && Nback.elemento_attuale >= Nback.n_back && !Nback.cliccato_visivo && (Nback.modalita == 3 || Nback.modalita == 5 || Nback.modalita == 6 || Nback.modalita == 7))
		{
		Nback.cliccato_visivo = true;
		if (Nback.lista_visivo[Nback.elemento_attuale] == Nback.lista_visivo[Nback.elemento_attuale-Nback.n_back])
		{
		//Feedback positivo

		$("#feedback_visivo").css("background-image","url('src/thumb_up.png')");
		$("#feedback_visivo").fadeTo(100,1);
		Nback.risposte_visivo.push("S");
		Nback.risposte_esatte_visivo +=1;
		}
		else
		{
		//Feedback negativo
		$("#feedback_visivo").css("background-color","transparent");
		
		$("#feedback_visivo").css("background-image","url('src/thumbs_down.png')");
		$("#feedback_visivo").fadeTo(100,1);
		Nback.risposte_visivo.push("N");
		Nback.risposte_errate_visivo +=1;
		}
		}
});

$("#feedback_uditivo").click(function(){
if (Nback.in_game && Nback.elemento_attuale >= Nback.n_back && !Nback.cliccato_uditivo && (Nback.modalita == 2 || Nback.modalita == 4 || Nback.modalita == 6 || Nback.modalita == 7))
		{
		Nback.cliccato_uditivo = true;
		if (Nback.lista_uditivo[Nback.elemento_attuale] == Nback.lista_uditivo[Nback.elemento_attuale-Nback.n_back])
		{
		//Feedback positivo
		$("#feedback_uditivo").css("background-image","url('src/thumb_up.png')");
		$("#feedback_uditivo").fadeTo(100,1);
		Nback.risposte_uditivo.push("S");
		Nback.risposte_esatte_uditivo +=1;
		}
		else
		{
		//Feedback negativo
		$("#feedback_uditivo").css("background-color","transparent");
		$("#feedback_uditivo").css("background-image","url('src/thumbs_down.png')");
		$("#feedback_uditivo").fadeTo(100,1);
		Nback.risposte_uditivo.push("N");
		Nback.risposte_errate_uditivo +=1;
		}
		}
});

$("#avanti").click(function(){
Nback.avvio($("#nome").val(),$("#lato_matrice").val(),$("#nback").val(), $("#latenza").val(), $("#modalita").val(), $("#item").val());
});
$("#responso").hide();
$("#contenitore").hide();
$("#inizia").hide();
$("#parametri_wrapper").show();
//var parameters = location.search.substring(1).split("&");
//var temp = parameters[0].split("=");
$("#inizia").click(function(){
Nback.in_game = true;
$("#inizia").hide();
Nback.inizio_gioco();
});
});