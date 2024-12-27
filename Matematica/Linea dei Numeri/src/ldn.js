var colore = "";
var testo_colore = "";

var Ldn = {

nuova:function(){
$("#crea").show();
$("#primo").val("");
$("#operazione").empty();
$("#secondo").empty();
$("#secondo").hide();
$("#operazione").hide();
$("#striscia").css("width","40px");
$("#striscia").css("background-color","trasparent");
$("#gioco").hide();
$("#parametri").show();
$("#linea_container").empty();
$("#numeri_container").empty();
$("#uguale").hide();
$("#risultato").hide();
$("#nuova").hide();
$("#stampa").hide();
$("#primo").css("border-bottom","1px solid black");
$("#primo").prop('disabled',false);
$("#primo").css('background-color','antiquewhite');
$("#secondo").css("border-bottom","1px solid black");
$("#secondo").prop('disabled',false);
$("#operazione").prop('disabled',false);
$("#feedback").text("");
$("#risultato").val("");
$("#pointer").css("background-image","url('src/car.png')");
this.momento = 0;
},

check:function(){
var numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;

if (!(numberRegex.test($("#min").val())) || !(numberRegex.test($("#max").val())) || !(numberRegex.test($("#min").val()))  || !(numberRegex.test($("#max").val())) )
{
$("#feedback").text("Inserire solo valori numerici nelle caselle");
}
else if ((parseInt($("#min").val())>parseInt($("#max").val())))
{
$("#feedback").text("Il valore minimo non può superare quello massimo");
}
else if (((parseInt($("#max").val())-parseInt($("#min").val())) / parseInt($("#passo").val()))>20){
$("#feedback").text("La linea può contenere al massimo 20 elementi");
}
else if ((parseInt($("#max").val())-parseInt($("#min").val()))%parseInt($("#passo").val()) != 0){
$("#feedback").text("Il valore massimo deve ricadere nel passo");
}
else
{
this.avvio();
}
},


avvio: function(){
$("#crea").hide();
$("#striscia").hide();
//$("#header").hide();
this.momento = 0;
$("#parametri").hide();
$("#feedback").text("");
this.MIN = parseInt($("#min").val());
this.MAX = parseInt($("#max").val())+1;
this.PASSO = parseInt($("#passo").val());
this.PAPER_SIZE = 600;
this.CELL_WIDTH = this.calcola_larghezza();
this.FONT_SIZE = Math.floor(this.CELL_WIDTH/3);
this.genera_linea();
$("#primo").show();
$("#primo").focus();
$("#prima_freccia").show();
$("#feedback_operazione").text("Inserisci il primo parametro e premi INVIO o clicca sulla freccia");
},

azione: function(quale){
switch(quale){
case 0:
	if (numberRegex.test($("#primo").val())){
	if(parseInt($("#primo").val()) <  this.MIN || parseInt($("#primo").val()) >  this.MAX || parseInt($("#primo").val())%this.PASSO != 0)
	{
		$("#feedback_operazione").text("Il numero non si trova sulla linea. Riprovare");
	}
	else
	{
		$("#operazione").focus();
		$("#primo").css("border-bottom","1px solid white");
		$("#primo").css("background-color","white");
		$("#operazione").css("background-color","antiquewhite");

		$("#striscia").css("left",(((parseInt($("#primo").val()-this.MIN)/this.PASSO))*(this.CELL_WIDTH+1)+(this.CELL_WIDTH+2)/2) -20);
		
		$("#striscia").show();
		$("#prima_freccia").hide();
		$("#primo").prop('disabled','true'); 
		this.momento = 1;
		$("#feedback_operazione").text("Seleziona l'operazione e premi INVIO o clicca sulla freccia");
		if(parseInt($("#primo").val()) == this.MAX){
		$("#operazione").append("<option id='differenza'>-</option>");
		}
		else if (parseInt($("#primo").val()) == this.MIN){
		$("#operazione").append("<option id='somma'>+</option>");
		}
		else
		{
		$("#operazione").append("<option id='somma'>+</option>");
		$("#operazione").append("<option id='differenza'>-</option>");
		}
		$("#operazione").show();
		$("#seconda_freccia").show();
	}
	}
	else
	{
	$("#feedback").text("Inserire un numero");
	}
break;
case 1:
	$("#secondo").focus();
	$("#operazione").css("border-bottom","1px solid white");
	$("#operazione").css("background-color","white");
	$("#secondo").css("background-color","antiquewhite");
	$("#operazione").prop('disabled','true');
	$("#seconda_freccia").hide();
	$("#secondo").show();
	$("#feedback_operazione").text("Seleziona il secondo termine e premi INVIO o clicca su uguale");
	if($("#operazione option:selected").text() == "+"){
		for(i=1; i<(parseInt($("#max").val())-parseInt($("#primo").val())+1);i++)
		{
			if(i%this.PASSO == 0)
			{
				$("#secondo").append("<option>"+i+"</option>");
			}
		}
	}
	else
	{
	
		for(i=1; i<=(parseInt($("#primo").val())-this.MIN);i++)
		{
			if(i%this.PASSO == 0 && i!=0 && i>0)
			{
				$("#secondo").append("<option>"+i+"</option>");
			}
		}
	}
	this.momento = 2;
	$("#uguale").show();
break;
case 2:
	$("#secondo").css("border-bottom","1px solid white");
	$("#secondo").css("background-color","white");
	$("#secondo").prop('disabled','true');
	
	$("#feedback_operazione").text("");
	this.active = false;
	this.posizione = 0;
	$("#risultato").prop('disabled','true');
	
	if ($("#operazione option:selected").text() == "+"){
	$("#pointer").css("background-image","url('src/car_avanti.png')");
	$("#striscia").css("background-color","lightgreen");
	$("#pointer").css("float","right");
	spostamento = setInterval(function(){
			$("#striscia").animate({width: "+="+ (Ldn.CELL_WIDTH+1)},"slow");
			Ldn.posizione += 1;
			
			if (Ldn.posizione == parseInt($("#secondo").val())/Ldn.PASSO){	
				
				clearInterval(spostamento);
				
				setTimeout(function(){$("#risultato").val(parseInt($("#primo").val())+parseInt($("#secondo").val())); $("#stampa").css("display","inline-block"); $("#nuova").css("display","inline-block"); },1200);
				
				
			}
	}, 500);
	
	}
	else
	{
	$("#striscia").css("background-color","pink");
	$("#pointer").css("float","left");
	spostamento = setInterval(function(){
			$("#pointer").css("background-image","url('src/car_indietro.png')");
			$("#striscia").animate({left: "-="+ (Ldn.CELL_WIDTH+1), width:"+="+(Ldn.CELL_WIDTH+1)},"slow");
			Ldn.posizione += 1;
			if (Ldn.posizione == parseInt($("#secondo").val())/Ldn.PASSO){
				clearInterval(spostamento);
				setTimeout(function(){$("#risultato").val(parseInt($("#primo").val())-parseInt($("#secondo").val()));  $("#stampa").css("display","inline-block"); $("#nuova").css("display","inline-block");},1200);

			}
			
	}, 500);
	}
	$("#risultato").css("border-bottom","1px solid white");
	$("#risultato").css("background-color","white");
	$("#risultato").show();

break;
}
},

calcola_larghezza:function(){
return Math.floor(this.PAPER_SIZE/((this.MAX-this.MIN-1)/this.PASSO)-2);
},

genera_linea:function(){
$("#numeri_container").css("width",this.PAPER_SIZE+this.CELL_WIDTH+2);
$("#numeri_container").css("left","-"+((this.CELL_WIDTH+2)/2));
$("#sopra_linea").css("left","-"+(this.CELL_WIDTH+2)/2);
for(i=0; i<(this.MAX-this.MIN-1)/this.PASSO; i++){
$("#linea_container").append("<div class='cella'></div>");
$("#linea_container :last-child").css("width",this.CELL_WIDTH);
$("#linea_container :last-child").css("border-right","1px solid " + colore);
$("#linea_container :last-child").css("border-bottom","1px solid " + colore);
}
$("#linea_container :first-child").css("border-left","1px solid "+colore);

for(i=this.MIN; i<this.MAX; i++){
if(i%this.PASSO == 0){
$("#numeri_container").append("<div class='cella_numero'>"+i+"</div>");
$("#numeri_container :last-child").css("width",this.CELL_WIDTH);
$("#numeri_container :last-child").css("color",numeri_colore);
if(i == 0){
$("#numeri_container :last-child").css("font-weight",900);
}
}
}

this.active = true;
$("#gioco").show();
}
}





$(document).ready(function(){
numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
$("#linea_iniziale").css("border","4px solid purple");
$("#numeri_iniziale").css("border","4px solid purple");
numeri_colore = "black";
colore = "black";
$("#gioco").hide();


$(".colore").click(function(){
$(".colore").css("border","4px solid lightgrey");
$(this).css("border","4px solid purple");
colore = $(this).attr("colore");
});

$(".numero_colore").click(function(){
$(".numero_colore").css("border","4px solid lightgrey");
$(this).css("border","4px solid purple");
numeri_colore = $(this).attr("colore");
});

$("#prima_freccia").click(function(){
if (Ldn.active){
Ldn.azione(0);
}
});

$("#seconda_freccia").click(function(){
if (Ldn.active){
Ldn.azione(1);
}
});

$("#uguale").click(function(){
if (Ldn.active){
Ldn.azione(2);
}
});

});

$(document).keypress(function(e){
    var pressEnter =(e.which==13 ? 1 : 0);
    if (pressEnter && Ldn.active){
		Ldn.azione(Ldn.momento);
	}
	
});
