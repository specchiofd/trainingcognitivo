var bisillabe = ["baffi", "busta", "cane", "casa", "chiave", "cocco", "dito", "faccia", "foca", "foglia", "gatto", "latte", "luna", "mano", "mela", "mucca", "naso", "nave", "nido", "palma", "pane", "pera", "pesce", "piedi", "porta", "rana", "sacco", "scarpa", "sega", "squalo", "topo", "torta", "vaso", "zebra"];
var trisillabe = ["albero","balena","banana","bandiera","birillo","calzini","campana","canguro","cavallo","ciabatte","ciambella","coniglio","corona","delfino","divano","fischietto","formaggio","fragola","gelato","leone","limone","martello","matita","missile","montagna","nuvola","occhiali","ombrello","padella","pallina","pallone","panino","pattini","pecora","piscina"];
var quadrisillabe = ["aereo","altalena","ballerina","bicicletta","caramella","cavalluccio","centesimo","coccinella","coccodrillo","cocomero","cucchiaino","dinosauro","elefante","faraone","farfalla","galleria","lampadina","lavatrice","leccalecca","lucertola","mongolfiera","orologio","palloncini","pantaloni","patatine","pomodoro","serpente","spazzolino","tartaruga","telefono","temperino"];

var arrayBisillabe = [];
var arrayTrisillabe = [];
var arrayQuadrisillabe = [];
var stimoli = 20;
var avanzamentoautomatico = true;
var tipoesposizione = "sillsec";
//var elementiacomparsa = false;
var segnalazioneerroridurante = true;
var dimensioneimmagine = 0;
var sillsec = 1.2;
var secsill = 0.5;
var fisso = 500;
var scomparsa = false;
var sceltastimoli = "automatica";
var autobisillabe = 4;
var autotrisillabe = 4;
var autoquadrisillabe = 4;
var totstimoliauto = 12;
var tempostimato = 0;
var totstimolimanuale = 0;

function setScreen(whichScreen){
$(".screen").hide();
$("#screen_"+whichScreen).show();
}

$(document).ready(function(){
populateArray();
setPulsanti();
});

function populateArray(){
for(i=0;i<bisillabe.length;i++){
arrayBisillabe.push(new Oggetto("bi_"+i,bisillabe[i],2,1));
}
for(i=0;i<trisillabe.length;i++){
arrayTrisillabe.push(new Oggetto("tri_"+i,trisillabe[i],3,1));
}
for(i=0;i<quadrisillabe.length;i++){
arrayQuadrisillabe.push(new Oggetto("tri_"+i,quadrisillabe[i],4,1));
}
populateImages();
}

function setOptions(){
dimensioneimmagine = $("#bicont_1").width() -28;
updateNumStimoli();
updateAvanzamento();
$('.example').width(dimensioneimmagine);
$("#size").val(dimensioneimmagine+28);
$("#auto").show();
$("#manuale").hide();
updateStimoliSelezionati();
}

function populateImages(){
for(i=0; i<arrayBisillabe.length;i++){
$("#bisillabepanelbody").append("<div id='bicont_"+i+"' class=' col-xs-4 col-sm-3'><img sill=2 id='"+ arrayBisillabe[i].id +"' src='./img/bisillabe/"+arrayBisillabe[i].nome+".png' class='item biitem img-thumbnail unselectedborder'></div>");
}
for(i=0; i<arrayTrisillabe.length;i++){
$("#trisillabepanelbody").append("<div id='tricont_"+i+"' class=' col-xs-4 col-sm-3'><img sill=3 id='"+ arrayTrisillabe[i].id +"' src='./img/trisillabe/"+arrayTrisillabe[i].nome+".png' class='item triitem img-thumbnail unselectedborder'></div>");
}
for(i=0; i<arrayQuadrisillabe.length;i++){
$("#quadrisillabepanelbody").append("<div id='quadricont_"+i+"' class=' col-xs-4 col-sm-3'><img sill=3 id='"+ arrayQuadrisillabe[i].id +"' src='./img/quadrisillabe/"+arrayQuadrisillabe[i].nome+".png' class='item quadriitem img-thumbnail unselectedborder'></div>");
}
$('.item').click(function(){

seleziona($(this));
});
setOptions();
}

function updateNumStimoli(){
$("#items").val(stimoli);
}

function updateAvanzamento(){
if(avanzamentoautomatico){
$("#isauto").show();
$("#ismanu").hide();
$("#imgmanu").hide();
$("#imgauto").show();
$("#avanzamentoautomaticowrapper").show();
}
else{
$("#isauto").hide();
$("#ismanu").show();
$("#imgmanu").show();
$("#imgauto").hide();
$("#avanzamentoautomaticowrapper").hide();
}
}

function setPulsanti(){
$("#riavvia").click(function(e){
$("#fine").modal('hide');
currentItem = 0;
errors = 0;
errorsItem = [];

start();
});
$("#cambia").click(function(){
$("#fine").modal('hide');
stimoliselezionati = [];
arrayDaMostrare = [];
currentItem = 0;
errors = 0;
errorsItem = [];
setScreen(0);
});
$("#errore").click(function(){
if(clickable && inGame){
errors += 1;
errorsItem.push(currentItem);
clickable = false;
}
});
$("#partiamo").click(function(){
$("#instruction").modal('hide');
setDefault();
});

$('#selectallbisillabe').change(function() {
		
        if($(this).is(":checked")) {
		$('#bitxtselectall').text("Deseleziona tutto");
			clearBisillabe();
			for(i=0;i<arrayBisillabe.length;i++){
			stimoliselezionati.push(arrayBisillabe[i]);
			$(".biitem").removeClass('unselectedborder');
			$(".biitem").addClass('selectedborder');
			}
			updateStimoliSelezionati();
			
					
			$("#avanti_uno").show();

			}
        else{
		$('#bitxtselectall').text("Seleziona tutto");

clearBisillabe();
updateStimoliSelezionati();
		if(stimoliselezionati.length == 0){
			$("#avanti_uno").hide();
			}
}		
    });
	
$('#selectalltrisillabe').change(function() {
		
        if($(this).is(":checked")) {
		$('#tritxtselectall').text("Deseleziona tutto");
			clearTrisillabe();
			for(i=0;i<arrayTrisillabe.length;i++){
			stimoliselezionati.push(arrayTrisillabe[i]);
			$(".triitem").removeClass('unselectedborder');
			$(".triitem").addClass('selectedborder');
			}
			updateStimoliSelezionati();
			
					
			$("#avanti_uno").show();

			}
        else{
		$('#tritxtselectall').text("Seleziona tutto");

clearTrisillabe();
updateStimoliSelezionati();
		if(stimoliselezionati.length == 0){
			$("#avanti_uno").hide();
			}
}		
    });
	
	
$('#selectallquadrisillabe').change(function() {
		
        if($(this).is(":checked")) {
		$('#quadritxtselectall').text("Deseleziona tutto");
			clearTrisillabe();
			for(i=0;i<arrayQuadrisillabe.length;i++){
			stimoliselezionati.push(arrayQuadrisillabe[i]);
			$(".quadriitem").removeClass('unselectedborder');
			$(".quadriitem").addClass('selectedborder');
			}
			updateStimoliSelezionati();
			
					
			$("#avanti_uno").show();

			}
        else{
		$('#quadritxtselectall').text("Seleziona tutto");

clearQuadrisillabe();
updateStimoliSelezionati();
		if(stimoliselezionati.length == 0){
			$("#avanti_uno").hide();
			}
}		
    });

$("#menostimoli").click(function(){
if(sceltastimoli == "manuale" || (sceltastimoli == "automatica" && stimoli > autobisillabe + autotrisillabe + autoquadrisillabe)){
if(stimoli>1){
stimoli--;
updateNumStimoli();
updateTempoEsecuzione();
}}
});

$("#piustimoli").click(function(){
stimoli++;
updateNumStimoli();
updateTempoEsecuzione();
});

$("#avautomatico").change(function(){
if($(this).is(':checked')){
$("#tempostimatowrapper").show();
avanzamentoautomatico = true;
updateAvanzamento();
updateTempoEsecuzione();
}
});

$("#avamanuale").change(function(){
if($(this).is(':checked')){
$("#tempostimatowrapper").hide();
avanzamentoautomatico = false;
updateAvanzamento();
}
});

$('#tipovelocita').change( function() {
   $(this).find(":selected").each(function () {
            tipoesposizione = $(this).val();
			switch(tipoesposizione){
			case "sillsec":
			$("#speed").val(sillsec);
			updateTempoEsecuzione();
			break;
			case "secsill":
			$("#speed").val(secsill);
			updateTempoEsecuzione();
			break;
			case "fisso":
			$("#speed").val(fisso);
			updateTempoEsecuzione();
			break;
			}
    });
 });

 $("#piulento").click(function(){
 switch(tipoesposizione){
 case "sillsec":
 if((sillsec - 0.1)>0.0){
 sillsec = Math.round((sillsec - 0.1)*100)/100;
 $("#speed").val(sillsec);
 updateTempoEsecuzione();}
 break;
 case "secsill":
 if((secsill - 0.1) > 0.0){
 secsill = Math.round((secsill - 0.1)*100)/100;
 $("#speed").val(secsill);
 updateTempoEsecuzione();}
 break;
 case "fisso":
 if((fisso - 50) > 0){
 fisso -= 50;
 $("#speed").val(fisso);
 updateTempoEsecuzione();}
 break;
 }
 });
 
  $("#piuveloce").click(function(){
  switch(tipoesposizione){
 case "sillsec":
 console.log(sillsec);
 sillsec += 0.1;
 console.log(sillsec);
 sillsec = Math.round(sillsec*10)/10;
 console.log(sillsec);
 $("#speed").val(sillsec);
 updateTempoEsecuzione();
 break;
 case "secsill":
 secsill += 0.1;
 secsill = Math.round(secsill*10)/10;
 $("#speed").val(secsill);
 updateTempoEsecuzione();
 break;
 case "fisso":
 fisso += 50;
 $("#speed").val(fisso);
 updateTempoEsecuzione();
 break;
 }
 });
 
$('#scomparsa').change(function() {
        if($(this).is(":checked")) {
            scomparsa = true;
			$("#iscomparsa").show();
			$("#imgcomparsa").show();
        }
		else{
			scomparsa = false;
			$("#iscomparsa").hide();
			$("#imgcomparsa").hide();
		}
		});
		
$("#piupiccolo").click(function(){
if(dimensioneimmagine > 10){
dimensioneimmagine -=1;
$("#size").val(dimensioneimmagine + 28);
$("#esempio").css("width",dimensioneimmagine+28);
}
});

$("#piugrande").click(function(){
dimensioneimmagine +=1;
$("#size").val(dimensioneimmagine + 28);
$("#esempio").css("width",dimensioneimmagine+28);

});

$('#selezione').change( function() {
   $(this).find(":selected").each(function () {
            sceltastimoli = $(this).val();
			switch(sceltastimoli){
			case "automatica":
			$("#auto").show();
			$("#manuale").hide();
			updateStimoliSelezionati();
			$("#avanti_uno").show();
			break;
			case "manuale":
			$("#auto").hide();
			$("#manuale").show();
			updateStimoliSelezionati();
			if(stimoliselezionati.length == 0){
			$("#avanti_uno").hide();
			}
			break;
			}
    });
 });
 
 $("#piubisillabe").click(function(){
if((totstimoliauto+1)<=stimoli){
autobisillabe += 1;
$("#autobisillabe").val(autobisillabe);
			updateStimoliSelezionati();}
			else{
			$('#max').show();
			}

});

 $("#piutrisillabe").click(function(){
if((totstimoliauto+1)<=stimoli){
autotrisillabe += 1;

$("#autotrisillabe").val(autotrisillabe);
			updateStimoliSelezionati();
}
						else{
			$('#max').show();
			}
});

 $("#piuquadrisillabe").click(function(){

if((totstimoliauto+1)<=stimoli){
autoquadrisillabe += 1;
$("#autoquadrisillabe").val(autoquadrisillabe);
			updateStimoliSelezionati();
}
						else{
			$('#max').show();
			}
});

 $("#menobisillabe").click(function(){
if(autobisillabe > 0){
autobisillabe -= 1;
$("#autobisillabe").val(autobisillabe);
			updateStimoliSelezionati();}


});

 $("#menotrisillabe").click(function(){
if(autotrisillabe > 0){
autotrisillabe -= 1;

$("#autotrisillabe").val(autotrisillabe);
			updateStimoliSelezionati();}
});

 $("#menoquadrisillabe").click(function(){

if(autoquadrisillabe > 0){
autoquadrisillabe -= 1;

$("#autoquadrisillabe").val(autoquadrisillabe);
			updateStimoliSelezionati();}
});

}

function updateStimoliSelezionati(){
if(sceltastimoli == "automatica"){
$('.biitem').removeClass("selectedborder");
$('.biitem').addClass("unselectedborder");
$('.triitem').removeClass("selectedborder");
$('.triitem').addClass("unselectedborder");
$('.quadriitem').removeClass("selectedborder");
$('.quadriitem').addClass("unselectedborder");
totstimoliauto = autobisillabe + autotrisillabe + autoquadrisillabe;
stimoliselezionati = [];
$("#stimoliselezionati").text(totstimoliauto);
}
else{
totstimolimanuale = stimoliselezionati.length;
if(totstimolimanuale <= stimoli){
$("#stimoliselezionati").text(totstimolimanuale);}
else{
$("#stimoliselezionati").text(totstimolimanuale + " - Alcuni stimoli non saranno visualizzati");
}
}
updateTempoEsecuzione();
}

function updateTempoEsecuzione(){
if(sceltastimoli == "automatica"){
//Sillabe in media per parola
totsillabestimate = ((autobisillabe * 2 + autotrisillabe*3 + autoquadrisillabe*4)/totstimoliauto)*stimoli;

switch(tipoesposizione){
case "sillsec":
tempostimato = totsillabestimate * (1/sillsec);
break;
case "secsill":
tempostimato = totsillabestimate * secsill;
break;
case "fisso":
tempostimato = fisso * stimoli/1000;
break;
}
if(totstimoliauto){
$("#tempostimato").text(Math.floor(tempostimato/60)+"' "+Math.round(tempostimato)%60+"''");
$("#avanti").show();
}
else{
$("#tempostimato").text("Seleziona almeno uno stimolo");
$("#avanti").hide();
}


}
else{
if(stimoliselezionati.length > 0){
tempoparziale = 0;

for(i=0;i<stimoliselezionati.length;i++){
tempoparziale += stimoliselezionati[i].sillabe;
}
risposta = Math.round((tempoparziale/stimoliselezionati.length)*stimoli);
switch(tipoesposizione){
case "sillsec":
risposta = risposta * (1/sillsec);
break;
case "secsill":
risposta = risposta * secsill;
break;
case "fisso":
risposta = fisso * stimoli/1000;
break;
}
$("#tempostimato").text(Math.floor(risposta/60)+"' "+Math.round(risposta)%60+"''");
$("#avanti").show();
}
else{
$("#tempostimato").text("Seleziona almeno uno stimolo");
$("#avanti").hide();
}
}
}

