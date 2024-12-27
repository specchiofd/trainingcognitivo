function da_indovinare(parola, nascoste, aiuto){
this.parola = parola;
this.nascoste = nascoste;
this.aiuto = aiuto;
}

var Riconoscimento = {

avvio: function(){
this.audioErrore = document.createElement('audio');
this.audioErrore.setAttribute('src', 'src/error.wav');
this.audioGiusto = document.createElement('audio');
this.audioGiusto.setAttribute('src', 'src/giusto.mp3');
this.elenco_lettere = ["a","b","c","d","e","f","g","h","i","l","m","n","o","p","q","r","s","t","u","v","z"];
this.elenco_parole = [];
this.elenco_parole.push(new da_indovinare("ciao",[1,2],"Un saluto"));
this.elenco_parole.push(new da_indovinare("musica",[1,2,5],"Si ascolta alla radio"));
this.elenco_parole.push(new da_indovinare("tennis",[0,2,3,4],"Uno sport con la racchetta"));
this.elenco_parole.push(new da_indovinare("forbici",[1,2,4,5],"Si usano per tagliare"));
this.elenco_parole.push(new da_indovinare("salmone",[0,4,5,6],"Un pesce che risale il fiume"));
this.elenco_parole.push(new da_indovinare("spesa",[0,4],"Si fa al supermercato"));
this.elenco_parole.push(new da_indovinare("cordless",[0,3,4,5],"Il telefono senza fili"));
this.elenco_parole.push(new da_indovinare("motoscafo",[1,2,4,5],"Va veloce sull'acqua"));
this.elenco_parole.push(new da_indovinare("sveglia",[0,2,5,6],"Suona ogni mattina"));
this.elenco_parole.push(new da_indovinare("tartaruga",[0,3,5,6,8],"Un animale col guscio"));
this.elenco_parole.push(new da_indovinare("aeroporto",[2,3,4,6,8],"Vi atterrano e decollano gli aerei"));
this.elenco_parole.push(new da_indovinare("agricoltore",[2,3,6,8,9],"Coltiva la terra"));
this.elenco_parole.push(new da_indovinare("cattedra",[1,3,5,7],"Il tavolo dell'insegnante"));
this.elenco_parole.push(new da_indovinare("povero",[0,3,5],"Il contrario di ricco"));
this.elenco_parole.push(new da_indovinare("tazzina",[1,3,4,6],"Vi si beve il caffè"));
this.elenco_parole.push(new da_indovinare("ombrellone",[0,3,4,5,8],"In estate ripara dal sole"));
this.elenco_parole.push(new da_indovinare("divisione",[0,4,5,6],"Il contrario della moltiplicazione"));
this.elenco_parole.push(new da_indovinare("serpente",[1,3,4,5,6],"Un animale che striscia"));
this.parola_attuale = 0;
this.elenco_parole = this.shuffle(this.elenco_parole);
this.mostra_parola(0);
},

mostra_parola: function(attuale){
$("#prossima").hide();
$("#aiuto").text("Mostra aiuto");
this.aiuto = false;
this.in_game = true;
$("#parola").css("background-color","transparent");
$("#parola").empty();
larghezza = 500/(this.elenco_parole[attuale].parola.length);
for(i=0; i<this.elenco_parole[attuale].parola.length; i++){
if(this.elenco_parole[attuale].nascoste.indexOf(i) > -1){
$("#parola").append("<div class='parola_lettera' id='parola_lettera_"+i+"'>?</div>");
}
else
{
$("#parola").append("<div class='parola_lettera' id='parola_lettera_"+i+"'>"+this.elenco_parole[attuale].parola[i]+"</div>");
}
$("#parola_lettera_"+i).css("background-color","white");
$("#parola_lettera_"+i).css("color","black");
$("#parola_lettera_"+i).css("border","1px solid black");
}
$(".parola_lettera").css("width",String(larghezza)+"px");
$(".parola_lettera").css("padding",String(larghezza/3)+"px 0px "+String(larghezza/3)+"px 0px");
$(".parola_lettera").css("font-size",String(larghezza/3)+"px");
elenco_parole = this.crea_elenco_parole(attuale);
this.crea_lettere_risposta(elenco_parole);
$("#aiuto").show();
$("#prima_riga").css("display","inline-block");
$("#seconda_riga").css("display","inline-block");
this.posizione = attuale;
this.evidenzia(attuale);
$(".lettera").click(function(){
if (Riconoscimento.in_game == true)
{
Riconoscimento.evaluate($(this),Riconoscimento.posizione);
}
});
},

evidenzia:function(attuale){
for (i=0; i<this.elenco_parole[attuale].parola.length;i++){
$("#parola_lettera_"+i).css("background-color","white");
$("#parola_lettera_"+i).css("border","1px solid black");
}
$("#parola_lettera_"+this.elenco_parole[attuale].nascoste[0]).css("background-color","lightyellow");
$("#parola_lettera_"+this.elenco_parole[attuale].nascoste[0]).css("border","1px solid red");
},

evaluate: function(lettera_scelta,attuale){
this.in_game = false;
if(Riconoscimento.elenco_parole[attuale].parola[Riconoscimento.elenco_parole[attuale].nascoste[0]] == lettera_scelta.text()){
this.feedback(lettera_scelta, true);
}
else
{
this.feedback(lettera_scelta, false);
}
},

feedback: function(oggetto,corretto){
if (corretto){
this.audioGiusto.play();
oggetto.fadeTo(1000,0);
$("#parola_lettera_"+this.elenco_parole[this.posizione].nascoste[0]).text(oggetto.text());
this.elenco_parole[this.posizione].nascoste = this.elenco_parole[this.posizione].nascoste.slice(1,this.elenco_parole[this.posizione].nascoste.length);
if(this.elenco_parole[this.posizione].nascoste.length > 0){
this.evidenzia(this.posizione);
this.in_game = true;
}
else
{
this.vittoria();
}
}
else
{
this.audioErrore.play();
oggetto.css("background-color","red");
window.setTimeout(function(){oggetto.css("background-color","navajowhite"); Riconoscimento.in_game = true;},1000);
}
},

vittoria: function(){
$("#aiuto").hide();
$("#prima_riga").hide();
$("#seconda_riga").hide();
$("#parola").css("background-color","green");
for (i=0; i<this.elenco_parole[this.posizione].parola.length;i++){
$("#parola_lettera_"+i).css("background-color","transparent");
$("#parola_lettera_"+i).css("color","white");
$("#parola_lettera_"+i).css("border","0px solid black");
}
if(this.posizione != this.elenco_parole.length-1)
{
this.posizione += 1;
$("#prossima").show();
}
else{
$("#hai_vinto").show();
}
},

crea_elenco_parole: function(attuale){
array_temporaneo = [];
for (i=0; i<this.elenco_parole[attuale].nascoste.length;i++)
array_temporaneo.push(this.elenco_parole[attuale].parola[this.elenco_parole[attuale].nascoste[i]]);
for (i=array_temporaneo.length;i<10;i++){
array_temporaneo.push(this.elenco_lettere[this.randomInt(0,this.elenco_lettere.length-1)]);
}
array_temporaneo = this.shuffle(array_temporaneo);
return array_temporaneo;
},

crea_lettere_risposta: function(elenco){
$("#prima_riga").empty();
$("#seconda_riga").empty();
for (i=0;i<5;i++){
$("#prima_riga").append("<div class='lettera'>"+elenco[i]+"</div>");
}
for (i=5; i<10; i++){
$("#seconda_riga").append("<div class='lettera'>"+elenco[i]+"</div>");
}
},

randomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
},

shuffle: function(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
}

$(document).ready(function(){

$("#aiuto").click(function(){
if (Riconoscimento.aiuto == false){
Riconoscimento.aiuto = true;
$("#aiuto").text(Riconoscimento.elenco_parole[Riconoscimento.posizione].aiuto);
}
});
$("#prossima").click(function(){
Riconoscimento.mostra_parola(Riconoscimento.posizione);
});
$("#pre").fadeTo(1000,1);
$("#inizia").click(function(){
$("#pre").fadeTo(1000,0, function(){$("#pre").hide(); $("#gioco").show();$("#gioco").fadeTo(1000,1);Riconoscimento.avvio();});
});
});

