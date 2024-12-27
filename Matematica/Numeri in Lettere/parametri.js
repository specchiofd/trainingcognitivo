

var Parametri = {
IsNumeric: function( obj ) {
    return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
},

entrata:function(){
$("#gioco_container").hide();
$("#parametri").show();
$("#errore").text("");
$("#parametri").animate({top:0, duration: 'slow', easing: 'easeOutBounce'});
},

check:function(quale){
validation = true;
massimo = $("#massimo").val();
minimo = $("#minimo").val();
if (minimo == ""){
$("#errore").text("Inserire un numero minimo");
validation = false;
}
else if (massimo == ""){
$("#errore").text("Inserire un numero massimo");
validation = false;
}
else if (minimo < 0){
$("#errore").text("Inserire valori positivi");
validation = false;
}
else if (massimo > 999){
$("#errore").text("Per ora il gioco arriva a 999");
validation = false;
}
else if (parseInt(massimo) < parseInt(minimo)){
$("#errore").text("Il minimo non può superare il massimo");
validation = false;
}
else if (!Parametri.IsNumeric(parseInt(massimo)) || !Parametri.IsNumeric(parseInt(minimo))){
$("#errore").text("Inserire valori numerici");
validation = false;
}
else if(validation){
Parametri.uscita(quale);

}
},

uscita:function(quale){
$("#errore").text("");
$("#parametri").animate({top:-500, duration: 'fast', easing: 'easeOutBounce'}, function(){
$("#parametri").hide(); 
$("#gioco_container").css("background-color", "aliceblue"); 
$("#gioco_container").show(); 
if (quale == 0) {LettereNumeri.avvio()} 
else {NumeriLettere.avvio()};
});
},
}