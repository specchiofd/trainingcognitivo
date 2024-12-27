stimoli = [];
currentItem = 0;
contatore = 500;
puntiattuali = 0;
MAXCONTATORE = 60;
globalContatore = MAXCONTATORE;
timerOk = false;
inGame = false;
var me;
nometopten = "";
posizione = -1;
target = "";
var corretto;
var errato;
var victory;
var tick;
var gong;
var cases = [["b","d"],["d","b"],["q","p"],["p","q"],["6","9"],["9","6"]];
tabella = [];
classifica = [];


function caricaClassifica(){
classifica = [];
$.ajax({
    type: "GET",
    url: "src/getscores.php",
    data: {
        me: me
    },
    success: function (data) {

	var list = data.split("|");
	list.pop();
    for(i=0;i<list.length;i++){
	if(i%2 == 0){
	classifica.push([]);
	f = i/2;
	classifica[f].push(list[i]);
	classifica[f].push(list[i+1]);}
	}
	i+=1;

    }
});
}

function mostraConsecutive(){
$(".consecutive").css("color","red");
for(i=0;i<currentItem+1;i++){
$("#co_"+i).css("color","yellow");
}
}

function mostraClassifica(){
classifica = [];
$.ajax({
    type: "GET",
    url: "src/getscores.php",
    data: {
        me: me
    },
    success: function (data) {
	console.log(data);
	var list = data.split("|");
	list.pop();
    for(i=0;i<list.length;i++){
	if(i%2 == 0){
	classifica.push([]);
	f = i/2;
	classifica[f].push(list[i]);
	classifica[f].push(list[i+1]);}
	}
	i+=1;
	$("#tabella").empty();

for(i=0;i<classifica.length;i++){
$("#tabella").append("<tr id='criga_"+i+"'><th>"+(i+1)+"</th><th id='cnome_"+i+"'>"+classifica[i][0]+"</th><th id='cpunti_"+i+"'>"+classifica[i][1]+"</th></tr>");
if($("#cnome_"+i).text() == $("#nome").val() && $("#cpunti_"+i).text() == punti){
$("#criga_"+i).css("background-color","lightblue");
}
}
$("#highscore").modal("show");
    }
});

}

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

$(document).ready(function(){
caricaClassifica();

$("#inserisci").click(function(){
    var values = {
            'name': $("#nome").val(),
            'score': puntiattuali
    };
 $.ajax({
                url: 'src/savescores.php',
                dataType: 'text',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded',
                data: values,
				
                success: function( data, textStatus, jQxhr ){
					
					$("#fine").modal("hide");
                    mostraClassifica();
                },
                error: function( jqXhr, textStatus, errorThrown ){
				
                    console.log( errorThrown );
                }
            });

});

$("#rigioca").click(function(){
$("#fine").modal("hide");
$("#wrapper").show();
startTastiera();
});

$("#rigiocadue").click(function(){
$("#highscore").modal("hide");
$("#wrapper").show();
startTastiera();
});

$("#guardaclassifica").click(function(){
$("#fine").modal("hide");
$("#highscore").modal("show");
mostraClassifica();
});

$("#classifica").click(function(){
caricaClassifica();
$("#fine").modal("hide");
mostraClassifica();
});

loadAudio();
$.ajaxSetup({ cache: false });
istruzioni();

});


function loadAudio(){
corretto = document.createElement('audio');
corretto.setAttribute('src', 'src/corretto.wav');
errato = document.createElement('audio');
errato.setAttribute('src', 'src/errato.wav');
tick = document.createElement('audio');
tick.setAttribute('src', 'src/tick.wav');
victory = document.createElement('audio');
victory.setAttribute('src', 'src/victory.wav');
gong = document.createElement('audio');
gong.setAttribute('src', 'src/gong.wav');
}

function restartTable(){
$("#realpunti").css("background-color","white");
currentItem = 0;
mostraConsecutive();
$("#schermata").empty();
tabella = [];
quale = getRandomInt(0,cases.length-1);
for(i=0; i<49; i++){
if(i<5){
tabella.push(cases[quale][0]);}
else
{
tabella.push(cases[quale][1]);
}

}

target = cases[quale][0];
tabella = shuffle(tabella);
for(i=0;i<49;i++){
$("#schermata").append("<div class='lettera' selezionata='n'>"+tabella[i]+"</div>");
}
$(".lettera").css("width",$("#schermata").width()/7 + "px");
$(".lettera").css("height",$(".lettera").width() + "px");
$(".lettera").css("line-height",$(".lettera").height() + "px");
$(".lettera").css("font-size",$(".lettera").height() + "px");
$(".lettera").click(function(){

check($(this).text(),$(this));
});
}

function istruzioni(){
target = "";
puntiattuali = 0;
timerOk = false;
inGame = false;
$("#wrapper").empty();
$("#wrapper").append("<h4 id='scegli'></h4><div id='sotto'></div>");
$("#scegli").text("In ogni pagina ci sono 5 simboli diversi dagli altri. Trovali prima che scada il tempo! Per ogni lettera trovata otterrai dei secondi extra!");
$("#sotto").empty();
$("#sotto").append("<div class='row text-center'><img src='src/Spiegazione.png' style='margin:0px auto' class='img-responsive'></div><div class='row text-center'='><button class='btn btn-lg btn-primary' style='margin-top:20px; padding-left:55px; padding-right:55px' id='inizia'>INIZIA</button></div>");
$("#istruzioni").fadeIn(1000);
$("#inizia").click(function(){
startTastiera(); 
});
}

function startTastiera(){
puntiattuali = 0;
$("#wrapper").empty();
$("#wrapper").append('<div class="row" ><div class="col-md-3 col-lg-3 hidden-md hidden-sm" style="padding:0px"></div><div style="padding:0px" class="col-xs-12 col-sm-12 col-md-6 col-lg-6"><div class="col-xs-5"><h4 id="punti">Punti: <span class="badge" id="realpunti"></span></h4></div><div class="col-xs-7 text-right"><h4 style="padding:10px 15px;" ><span style="background-color:navy; border-radius:5px; padding:10px 15px; margin:1.5em auto; border:1px solid white"> <span class="glyphicon glyphicon-screenshot consecutive" aria-hidden="true" id="co_1"> </span> <span class="glyphicon glyphicon-screenshot consecutive" aria-hidden="true" id="co_2"> </span> <span class="glyphicon glyphicon-screenshot consecutive" aria-hidden="true" id="co_3"> </span> <span class="glyphicon glyphicon-screenshot consecutive" aria-hidden="true" id="co_4"> </span> <span class="glyphicon glyphicon-screenshot consecutive" aria-hidden="true" id="co_5"> </span></span></h4></div></div><div style="padding:0px" class="col-md-3 col-lg-3 hidden-md hidden-sm"></div></div>');
$("#wrapper").append('<div class="row"><div class="col-xs-12"><div id="myprogress" class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" ></div></div></div>');
$("#realpunti").text("0");



$("#wrapper").append("<div class='row'><div class='col-md-3 col-lg-3 hidden-md hidden-sm'></div><div class='col-xs-12 col-sm-12 col-md-6 col-lg-6'><div id='schermata'></div></div><div class='col-md-3 col-lg-3 hidden-md hidden-sm'></div></div>");
restartTable();		
gameStart();   
}

function gameStart(){
posizione = -1;
timerOk = true;
globalContatore = MAXCONTATORE;
inGame = true;
updateContatore();
globaltimer = setInterval(function(){
		
		if(inGame){
		puntiattuali += 1;
		$("#realpunti").text(parseInt(puntiattuali));
		globalContatore -= 2;
		updateContatore();
		if(globalContatore > 0){
		$("#progress").width($("#progress").width() - 10);
		if(globalContatore < 4){
		tick.play();
		}
		}
		else{
		clearInterval(globaltimer);
		gong.play();
		fineGioco();
		}
		}
		},1000
);

}



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function check(lettera,ildiv){

inGame = false;
if (lettera == target && ildiv.attr("selezionata") == "n"){
currentItem += 1;

if(currentItem != 5){
mostraConsecutive();
victory.play();
globalContatore +=5;
updateContatore();
$("#realpunti").text(parseInt(puntiattuali));
}
else{
mostraConsecutive();
corretto.play();
globalContatore +=3;
		updateContatore();
$("#realpunti").text(parseInt(puntiattuali));
}

$("#realpunti").css("background-color","green");
ildiv.css("background-color","lightgreen");
ildiv.attr("selezionata","s");

setTimeout(function(){
if(currentItem!=5){
$("#realpunti").css("background-color","white");
ildiv.css("opacity","0");
}
else
{
restartTable();
}
inGame = true;
},500);
}else
{
var myerrato = errato;
myerrato.play();
$("#realpunti").css("background-color","red");
if (globalContatore - 10 > 0){
globalContatore -=10;
		updateContatore();
$("#realpunti").text(parseInt(puntiattuali));
}
else
{
globalContatore -=10;
fineGioco();
}


ildiv.css("background-color","lightgrey");
setTimeout(function(){
ildiv.css("background-color","white");
$("#realpunti").css("background-color","white");
inGame = true;
},500);
}


}

function updateContatore(){
		if(globalContatore < 60){
		$("#myprogress").width(globalContatore*(10/6)+"%");
		}else{
		$("#myprogress").width("100%");
		}
		$("#myprogress").text(globalContatore);
}

function fineGioco(){
inGame = false;
timerOk = false;
$("#wrapper").fadeOut(500, function(){
$("#nome").focus();

$("#fine").modal("show");
$("#nome").val("");
if(punti > classifica[classifica.length-1][1] || classifica.length<20){
$("#footeryes").show();
$("#footerno").hide();
$("#highyes").show();
$("#highno").hide();
}else{
$("#footeryes").hide();
$("#footerno").show();
$("#highyes").hide();
$("#highno").show();
}


/*
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

*/
});

}


