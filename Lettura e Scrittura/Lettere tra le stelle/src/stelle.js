var Stelle = {
inizio: function(){
this.go_next = false;
this.alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
this.elenco_item = [];
$("#intro").fadeOut(500);
$("#gioco").fadeOut(0).delay(500).fadeIn(500);
for (i=0; i<26;i++){
if($("#lettera_"+alfabeto[i]).attr('abilitato')=="true"){
this.elenco_item.push(this.alfabeto[i]);
}
}
this.elenco_item = this.shuffle(this.elenco_item);
this.indice = 0;
this.mostra_item();
this.punti = 0;
$("#punti").text("Punti: 0");
},

shuffle: function(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
},

mostra_item: function(){
$("#town").css("opacity","1");
this.go_next = false;
$("#risposte_container").show();
$("#feedback").hide();
$("#suggerimento").text("Premi sulla lampadina per ridurre la luminosità");
this.punti_temp = 100;
$("#bottone").css("opacity","1");
$("#luce").css("width","300");
$("#punti_temp").text(this.punti_temp);
$("#starfield").css("background-image","url('src/"+this.elenco_item[Stelle.indice]+".png')");
$("#starfield").css("opacity","0.2");
$("#bottone").css("opacity","1");
this.selectable = true;
},


sposta: function(){
if (this.selectable){
this.punti_temp -= 10;
if (this.punti_temp > 0){
$("#suggerimento").text("Quando credi di sapere la risposta, premi la lettera!");
$("#luce").width($("#luce").width()-30);
$("#punti_temp").text(this.punti_temp);
$("#starfield").css("opacity",String(parseFloat($("#starfield").css('opacity'))+0.08));
$("#bottone").css("opacity",String(parseFloat($("#bottone").css('opacity'))-0.1));
$("#town").css("opacity",String(parseFloat($("#town").css('opacity'))-0.1));
}
else
{
$("#luce").width($("#luce").width()-30);
$("#starfield").css("background-image","url('src/"+this.elenco_item[Stelle.indice]+"2.png')");
$("#starfield").css("opacity",String(parseFloat($("#starfield").css('opacity'))+0.08));
$("#bottone").css("opacity",String(parseFloat($("#bottone").css('opacity'))-0.1));
$("#town").css("opacity","0");
$("#punti_temp").text("");
$("#risposte_container").hide();
$("#feedback").show();
$("#feedback").css("color","pink");
$("#feedback").text("La lettera esatta era "+this.elenco_item[Stelle.indice]);
$("#suggerimento").text("Clicca sul cielo per andare avanti");
this.go_next = true;
}
}
},

check_answer: function(valore){
this.selectable = false;
$("#risposte_container").hide();
if(this.elenco_item[Stelle.indice] == valore){
this.feedback(true);
}
else{
this.feedback(false);
}
},

feedback: function(positivo){
$("#feedback").show();
$("#starfield").css("background-image","url('src/"+this.elenco_item[Stelle.indice]+"2.png')");
this.go_next = true;
if(positivo){
this.punti += this.punti_temp;
$("#punti").text("Punti: "+ this.punti);
$("#feedback").css("color","lightgreen");
$("#feedback").text("Esatto!! +"+ this.punti_temp +" punti!");
$("#starfield").css("opacity","1");
}
else{
$("#feedback").css("color","pink");
$("#feedback").text(":( La lettera esatta era "+this.elenco_item[Stelle.indice]);
$("#starfield").css("opacity","1");
}
$("#suggerimento").text("Clicca sul cielo o sulla lampadina per andare avanti");
},

fine:function(){
$("#gioco").hide();
$("#fine").show();
$("#city_fine").text(this.punti);
}

}

$(document).ready(function(){
$("#rigioca").click(function(){
$("#fine").hide();
$("#intro").show();
});
$("#fine").hide();
$("#gioco").hide();
alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
for (i=0;i<26;i++){
$("#letter_container").append("<div id='lettera_"+alfabeto[i]+"' class='lettera' abilitato='true' value='"+alfabeto[i]+"'>"+alfabeto[i]+"</div>");
$("#lettera_"+alfabeto[i]).css("background-color","green");
}
for (j=0;j<26;j++){
$("#risposte_container").append("<div id='risposta_"+alfabeto[j]+"' class='risposta' value='"+alfabeto[j]+"'>"+alfabeto[j]+"</div>");
}

$(".risposta").click(function(){
Stelle.check_answer($(this).attr("value"));
});


$(".lettera").click(function(){
if ($(this).attr('abilitato') == "true"){
$(this).attr('abilitato','false');
$(this).css("background-color","grey");
}
else{

$(this).attr('abilitato','true');
$(this).css("background-color","green");
}
});

$("#seleziona_tutte").click(function(){
for (i=0;i<26;i++){
$("#lettera_"+alfabeto[i]).css("background-color","green");
$("#lettera_"+alfabeto[i]).attr('abilitato','true');
}
});

$("#cancella_tutte").click(function(){
for (i=0;i<26;i++){
$("#lettera_"+alfabeto[i]).css("background-color","grey");
$("#lettera_"+alfabeto[i]).attr('abilitato','false');
}
});

$("#gioca").click(function(){
quante = 0;
for (i = 0; i<26; i++){
if ($("#lettera_"+alfabeto[i]).attr('abilitato') == "true"){
quante += 1;
}
}
if (quante > 0){
Stelle.inizio();}

});





$("#bottone").click(function(){
if (Stelle.go_next == false){
Stelle.sposta();}
else{
if ($("#bottone").css("opacity")>0){if(Stelle.indice < Stelle.elenco_item.length-1){
Stelle.indice += 1;
Stelle.mostra_item();}
else
{
Stelle.fine();
}
}
}
});


$("#starfield").click(function(){
if (Stelle.go_next == true){if(Stelle.indice < Stelle.elenco_item.length-1){
Stelle.indice += 1;
Stelle.mostra_item();}
else{
Stelle.fine();
}
}
});
});
