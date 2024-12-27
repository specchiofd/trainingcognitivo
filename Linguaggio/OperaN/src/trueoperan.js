arrayDaMostrare = [];
inGame = false;
currentItem = 0;
clickable = false;
errors = 0;
errorsItem = [];
tachistotime = 0;
incremento = 0;
totalOccurences = [];
errOccurences = [];

function preparastimoli(){
$("#operan").empty();
shuffle(stimoliselezionati);
counter = stimoli;
priority = 0;
y = 0;
for(i=0;i<stimoliselezionati.length;i++){
if(counter>0){
arrayDaMostrare.push(i);
counter -=1;
}
}
if(counter > 0){
while(counter >0){
if(stimoliselezionati[y].frequenza <= priority){
arrayDaMostrare.push(y);
counter -=1;
}
y = (y+1)%stimoliselezionati.length;
if(y==0){
priority = (priority + 1)%3;}
}
}
shuffle(arrayDaMostrare);

for(k=0;k<arrayDaMostrare.length;k++){
$("#operan").append("<img id='elemento_"+k+"' class='trueitem' src='./img/"+trovacartella(stimoliselezionati[arrayDaMostrare[k]].sillabe)+"/"+stimoliselezionati[arrayDaMostrare[k]].nome + ".png'>");
}
$(".trueitem").css("width",(dimensioneimmagine+24)+"px");
$(".trueitem").css("width",(dimensioneimmagine+24)+"px");
setScreen(2);
$("#barra").css("width",$("#operan").width()+"px");
$('#instruction').modal('show');
if(!avanzamentoautomatico ){
$("#operanavanza").show();
}
else{
$("#operanavanza").hide();
}
if(!scomparsa){
$(".trueitem").show();
}
else{
$(".trueitem").hide();
}
}

function trovacartella(numero){
switch(numero)
{
case 2:
return "bisillabe"
case 3:
return "trisillabe"
case 4:
return "quadrisillabe"
}
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}


function setDefault(){
inGame = false;
currentItem = 0;
clickable = false;
errors = 0;
errorsItem = [];
tachistotime = 0;
start();
}

function start(){

errorsItem = [];
if(avanzamentoautomatico){
switch(tipoesposizione){
case "sillsec":
tachistotime = (1/sillsec)*1000;
break;
case "secsill":
tachistotime = secsill*1000;
break;
case "fisso":
tachistotime = fisso;
break;
}
currentItem = 0;
inGame = true;
clickable = true;
$("#elemento_0").addClass("selezionato");
if(scomparsa){
$("#elemento_0").show();
}
tout();
}
else{
inGame = true;
clickable = true;
$("#elemento_0").addClass("selezionato");
if(scomparsa){
$("#elemento_0").show();
}
$("#operanavanza").click(function(){
$("#elemento_"+currentItem).removeClass("selezionato");
currentItem += 1;
if(currentItem != stimoli){
$("#elemento_"+currentItem).addClass("selezionato");
if(scomparsa){
$("#elemento_"+currentItem).show();
}
clickable = true;}
else{
fine();
}
});
}
}

function tout(){
intervallo = setTimeout(function(){
$("#elemento_"+currentItem).removeClass("selezionato");
currentItem += 1;
if(currentItem != stimoli){
$("#elemento_"+currentItem).addClass("selezionato");
if(scomparsa){
$("#elemento_"+currentItem).show();
}
clickable = true;
tout();}
else{
fine();
}
},quantotempo(stimoliselezionati[arrayDaMostrare[currentItem]].sillabe));


}

function getOccurences(){

for(i=0;i<stimoliselezionati.length;i++){
totalOccurences.push(0);
errOccurences.push(0);
}
for(i=0;i<arrayDaMostrare.length;i++){
totalOccurences[arrayDaMostrare[i]]+=1;
}
for(i=0;i<errorsItem.length;i++){
errOccurences[arrayDaMostrare[errorsItem[i]]]+=1;
}

}



function fine(){

totalOccurences = [];
errOccurences = [];
getOccurences();
$(".trueitem").removeClass("selezionato");
$("#resultWrapper").empty();
inGame = false;
incremento = 0;
percentage = (stimoli-errors)*100/stimoli;
$("#myprogress").css("width","0%");
$("#fine").modal('show');
$("#risultato").text(stimoli-errors + " risposte corrette su " + stimoli + "!");
for(i=0;i<stimoliselezionati.length;i++){
$("#resultWrapper").append("<tr><th scope='row'><td>"+stimoliselezionati[i].nome.toUpperCase()+"</td><td>"+(totalOccurences[i]-errOccurences[i])+"/"+totalOccurences[i]+"</td><td>"+Math.round((totalOccurences[i]-errOccurences[i])/totalOccurences[i]*100)+"%</td></tr>");
}

progresso = setInterval(function(){if(incremento<=percentage){
$("#myprogress").text(incremento+"%");
$("#myprogress").css("width",incremento+"%");
$("#myprogress").attr("valuenow",incremento);
incremento+=1;
}
else{
clearInterval(progresso);
}
},50);


}

function quantotempo(numsillabe){
if(tipoesposizione != "fisso"){
return numsillabe * tachistotime;
}else{
return tachistotime;
}
}
