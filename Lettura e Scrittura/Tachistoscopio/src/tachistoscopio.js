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
prestimolo:false,
stopped: false,
isCountdown: false,
inGameTime:1000,

normal:function(){
T.prestimolo = true;
T.sillabe = 2,
T.gruppo='tutti',
T.pnp='parole',
T.lista=[],
T.custom=false,
T.tempo=1000,
T.intertempo=500,
T.dimensioni="2em",
T.posizione="centro",
T.maiuscole=false,
T.modalita="normale",
T.incremento=false,
T.quantoincremento=1.5,
T.sillabapersillaba=false,
T.mascheramento=true,
T.carattere="sans-serif",
T.coloretesto="#000",
T.coloresfondo="#FFF",
T.nomelista="",
T.dimensionitoexport=2,
T.stopped = false,
T.isCountdown = false,
T.inGameTime = T.tempo
},

avvia_modal:function(){
    $("#avvia_modal").modal("show");
},

avvia: function(){
    T.errorable = false;
    $("#riepilogo_wrapper").hide();
    i=6;
index = 0;
$("#avvia_modal").modal("hide");
$(".recap_panel").hide();
$(".left-buttons").hide();
$("#settings_wrapper").hide();
$("#myprogress").text("0/"+T.lista.length);
$("#myprogress").css("width","0%");
this.stopped = false;
if(T.mescola){
shuffle(T.lista);
}
T.array_errori = [];
T.index = 0;
T.nerrori = 0;
T.inGameTime = T.tempo;
$("#tachistoscopio").css("width","100%");
$("#tachistoscopio").css("background-color",T.coloresfondo);
$("#tachistoscopio").css("color",T.coloresfondo);
$("#tachistoscopio_prestimolo").hide();
$("#tachistoscopio").css("font-size",T.dimensioni);
$("#tachistoscopio_parola").text("");
$("#feedback_line").css("color",T.coloretesto);
$("#riscrivi_feedback").css("color",T.coloretesto);
$("#riscritta").css("color",T.coloretesto);
    $("#tachistoscopio_parola_wrapper").show();
$("#feedback").hide();
$("#riscrivi").hide();
$(window).scrollTop()

switch(T.posizione){
case "centro":
$("#tachistoscopio_parola_wrapper").css("text-align","center");
break;
case "sinistra":
$("#tachistoscopio_parola_wrapper").css("text-align","left");
break;
case "destra":
$("#tachistoscopio_parola_wrapper").css("text-align","right");
break;
}

$("#tachistoscopio_parola_wrapper").css("font-family",T.carattere);
if(T.maiuscole){
$("#tachistoscopio_parola_wrapper").css("text-transform","uppercase");
}else{
$("#tachistoscopio_parola_wrapper").css("text-transform","none");
}

$("#riavvia").css("opacity","0.2");
$("#stop").css("opacity","0.2");
countdown = setInterval(function(){
    T.isCountdown = true;
if(i>0){
if(i%2 == 0){
$("#tachistoscopio_parola").css("color",T.coloretesto);
$("#tachistoscopio_prestimolo").css("color",T.coloretesto);
$("#tachistoscopio_parola").text(i/2);}
else{
$("#tachistoscopio_parola").css("color",T.coloresfondo);
$("#tachistoscopio_prestimolo").css("color",T.coloretesto);
$("#tachistoscopio_parola").text("go");
}
i-=1;
}
else{
    $("#riavvia").css("opacity","1");
    $("#stop").css("opacity","1");
clearInterval(countdown);
T.isCountdown = false;
T.esposizione_normale();
}
},500);
},

esposizione_normale: function(){
    $("#myprogress").text(T.index+1+"/"+T.lista.length);
    $("#myprogress").css("width",(((T.index+1)/T.lista.length)*100)+"%");
if(this.index < this.lista.length){
T.errore = false;
T.errorable = true;
if(T.prestimolo){
    if(!T.stopped){
        T.mostra_prestimolo();
    }

}
else{
    if(!T.stopped){
    T.mostra_parola();
    }
}
}else{
    T.errorable = false;
    T.generaReport();
}


},

mostra_prestimolo:function(){
    tmp = "";
    $("#tachistoscopio_parola").text("");
    $("#tachistoscopio_parola").append('<span class="glyphicon glyphicon-asterisk" aria-hidden="true" style="font-size:20px"></span>');
    $("#tachistoscopio_parola").css("color",T.coloretesto);

    $("#tachistoscopio_parola").show();
    for(i=0;i<T.lista[T.index].length-1;i++){
        tmp += "#";
    }
    $("#tachistoscopio_prestimolo").text(tmp);
    $("#tachistoscopio_prestimolo").css("color",T.coloresfondo);
    $("#tachistoscopio_prestimolo").show();

    setTimeout(function(){
        if(!T.stopped){
        T.mostra_parola();}
    },400);

},

mostra_parola:function(){
    if(!T.stopped){
    $("#tachistoscopio_prestimolo").hide();
    $("#tachistoscopio_parola").css("color",T.coloretesto);
    $("#tachistoscopio_parola").text(this.lista[this.index]);
    setTimeout(function(){
        if(!T.stopped){
            if(T.mascheramento){
                T.mostra_mascheramento();
            }
            else{
                T.mostra_blank();
            }
        }

    },T.inGameTime);
}
},

mostra_mascheramento:function(){
    tmp = "";
    for(i=0;i<T.lista[T.index].length;i++){
        tmp += "#";
    }
    $("#tachistoscopio_parola").text(tmp);
    setTimeout(function(){
        if(!T.stopped){
        if(T.modalita == "normale"){
        T.mostra_blank();
        }
        else if(T.modalita == "feedback"){
        T.mostra_feedback();
    }else {
        T.mostra_riscrivi();
    }
        }
    },400);
},

mostra_feedback:function(){
    $("#tachistoscopio_parola_wrapper").hide();
    $("#feedback_parola").text(T.lista[T.index]);
    $("#feedback").show();
},

mostra_riscrivi:function(){

    $("#tachistoscopio_parola_wrapper").hide();
$("#riscritta").css("color",T.coloretesto);
    $("#riscrivi_feedback").text("Scrivi la parola che hai appena letto");
    $("#riscrivi_ok").show();
    $("#riscrivi_avanti").hide();
    $("#riscrivi").show();
    $("#riscritta").val("");
        $("#riscritta").prop("disabled",false);
    $("#riscritta").focus();
},

check_riscrivi:function(){
    $("#riscritta").prop("disabled",true);
    if($("#riscritta").val().toUpperCase() == T.lista[T.index].toUpperCase()){
        $("#riscritta").css("color","green");
        $("#riscrivi_feedback").text("Esatto! La parola era: " + T.lista[T.index]);
    }else{
        T.errore = true;
        $("#riscrivi_feedback").text("Attento! La parola era: " + T.lista[T.index]);
        $("#riscritta").css("color","red");
    }
    $("#riscrivi_avanti").show();
    $("#riscrivi_ok").hide();
},

mostra_blank:function(){
    $("#tachistoscopio_parola").text("");
    setTimeout(function(){

        if(T.incremento){
        if(T.errore){

        T.inGameTime = T.inGameTime + (T.inGameTime/100*T.quantoincremento);
        }
        else{
        T.inGameTime = T.inGameTime - (T.inGameTime/100*T.quantoincremento);
        }}
        T.array_errori.push(T.errore);
        if(T.errore){
                    T.nerrori +=1;
        }
        if(!T.stopped){
        T.index +=1;
        T.esposizione_normale();}
    },T.intertempo)

},




generaReport: function(){
$("#wordreport").empty();
tmpparole = 0;
tmppercentuale = 0;
$("#bar_percentuale").css("width","0%");
$("#tachistoscopio_wrapper").hide();
$("#riepilogo_wrapper").show();

percentuale = (Math.round(((T.lista.length-T.nerrori)*100)/T.lista.length));


percentualinterval = setInterval(function(){
if(tmppercentuale <= percentuale){
$("#ri_errori").text(T.errori() +T.nerrori);
$("#ri_totali").text(T.totali() +T.lista.length);
$("#ri_corrette").text(T.corrette() + (T.lista.length-T.nerrori));
$("#percentuale").text(tmppercentuale + "%");
tmppercentuale +=1;
$("#bar_percentuale").css("width",tmppercentuale+"%");
}
else {clearInterval(percentualinterval);}
},40);

paroleinterval = setInterval(function(){
if(tmpparole < T.lista.length){
if(T.array_errori[tmpparole] == 1){
$("#wordreport").append("<div class='row myresult'><div class='col-xs-12'><h5>"+T.lista[tmpparole]+"</h5></div></div>");
}
tmpparole +=1;
}
},100);


},


errori:function(){
if(T.nerrori == 1){
return "Errore: ";
}
else{
return "Errori: ";
}
},

totali:function(){
if(T.lista.length == 1){
return "Parole totali: ";
}
else{
return "Parole totali: ";
}
},

corrette:function(){
if(T.lista.length - T.nerrori == 1){
return "Parola corretta: ";
}
else{
return "Parole corrette: ";
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
