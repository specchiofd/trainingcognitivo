esclusioneBi = [];
esclusioneTri = [];
esclusioneQuadri = [];


$(document).ready(function(){
setScreen(0);

$("#avanti_uno").click(function(){
setScreen(1);
$("#avanti_due_top").show();
$("#avanti_due_bottom").show();
anteprima();
});

$("#avanti_due_top").click(function(){
preparastimoli();

});

$("#avanti_due_bottom").click(function(){
//TODO AGGIORNAMENTO DEGLI STIMOLI SELEZIONATI MANUALMENTE
preparastimoli();

});

$("#indietro_due_bottom").click(function(){
//TODO AGGIORNAMENTO DEGLI STIMOLI SELEZIONATI MANUALMENTE
setScreen(0);
});

$("#indietro_due_top").click(function(){
setScreen(0);
});
});

function trova(nome){
for(i=0; i<stimoliselezionati.length;i++){
if(nome == stimoliselezionati[i].nome){
return i;
}
}
}


function anteprima(){
$("#anteprimawrapper").empty();
esclusioneBi = [];
esclusioneTri = [];
esclusionequadri = [];
if(sceltastimoli == "automatica"){
for(i=0;i<autobisillabe;i++){
selezionaRandom(esclusioneBi,2,arrayBisillabe);
}
for(i=0;i<autotrisillabe;i++){
selezionaRandom(esclusioneTri,3,arrayTrisillabe);
}
for(i=0;i<autotrisillabe;i++){
selezionaRandom(esclusioneQuadri,4,arrayQuadrisillabe);
}
}

for(i=0;i<stimoliselezionati.length;i++){
$("#anteprimawrapper").append('<div class="row" style="padding-bottom:10px; border-bottom:1px solid lightgrey; margin-bottom:10px" id="preview_'+i+'"><div class="col-xs-12"><div class="col-xs-2 col-sm-1"><h3><span class="removePreview glyphicon glyphicon-remove-circle" style="color:red; cursor:pointer" target='+i+' aria-hidden="true" ></span></h3></div><div class="col-xs-4 col-sm-2"><img class="mythumb" src='+returnUrl(stimoliselezionati[i].nome,stimoliselezionati[i].sillabe)+'></div><div class="col-xs-6 col-sm-4" style="text-align:left"><h3>'+stimoliselezionati[i].nome.toUpperCase()+'</h3></div><div class="col-xs-12 col-sm-5 frequenza"><div class="input-group"><span class="input-group-btn"><button class="btn btn-primary menofrequente" target='+i+' type="button">-</button></span><input type="text" class="form-control text-center" style="background-color:white; color:black" value="Frequenza normale" readonly id="item_frequente_'+i+'"><span class="input-group-btn"><button class="btn btn-primary piufrequente" target='+i+' nome="'+stimoliselezionati[i].nome+'" type="button">+</button></span></div></div>');
}
$(".removePreview").click(function(){
stimoliselezionati.splice(trova($(this).attr('nome')), 1);
if(stimoliselezionati.length == 0){
$("#avanti_due_top").hide();
$("#avanti_due_bottom").hide();
}
$("#preview_"+$(this).attr('target')).fadeOut(500);
});
$(".piufrequente").click(function(){
if(stimoliselezionati[$(this).attr('target')].frequenza == 2){
stimoliselezionati[$(this).attr('target')].frequenza -=1;
$("#item_frequente_"+$(this).attr('target')).val("Frequenza normale");
}else if (stimoliselezionati[$(this).attr('target')].frequenza == 1){
stimoliselezionati[$(this).attr('target')].frequenza -=1;
$("#item_frequente_"+$(this).attr('target')).val("Molto frequente");
}
});
$(".menofrequente").click(function(){
if(stimoliselezionati[$(this).attr('target')].frequenza == 0){
stimoliselezionati[$(this).attr('target')].frequenza +=1;
$("#item_frequente_"+$(this).attr('target')).val("Frequenza normale");
}else if (stimoliselezionati[$(this).attr('target')].frequenza == 1){
stimoliselezionati[$(this).attr('target')].frequenza +=1;
$("#item_frequente_"+$(this).attr('target')).val("Poco frequente");
}
});
}

function returnUrl(tnome,tsillabe){
tmpstring = "";
switch(tsillabe){
case 2:
tmpstring = "bisillabe";
break;
case 3:
tmpstring = "trisillabe";
break;
case 4:
tmpstring = "quadrisillabe";
break;
}
return "./img/"+tmpstring+"/"+tnome+".png";
}