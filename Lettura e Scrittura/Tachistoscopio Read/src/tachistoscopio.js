var Tachistoscopio = {

init: function(tempo_esposizione, intertempo, font, stimoli){
this.w = $("#canvas").width();
this.h = $("#canvas").height();
this.tempo_esposizione = parseInt(tempo_esposizione);
this.intertempo = parseInt(intertempo);
this.font = font;
this.randomized = $("#randomized").is(':checked');
this.in_game = false;
this.elenco_stimoli = this.evaluate(stimoli);
this.array_index = 0;
if (this.randomized){
this.elenco_stimoli = this.shuffle(this.elenco_stimoli)
}
this.in_game = false;
this.ended = false;
this.actual_time = this.tempo_esposizione + this.intertempo;
this.erase();
this.show_start();
},

shuffle : function(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
},

evaluate: function(stimoli){
return stimoli.split(',');
},

show_start: function(){
ctx.fillStyle = "black";
ctx.font=this.font+"px Helvetica";
ctx.textAlign="center";
ctx.fillText("Clicca per iniziare", this.w/2, this.h/2);
},

start_loop: function(){
this.in_game = true;
this.mainloop = setInterval(function(){Tachistoscopio.countdown()},10);
},

countdown: function(){
if (this.array_index < this.elenco_stimoli.length){
if(this.actual_time == this.tempo_esposizione+this.intertempo){
this.paint(this.array_index);
}
else if (this.actual_time == this.intertempo){
this.erase();
}
else if (this.actual_time == 0){
this.array_index += 1;
this.actual_time = this.tempo_esposizione + this.intertempo + 10;
}
this.actual_time -= 10;
}
else
{
clearInterval(this.mainloop);
this.finale();
}
},

finale: function(){
this.erase();
this.ended = true;
this.in_game = false;
		ctx.fillStyle = "black";
		ctx.font = this.font+"px Helvetica";
		ctx.textAlign="center"; 
		ctx.fillText("Fine. Clicca qui per ricominciare", this.w/2, this.h/2);
},

paint: function(posizione){
		ctx.fillStyle = "black";
		ctx.font = this.font+"px Helvetica";
		ctx.textAlign="center"; 
		ctx.fillText(this.elenco_stimoli[posizione], this.w/2, this.h/2);
},

erase: function(){
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, this.w, this.h);
}
};

$(document).ready(function(){
    canvas = $("#canvas")[0];
	ctx = canvas.getContext("2d");
   });
