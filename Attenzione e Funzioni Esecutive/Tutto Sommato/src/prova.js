stimoli = [];
currentItem = [];
punti = 0;
MAXCONTATORE = 60;
globalContatore = MAXCONTATORE;
timerOk = false;
inGame = false;
var me;
nometopten = "";
posizione = -1;
audioArray = [];
var corretto;
var errato;
var tick;
var gong;
writable = false;
prossimipunti = 0;
corretteconsecutive = 0;
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

    }
});
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

$(document).ready(function(){

$("#rigioca").click(function(){
$("#fine").modal("hide");
setScreen(1);
startPasat();
});

$("#rigiocadue").click(function(){
$("#highscore").modal("hide");
setScreen(1);
startPasat();
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


$("#inserisci").click(function(){
    var values = {
            'name': $("#nome").val(),
            'score': punti
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
loadAudio();
$.ajaxSetup({ cache: false });
$("#inizia").click(function(){
setScreen(1);
startPasat();
});


$(document).keydown(function(e) {
    if(e.which == 13 && inGame) {
        check();
    }
	else  if (e.which >= 48 && e.which <= 57 ) {

        if(inGame && !(e.which == 48 && $("#casella").val() == "")){
		$("#casella").val(parseInt($("#casella").val()*10)+parseInt(e.which-48));
		}
		}
	else  if (e.keyCode >= 96 && e.keyCode <= 105) {

        if(inGame && !(e.which == 96 && $("#casella").val() == "")){
		$("#casella").val(parseInt($("#casella").val()*10)+parseInt(e.which-96));
		}
		}	
	else if(e.which == 8){
	e.preventdefault();
	if(inGame && parseInt($("#casella").val()) > 9){
	
	$("#casella").val(parseInt($("#casella").val()/10));
	}else if(inGame && parseInt($("#casella").val()) <= 9){
	$("#casella").val("");
	}
	}
	else{
	
	}
    
});
$(".tasto").click(function(){
if(writable && !($("#casella").val() == "" && $(this).attr("numero")==0)){
$("#casella").val(parseInt($("#casella").val()*10)+parseInt($(this).attr("numero")));}
});
$(".tastook").click(function(){
if(inGame){
check();}
});
$(".tastocancella").click(function(){
	if(inGame && parseInt($("#casella").val()) > 9){
	
	$("#casella").val(parseInt($("#casella").val()/10));
	}else if(inGame && parseInt($("#casella").val()) <= 9){
	$("#casella").val("");
	}
});
start();



});




function loadAudio(){
corretto = document.createElement('audio');
corretto.setAttribute('src', 'src/corretto.wav');
errato = document.createElement('audio');
errato.setAttribute('src', 'src/errato.wav');
tick = document.createElement('audio');
tick.setAttribute('src', 'src/tick.wav');
gong = document.createElement('audio');
gong.setAttribute('src', 'src/gong.wav');
var uno = document.createElement('audio');
uno.setAttribute('src', 'src/uno.wav');
var due = document.createElement('audio');
due.setAttribute('src', 'src/due.wav');
var tre = document.createElement('audio');
tre.setAttribute('src', 'src/tre.wav');
var quattro = document.createElement('audio');
quattro.setAttribute('src', 'src/quattro.wav');
var cinque = document.createElement('audio');
cinque.setAttribute('src', 'src/cinque.wav');
var sei = document.createElement('audio');
sei.setAttribute('src', 'src/sei.wav');
var sette = document.createElement('audio');
sette.setAttribute('src', 'src/sette.wav');
var otto = document.createElement('audio');
otto.setAttribute('src', 'src/otto.wav');
var nove = document.createElement('audio');
nove.setAttribute('src', 'src/nove.wav');
var nove = document.createElement('audio');
nove.setAttribute('src', 'src/consecutivo.wav');
audioArray = ['src/uno.wav','src/due.wav','src/tre.wav','src/quattro.wav','src/cinque.wav','src/sei.wav','src/sette.wav','src/otto.wav','src/nove.wav','src/corretto.wav','src/errato.wav','src/tick.wav','src/gong.wav','src/consecutivo.wav' ];
}

function setScreen(quale){
//0: istruzioni
switch(quale){
case 0:
$("#istruzioni").show();
$("#wrapper").hide();
break;
case 1:
$("#istruzioni").hide();
$("#wrapper").show();
}

}

function start(){
setScreen(0);
}

function startPasat(){
stimoli = [];
caricaClassifica();
updateContatore();
globalContatore = MAXCONTATORE;
corretteconsecutive = 0;
punti = 0;
posizione = -1;
mostraConsecutive();
$("#wrong").hide();
$("#ok").hide();
$("#realpunti").text(0);
$("#schermata").height($(window).height()/2-80);
$("#schermata").css("line-height",$("#schermata").height()+"px");
$("#schermatatxt").show();
writable = false;
$("#casella").prop('disabled', true);
timerOk = true;
generaNuovo();
generaInterval();
}

function generaInterval(){
timer = setInterval(function(){
		if(timerOk){
		if(contatore > 0){
		contatore -= 5;
		}
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
		punti +=1;
		$("#realpunti").text(punti);
		globalContatore -= 1;
		if(globalContatore > 0){
		updateContatore();
		$("#myprogress").text(globalContatore);
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

function updateContatore(){
		if(globalContatore < 60){
		$("#myprogress").width(globalContatore*(10/6)+"%");
		}else{
		$("#myprogress").width("100%");
		}
		$("#myprogress").text(globalContatore);
}

function mostraConsecutive(){
$(".consecutive").css("color","red");
for(i=0;i<corretteconsecutive+1;i++){
$("#co_"+i).css("color","yellow");
}
}

function check(){
inGame = false;
timerOk = false;
writable = false;

if (parseInt($("#casella").val()) == stimoli[stimoli.length-1] + stimoli[stimoli.length-2]){
var mycorretto = document.createElement('audio');
corretteconsecutive += 1;
prossimipunti = 2;
if(corretteconsecutive <5){
mycorretto.setAttribute('src', audioArray[9]);
mycorretto.play();
mostraConsecutive();
}else{
mycorretto.setAttribute('src', audioArray[13]);
mycorretto.play();
corretteconsecutive = 0;
mostraConsecutive();
globalContatore += 2;
updateContatore();
}
$("#punti").css("background-color","darkgreen");

globalContatore += 2;
updateContatore();
$("#ok").show();
$("#schermatatxt").hide();

setTimeout(function(){
$("#schermata").css("background-color","white");
$("#schermata").css("color","blue");
$("#punti").css("background-color","navy");
inGame = true;
timerOk = true;
generaNuovo();
},500);
}else
{
prossimipunti = 10;
corretteconsecutive = 0;
mostraConsecutive();
var myerrato = document.createElement('audio');
myerrato.setAttribute('src', audioArray[10]);
myerrato.play();
if(globalContatore - 10 > 0){
globalContatore -= 10;
updateContatore();}
else{
globalContatore = 0;
updateContatore();
		clearInterval(timer);
		clearInterval(globaltimer);
		gong.play();
		fineGioco();
}

$("#punti").css("background-color","red");


$("#wrong").show();
$("#schermatatxt").hide();
setTimeout(function(){
$("#schermata").css("background-color","white");
$("#schermata").css("color","blue");
$("#punti").css("background-color","navy");
inGame = true;
timerOk = true;
generaNuovo();
},500);
}



}

function fineGioco(){
$("#wrapper").hide();
$("#nome").focus();

$("#fine").modal("show");
$("#nome").val("");
console.log(classifica[classifica.length-1][1]);
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

}

function generaNuovo(){
nuovo = getRandomInt(1,9);
if(stimoli.length > 0){
while(nuovo == stimoli[stimoli.length-1]){
nuovo = getRandomInt(1,9);
}
}
var numero = document.createElement('audio');
numero.setAttribute('src', audioArray[nuovo-1]);
numero.play();


stimoli.push(nuovo);
if(stimoli.length == 1){

$("#casella").prop('placeholder','');}

else if(stimoli.length == 2){
inGame = true;
$("#casella").prop('placeholder','');}

if(stimoli.length > 1){
writable = true;
$("#wrong").hide();
$("#ok").hide();
$("#schermatatxt").show();
}

$("#casella").val("");

currentItem = stimoli.length -1;
contatore = 500;
prossimipunti = 100;
$("#schermatatxt").text(stimoli[currentItem]);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
