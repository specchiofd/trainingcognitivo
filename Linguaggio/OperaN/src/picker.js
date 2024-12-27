var stimoliselezionati = [];

function selezionaRandom(arrayEsclusione,escludi,marray){

flag = -1;
while(flag != 0){
rint = Math.floor(Math.random() * (marray.length-1)) + 1;
if(arrayEsclusione.indexOf(rint) == -1){
if(escludi == 2){
esclusioneBi.push(rint);}
else if(escludi == 3){
esclusioneTri.push(rint);
}
else if(escludi == 4){
esclusioneQuadri.push(rint);
}
stimoliselezionati.push(marray[rint]);
flag = 0;
}
}
}

//TODO PICKER AUTOMATICO

var Oggetto = function(id,nome,sillabe,frequenza){
//2 = Alta Frequenza, 1 = Frequenza Normale, 0 = Bassa Frequenza
this.id = id;
this.nome = nome;
this.sillabe = sillabe;
this.frequenza = 1;
}

function seleziona(myoggetto){
if(presente(myoggetto.attr('id')) == -1){
stimoliselezionati.push(oggettoConId(myoggetto.attr('id')));
myoggetto.removeClass('unselectedborder');
myoggetto.addClass('selectedborder');
}
else{
stimoliselezionati.splice(presente(myoggetto.attr('id')), 1);
myoggetto.removeClass('selectedborder');
myoggetto.addClass('unselectedborder');
}

updateStimoliSelezionati();
			if(stimoliselezionati.length == 0){
			$("#avanti_uno").hide();
			}
			else{
			$("#avanti_uno").show();
			}
}

function oggettoConId(id){
//TODO ESTENDERE A TRISILLABE E QUADRISILLABE
for(i=0;i<arrayBisillabe.length;i++){
if(arrayBisillabe[i].id == id){
return arrayBisillabe[i];
}

}

for(i=0;i<arrayTrisillabe.length;i++){
if(arrayTrisillabe[i].id == id){
return arrayTrisillabe[i];
}
}

for(i=0;i<arrayQuadrisillabe.length;i++){
if(arrayQuadrisillabe[i].id == id){
return arrayQuadrisillabe[i];
}
}
}

function presente(id){
for(i=0;i<stimoliselezionati.length;i++){
if(stimoliselezionati[i].id == id){
return i;
}
}
return -1;
}


function clearBisillabe(){
$(".biitem").removeClass("unselectedborder");
$(".biitem").removeClass("selectedborder");
for(i=stimoliselezionati.length-1;i>=0;i--){

if(stimoliselezionati[i].sillabe == 2){
stimoliselezionati.splice(i, 1);
}
}
$(".biitem").addClass("unselectedborder");

}

function clearTrisillabe(){
$(".triitem").removeClass("unselectedborder");
$(".triitem").removeClass("selectedborder");
for(i=stimoliselezionati.length-1;i>=0;i--){

if(stimoliselezionati[i].sillabe == 3){
stimoliselezionati.splice(i, 1);
}
}
$(".triitem").addClass("unselectedborder");

}

function clearQuadrisillabe(){
$(".quadriitem").removeClass("unselectedborder");
$(".quadriitem").removeClass("selectedborder");
for(i=stimoliselezionati.length-1;i>=0;i--){

if(stimoliselezionati[i].sillabe == 4){
stimoliselezionati.splice(i, 1);
}
}
$(".quadriitem").addClass("unselectedborder");

}

