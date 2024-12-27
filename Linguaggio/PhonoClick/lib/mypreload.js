myaudio = null;
out = null;

var Storia = function(nome,audiostoria,audio,parole,acapo){
this.nome = nome;
this.audio = audio;
this.audiostoria = audiostoria;
this.parole = parole;
this.array_parole = [];
this.pause = true;
this.mode = 'leggitu';
this.acapo = acapo;
this.avanzamentomanuale = true;
this.tempo = 0;
this.wordposition = 0;
this.scomparsa = 0;
this.selectedItems = [];
this.sillsec = 10;
this.intervallo;
this.imgmode = 0;
this.started = false;
this.currentTime = 0;


this.setPulsanti = function(){
out = this;
$("#indietrobutton").click(function(){
window.open("../index.html",'_self');
});

$("#imgmode").click(function(){
//0 = solo immagine, 1 = immagine+testo,2= solo testo
out.imgmode = (out.imgmode + 1) % 3;
switch(out.imgmode){
case 0:

$("#imgmode").addClass("picture");
$("#imgmode").removeClass("picturentext");
$("#imgmode").removeClass("nopicture");
$(".immagine").show();
$(".testoimmagine").hide();
break;

case 1:

$("#imgmode").removeClass("picture");
$("#imgmode").addClass("picturentext");
$("#imgmode").removeClass("nopicture");
$(".immagine").show();
$(".testoimmagine").show();
break;

case 2:

$("#imgmode").removeClass("picture");
$("#imgmode").removeClass("picturentext");
$("#imgmode").addClass("nopicture");
$(".immagine").hide();
$(".testoimmagine").show();
break;
}
out.determinaposizione();
});

$("#play").click(function(){
//Se clicco in modalità leggitu devo fa partire l'audio, altrimenti parte la lettura automatica
if(out.mode == "leggitu"){
							if(out.pause){
								out.pause = false;

								myaudio = createjs.Sound.play("audiostoria",{offset:out.currentTime*1000});
								$("#play").addClass("topause");
								$("#play").removeClass("toplay");
							 }
							else
							 {
								
								out.pause = true;
								out.currentTime = myaudio.position/1000;
								myaudio.stop();
								
								$("#play").addClass("toplay");
								$("#play").removeClass("topause");
							 }
						}
else{
						if(out.pause){
								out.pause = false;
								out.intervallo = setTimeout(function(){
								out.forward();
								},((1/(out.sillsec/10))*out.array_parole[out.wordposition].sillabe)*1000);
								$("#play").addClass("topause");
								$("#play").removeClass("toplay");
						}
						else{
								out.pause = true;
								$("#play").addClass("toplay");
								$("#play").removeClass("topause");
						}

}
});

$("#rewind").click(function(){
out.tempo = 0;
out.wordposition = 0;
out.currentTime = 0;
if(!out.pause){
out.pause = true;
$("#play").addClass("toplay");
$("#play").removeClass("topause");
myaudio.stop();
out.started = false;
}
if(out.mode == 'leggoio'){
if(sout.comparsa == 2){
for(i=1;i<out.array_parole.length;i++){
$("#parola_"+i).css("opacity","0");
}
}
else if(out.scomparsa == 1){
for(i=1;i<out.array_parole.length;i++){
$("#parola_"+i).css("opacity","0.3");
}
}
}
});

$("#switchauto").click(function(){
out.pulisci();
out.determinaposizione();
if(out.avanzamentomanuale){
						$("#testomanuale").css("color","#a4a3a3");
						$("#testoautomatico").css("color","#97311e");
						out.updateAvanzamento(0);
						$("#play").show();
						$("#back").addClass("diminuisci");
						$("#back").removeClass("indietro");
						$("#forward").addClass("aumenta");
						$("#forward").removeClass("avanti");
						$("#switchauto").addClass("auto");
						$("#switchauto").removeClass("manuale");
						out.avanzamentomanuale = false;
}
else{
						if(!out.pause){
						out.pause = true;
						$("#play").addClass("toplay");
						$("#play").removeClass("topause");
						$("#play").hide();
						}
						$("#testoautomatico").css("color","#a4a3a3");
						$("#testomanuale").css("color","#97311e");
						$("#back").removeClass("diminuisci");
						$("#back").addClass("indietro");
						$("#forward").removeClass("aumenta");
						$("#forward").addClass("avanti");
						$("#switchauto").removeClass("auto");
						$("#switchauto").addClass("manuale");
						$("#avanzamento").hide();
						$("#play").hide();
						out.avanzamentomanuale = true;
}
});

$("#ascolto").click(function(){

out.pause = true;
$("#play").addClass("toplay");
$("#play").removeClass("topause");

if(out.mode == "leggoio"){
$("#play").show();
$("#back").hide();
$("#forward").hide();
$("#automaticomanuale").hide();
out.activateTab("Ascolto");
$("#scomparsa").hide();
out.mode = 'leggitu';
for (i=0; i<out.array_parole.length; i++){
if(out.array_parole[i].immagine){
if(out.imgmode == 0 || out.imgmode == 1){
$("#parola_"+i).css("border","2px solid white");}
else{
$("#parola_"+i).css("color","black");
}
}
else{
$("#parola_"+i).css("color","black");
}
if(out.scomparsa!=0){
$("#parola_"+i).css("opacity","1");
}
}
out.determinaposizione();
out.pulisci();
}


});

$("#leggo").click(function(){
out.pulisci();

if(null != myaudio && !out.pause){
out.currentTime = myaudio.position/1000;}
console.log(out.currentTime);
if(!out.pause){
$("#play").addClass("toplay");
$("#play").removeClass("topause");
out.pause = true;

myaudio.stop();
}

if(out.mode == "leggitu"){
$("#back").show();
$("#forward").show();

$("#automaticomanuale").show();
if(out.avanzamentomanuale==true){
$("#play").hide();
}
out.activateTab("Leggo");
out.mode="leggoio";

$("#scomparsa").show();

out.determinaposizione();


}
});

$("#forward").click(function(){

if(out.mode=="leggoio"){
if (out.avanzamentomanuale){
out.forward();
}
else{
out.updateAvanzamento(2);
}
}
});

$("#back").click(function(){
if(out.mode=="leggoio"){
if (out.avanzamentomanuale){
out.back();
}
else{
out.updateAvanzamento(-2);
}
}
});

$("#scomparsa").click(function(){
if(out.mode=="leggoio"){
// 0 = no scomparsa, 1 = semiscomparsa, 2 = scomparsa
out.scomparsa = (out.scomparsa +1)%3;
if(out.scomparsa == 2){
$("#scomparsa").addClass("scomparsa");
$("#scomparsa").removeClass("semiscomparsa");
$("#scomparsa").removeClass("noscomparsa");

for(i=0;i<out.array_parole.length;i++){
if(i>out.wordposition){
$("#parola_"+i).css("opacity","0");
}
}
}else if (out.scomparsa == 0)
{
out.scomparsa = false;
$("#scomparsa").removeClass("scomparsa");
$("#scomparsa").removeClass("semiscomparsa");
$("#scomparsa").addClass("noscomparsa");
$(".parola").css("opacity","1");
}
else if(out.scomparsa == 1){
$("#scomparsa").removeClass("scomparsa");
$("#scomparsa").addClass("semiscomparsa");
$("#scomparsa").removeClass("noscomparsa");
for(i=0;i<out.array_parole.length;i++){
if(i>out.wordposition){
$("#parola_"+i).css("opacity","0.3");
}
}
}
}
});

this.initialSettings();

},

this.updateAvanzamento = function(incremento){
this.sillsec += incremento;
$("#avanzamento").text(this.sillsec/10 +" s/sec");
$("#avanzamento").show();},


this.initialSettings = function(){
this.activateTab("Ascolto");
$("#play").addClass("toplay");
$("#play").removeClass("topause");
$("#imgmode").addClass("picture");
$("#imgmode").removeClass("picturentext");
$("#imgmode").removeClass("nopicture");
$("#automaticomanuale").hide();
$("#titolostoria").css("padding-top",$("#alto").height()+10+"px");
$("#back").hide();
$("#forward").hide();
$("#back").removeClass("diminuisci");
$("#back").addClass("indietro");
$("#forward").removeClass("aumenta");
$("#forward").addClass("avanti");
$("#switchauto").removeClass("auto");
$("#switchauto").addClass("manuale");
$("#testoautomatico").css("color","#a4a3a3");
$("#testomanuale").css("color","#97311e");
$("#avanzamento").hide();
$("#scomparsa").removeClass("scomparsa");
$("#scomparsa").removeClass("semiscomparsa");
$("#scomparsa").addClass("noscomparsa");
$("#scomparsa").hide();
},

this.activateTab = function(whichTab){
if(whichTab=="Ascolto"){
$("#ascolto").addClass("tabactivated");
$("#ascolto").removeClass("ascoltodeactivated");
$("#leggo").addClass("leggodeactivated");
$("#leggo").removeClass("tabactivated");
}else{
$("#leggo").addClass("tabactivated");
$("#leggo").removeClass("leggodeactivated");
$("#ascolto").addClass("ascoltodeactivated");
$("#ascolto").removeClass("tabactivated");
}
this.refreshPadding();
}

this.refreshPadding = function(){
$("#titolostoria").css("padding-top",$("#alto").height()+10+"px");},

this.load = function(){
this.setPulsanti();
$("#spinner").show();
  out = this;
  var queue = new createjs.LoadQueue();
  queue.installPlugin(createjs.Sound);  
  queue.on("complete", this.popola, this);
  queue.loadFile({id:"audiostoria", src:"src/"+this.audiostoria+".mp3"});
  for(i=0;i<this.audio.length;i++){
  queue.loadFile({id:this.audio[i], src:"src/"+this.audio[i]+".mp3"});
  }
},

this.pulisci = function(){
$(".parola").css("color","black");
$(".parola img").css("border","2px solid white");
},

this.popola = function(){
  out = this;
  $("#spinner").hide();
  $("#titolostoria").text(this.nome);
   document.title = this.nome;
  for(i=0;i<this.parole.length;i++){
    me = this.parole[i];
	this.array_parole.push(new Oggetto(me[0],me[1],me[2],me[3],me[4]));
	$("#container").append("<div class='parola' id='parola_"+i+"' sillabe="+me[2]+"></div>");
	if(me[1]){
	$("#parola_"+i).append("<img id='immagine_"+i+"' src='src/"+me[0]+".png' parola='"+me[0]+"' class='immagine'/>");
	$("#parola_"+i).append("<p class='testoimmagine'>"+me[0] + "</p>");
	}
	else{
	$("#parola_"+i).text(this.array_parole[i].parola);
	}
	if(this.array_parole[i+1] && this.array_parole[i+1].punteggiatura){
	$("#parola_"+i).css("margin-right","0px");
	}
	if(contains.call(this.acapo, i)){
	$("#container").append("<div style='display:block; margin:1em;'></div>");
	}
  }
  $(".immagine").click(function(){
  if(out.pause){
  createjs.Sound.play($(this).attr("parola"));}
  });
},


this.determinaposizione = function(){
if(out.currentTime < this.array_parole[this.array_parole.length-1].posizione);
{
i = 0;
this.selectedItems = [];
while(this.currentTime > this.array_parole[i].posizione){
i++;
}
$(".parola").css("color","black");
$(".immagine").css("border","2px solid white");
if(i>0){
if(this.array_parole[i-1].immagine == false){
$("#parola_"+(i-1)).css("color","red");
}
else
{
if(this.imgmode == 0 || this.imgmode == 1){
$("#immagine_"+(i-1)).css("border","2px solid red");
}
$("#immagine_"+(i-1)).css("color","red");
}
this.wordposition = i-1;
this.selectedItems.push(this.wordposition);
if(this.array_parole[this.wordposition+1].punteggiatura){
this.wordposition+=1;
this.selectedItems.push(this.wordposition);
$("#parola_"+(this.wordposition)).css("color","red");
if(this.imgmode == 0 || this.imgmode == 1){
$("#immagine_"+(this.wordposition-1)).css("border","2px solid red");
}
$("#immagine_"+(this.wordposition-1)).css("color","red");
}
}
else{
$("#parola_0").css("color","red");
this.selectedItems.push(0);
}
}
},

this.back = function(){
if(out.wordposition > 0){
out.wordposition-=1;
for (i=0;i<out.selectedItems.length;i++)
{
if(out.array_parole[out.selectedItems[i]].immagine){
$("#parola_"+out.selectedItems[i]).css("color","black");
$("#parola_"+out.selectedItems[i]).css("border","2px solid white");
}
else{
$("#parola_"+out.selectedItems[i]).css("color","black");
}
if(out.scomparsa == 2){$("#parola_"+out.selectedItems[i]).css("opacity","0");} else if (out.scomparsa == 1){$("#parola_"+out.selectedItems[i]).css("opacity","0.3");}
}
out.selectedItems = [];
out.selectedItems.push(out.wordposition);
if(!out.array_parole[out.wordposition].immagine && !out.array_parole[out.wordposition].punteggiatura){
$("#parola_"+out.wordposition).css("color","red");
}
else{
if(out.array_parole[out.wordposition].punteggiatura){
$("#parola_"+out.wordposition).css("color","red");
out.wordposition -= 1;
out.selectedItems.push(out.wordposition);
if(out.imgmode == 0 || out.imgmode == 1){
$("#parola_"+out.wordposition).css("border","2px solid red");
}
$("#parola_"+out.wordposition).css("color","red");
}
else{
if(out.imgmode == 0 || out.imgmode == 1){
$("#parola_"+out.wordposition).css("border","2px solid red");
}
$("#parola_"+out.wordposition).css("color","red");
}
}
out.currentTime = out.array_parole[out.wordposition].posizione;
}
},


this.forward = function(){
out.wordposition+=1;
$("#parola_"+out.wordposition).css("opacity","1");
for (i=0;i<out.selectedItems.length;i++)
{
if(out.array_parole[out.selectedItems[i]].immagine){
if(out.imgmode == 0 || out.imgmode == 1){
$("#parola_"+out.selectedItems[i]).css("border","2px solid white");
}
$("#parola_"+out.selectedItems[i]).css("color","black");
}
else{
$("#parola_"+out.selectedItems[i]).css("color","black");
}
}
out.selectedItems = [];
out.selectedItems.push(out.wordposition);
if(!out.array_parole[out.wordposition].immagine){
$("#parola_"+out.wordposition).css("color","red");
}
else{
if(out.imgmode == 0 || out.imgmode == 1){
$("#parola_"+out.wordposition).css("border","2px solid red");}
}
$("#parola_"+out.wordposition).css("color","red");
if(out.array_parole[out.wordposition+1].punteggiatura){
out.wordposition += 1;
$("#parola_"+out.wordposition).css("opacity","1");
selectedItems.push(out.wordposition);
$("#parola_"+out.wordposition).css("color","red");
}

out.currentTime = out.array_parole[out.wordposition].posizione;
console.log(out.currentTime);
if(!out.avanzamentomanuale && !out.pause){
if(out.wordposition < out.array_parole.length && !out.pause){
out.intervallo = setTimeout(function(){out.forward();},((1/(out.sillsec/10))*out.array_parole[out.wordposition].sillabe)*1000);
}
else{
clearTimeout(out.intervallo);
}
}
}
						

						
						
}

function Oggetto(parola, immagine, sillabe, posizione, punteggiatura){
this.parola = parola;
this.immagine = immagine;
this.sillabe = sillabe;
this.posizione = posizione;
this.punteggiatura = punteggiatura;
}

var contains = function(needle) {
    // Per spec, the way to identify NaN is that it is not equal to itself
    var findNaN = needle !== needle;
    var indexOf;

    if(!findNaN && typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function(needle) {
            var i = -1, index = -1;

            for(i = 0; i < this.length; i++) {
                var item = this[i];

                if((findNaN && item !== item) || item === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle) > -1;
};
