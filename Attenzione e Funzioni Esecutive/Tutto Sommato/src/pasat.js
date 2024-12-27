





function gameStart(){

if(modo == 'tastiera'){
$("#casella").prop('disabled', true);}
generaNuovo();
timer = setInterval(function(){
		if(timerOk){
		if(contatore > 0){
		contatore -= 5;
		prossimipunti -= 1;
		if(inGame){
		$("#punti").text("Punti: " + puntiattuali + " + " + prossimipunti);}}
		else
		{
		if(stimoli.length > 1){
		check();
		}
		else
		{
		generaNuovo();
		}
		}
		}
		},50);

globaltimer = setInterval(function(){
		
		if(inGame){
		console.log(globalContatore);
		globalContatore -= 1;
		if(globalContatore > 0){
		$("#progress").width($("#progress").width() - 10);
		if(globalContatore < 4){
		tick.play();
		}
		}
		else{
		clearInterval(timer);
		clearInterval(globaltimer);
		gong.play();
		fineGioco();
		}
		}
		},1000
);

}





function check(){
inGame = false;
timerOk = false;
if(modo=='tastiera'){
if (parseInt($("#casella").val()) == stimoli[stimoli.length-1] + stimoli[stimoli.length-2]){
var mycorretto = document.createElement('audio');
mycorretto.setAttribute('src', audioArray[9]);
mycorretto.play();
$("#punti").text("Punti: " + (puntiattuali+prossimipunti));
$("#and").text(" + " + prossimipunti);
$("#and").css("color","green");
$("#and").css("left","-20px");
$("#and").css("top","-10px");
$("#and").animate({
    opacity: 0,
    top: "-=40",
  }, 300, function() {
    $("#and").text("");
	$("#and").css("opacity","1")
	$("#and").css("top","-10"); 
  });
puntiattuali = puntiattuali+prossimipunti;
$("#schermata").css("background-color","lightgreen");
$("#schermata").text("");
setTimeout(function(){
$("#schermata").css("background-color","white");
$("#schermata").css("color","blue");
$("#punti").css("color","black");
inGame = true;
timerOk = true;
generaNuovo();
},500);
}else
{
var myerrato = document.createElement('audio');
myerrato.setAttribute('src', audioArray[10]);
myerrato.play();
if (puntiattuali - prossimipunti > 0){
puntiattuali = puntiattuali - prossimipunti;}
else
{
puntiattuali = 0;
}
$("#punti").css("color","red");
$("#punti").text("Punti: " + puntiattuali);
$("#and").text(" - " + prossimipunti);
$("#and").css("color","red");
$("#and").css("left","-20px");
$("#and").css("top","-10px");
$("#and").animate({
    opacity: 0,
    top: "-=40",
  }, 300, function() {
    $("#and").text("");
	$("#and").css("opacity","1")
	$("#and").css("top","-10"); 
  });

$("#schermata").css("background-color","lightgrey");
$("#schermata").text("");
setTimeout(function(){
$("#schermata").css("background-color","white");
$("#schermata").css("color","blue");
$("#punti").css("color","black");
inGame = true;
timerOk = true;
generaNuovo();
},500);
}
}

else

{
if (parseInt($("#casellaTablet").text()) == stimoli[stimoli.length-1] + stimoli[stimoli.length-2]){
corretto.play();
$("#punti").text("Punti: " + (puntiattuali+prossimipunti));
$("#and").text(" + " + prossimipunti);
$("#and").css("color","green");
$("#and").css("left","-20px");
$("#and").css("top","-10px");
$("#and").animate({
    opacity: 0,
    top: "-=40",
  }, 300, function() {
    $("#and").text("");
	$("#and").css("opacity","1")
	$("#and").css("top","-10"); 
  });
puntiattuali = puntiattuali+prossimipunti;
$("#schermata").css("background-color","lightgreen");
$("#schermata").text("");
setTimeout(function(){
$("#schermata").css("background-color","white");
$("#schermata").css("color","blue");
$("#punti").css("color","black");
inGame = true;
timerOk = true;
generaNuovo();
},500);
}else
{
errato.play();
if (puntiattuali - prossimipunti > 0){
puntiattuali = puntiattuali - prossimipunti;}
else
{
puntiattuali = 0;
}
$("#punti").css("color","red");
$("#punti").text("Punti: " + puntiattuali);
$("#and").text(" - " + prossimipunti);
$("#and").css("color","red");
$("#and").css("left","-20px");
$("#and").css("top","-10px");
$("#and").animate({
    opacity: 0,
    top: "-=40",
  }, 300, function() {
    $("#and").text("");
	$("#and").css("opacity","1")
	$("#and").css("top","-10"); 
  });

$("#schermata").css("background-color","lightgrey");
$("#schermata").text("");
setTimeout(function(){
$("#schermata").css("background-color","white");
$("#schermata").css("color","blue");
$("#punti").css("color","black");
inGame = true;
timerOk = true;
generaNuovo();
},500);
}

}
}

function fineGioco(){
inGame = false;
timerOk = false;
$("#wrapper").fadeOut(500, function(){
$("#wrapper").empty();
$("#wrapper").append("<div id='totalizzato'>Hai totalizzato: </div>");
$("#wrapper").append("<div id='score'>" + puntiattuali + " punti!</div>");
if(puntiattuali < me.highscore[99].Punti){
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
$("#wrapper").append("<div id='yestopten'>Complimenti! Sei entrato nella top 100! <br/><br/>Inserisci il tuo nome</div>");
$("#wrapper").append("<input id='nome'></div>");
$("#nome").focus();
$("#wrapper").append("<div id='inserisci' placeholder='il tuo nome'>INSERISCI</div>");
$("#inserisci").click(function(){
nometopten = $("#nome").val();
insertScore();
});
}
});
$("#wrapper").fadeIn(500);
}


