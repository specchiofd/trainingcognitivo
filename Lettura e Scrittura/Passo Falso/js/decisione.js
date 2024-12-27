var LUNGHEZZA = 0;
var posizione = 1;
var livello = 0;
var stimoli = [];
var stimoliEsatti = [];
var risposte = 0;
var vite = 3;
var inGame = false;
var gameState = 0;
var me;
//item = l'avanzamento
item = 0;

$(document).ready(function(){
setTable();
setInitials();
$("#gioca").click(function(){
	avviaLivello(livello);
});
$("#riprova").click(function(){
$('#errore').modal('hide');
avviaLivello(livello);	
});
$("#next").click(function(){
setLivello();
vite = 3;
setLives();
$('#superato').modal('hide');
avviaLivello(livello);	
});

$("#rigiocauno").click(function(){
setInitials();
$('#sconfitta').modal('hide');
avviaLivello(livello);	
});

$("#rigiocadue").click(function(){
setInitials();
$('#vittoria').modal('hide');
avviaLivello(livello);	
});


});

function setTable(){
		for(i=0;i<7;i++){
			
		$("#colonna_0").append("<div class='pavimento' pos="+(i*3)+" id='casella_"+(i*3)+"'></div>");
		$("#colonna_1").append("<div class='pavimento' pos="+((i*3)+1)+" id='casella_"+((i*3)+1)+"'></div>");
		$("#colonna_2").append("<div class='pavimento' pos="+((i*3)+2)+" id='casella_"+((i*3)+2)+"'></div>");
	}
}

function setInitials(){
	vite = 3;
	item = 0;
	var posizione = 1;
var livello = 0;
var stimoli = [];
var stimoliEsatti = [];
var inGame = false;
var gameState = 0;
item = 0;
	setScreen(0);
	setLives();
	setLivello();
}

function setLives(){
	
	switch(vite){
		case 3:
		$("#vita_3").show();
		$("#vita_2").show();
		$("#vita_1").show();
		$("#novita_3").hide();
		$("#novita_2").hide();
		$("#novita_1").hide();
		break;
		case 2:
		$("#vita_3").hide();
		$("#novita_3").show();		
		break;
		case 1:
		$("#vita_2").hide();
		$("#novita_2").show();		
		break;
		case 0:
		$("#vita_1").hide();
		$("#novita_1").show();		
		break;
		}
				$("#quantevite").text(vite+1);
		if(vite+1 == 1){
		$("#vitavite").text("vita");}
		else{
		$("#vitavite").text("vite");	
	}
}

function setLivello(){
	$("#livello").text((livello+1));
}

function setScreen(schermata){
	$(".screen").hide();
	$( ".screen[screen="+schermata+"]" ).fadeIn(500);
}

function avviaLivello(chelivello){
	posizione = 1;
	item = 0;
	window.scrollTo(0,0);
	$(".pavimento").text("");
	$(".pavimento").removeClass("giocatore");
	$(".pavimento").removeClass("primogiocatore");
	$(".pavimento").removeClass("errore");
	$("#casella_1").addClass('primogiocatore');

	setScreen(1);
	LARGHEZZA = $(".pavimento").width();
	$(".pavimento").height(LARGHEZZA);
	$(".pavimento").css('line-height',LARGHEZZA+"px");
	$(".giocatore").height(LARGHEZZA);
	$(".giocatore").css('line-height',LARGHEZZA+"px");
	stimoli = [];
	stimoliEsatti = [];
	console.log(parole[livello]);
	
	for(i=0; i<parole[livello].length;i++){
		stimoli.push([]);
		for(j=0;j<3;j++){
		stimoli[i].push(parole[livello][i][j]);
		}
	}

	shuffle(stimoli);

	for(i=0;i<stimoli.length;i++){
		stimoliEsatti.push(stimoli[i][0]);
	}
	inGame = true;
	$(".pavimento").css("opacity","1");

	console.log("fade to iniziale");
	$("#casella_0").fadeTo(1500,0);	
	$("#casella_2").fadeTo(1500,0);

		showItems();
}

function showItems(){

	shuffle(stimoli[item]);

			posizione = parseInt(posizione);
	if(posizione %3 == 0){
		
$("#casella_"+(posizione+ 1)).addClass("hoverable");
$("#casella_"+(posizione+ 3)).addClass("hoverable");
$("#casella_"+(posizione+ 4)).addClass("hoverable");
$("#casella_"+(posizione+ 1)).text(stimoli[item][0]);
$("#casella_"+(posizione+ 3)).text(stimoli[item][1]);
$("#casella_"+(posizione+ 4)).text(stimoli[item][2]);			
	}else if (posizione % 3 == 1){

$("#casella_"+(posizione+ 2)).addClass("hoverable");
$("#casella_"+(posizione+ 3)).addClass("hoverable");
$("#casella_"+(posizione+ 4)).addClass("hoverable");
$("#casella_"+(posizione+ 2)).text(stimoli[item][0]);
$("#casella_"+(posizione+ 3)).text(stimoli[item][1]);
$("#casella_"+(posizione+ 4)).text(stimoli[item][2]);	
	}
	else{


$("#casella_"+(posizione- 1)).addClass("hoverable");
$("#casella_"+(posizione+ 2)).addClass("hoverable");
$("#casella_"+(posizione+ 3)).addClass("hoverable");
$("#casella_"+(posizione- 1)).text(stimoli[item][0]);
$("#casella_"+(posizione+ 2)).text(stimoli[item][1]);
$("#casella_"+(posizione+ 3)).text(stimoli[item][2]);			
	}
gameState = 0;	
manageClick();
}

function manageClick(){
	$(".hoverable").click(function(){
	if(gameState == 0 && inGame){
		var position = $(this).position();
		goToByScroll($(this).attr("id"));
		gameState = 1;
		$(".pavimento").removeClass("hoverable");
		$("#casella_"+posizione).addClass("pavimento");
		if(posizione == 1){
			$("#casella_"+posizione).removeClass("primogiocatore");
		}
		else{
		$("#casella_"+posizione).removeClass("giocatore");
		$("#casella_"+posizione).removeClass("primogiocatore");}
		$("#casella_"+$(this).attr("pos")).addClass("giocatore");
		
		//Successo
		me = $(this);

		if($(this).text() == stimoliEsatti[item]){

			setTimeout(function(){
			//AggiungiPunti

			$(".pavimento").text("");
			me.removeClass("giocatore");
			me.addClass("primogiocatore");
			nascondiAltri(posizione,me.attr("pos"));
			item += 1;
			posizione = me.attr("pos");
			if(posizione != 18 && posizione != 19 && posizione != 20){
			showItems();}
			else{
				
				livello+=1;
				if(livello !=5){
				$("#superato").modal('show');}
				else{
					$("#vittoria").modal('show');
				}
			}},1500);
		}
		else{
					setTimeout(function(){
			//AggiungiPunti
			var err = me.text();
			$(".pavimento").text("");
			me.removeClass("giocatore");
			me.addClass("errore");
			vite -= 1;
			if(vite > -1){
			setTimeout(function(){
			setLives();
			$("#parolaesatta").text(stimoliEsatti[item]);
			$("#parolaerrata").text("("+err+")");			
			$('#errore').modal('show');},1000)} 
else{
	setTimeout(function(){
			setLives();
			$("#parolaesattadue").text(stimoliEsatti[item]);
			$("#parolaerratadue").text("("+err+")");			
			$('#sconfitta').modal('show');},1000);} 
			
},2000);	
		}
	}
});
}

function vittoria(){
	
}

function nascondiAltri(prev,att){

	att = parseInt(att);

	if((att-prev) % 3 == 0){
	//avanti
	if(prev % 3 == 0){
	$("#casella_"+(prev+1)).fadeTo(500,0);
	$("#casella_"+(prev+2)).fadeTo(500,0);		
	}
	else if(prev % 3 == 1)
	{
	$("#casella_"+(prev-1)).fadeTo(500,0);
	$("#casella_"+(prev+1)).fadeTo(500,0);	
	}
	else{
	$("#casella_"+(prev-2)).fadeTo(500,0);
	$("#casella_"+(prev-1)).fadeTo(500,0);			
	}
	}
	else if((att-prev)%3 == 1){
	//avanti destra
	if(att-prev > 1){
	if(prev % 3 == 1)
	{
	$("#casella_"+(prev-1)).fadeTo(500,0);
	$("#casella_"+(prev+1)).fadeTo(500,0);	
	}
	else{
	$("#casella_"+(prev+1)).fadeTo(500,0);
	$("#casella_"+(prev+2)).fadeTo(500,0);			
	}
	}
	else{
	if(prev % 3 == 1)
	{
	$("#casella_"+(prev-1)).fadeTo(500,0);
	}
	else{
	$("#casella_"+(prev+2)).fadeTo(500,0);			
	}		
	}
	}else
			{
	//avanti sinistra
	if(att-prev > -1){
	if(prev % 3 == 1)
	{
	$("#casella_"+(prev-1)).fadeTo(500,0);
	$("#casella_"+(prev+1)).fadeTo(500,0);	
	}
	else{
	$("#casella_"+(prev-1)).fadeTo(500,0);
	$("#casella_"+(prev-2)).fadeTo(500,0);			
	}
	}
	else{
	if(prev % 3 == 1)
	{
	$("#casella_"+(prev+1)).fadeTo(500,0);
	}
	else{
	$("#casella_"+(prev-2)).fadeTo(500,0);			
	}		
	}
	}	
	if(att % 3 == 1){
	$("#casella_"+(att-1)).fadeTo(500,0);	
	$("#casella_"+(att+1)).fadeTo(500,0);		
	}		
	
}

function goToByScroll(id){
      // Remove "link" from the ID
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
}