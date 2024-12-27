var uguali = false;
var elencostimoli = [];
var esatte = 0;
var sbagliate = 0;
var ingame = false;
var checkable = false;
var currentItem = 0;
var esposizione = 0;
var feedback = true;
width = 0;

$(document).ready(function(){
width = 0;
currentItem = 0;
elencostimoli = [];
esatte = 0;
sbagliate = 0;
ingame = false;
$("#risultati").hide();
$("#progress").hide();
$("#risposte").hide();
$("#gioco").hide();
$("#testoiniziale").text("Parametri");
$(".esposizione").prop('disabled','disabled');
$(".esposizione").val($("#nstimoli").val());

$("#cbUguale").change(function(){

        if($(this).is(":checked")) {
			$("#nstimoli").attr('disabled',false);
            $(".esposizione").prop('disabled','disabled');
			$(".esposizione").val($("#nstimoli").val());
			uguali = true;
        }
else
{
$(".esposizione").attr('disabled',false);
$("#nstimoli").attr('disabled',true);
uguali = false;
}
});

$("#nstimoli").on('input propertychange paste',function(){

        if($("#cbUguale").is(":checked")) {
            $(".esposizione").prop('disabled','disabled');
			$(".esposizione").val($("#nstimoli").val());
        }
});

$("#inizia").click(function(){
esposizione = parseInt($("#esposizione").val());
$("#parametriBody").hide();
$("#progress").show();
$("#front").css("width","0px");
if($('#cbFeedback').is(':checked')){
feedback = true;
}
else
{
feedback = false;
}
gioco();
});
});

function gioco(){
for(j=1;j<5;j++){
for(i=0; i<parseInt($("#esposizione_"+j).val());i++){
if($("#parola_"+j).val() != ""){
elencostimoli.push($("#parola_"+j).val());
}
}
}
shuffle(elencostimoli);
$("#testoiniziale").text("Clicca sullo schermo per iniziare");
$("#parola").text("Parola da riconoscere: "+ $("#parola_1").val());
$("#gioco").show();

$("#gioco").click(function(){
if (!ingame){
$("#testoiniziale").text("Giusto o sbagliato?");
ingame = true;
start();
}
});
}

function start(){
$("#gioco").css("background-color","white");
width += (600/elencostimoli.length);
$("#front").css("width",width+"px");
$("#risposte").show();
$("#parola").text(elencostimoli[currentItem]);
setTimeout(function(){
$("#parola").text("");
checkable = true;
console.log("Abilitato");
$("#giusto").css("background-color","darkgreen");
$("#sbagliato").css("background-color","darkred");
},esposizione);

$("#giusto").click(function(){
if(checkable){
check("giusto");
}
});

$("#sbagliato").click(function(){
if(checkable){
check("sbagliato");
}
});
}

function check(risposta){
checkable = false;

if(((elencostimoli[currentItem] == $("#parola_1").val()) && risposta == "giusto") || ((elencostimoli[currentItem] != $("#parola_1").val()) && risposta == "sbagliato"))
{

esatte += 1;
if(feedback){
mostrafeedback("giusto");
}
else
{
mostrafeedback("nofb");
}
}
else if(((elencostimoli[currentItem] == $("#parola_1").val()) && risposta == "sbagliato") || ((elencostimoli[currentItem] != $("#parola_1").val()) && risposta == "giusto"))
{
sbagliate += 1;
if(feedback){
mostrafeedback("sbagliato");
}
else
{
mostrafeedback("nofb");
}
}

}

function fine(){
$("#testoiniziale").text("Fine del gioco!");
$("#gioco").hide();
$("#progress").hide();
$("#risposte").hide();
$("#risultati").show();
$("#rispEsatte").text("Risposte esatte: " + esatte + " su "+ elencostimoli.length);
$("#rispErrate").text("Risposte sbagliate: " + sbagliate + " su "+ elencostimoli.length);
}

function mostrafeedback(quale){

color = "";
$("#giusto").css("background-color","darkgrey");
$("#sbagliato").css("background-color","darkgrey");
if (quale == "giusto"){
color = "green";

}
else if (quale == "sbagliato")
{
color="grey";
}
else{
color="white";
}
$("#gioco").css("background-color",color);
if(currentItem<elencostimoli.length-1){
currentItem+=1;
setTimeout(function(){
start();
},500);}
else
{
fine();
}


}

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}