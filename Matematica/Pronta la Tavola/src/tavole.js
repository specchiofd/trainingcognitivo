var colore = "";
var testo_colore = "";

var Tavole = {

check:function(){
var numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;

if (!(numberRegex.test($("#min_x").val())) || !(numberRegex.test($("#max_x").val())) || !(numberRegex.test($("#min_y").val()))  || !(numberRegex.test($("#max_y").val())) )
{
$("#feedback").text("Inserire solo valori numerici nelle caselle");
}
else if ((parseInt($("#min_x").val())>parseInt($("#max_x").val())) || (parseInt($("#min_y").val())>parseInt($("#max_y").val())))
{
$("#feedback").text("Il valore minimo non può superare quello massimo");
}
else if ((parseInt($("#max_x").val())-parseInt($("#min_x").val()) > 14) || (parseInt($("#max_x").val())-parseInt($("#min_x").val()) > 14)){
$("#feedback").text("La lunghezza massima di un lato può essere 15");
}
else
{
this.avvio();
}
},

back:function(){
$("#header").show();
$("#gioco").hide();
$("#parametri").show();
},

avvio: function(){
$("#header").hide();
$("#parametri").hide();
$("#feedback").text("");
this.MIN_WIDTH = parseInt($("#min_x").val());
this.MAX_WIDTH = parseInt($("#max_x").val())+1;
this.MIN_HEIGHT = parseInt($("#min_y").val());
this.MAX_HEIGHT = parseInt($("#max_y").val())+1;
this.WIDTH = this.MAX_WIDTH - this.MIN_WIDTH;
this.HEIGHT = this.MAX_HEIGHT - this.MIN_HEIGHT;
this.PAPER_SIZE = 600;
this.CELL_WIDTH = this.calcola_larghezza();
this.FONT_SIZE = Math.floor(this.CELL_WIDTH/3);
this.genera_tabella();
},

calcola_larghezza:function(){
if (this.WIDTH > this.HEIGHT){
return Math.floor(this.PAPER_SIZE/(this.WIDTH+1)-2);
}
else
{
return Math.floor(this.PAPER_SIZE/(this.HEIGHT+1)-2);
}
},

genera_tabella:function(){
$("#base").empty();
$("#base").append("<div id='riga_top' class='riga'></div>");
for (z=-1;z<this.WIDTH;z++){
if (z==-1){
$("#riga_top").append("<div id='cella_top_"+z+"' class='cella_left'><div class='testo'>X</div></div>");
}
else{
$("#riga_top").append("<div id='cella_top_"+z+"' class='cella_left'><div class='testo'>"+(z+this.MIN_WIDTH)+"</div></div>");
}
}
for(i=0;i<this.HEIGHT;i++){
		$("#base").append("<div id='riga_"+i+"' class='riga'></div>");
		$("#riga_"+i).append("<div id='cella_left_"+i+"' class='cella_left'><div class='testo'>"+(i+this.MIN_HEIGHT)+"</div></div>");
	for (j=0; j<this.WIDTH;j++){
		$("#riga_"+i).append("<div id='cella_"+this.calcola_cella(i,j)+"' class='cella'><div class='testo'>"+(i+this.MIN_HEIGHT)*(j+this.MIN_WIDTH)+"</div></div>");
	}
}
$(".riga").css("height",this.CELL_WIDTH+2);
$(".cella_left").css("width",this.CELL_WIDTH);
$(".cella_left").css("height",this.CELL_WIDTH);
$(".cella_left").css("background-color",colore);
$(".cella").css("width",this.CELL_WIDTH);
$(".cella").css("height",this.CELL_WIDTH);
$(".testo").css("margin-top",Math.floor(this.CELL_WIDTH/3));
$(".testo").css("font-size", Math.floor(this.CELL_WIDTH/3));
$(".cella_left .testo").css("color",testo_colore);
$("#gioco").show();
},

calcola_cella:function(larghezza,altezza){
return (larghezza*10+altezza);
}


}

$(document).ready(function(){
$("#sfondo_iniziale").css("border","4px solid purple");
$("#testo_iniziale").css("border","4px solid purple");
testo_colore = "black";
colore = "lightblue";
$("#gioco").hide();


$(".colore").click(function(){
$(".colore").css("border","4px solid lightgrey");
$(this).css("border","4px solid purple");
colore = $(this).attr("colore");
});

$(".testo_colore").click(function(){
$(".testo_colore").css("border","4px solid lightgrey");
$(this).css("border","4px solid purple");
testo_colore = $(this).attr("colore");
});
});
