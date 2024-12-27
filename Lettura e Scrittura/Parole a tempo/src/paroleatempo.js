tempo = 0;
ingame = false;
livello = 0;
diff = "f";
dizionario = [["TRE","STA","PER","CON","DEL","FRA","ECO","APE","MAI","MIO","OSO","RAP","SUB","VAI","ZIP","DUE","DON","UNO","OCA"],
["CASA","SALE","PANE","SOLE","MENO","VASO","NOME","VINO","CODA","PESO","ERBA","FEDE","FILO","TONO","DADO"],
["PORTA","LEGNO","FALSO","MAGIA","MAGRO","MAMMA","NONNO","GAMBA","PANCA","ODORE","RAGNO","UMANO","UMIDO","PACCO","OLIVA","CALZA","UMILE"],
["BALENA","DEDICA","GELATO","CALICE","LATINO","MAGLIA","OCEANO","SAPORE","PALUDE","PANCIA","SAGOMA","SABBIA","SAGGIO","RADICE","VALIDO","QUARTO"],
["CAIMANO","BADANTE","BEVANDA", "ABBASSO","ABBAZIA","EDICOLA","FACHIRO","LATTUGA","GALLINA","MACCHIA","MACIGNO","PAGELLA","QUAGLIA","TAMBURO","ZAFFIRO"],
["ABBONATO","BAGLIORE","ECCESSO","FABBRICA","MACCHINA","PACIFICO","PAESAGGI","TACCHINO","QUADRATO","QUALCUNO","GABBIANO","CACIOTTA"],
["ABBANDONO","BANCHETTO","DALTONICO","ECCELLERE","FABBRICHE","IDEALISTA","MACELLAIO","NARRATIVA","OBELISCHI","QUALSIASI","QUALUNQUE","SACERDOTI","TABACCAIO","TABELLINE","VAGABONDO"]];
alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
tempdix = [];
datrovare = [];
parolaindex = 0;
target = "";
amount = 0;
tempoaparola = 0;
tempoattuale = 0;
cursore = 0;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkcode(codice){
switch(codice){
case "32444":
avvialivello(2,"f");
break;
case "32056":
avvialivello(3,"f");
break;
case "25321":
avvialivello(4,"f");
break;
case "27978":
avvialivello(5,"f");
break;
case "17082":
avvialivello(6,"f");
break;
case "47810":
avvialivello(7,"f");
break;
case "13413":
avvialivello(2,"m");
break;
case "10335":
avvialivello(3,"m");
break;
case "35331":
avvialivello(4,"m");
break;
case "28981":
avvialivello(5,"m");
break;
case "36012":
avvialivello(6,"m");
break;
case "38180":
avvialivello(7,"m");
break;
case "36765":
avvialivello(2,"d");
break;
case "43185":
avvialivello(3,"d");
break;
case "21388":
avvialivello(4,"d");
break;
case "10957":
avvialivello(5,"d");
break;
case "31215":
avvialivello(6,"d");
break;
case "27816":
avvialivello(7,"d");
break;
case "74572":
avvialivello(2,"n");
break;
case "35372":
avvialivello(3,"n");
break;
case "86409":
avvialivello(4,"n");
break;
case "93262":
avvialivello(5,"n");
break;
case "76145":
avvialivello(6,"n");
break;
case "09786":
avvialivello(7,"n");
break;
}
}

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function elapsed(){
$("#insidewrapper").empty();
ingame = false;
clearInterval(countdown);
$("#insidewrapper").append("<img id='timeup' style='cursor:pointer; width:300px; height:300px; margin:2em auto 0em auto' src='src/over.png'/>");
$("#insidewrapper").append("<div class='txtgrande'>Tempo scaduto</div>");
$("#insidewrapper").append("<div class='txtmedio'>Clicca sulla clessidra per riprovare</div>");
if(livello > 1){
$("#insidewrapper").append("<div class='txtmedio'>Vuoi riprendere più tardi? Il codice di questo livello è: " + codice(diff,livello) + "</div>");}
$("#insidewrapper").append("<div id='back'>TORNA AL MENU</div>");
$("#timeup").click(function(){
avvialivello(livello,diff);
});
$("#back").click(function(){
location.reload();
});
}

function formatta(tempo){
tempo = tempo*10;
console.log(Math.floor((tempo%10000)/1000) );
temp = ""+ Math.floor((tempo%10000)/1000) + Math.floor((tempo%1000)/100) + ":"+ Math.floor((tempo%100)/10) + tempo%10;
return temp;
}



function vittoria(){
$("#insidewrapper").empty();
ingame = false;
clearInterval(countdown);
$("#insidewrapper").append("<img id='vittoria' style='cursor:pointer; width:300px; height:300px; margin:2em auto 0em auto' src='src/vittoria.png'/>");
$("#insidewrapper").append("<div class='txtgrande'>Complimenti!</div>");
$("#insidewrapper").append("<div class='txtmedio'>Hai vinto Parole a Tempo!</div>");
if(diff == "f"){
$("#insidewrapper").append("<div class='txtmedio'>Vuoi provare la modalità più difficile?</div>");
$("#insidewrapper").append("<div id='back'>RICOMINCIA - LIVELLO MEDIO</div>");}
else if(diff == "m"){
$("#insidewrapper").append("<div class='txtmedio'>Vuoi provare la modalità più difficile?</div>");
$("#insidewrapper").append("<div id='ndifficile'>RICOMINCIA - LIVELLO DIFFICILE</div>");}
$("#insidewrapper").append("<div id='back'>TORNA AL MENU</div>");

$("#nmedio").click(function(){
avvialivello(1,"m");
});
$("#ndifficile").click(function(){
avvialivello(1,"m");
});
$("#back").click(function(){
location.reload();
});
}

function avviapartita(numero,difficolta){
tempdix = [];
datrovare = [];
parolaindex = 0;
$("#wrapper").empty();
$("#wrapper").append("<div id='parola_numero'></div>");
$("#wrapper").append("<div id='barrasfondo'><div id='rimanente'></div></div>");
$("#wrapper").append("<div id='tempo'></div>");
$("#wrapper").append("<div id='insidewrapper'></div>");
tempdix = shuffle(dizionario[numero-1]);
for(i=0; i<10;i++){
datrovare.push(tempdix[i]);
}
ingame = true;
amount = Math.ceil(($("#barrasfondo").width()/((tempoaparola*10))));
showtable(parolaindex);
}

function showtable(numero){
CELLWIDTH = 0;
cursore = 0;
target = datrovare[parolaindex];
elencolettere = [];
tempoattuale = tempoaparola*10;
$("#insidewrapper").empty();
$("#parola_numero").empty();
$("#rimanente").css("width","100%");
$("#parola_numero").append("<h4>Parola " + (parolaindex+1) + " di 10<br/><br/><span id='datrovare'</span> " + datrovare[parolaindex]+"</h4>");
if(diff != "n"){
countdown = setInterval(function(){if(tempoattuale > 0.00) {tempoattuale-=1; $("#rimanente").width(($("#rimanente").width()-amount)); $("#tempo").text(formatta(tempoattuale)); } else {elapsed();}},100);
}
$("#insidewrapper").append("<div id='tavola' class='col-xs-12 col-md-4 col-md-push-4'></div>"); 
CELLWIDTH = Math.floor(($("#tavola").width() / 6)) -4;
for(i=0; i<target.length;i++){
elencolettere.push(target[i]);
}
for(i=target.length; i<36;i++){
elencolettere.push(alfabeto[getRandomInt(0,alfabeto.length-1)]);
}
elencolettere = shuffle(elencolettere);
for(i=0; i<36;i++){
$("#tavola").append("<div class='lettera' selezionato='N'>"+elencolettere[i]+"</div>");}
$(".lettera").css("width",CELLWIDTH+"px");
$(".lettera").css("height",CELLWIDTH+"px");
$(".lettera").css("line-height",CELLWIDTH+"px");
$(".lettera").click(function(){
if($(this).attr("selezionato") == "N" && ingame){
$(this).attr("selezionato","S");
if(target[cursore] == $(this).text()){
$(this).css("background-color","green");
console.log(target);
console.log(cursore);
if(cursore < target.length-1){
cursore += 1;
}
else
{
if(diff != "n"){
	clearInterval(countdown);}
		if(parolaindex < 9){
		parolaindex+=1;
		showtable(parolaindex);}
	else{
	$("#tavola").empty();
	a = "LIVELLO";
	for(i=0;i<7;i++){
	$("#tavola").append("<div class='lettera' selezionato='N'>"+a[i]+"</div>");
	}
	$("#tavola").append("<div style='clear:both'></div>");
	b = "SUPERATO";
	for(i=0;i<8;i++){
	$("#tavola").append("<div class='lettera' selezionato='N'>"+b[i]+"</div>");
	$(".lettera").css("width",CELLWIDTH+"px");
	$(".lettera").css("height",CELLWIDTH+"px");
	$(".lettera").css("line-height",CELLWIDTH+"px");
	$(".lettera").css("background-color","green");
	$(".lettera").css("color","white");
	}

	$("#parola_numero").empty();
	$("#parola_numero").text("");
	ingame = false;
	setTimeout(function(){
	livello += 1;
	if(livello > 7){
	vittoria();
	}
	else{
	avvialivello(livello,diff);}},2500);

	}
}
}
else{
ingame = false;
$(this).css("background-color","red");
setTimeout(function(){
$(".lettera").attr("selezionato","N");
$(".lettera").css("background-color","white");
cursore = 0;
ingame = true;
},100);
}
}
});
}

function codice(difficolta,livello){
if(difficolta == "f"){
codici = ["32444","32056","25321","27978","17082","47810"];
return codici[livello-2];
}
else if (difficolta == "m"){
codici = ["13413","10335","35331","28981","36012","38180"];
return codici[livello-2];
}
else if (difficolta == "d"){
codici = ["36765","43185","21388","10957","31215","27816"];
return codici[livello-2];
}
else{
codici = ["74572","35372","86409","93262","76145","09786"];
return codici[livello-2];
}
}

function avvialivello(numero,difficolta){
diff = difficolta;
livello = numero;
$("#mtitle").hide();
$("#wrapper").empty();
if(numero != 7){
$("#wrapper").append("<div id='in_uno'>Livello "+ (numero) + ": parole di " + (numero+2) + " lettere</div>");}
else
{
$("#wrapper").append("<div id='in_uno'>Ultimo livello!" + " Parole di " + (numero+2) + " lettere</div>");}
if (diff != "n"){
txtdiff = "";
switch(difficolta){
case 'f':
tempo = 10*(numero+2)*10;
txtdiff = "Facile";
tempoaparola = 10*(numero+2);
break;
case 'm':
tempo = 5*(numero+2)*10;
txtdiff = "Media";
tempoaparola = 5*(numero+2);
break;
case 'd':
tempo = 2*(numero+2)*10;
txtdiff = "Difficile";
tempoaparola = 3*(numero+2);
break;
}
$("#wrapper").append("<div id='in_due'>Difficoltà: "+ txtdiff + "<br/><br/>Hai " + tempo + " secondi per trovare 10 parole</div>");
}
else{
$("#wrapper").append("<div id='in_due'>Modalità senza tempo<br/><br/Trova le 10 parole!</div>");
}
if(livello != 1){
$("#wrapper").append("<div id='in_due'>Il codice per ripartire da questo livello è: " + codice(diff,livello) + "</div>");
}
$("#wrapper").append("<div id='start'>INIZIA</div>");
$("#start").click(function(){
avviapartita(livello,diff);
});
}

$(document).ready(function(){
	$('.carousel').carousel({
    interval: false
});

$('#header').click(function(){
location.reload();
});
$("#parola").text("");

$(".numero").click(function(){
if($("#parola").text().length < 10) {
$("#parola").text($("#parola").text()+$(this).attr("valore"));}
});

$("#canc").click(function(){
if($("#parola").text().length > 0) {
$("#parola").text($("#parola").text().substring(0,$("#parola").text().length-1));}
});

$("#facile").click(function(){
avvialivello(1,"f");
});

$("#medio").click(function(){
avvialivello(1,"m");
});

$("#difficile").click(function(){
avvialivello(1,"d");
});

$("#notempo").click(function(){
avvialivello(1,"n");
});

$("#invia").click(function(){
checkcode($("#parola").text());
});
});

