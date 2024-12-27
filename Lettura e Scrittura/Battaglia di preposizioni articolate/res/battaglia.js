var BattagliaNavale = {

inizio: function(){
this.audioEsplosione = document.createElement('audio');
this.audioEsplosione.setAttribute('src', 'res/explosion.mp3');
this.audioMissing = document.createElement('audio');
this.audioMissing.setAttribute('src', 'res/missing.mp3');
this.preposizioni = [["del", "al", "dal", "nel", "col", "sul"], ["dello", "allo", "dallo", "nello", "collo", "sullo"], ["della", "alla", "dalla", "nella", "colla", "sulla"], ["dell'", "all'", "dall'","nell'", "con l'", "sull'"],
				["dei", "agli", "dagli", "negli", "cogli", "sugli"], ["delle", "alle", "dalle", "nelle", "colle", "sulle"]];
				
this.frasi = [["Il libro è ", "sul", " tavolo"], ["Il pane si taglia ", "col", " coltello"], ["È caduto ", "dalle", " scale"],["Arriverà ", "alle", " tre in punto"],["L'ho messo ", "nel", " secondo cassetto"],
["Il nonno è più alto ", "della", " nonna"], ["Non salire ", "sulla", " sedia!"],["Questo record dura ", "dal", " 1952"],["Il leone è il re ", "della", " foresta"],["Questo è l'ufficio ","del"," segretario"],
["Il caso è stato risolto ", "dal", " poliziotto"],["Ha studiato dalla sera ", "alla", " mattina"],["È salito ", "sul", " triciclo"], ["Te lo leggo ", "negli", " occhi"]];
this.proiettili = this.proiettili_totali;
this.navi = this.numero_frasi;
this.frasi = this.shuffle(this.frasi);
this.current_item = 0;
$("#contenitore").fadeIn();
this.carica_armi(this.proiettili_totali);
this.carica_navi(this.numero_frasi);
$("#rigioca").click(function(){$("#risultato").animate({ top: "-260" }, 2000 ); BattagliaNavale.pre()});

$(".cella").hover(function(){if(BattagliaNavale.game_status==0){
$(this).css("background-image","url('res/img/water_over.png')"); 
$("#int_"+(parseInt($(this).attr('valore'))%6)).css("background-color","rgba(255,0,0,0.5)");
$("#lat_"+Math.floor(parseInt($(this).attr('valore'))/6)).css("background-color","rgba(255,0,0,0.5)");
																}
							}

, 
function(){if(BattagliaNavale.game_status==0){
$(this).css("background-image","url('res/img/water.png')");
$("#int_"+(parseInt($(this).attr('valore'))%6)).css("background-color","transparent");
$("#lat_"+Math.floor(parseInt($(this).attr('valore'))/6)).css("background-color","transparent");
}
});


$(".cella").click(function(){if(BattagliaNavale.game_status==0){BattagliaNavale.evaluate($(this))}});
this.turno(0);
},

evaluate: function(oggetto){
this.game_status = 1;
$("#int_"+parseInt(oggetto.attr('valore')%6)).css("background-color","transparent");
$("#lat_"+Math.floor(oggetto.attr('valore')/6)).css("background-color","transparent");

if (this.proiettili > 0)
{
this.proiettili -= 1;
$("#ammo :last-child").remove();
}
if(this.preposizioni[parseInt(oggetto.attr('valore')%6)][Math.floor(parseInt(oggetto.attr('valore'))/6)] == this.frasi[this.current_item][1])
{
this.audioEsplosione.play();
oggetto.fadeTo(1500,1,function(){$(this).css("background-image","url('res/img/water_expl.png')")});
$("#item").fadeTo(1000,0,function(){BattagliaNavale.navi -= 1; $("#item").css("background-color","darkgreen");$("#item").text(BattagliaNavale.frasi[BattagliaNavale.current_item][0]+BattagliaNavale.frasi[BattagliaNavale.current_item][1]+BattagliaNavale.frasi[BattagliaNavale.current_item][2])}).fadeTo(1000,1).delay(1500).fadeTo(1000,0, function(){BattagliaNavale.current_item += 1; BattagliaNavale.turno(BattagliaNavale.current_item)})
$("#ships :last-child").remove();
}
else
{
this.audioMissing.play();
oggetto.fadeTo(1500,1,function(){$(this).css("background-image","url('res/img/water_miss.png')")});
$("#item").fadeTo(1000,0,function(){$("#item").css("background-color","red"); $("#item").text(BattagliaNavale.frasi[BattagliaNavale.current_item][0]+ "___" +BattagliaNavale.frasi[BattagliaNavale.current_item][2])}).fadeTo(1000,1).delay(1500).fadeTo(1000,0, function(){BattagliaNavale.turno(BattagliaNavale.current_item)});

}
},

shuffle: function(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
},

turno: function(item){

if (this.proiettili > 0 && this.navi > 0){
$("#item").fadeTo(1000, 1);
$(".cella").each(function(){$(this).css("background-image","url('res/img/water.png')");});
this.game_status = 0;
$("#item").css("background-color","royalblue");
if(item < this.numero_frasi){
$("#item").text(this.frasi[item][0] + "___" + this.frasi[item][2]);
}
}
else
{
this.fine_gioco();
}
},

fine_gioco: function(){
$("#contenitore").fadeOut();
if(this.navi == 0){
$("#risultato").css("background-color","green");
$("#responso").text("Hai vinto!!");
$("#precisione").text("Precisione: " + String(Math.round((this.numero_frasi-this.navi)/(this.proiettili_totali-this.proiettili)*100))+"%");
}
else
{
$("#risultato").css("background-color","red");
$("#responso").text("Non hai vinto :(");
if((this.numero_frasi-this.navi) > 0){
console.log(this.numero_frasi-this.navi);
console.log(this.proiettili_totali - this.proiettili);
$("#precisione").text("Precisione: " + String(Math.round((this.numero_frasi-this.navi)/(this.proiettili_totali-this.proiettili)*100))+"%");}
else
{
$("#precisione").text("Precisione:0%");}
}

$("#risultato").animate({ top: "+=260" }, 2000 )
},

carica_armi: function(armi){
$("#ammo").empty();
for (i=0; i<armi; i++){
$("#ammo").append("<div class='ammo' id='ammo_"+ i +"'></div>");
$("#ammo_"+i).delay((i)*250).fadeTo(500,1);
}
},

carica_navi: function(navi){
$("#ships").empty();
for (i=0; i<navi; i++){
$("#ships").append("<div class='ship' id='ship_"+ i +"'></div>");
$("#ship_"+i).delay((i)*250).fadeTo(500,1);
}
},

pre: function(){
$("#error").text("");
$("#contenitore").hide();
$("#info").show();
$("#info").animate({ top: "0" }, 2000 );
$("#inizia").click(function(){
if($("#num_navi").val() == "" || $("#num_navi").val() == "0"){
BattagliaNavale.numero_frasi = 3;
}
else
{
BattagliaNavale.numero_frasi = $("#num_navi").val();
}
if($("#num_proiettili").val() == "" || $("#num_proiettili").val() == "0"){
BattagliaNavale.proiettili_totali = 3;
}
else
{
BattagliaNavale.proiettili_totali = $("#num_proiettili").val();
}

if(parseInt(BattagliaNavale.numero_frasi) > parseInt(BattagliaNavale.proiettili_totali)) {
$("#error").text("Non puoi avere pi� navi che missili");
}
else
{
$("#info").animate({top:"-410"},1000);
if($("#nome").val() == "")
{
$("#benvenuto").text("Benvenuto! Leggi la frase e clicca sull'incrocio giusto!");

}
else
{
$("#benvenuto").text("Benvenuto " + $("#nome").val() + "! Leggi la frase e clicca sull'incrocio giusto!");
}
$("#contenitore").show();
BattagliaNavale.inizio();
}
})
}
}

$( document ).ready(function() {
  BattagliaNavale.pre();
});