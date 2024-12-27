assets = ["Afghanistan","Albania", "Algeria", "Andorra", "Angola", "Armenia", "Bahamas", "Barbados", "Benin", "Botswana",
"Camerun", "Gabon", "Guyana", "Haiti", "Honduras", "India", "Iran","Jamaica","Kenya","Kuwait",
"Laos", "Lesotho","Liberia", "Lituania","Macao","Macedonia","Madagascar","Malawi","Mali","Mauritania",
"Mongolia","Namibia","Pakistan","Panama","Qatar","Samoa","Senegal","Sierra-Leone","Singapore","Slovenia",
"Togo","Uganda"];
arrayattuale= [];
risposte = [];
loaded = true;
livelloattuale = 1;
pernuovavita = 5;
daindovinare = -1;
oldlevel = false;
contatorebandiere = 1;
clicked = false;
vite = 3;
var me;
loadedfile = 0;

function loadImage() {
  var preload = new createjs.LoadQueue();
  preload.addEventListener("fileload",  function(){loadedfile+=1; if(loadedfile == 42){

  $("#caricando").hide();
  $("#wrapper").append("<div id='gioca'>GIOCA</div>");
  $("#istruzioni").click(function(){
  $("#wrapper").empty();
  $("#wrapper").append("<div id='vitewrapper'>VITE<div class='vita'>1</div><div class='vita'>2</div><div class='vita'>3</div></div");
  $(".vita").css("width",$(".vita").height()+"px");
  $("#wrapper").append("<div id='gamewrapper'></div");
  crealivello(1);
  });
  $("#gioca").click(function(){
  $("#wrapper").empty();
  $("#wrapper").append("<div id='vitewrapper'>VITE<div class='vita'>1</div><div class='vita'>2</div><div class='vita'>3</div></div");
  $(".vita").css("width",$(".vita").height()+"px");
  $("#wrapper").append("<div id='gamewrapper'></div");
  crealivello(1);
	});
  }});

}


$(document).ready(function(){

istruzioni();
});

function istruzioni(){

$("#wrapper").append("<div id='istruzioni'></div>");
vite = 3;
livelloattuale = 1;
assets = shuffle(assets);
instructions = true;
oldlevel = false;
if(!loaded){
$("#wrapper").append("<div id='caricando'>Attendere prego...</div>");
loadImage();
}
else{
 $("#wrapper").append("<div id='gioca'>GIOCA</div>");
  $("#istruzioni").click(function(){
  $("#wrapper").empty();
  $("#wrapper").append("<div id='vitewrapper'>VITE<div class='vita'>1</div><div class='vita'>2</div><div class='vita'>3</div></div");
  $(".vita").css("width",$(".vita").height()+"px");
  $("#wrapper").append("<div id='gamewrapper'></div");
  crealivello(1);
  });
  $("#gioca").click(function(){
  $("#wrapper").empty();
  $("#wrapper").append("<div id='vitewrapper'>VITE<div class='vita'>1</div><div class='vita'>2</div><div class='vita'>3</div></div");
  $(".vita").css("width",$(".vita").height()+"px");
  $("#wrapper").append("<div id='gamewrapper'></div");
  crealivello(1);
	});
}


}

function crealivello(livello){

if(!oldlevel){

arrayattuale = [];
for(i=0;i<livello+3;i++){
arrayattuale.push(assets[i]);
}
arrayattuale = shuffle(arrayattuale);
daindovinare = arrayattuale[arrayattuale.length-1];
arrayattuale.pop();


}

$("#gamewrapper").empty();
$("#gamewrapper").append("<div id='livellonumero'>Livello numero " + livello + "<br/><br/>"+ (livello+2) + " bandiere</div>");
$("#gamewrapper").append("<div id='inizia'>INIZIA</div>");
$("#inizia").click(function(){
inizialivello();
});
}



function inizialivello(){
clicked = false;
$("#gamewrapper").empty();
$("#gamewrapper").append("<img id='bandiera'/>");
$("#bandiera").attr("src","src/assets/"+arrayattuale[0]+".png");
contatorebandiere = 1;
mostrabandiere = setInterval(function(){
if (contatorebandiere < livelloattuale+2){
$("#bandiera").attr("src","src/assets/"+arrayattuale[contatorebandiere]+".png");
contatorebandiere += 1;
}else
{
clearInterval(mostrabandiere);
$("#gamewrapper").empty();
mostrarisposte();
}
},2000);
}

function mostrarisposte(){
$("#gamewrapper").empty();
risposte = [];
for(i=0;i<arrayattuale.length;i++){
risposte.push(arrayattuale[i]);
}
risposte.push(daindovinare);
risposte = shuffle(risposte);

$("#gamewrapper").append("<div id='domanda'>Quale bandiera NON è apparsa?</div>");
for(i=0;i<risposte.length;i++){
$("#gamewrapper").append("<img nome='"+risposte[i]+"'class='risposta' src='src/assets/"+risposte[i]+".png'></img>");
}
$(".risposta").click(function(){
if (!clicked){
clicked = true;
check($(this));}
});
}

function check(oggetto){
console.log(oggetto.attr('nome'));
console.log(daindovinare);
if(oggetto.attr('nome') == daindovinare){
oldlevel = false;
livelloattuale += 1;
pernuovavita -= 1;
$(".risposta").hide();
oggetto.show();
$("#domanda").text("Esatto!");
oggetto.animate({
    height: "230",
    width: "230",
  }, 1000, function(){ $("#gamewrapper").append("<div id='prossimolivello'>PROSSIMO LIVELLO</div>"); $("#prossimolivello").fadeIn(500); $('#prossimolivello').click(function(){
if(livelloattuale != 39){
if(pernuovavita != 0){
crealivello(livelloattuale);
}
else
{pernuovavita = 5;
aggiungivita();
}
}
else{fineGioco();}
});});
  $("#gamewrapper").append("<div id='domanda'>Stato: "+ daindovinare +"</div>");

}
else{
$("#gamewrapper").empty();
$("#gamewrapper").append("<div id='domanda'>Non era la bandiera mancante</div>");
pernuovavita = 5;
oldlevel = true;
vite -=1;
if(vite == 0){
gameOver();
}
else
{
$("#gamewrapper").append("<div id='loose'></div>");
$("#loose").fadeIn(500);
$("#gamewrapper").append("<div id='domanda'>Hai ancora "+elaboravite()+"</div>");
aggiornavite();

$("#gamewrapper").append("<div id='prossimolivello'>RIPROVA</div>");
$("#gamewrapper").append("<div id='abbandona'>ABBANDONA IL GIOCO</div>");
$("#prossimolivello").fadeIn(500);
$("#abbandona").fadeIn(500);
$('#abbandona').click(function(){
gameOver();
});
$('#prossimolivello').click(function(){
crealivello(livelloattuale);
});
}
}
}

function gameOver(){
$("#wrapper").empty();
$("#wrapper").empty();
$("#wrapper").append("<div id='domanda'>Hai raggiunto il livello: </div>");
$("#wrapper").append("<div id='score'>" + livelloattuale + "</div>");
if(livelloattuale < me.highscore[99].Punti){
$("#wrapper").append("<div id='theend'></div>");
$("#wrapper").append("<div id='notopten'>Devi totalizzare almeno " + me.highscore[99].Punti + " punti per entrare nella top 100</div>");
$("#wrapper").append("<div style='clear:both'></div>");
$("#wrapper").append("<div id='showtopten'>TOP 100</div>");
$("#wrapper").append("<div id='rigioca'>RIGIOCA</div>");
$("#rigioca").click(function(){
istruzioni();
});

$("#showtopten").click(function(){
showtopten();
});

}
else
{
$("#wrapper").append("<div id='vittoria'></div>");
$("#wrapper").append("<div id='notopten'>Complimenti! Sei nella top 100! <br/>Inserisci il tuo nome</div>");
$("#wrapper").append("<div style='clear:both'></div>");
$("#wrapper").append("<input id='inserisci' placeholder='Il tuo nome'/>");
$("#wrapper").append("<div id='prossimolivello'>INSERISCI</div>");
$("#prossimolivello").fadeIn(500);
$("#prossimolivello").click(function(){
nometopten = $("#inserisci").val();
insertScore();
});
}
}

function aggiungivita(){
vite += 1;
$("#vitewrapper").append("<div class='vita'>"+vite+"</div>");
$(".vita").css("width",$(".vita").height()+"px");
$("#gamewrapper").empty();
$("#gamewrapper").append("<div id='domanda'>Hai guadagnato una vita!</div>");
$("#gamewrapper").append("<div id='life'></div>");
$("#life").fadeIn(500);
$("#gamewrapper").append("<div id='prossimolivello'>PROSSIMO LIVELLO</div>"); $("#prossimolivello").fadeIn(500); $('#prossimolivello').click(function(){
if(livelloattuale!=39){
crealivello(livelloattuale);
}
else
{
fineGioco();
}
});
}

function fineGioco(){
$("#wrapper").empty();
$("#wrapper").append("<div id='domanda'>HAI FINITO IL GIOCO!</div>");
$("#wrapper").append("<div id='win'></div>");
$("#win").fadeIn(500);
$("#wrapper").append("<div id='domanda'>Inserisci il nome per la top100!</div>");
$("#wrapper").append("<input id='inserisci' placeholder='Il tuo nome'/>");
$("#wrapper").append("<div id='prossimolivello'>INSERISCI</div>"); $("#prossimolivello").fadeIn(500); $('#prossimolivello').click(function(){
insertScore();
});
}

function elaboravite(){
if(vite > 1){
return vite + " vite";
}
else{
return "l'ultima vita";}
}

function aggiornavite(){
$('#vitewrapper :last-child').remove();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}


function insertScore(){
posizione = 0;
while(livelloattuale < me.highscore[posizione].Punti){
posizione += 1;
}
for(i=98; i >= posizione; i--){
me.highscore[i+1].Nome = me.highscore[i].Nome;
me.highscore[i+1].Punti = me.highscore[i].Punti;
}
me.highscore[posizione].Nome = nometopten;
me.highscore[posizione].Punti = livelloattuale;
$.ajax({
    url: 'src/update.php',
    type: "POST",
    data: JSON.stringify(me),
    contentType: "application/json",
    complete: function(){ showtopten();}
});


}

function showtopten(){
$("#wrapper").empty();
$("#wrapper").append("<div id='topcento'></div>");
for (i=0; i<100; i++){
$("#wrapper").append("<div class='riga' id='riga_"+i+"'><div class='numero'> " + (i+1) + ".</div><div class='nome'>" + me.highscore[i].Nome + "</div><div class='punteggio'>"+ me.highscore[i].Punti+ "</div></div>");
}
if(posizione != -1){
$("#riga_"+posizione).css("background-color","rgba(173, 216, 230, 0.6)");
}
$("#wrapper").append("<div id='rigioca'>RIGIOCA</div>");
$("#rigioca").fadeIn(500);
$("#rigioca").click(function(){
$("#wrapper").empty();
istruzioni();
});
}
