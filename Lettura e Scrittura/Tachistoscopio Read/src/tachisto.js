i = 6;
tmppercentuale = 0;
tmpparole = 0;
sized = false;

var T = {

index:0,
errore:false,
errorable:false,
array_errori:[],
nerrori:0,
mescola:true,

normal:function(){
	console.log("normal");

T.sillabe = 2,
T.gruppo='tutti',
T.pnp='parole',
T.lista=[],
T.custom=false,
T.tempo=500,
T.intertempo=500,
T.dimensioni="2em",
T.posizione="centro",
T.maiuscole=false,
T.modalita="normale",
T.incremento=false,
T.quantoincremento=1.5,
T.sillabapersillaba=false,
T.mascheramento=false,
T.carattere="sans-serif",
T.coloretesto="#000",
T.coloresfondo="#FFF",
T.nomelista="",
T.dimensionitoexport=2
},

avvia: function(){

if(T.mescola){
shuffle(T.lista);
}
T.array_errori = [];
T.index = 0;
T.nerrori = 0;
$("#tachistoscopio").css("width","100%");

$("#tachistoscopio").css("background-color",T.coloresfondo);
$("#tachistoscopio").css("color",T.coloresfondo);
$("#tachistoscopio").text("wait");
$("#tachistoscopio").css("font-size",T.dimensioni);

if(!sized){
$("#tachistoscopio").css("line-height",Math.max(0, (($(window).height() - $("#tachistoscopio").outerHeight())) +  $(window).scrollTop()) + "px");
sized = true;
}
switch(T.posizione){
case "centro":
$("#tachistoscopio").css("text-align","center");
break;
case "sinistra":
$("#tachistoscopio").css("text-align","left");
break;
case "destra":
$("#tachistoscopio").css("text-align","right");
break;
}
$("#tachistoscopio").css("font-family",T.carattere);
if(T.maiuscole){
$("#tachistoscopio").css("text-transform","uppercase");
}else{
$("#tachistoscopio").css("text-transform","none");
}
countdown = setInterval(function(){
if(i>0){
if(i%2 == 0){
$("#tachistoscopio").css("color",T.coloretesto);
$("#tachistoscopio").text(i/2);}
else{
$("#tachistoscopio").css("color",T.coloresfondo);
$("#tachistoscopio").text("go");
}
i-=1;
}
else{
clearInterval(countdown);
console.log(T.modalita);
switch(T.modalita){
case 'normale':

$("#tachistoscopio").click(function(){

if(T.errorable && !T.errore){
T.errore = true;
T.nerrori += 1;
}
});
T.esposizione_normale();
break;
case 'feedback':
T.esposizione_feedback();
break;
case 'normale':
T.esposizione_riscrivi();
break;
}
}
},500);
},

esposizione_normale: function(){
index = 0;
if(this.index < this.lista.length){
T.errore = false;
T.errorable = true;
$("#tachistoscopio").css("color",T.coloretesto);
$("#tachistoscopio").text(this.lista[this.index]);
setTimeout(function(){
$("#tachistoscopio").css("color",T.coloresfondo);
//$("#tachistoscopio").text("");
if(T.mascheramento){
$("#tachistoscopio").css("color",T.coloretesto);
$("#tachistoscopio").text("######");
}
setTimeout(function(){T.index += 1; 
if(T.incremento){
if(T.errore){
T.tempo = T.tempo + (T.tempo/100*T.quantoincremento);
}
else{
T.tempo = T.tempo - (T.tempo/100*T.quantoincremento);
}}
T.array_errori.push(T.errore);
T.esposizione_normale();},T.intertempo);
},T.tempo);
}
else{
//Fine
T.errorable = false;
T.generaReport();
}
},

esposizione_feedback: function(){

},

esposizione_riscrivi: function(){

},

generaReport: function(){
$("#wordreport").empty();
tmpparole = 0;
$("body").css("background-color","white");
$("#tachistoscopio").hide();
$("#myprogress").css("width","0%");
$("#report").show();
percentuale = (Math.round(((T.lista.length-T.nerrori)*100)/T.lista.length));
tmppercentuale = 0;
percentualinterval = setInterval(function(){
if(tmppercentuale <= percentuale){
$("#percentagetext").text(T.nerrori + T.errori() + " su " + T.lista.length + " parole.");
$("#secondpercentage").text("Parole corrette: " + tmppercentuale + "%");
tmppercentuale +=1;
$("#myprogress").css("width",tmppercentuale+"%");
}
else {clearInterval(percentualinterval);}
},40);

paroleinterval = setInterval(function(){
if(tmpparole < T.lista.length){
$("#wordreport").append("<div class='row myresult'><div class='col-xs-8'><h3>"+T.lista[tmpparole]+"</h3></div><div class='col-xs-4' style='text-align:right'><h3><span class='glyphicon' id='giusta_"+ tmpparole +"'></span></h3></div></div>");

if(T.egiusta(tmpparole)){
$("#giusta_"+tmpparole).css("color","green");
$("#giusta_"+tmpparole).addClass("glyphicon-ok");
}else{
$("#giusta_"+tmpparole).css("color","red");
$("#giusta_"+tmpparole).addClass("glyphicon-remove");
}
tmpparole +=1;
}
},100);



$("#ricomincia").click(function(){
i=6;
console.log(T.lista);
$("#atablista").addClass("noborder");
$("#atabopzioni").removeClass("noborder");
$("#atabinizia").removeClass("noborder");
    activaTab('tablista');
$("#alto").show();
$("#content").show();
setSettingScreen(0);
});
},



egiusta:function(myi){
if(T.array_errori[myi]){
return false;}
else{
return true;}
},

errori:function(){
if(T.nerrori == 1){
return " errore";
}
else{
return " errori";
}
}



}


function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}


