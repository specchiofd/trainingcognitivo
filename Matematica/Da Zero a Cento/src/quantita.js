var Quantita = {

crea_tabella : function(){
for (i=0; i<100; i++){
$("#board").append("<div class='numero' id='item_"+(i+1)+"'>"+(i+1)+"</div>");
if((i+1)%5 == 0 && (i+1)%10 != 0){
$("#item_"+(i+1)).css("margin-right","60px");
}
if((i+1)%10 == 1){
$("#item_"+(i+1)).css("clear","left");
}
}
$(".numero").click(function(){
if (Quantita.game_status == 1){
$("#primo").val($(this).text());
Quantita.game_status = 10;
Quantita.dopo_primo();
}
else if (Quantita.game_status == 2){
$("#secondo").val($(this).text());
{if (Quantita.operazione == "piu"){
		if(Quantita.game_status == 2 && (parseInt($("#primo").val())+parseInt($("#secondo").val())) < 100){
		Quantita.game_status = 3;	
		if(parseInt($("#secondo").val()) != 0){
		Quantita.secondo = $("#secondo").val();
		Quantita.dopo_secondo_somma();
		}
		else{
		Quantita.game_status = 3;	
		$("#secondo").prop('disabled',true);
		$("#secondo").css("color","white");
		$("#secondo_parola").text(Quantita.to_word($("#secondo").val()));
		$("#risultato").text(parseInt($("#primo").val()) - parseInt($("#secondo").val()));
		$("#segno").css("color","black");
		$("#secondo").css("border-bottom","1px solid black");
		$("#secondo").css("background-color","green");
		$("#risultato").css("border-bottom","4px solid blue");
		$("#risultato").css("color","black");
		$("#risultato_parola").css("color","black");
		$("#status").text("Bene! Clicca sul risultato per ricominciare!");
		$("#uguale_parola").text("fa");
		$("#risultato_parola").text(Quantita.to_word(parseInt($("#risultato").text())));
			
		}		
		}
		}
		else if (Quantita.operazione == "meno"){
		
		if(Quantita.game_status == 2 && (parseInt($("#primo").val())-parseInt($("#secondo").val())) >= 0){
		
		if(parseInt($("#secondo").val()) != 0){
		Quantita.secondo = $("#secondo").val();
		Quantita.dopo_secondo_sottrazione();
		Quantita.game_status = 3;	
		}
		else if(parseInt($("#secondo").val()) == 0){
		Quantita.game_status = 3;	
		$("#secondo").prop('disabled',true);
		$("#secondo").css("background-color","green");
		$("#secondo").css("color","white");
		$("#secondo_parola").text(Quantita.to_word($("#secondo").val()));
		$("#risultato").text(parseInt($("#primo").val()) - parseInt($("#secondo").val()));
		$("#segno").css("color","black");
		$("#secondo").css("border-bottom","1px solid black");
		$("#risultato").css("border-bottom","4px solid blue");
		$("#status").text("Bene! Clicca sul risultato per ricominciare!");
		$("#risultato").css("color","black");
		$("#risultato_parola").css("color","black");
		$("#uguale_parola").text("fa");
		$("#risultato_parola").text(Quantita.to_word(parseInt($("#risultato").text())));
		Quantita.game_status = 3;		
		}
		}
		}
		else {
		if(Quantita.game_status == 2 && (parseInt($("#primo").val())*parseInt($("#secondo").val())) < 101){
		if(parseInt($("#secondo").val()) != 0 && parseInt($("#primo").val()) != 0 && parseInt($("#secondo").val()) != 1){
		Quantita.secondo = parseInt($("#secondo").val());
		Quantita.dopo_secondo_moltiplicazione();
		}
		else if(parseInt($("#secondo").val()) == 0){
		Quantita.game_status = 3;	
		$(".numero").css("background-color","darkgrey");
		$("#secondo").prop('disabled',true);
		$("#secondo").css("background-color","green");
		$("#secondo").css("color","white");
		$("#secondo_parola").text("zero");
		$("#risultato").text("0");
		$("#segno").css("color","black");
		$("#secondo").css("border-bottom","1px solid black");
		$("#risultato").css("border-bottom","4px solid blue");
		$("#status").text("Bene! Clicca sul risultato per ricominciare!");
		$("#risultato").css("color","black");
		$("#risultato_parola").css("color","black");
		$("#uguale_parola").text("fa");
		$("#risultato_parola").text("zero");

		}
		else if(parseInt($("#primo").val()) == 0){
		Quantita.game_status = 3;	
		$(".numero").css("background-color","darkgrey");
		$("#secondo").prop('disabled',true);
		$("#secondo").css("background-color","green");
		$("#secondo").css("color","white");
		$("#secondo_parola").text(Quantita.to_word);
		$("#risultato").text("0");
		$("#segno").css("color","black");
		$("#secondo").css("border-bottom","1px solid black");
		$("#risultato").css("border-bottom","4px solid blue");
		$("#status").text("Bene! Clicca sul risultato per ricominciare!");
		$("#risultato").css("color","black");
		$("#risultato_parola").css("color","black");
		$("#uguale_parola").text("fa");
		$("#risultato_parola").text("zero");		
		}
		else if(parseInt($("#secondo").val()) == 1){
		Quantita.game_status = 3;	
		$("#secondo").prop('disabled',true);
		$("#secondo").css("background-color","green");
		$("#secondo").css("color","white");
		$("#secondo_parola").text(Quantita.to_word($("#secondo").val()));
		$("#risultato").text(parseInt($("#primo").val()));
		$("#segno").css("color","black");
		$("#secondo").css("border-bottom","1px solid black");
		$("#risultato").css("border-bottom","4px solid blue");
		$("#status").text("Bene! Clicca sul risultato per ricominciare!");
		$("#risultato").css("color","black");
		$("#risultato_parola").css("color","black");
		$("#uguale_parola").text("fa");
		$("#risultato_parola").text(Quantita.to_word(parseInt($("#risultato").text())));

		}
		}		
		}
}
}
});

this.sblocca_primo();
},

sblocca_primo: function(){
this.game_status = 1;
$("#segno").css("background-color","lightgrey");
$("#primo").prop('disabled', false);
$("#primo").focus();
$("#primo").css("background-color","rgba(255,255,255,0.7)")
$("#status").text("Scrivi il primo numero e premi Invio o clicca qui");
$("#primo").css("border-bottom","4px solid blue");
},

dopo_primo:function(){
this.colora("red",1);
$("#primo").prop('disabled',true);
$("#primo").css("background-color","red");
$("#primo").css("color","white");
$("#primo_parola").text(this.to_word($("#primo").val()));
},

to_word:function(numero){
parole= ["zero", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci", "undici", "dodici", "tredici", "quattordici", "quindici", "sedici", "diciassette", "diciotto", "diciannove", "venti",
"ventuno","ventidue","ventitré","ventiquattro","venticinque","ventisei","ventisette","ventotto","ventinove","trenta", "trentuno", "trentadue", "trentatré", "trentaquattro", "trentacinque", "trentasei", "trentasette", "trentotto", "trentanove",
"quaranta", "quarantuno", "quarantadue", "quarantatré", "quarantaquattro", "quarantacinque", "quarantasei", "quarantasette", "quarantotto", "quarantanove", "cinquanta", "cinquantuno", "cinquantadue",
"cinquantatré", "cinquantaquattro", "cinquantacinque", "cinquantasei", "cinquantasette", "cinquantotto", "cinquantanove", "sessanta", "sessantuno", "sessantadue", "sessantatré", "sessantaquattro",
"sessantacinque", "sessantasei", "sessantasette", "sessantotto", "sessantanove", "settanta", "settantuno", "settantadue", "settantatré", "settantaquattro", "settantacinque", "settantasei", "settantasette",
"settantotto", "settantanove", "ottanta", "ottantuno", "ottantadue", "ottantatré", "ottantaquattro", "ottantacinque", "ottantasei", "ottantasette", "ottantotto", "ottantanove", "novanta",
"novantuno", "novantadue", "novantatré", "novantaquattro", "novantacinque", "novantasei", "novantasette", "novantotto", "novantanove", "cento"];
return parole[numero];
},

sblocca_segno: function(){
$("#segno").prop('disabled',false);
$("#segno").css("color","black");
$("#segno").css("background-color","rgba(255,255,255,0.7)");
$("#status").text("Bene, ora scegli il segno!");
$("#primo").css("border-bottom","1px solid black");
$("#segno").css("border-bottom","4px solid blue");
},

sblocca_secondo: function(){
this.game_status = 2;
$("#secondo").css("background-color","rgba(255,255,255,0.8)")
$("#secondo").prop('disabled', false);
$("#secondo").focus();
$("#status").text("Scrivi il secondo numero e premi Invio o clicca qui");
$("#secondo").css("border-bottom","4px solid blue");
},

dopo_secondo_somma:function(){
this.colora_secondo("green",(parseInt($("#primo").val())+1));
$("#secondo").prop('disabled',true);
$("#secondo").css("background-color","green");
$("#secondo").css("color","white");
$("#secondo_parola").text(this.to_word($("#secondo").val()));
},

dopo_secondo_moltiplicazione:function(){
this.colora_moltiplica(this.getRandomColor(),(parseInt($("#primo").val())+1));
$("#secondo").prop('disabled',true);
$("#secondo").css("background-color","green");
$("#secondo").css("color","white");
$("#secondo_parola").text(this.to_word($("#secondo").val()));
},

colora_moltiplica: function(color,i){
setTimeout(function () {
		for(j=0; j<parseInt($("#primo").val()); j++){
        $("#item_"+(i+j)).css("background-color", color);
		}
		$("#uguale_parola").text("fa"); 
		$("#secondo").val(((i-1)/parseInt($("#primo").val()))+1);
		$("#secondo").css("color","grey");
		$("#secondo_parola").text(Quantita.to_word($("#secondo").val()));
		$("#secondo_parola").css("color","grey");
		$("#risultato").text($("#item_"+((i-1)+j)).text());
		$("#risultato").css("color","grey");
		$("#risultato_parola").text(Quantita.to_word($("#risultato").text()));
		$("#risultato_parola").css("color","grey");
		if (parseInt($("#primo").val()) != 1){
		if(i+j<(parseInt($("#primo").val())*Quantita.secondo)){
		return(Quantita.colora_moltiplica(Quantita.getRandomColor(),i+j));}
		else{
		$("#secondo").css("color","white");
		if(parseInt($("#primo").val()) == 1){
		setTimeout(function(){
		$("#item_"+secondo).css("background-color",Quantita.getRandomColor());;},1200);
		}
		$("#risultato").text(parseInt($("#primo").val()) * Quantita.secondo);
		$("#segno").css("color","black");
		$("#secondo_parola").css("color","black");
		$("#secondo").css("border-bottom","1px solid black");
		$("#risultato").css("border-bottom","4px solid blue");
		$("#status").text("Bene! Clicca sul risultato per ricominciare!");
		$("#uguale_parola").text("fa");
		$("#risultato").css("color","black");
		$("#risultato_parola").css("color","black");
		$("#risultato_parola").text(Quantita.to_word(parseInt($("#risultato").text())));
		Quantita.game_status = 3;
		}
		}
		else
		{
		if(i+j<=(parseInt($("#primo").val())*Quantita.secondo)){
		return(Quantita.colora_moltiplica(Quantita.getRandomColor(),i+j));}
		else{
		$("#secondo").css("color","white");
		if(parseInt($("#primo").val()) == 1){
		setTimeout(function(){
		$("#item_"+secondo).css("background-color",Quantita.getRandomColor());;},1200);
		}
		$("#risultato").text(parseInt($("#primo").val()) * Quantita.secondo);
		$("#segno").css("color","black");
		$("#secondo_parola").css("color","black");
		$("#secondo").css("border-bottom","1px solid black");
		$("#risultato").css("border-bottom","4px solid blue");
		$("#status").text("Bene! Clicca sul risultato per ricominciare!");
		$("#uguale_parola").text("fa");
		$("#risultato").css("color","black");
		$("#risultato_parola").css("color","black");
		$("#risultato_parola").text(Quantita.to_word(parseInt($("#risultato").text())));
		Quantita.game_status = 3;
		}
		}
},1200);
},

getRandomColor: function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
},

dopo_secondo_sottrazione:function(){
this.scolora("lightgrey",(parseInt($("#primo").val())));
$("#secondo").prop('disabled',true);
$("#secondo").css("background-color","green");
$("#secondo_parola").text(this.to_word($("#secondo").val()));
},


colora: function(color,i){
setTimeout(function () {
        $("#item_"+i).css("background", color);
		if(i<parseInt($("#primo").val())){
		return(Quantita.colora(color,i+1));}
		else{
		Quantita.sblocca_segno();
		}
},200);
},

scolora: function(color,i){
setTimeout(function () {
		$("#uguale_parola").text("fa");
		$("#risultato").text($("#item_"+(i-1)).text());
		$("#risultato").css("color","grey");
		$("#risultato_parola").text(Quantita.to_word($("#risultato").text()));
		$("#risultato_parola").css("color","grey");
		$("#secondo").css("color","grey");
		$("#secondo").val((parseInt($("#primo").val())-i)+1);
		$("#secondo_parola").text(Quantita.to_word($("#secondo").val()));
		$("#secondo_parola").css("color","grey");
        $("#item_"+i).css("background", color);
		if(i>((parseInt($("#primo").val())-Quantita.secondo)+1)){
		return(Quantita.scolora(color,i-1));}
		else{
		$("#secondo").css("color","white");
		$("#secondo_parola").css("color","black");
		$("#risultato").text(parseInt($("#primo").val()) -Quantita.secondo);
		$("#segno").css("color","black");
		$("#secondo").css("border-bottom","1px solid black");
		$("#risultato").css("border-bottom","4px solid blue");
		$("#status").text("Bene! Clicca sul risultato per ricominciare!");
		$("#uguale_parola").text("fa");
		$("#risultato").css("color","black");
		$("#risultato_parola").css("color","black");
		$("#risultato_parola").text(Quantita.to_word(parseInt($("#risultato").text())));
		Quantita.game_status = 3;
		}
},1200);
},

colora_secondo: function(color,i){
setTimeout(function () {
		$("#secondo").val(i-parseInt($("#primo").val()));
		$("#secondo_parola").text(Quantita.to_word($("#secondo").val()));
		$("#secondo_parola").css("color","grey");
		$("#secondo").css("color","grey");
		$("#uguale_parola").text("fa");
		$("#risultato").text($("#item_"+i).text());
		$("#risultato").css("color","grey");
		$("#risultato_parola").text(Quantita.to_word($("#risultato").text()));
		$("#risultato_parola").css("color","grey");
        $("#item_"+i).css("background", color);
		if(i<(parseInt($("#primo").val()) + parseInt(Quantita.secondo))){
		return(Quantita.colora_secondo(color,i+1));}
		else{
		$("#secondo").css("color","white");
		$("#secondo_parola").css("color","black");
		$("#risultato").text(parseInt($("#primo").val()) + parseInt(Quantita.secondo));
		$("#segno").css("color","black");
		$("#secondo").css("border-bottom","1px solid black");
		$("#risultato").css("border-bottom","4px solid blue");
		$("#status").text("Bene! Clicca sul risultato per ricominciare!");
		$("#uguale_parola").text("fa");
		$("#risultato").css("color","black");
		$("#risultato_parola").css("color","black");
		$("#risultato_parola").text(Quantita.to_word(parseInt($("#risultato").text())));
		Quantita.game_status = 3;
		}
},1200);
},

}


$(document).ready(function(){
var secondo = 0;
$("#primo").prop('disabled', true);
$("#segno").prop('disabled', true);
$("#secondo").prop('disabled', true);
Quantita.crea_tabella();

$("#status").click(function() {

        if(Quantita.game_status == 1){
		if (parseInt($("#primo").val()) > 0){
		Quantita.dopo_primo();
		}
		else if (parseInt($("#primo").val()) == 0){
		$("#primo").prop('disabled',true);
		$("#primo").css("background-color","red");
		$("#primo").css("color","white");
		$("#primo_parola").text(Quantita.to_word($("#primo").val()));
		Quantita.sblocca_segno();
		}
		}
		else 
		{if (Quantita.operazione == "piu"){
		if(Quantita.game_status == 2 && (parseInt($("#primo").val())+parseInt($("#secondo").val())) < 100){
		if(parseInt($("#secondo").val()) != 0){
		Quantita.secondo = $("#secondo").val();
		Quantita.dopo_secondo_somma();
		}
		else{
		$("#secondo").prop('disabled',true);
		$("#secondo").css("color","white");
		$("#secondo_parola").text(Quantita.to_word($("#secondo").val()));
		$("#risultato").text(parseInt($("#primo").val()) - parseInt($("#secondo").val()));
		$("#segno").css("color","black");
		$("#secondo").css("border-bottom","1px solid black");
		$("#secondo").css("background-color","green");
		$("#risultato").css("border-bottom","4px solid blue");
		$("#risultato").css("color","black");
		$("#risultato_parola").css("color","black");
		$("#status").text("Bene! Clicca sul risultato per ricominciare!");
		$("#uguale_parola").text("fa");
		$("#risultato_parola").text(Quantita.to_word(parseInt($("#risultato").text())));
		Quantita.game_status = 3;		
		}		
		}
		}
		else if (Quantita.operazione == "meno"){
		if(Quantita.game_status == 2 && (parseInt($("#primo").val())-parseInt($("#secondo").val())) >= 0){
		if(parseInt($("#secondo").val()) != 0){
		Quantita.secondo = $("#secondo").val();
		Quantita.dopo_secondo_sottrazione();
		}
		else if(parseInt($("#secondo").val()) == 0){
		$("#secondo").prop('disabled',true);
		$("#secondo").css("background-color","green");
		$("#secondo").css("color","white");
		$("#secondo_parola").text(Quantita.to_word($("#secondo").val()));
		$("#risultato").text(parseInt($("#primo").val()) - parseInt($("#secondo").val()));
		$("#segno").css("color","black");
		$("#secondo").css("border-bottom","1px solid black");
		$("#risultato").css("border-bottom","4px solid blue");
		$("#status").text("Bene! Clicca sul risultato per ricominciare!");
		$("#risultato").css("color","black");
		$("#risultato_parola").css("color","black");
		$("#uguale_parola").text("fa");
		$("#risultato_parola").text(Quantita.to_word(parseInt($("#risultato").text())));
		Quantita.game_status = 3;		
		}
		}
		}
		else {
		if(Quantita.game_status == 2 && (parseInt($("#primo").val())*parseInt($("#secondo").val())) < 101){
		if(parseInt($("#secondo").val()) != 0 && parseInt($("#primo").val()) != 0 && parseInt($("#secondo").val()) != 1){
		Quantita.secondo = parseInt($("#secondo").val());
		Quantita.dopo_secondo_moltiplicazione();
		}
		else if(parseInt($("#secondo").val()) == 0){
		$(".numero").css("background-color","darkgrey");
		$("#secondo").prop('disabled',true);
		$("#secondo").css("background-color","green");
		$("#secondo").css("color","white");
		$("#secondo_parola").text("zero");
		$("#risultato").text("0");
		$("#segno").css("color","black");
		$("#secondo").css("border-bottom","1px solid black");
		$("#risultato").css("border-bottom","4px solid blue");
		$("#status").text("Bene! Clicca sul risultato per ricominciare!");
		$("#risultato").css("color","black");
		$("#risultato_parola").css("color","black");
		$("#uguale_parola").text("fa");
		$("#risultato_parola").text("zero");
		Quantita.game_status = 3;		
		}
		else if(parseInt($("#primo").val()) == 0){
		$(".numero").css("background-color","darkgrey");
		$("#secondo").prop('disabled',true);
		$("#secondo").css("background-color","green");
		$("#secondo").css("color","white");
		$("#secondo_parola").text(Quantita.to_word);
		$("#risultato").text("0");
		$("#segno").css("color","black");
		$("#secondo").css("border-bottom","1px solid black");
		$("#risultato").css("border-bottom","4px solid blue");
		$("#status").text("Bene! Clicca sul risultato per ricominciare!");
		$("#risultato").css("color","black");
		$("#risultato_parola").css("color","black");
		$("#uguale_parola").text("fa");
		$("#risultato_parola").text("zero");
		Quantita.game_status = 3;		
		}
		else if(parseInt($("#secondo").val()) == 1){
		$("#secondo").prop('disabled',true);
		$("#secondo").css("background-color","green");
		$("#secondo").css("color","white");
		$("#secondo_parola").text(Quantita.to_word($("#secondo").val()));
		$("#risultato").text(parseInt($("#primo").val()));
		$("#segno").css("color","black");
		$("#secondo").css("border-bottom","1px solid black");
		$("#risultato").css("border-bottom","4px solid blue");
		$("#status").text("Bene! Clicca sul risultato per ricominciare!");
		$("#risultato").css("color","black");
		$("#risultato_parola").css("color","black");
		$("#uguale_parola").text("fa");
		$("#risultato_parola").text(Quantita.to_word(parseInt($("#risultato").text())));
		Quantita.game_status = 3;	
		}
		}		
		}
 }

});


$(document).keypress(function(e) {
    if(e.which == 13) {
        if(Quantita.game_status == 1){
		if (parseInt($("#primo").val()) > 0){
		Quantita.dopo_primo();
		}
		else if (parseInt($("#primo").val()) == 0){
		$("#primo").prop('disabled',true);
		$("#primo").css("background-color","red");
		$("#primo").css("color","white");
		$("#primo_parola").text(Quantita.to_word($("#primo").val()));
		Quantita.sblocca_segno();
		}
		}
		else 
		{if (Quantita.operazione == "piu"){
		if(Quantita.game_status == 2 && (parseInt($("#primo").val())+parseInt($("#secondo").val())) < 100){
		if(parseInt($("#secondo").val()) != 0){
		Quantita.secondo = $("#secondo").val();
		Quantita.dopo_secondo_somma();
		}
		else{
		$("#secondo").prop('disabled',true);
		$("#secondo").css("color","white");
		$("#secondo_parola").text(Quantita.to_word($("#secondo").val()));
		$("#risultato").text(parseInt($("#primo").val()) - parseInt($("#secondo").val()));
		$("#segno").css("color","black");
		$("#secondo").css("border-bottom","1px solid black");
		$("#secondo").css("background-color","green");
		$("#risultato").css("border-bottom","4px solid blue");
		$("#risultato").css("color","black");
		$("#risultato_parola").css("color","black");
		$("#status").text("Bene! Clicca sul risultato per ricominciare!");
		$("#uguale_parola").text("fa");
		$("#risultato_parola").text(Quantita.to_word(parseInt($("#risultato").text())));
		Quantita.game_status = 3;		
		}		
		}
		}
		else if (Quantita.operazione == "meno"){
		if(Quantita.game_status == 2 && (parseInt($("#primo").val())-parseInt($("#secondo").val())) >= 0){
		if(parseInt($("#secondo").val()) != 0){
		Quantita.secondo = $("#secondo").val();
		Quantita.dopo_secondo_sottrazione();
		}
		else if(parseInt($("#secondo").val()) == 0){
		$("#secondo").prop('disabled',true);
		$("#secondo").css("background-color","green");
		$("#secondo").css("color","white");
		$("#secondo_parola").text(Quantita.to_word($("#secondo").val()));
		$("#risultato").text(parseInt($("#primo").val()) - parseInt($("#secondo").val()));
		$("#segno").css("color","black");
		$("#secondo").css("border-bottom","1px solid black");
		$("#risultato").css("border-bottom","4px solid blue");
		$("#status").text("Bene! Clicca sul risultato per ricominciare!");
		$("#risultato").css("color","black");
		$("#risultato_parola").css("color","black");
		$("#uguale_parola").text("fa");
		$("#risultato_parola").text(Quantita.to_word(parseInt($("#risultato").text())));
		Quantita.game_status = 3;		
		}
		}
		}
		else {
		if(Quantita.game_status == 2 && (parseInt($("#primo").val())*parseInt($("#secondo").val())) < 101){
		if(parseInt($("#secondo").val()) != 0 && parseInt($("#primo").val()) != 0 && parseInt($("#secondo").val()) != 1){
		Quantita.secondo = parseInt($("#secondo").val());
		Quantita.dopo_secondo_moltiplicazione();
		}
		else if(parseInt($("#secondo").val()) == 0){
		$(".numero").css("background-color","darkgrey");
		$("#secondo").prop('disabled',true);
		$("#secondo").css("background-color","green");
		$("#secondo").css("color","white");
		$("#secondo_parola").text("zero");
		$("#risultato").text("0");
		$("#segno").css("color","black");
		$("#secondo").css("border-bottom","1px solid black");
		$("#risultato").css("border-bottom","4px solid blue");
		$("#status").text("Bene! Clicca sul risultato per ricominciare!");
		$("#risultato").css("color","black");
		$("#risultato_parola").css("color","black");
		$("#uguale_parola").text("fa");
		$("#risultato_parola").text("zero");
		Quantita.game_status = 3;		
		}
		else if(parseInt($("#primo").val()) == 0){
		$(".numero").css("background-color","darkgrey");
		$("#secondo").prop('disabled',true);
		$("#secondo").css("background-color","green");
		$("#secondo").css("color","white");
		$("#secondo_parola").text(Quantita.to_word);
		$("#risultato").text("0");
		$("#segno").css("color","black");
		$("#secondo").css("border-bottom","1px solid black");
		$("#risultato").css("border-bottom","4px solid blue");
		$("#status").text("Bene! Clicca sul risultato per ricominciare!");
		$("#risultato").css("color","black");
		$("#risultato_parola").css("color","black");
		$("#uguale_parola").text("fa");
		$("#risultato_parola").text("zero");
		Quantita.game_status = 3;		
		}
		else if(parseInt($("#secondo").val()) == 1){
		$("#secondo").prop('disabled',true);
		$("#secondo").css("background-color","green");
		$("#secondo").css("color","white");
		$("#secondo_parola").text(Quantita.to_word($("#secondo").val()));
		$("#risultato").text(parseInt($("#primo").val()));
		$("#segno").css("color","black");
		$("#secondo").css("border-bottom","1px solid black");
		$("#risultato").css("border-bottom","4px solid blue");
		$("#status").text("Bene! Clicca sul risultato per ricominciare!");
		$("#risultato").css("color","black");
		$("#risultato_parola").css("color","black");
		$("#uguale_parola").text("fa");
		$("#risultato_parola").text(Quantita.to_word(parseInt($("#risultato").text())));
		Quantita.game_status = 3;	
		}
		}		
		}
 }
	}
});

$("#segno").change(function(){
Quantita.operazione = $("#segno").val();
$("#segno").prop('disabled',true);
$("#segno").css("border-bottom","1px solid black");
if($("#segno").val() == "piu"){
$("#segno_parola").text("più");
}
else if($("#segno").val() == "meno"){
$("#segno_parola").text("meno");
}
else {
$("#segno_parola").text("per");
}
Quantita.sblocca_secondo();
});

$("#risultato").click(function(){
if(Quantita.game_status == 3){
$("#primo").val("");
$("#segno").val("");
$("#secondo").val("");
$("#risultato").text("");
$("#primo_parola").text("");
$("#secondo_parola").text("");
$("#segno_parola").text("");
$("#risultato_parola").text("");
$("#uguale_parola").text("");
$("#status").text("");
$("#board").empty();
$("#primo").css("background-color","rgba(255,255,255,0.7)");
$("#secondo").css("background-color","rgba(255,255,255,0.7)");
$("#primo").css("color","black");
$("#secondo").css("color","black");
$("#risultato").css("border-bottom","0px solid black");
Quantita.crea_tabella();
}
});



});