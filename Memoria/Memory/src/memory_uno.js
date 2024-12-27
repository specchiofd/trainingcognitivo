function Carta (valore){
this.valore = valore;
this.src = this.valore+".png";
this.cliccata = false;
this.attiva = true;
}


function Gioco(){
//0 da cliccare, 1 = prima carta scelta, 2 = seconda carta scelta
this.elenco = [];
this.game_status = 0;
this.last_couple = [-1,-1];
this.turno = "rosso";
this.punti_rossi = 0;
this.punti_blu = 0;
};


$(document).ready(function(){
$("#vittoria").hide();
gioco = new Gioco();

for (z=0;z<2;z++){
gioco.elenco.push(new Carta("bici"));
gioco.elenco.push(new Carta("anguria"));
gioco.elenco.push(new Carta("squalo"));
gioco.elenco.push(new Carta("borsetta"));
gioco.elenco.push(new Carta("ombrello"));
gioco.elenco.push(new Carta("lampadina"));
gioco.elenco.push(new Carta("martello"));
gioco.elenco.push(new Carta("telefonino"));
gioco.elenco.push(new Carta("bue"));
gioco.elenco.push(new Carta("forchetta"));
gioco.elenco.push(new Carta("zebra"));
gioco.elenco.push(new Carta("fiori"));
gioco.elenco.push(new Carta("aquila"));
gioco.elenco.push(new Carta("lavatrice"));
gioco.elenco.push(new Carta("peperoni"));
}
gioco.elenco = shuffle(gioco.elenco);

for (i=0;i<5;i++){
		$("#tabellone").append("<div class='riga' id='riga_"+i+"'></div>");
		
	for (j=0;j<6;j++){
		$("#riga_"+i).append("<div class='cella' numero='"+ (i*6+j) +"' id='cella_"+(i*6+j)+"'></div>");
		$("#cella_"+(i*6+j)).css("background-image","url('src/"+(i*6+j+1)+".png')");0
		
}

piazza_segnalino("rosso");

}

$(".cella").click(function(){
risolvi($(this).attr("numero"));
});
});

function risolvi(numero){
if(gioco.elenco[numero].attiva == true && gioco.elenco[numero].cliccata == false){
switch(gioco.game_status){
case 0:
$("#cella_"+numero).css("background-image","url('src/"+gioco.elenco[numero].src+"')");
gioco.game_status = 1;
gioco.last_couple[0] = numero;
break;
case 1:
gioco.game_status = 2;
gioco.last_couple[1] = numero;
$("#cella_"+numero).css("background-image","url('src/"+gioco.elenco[numero].src+"')");
esito();
break;
}
}
}

function esito(){
intermezzo = setTimeout(function(){
if(gioco.elenco[gioco.last_couple[1]].valore == gioco.elenco[gioco.last_couple[0]].valore)
{
if (gioco.turno == "rosso"){
gioco.punti_rossi += 1;
$("#punti_rossi").text(parseInt($("#punti_rossi").text())+1);
}else
{
gioco.punti_blu += 1;
$("#punti_blu").text(parseInt($("#punti_blu").text())+1);
}
check_for_win();
}
else
{
riposiziona();
}
},2000);

}

function riposiziona(){
$("#cella_"+gioco.last_couple[0]).css("background-image","url('src/"+(parseInt(gioco.last_couple[0])+1)+".png')");
$("#cella_"+gioco.last_couple[1]).css("background-image","url('src/"+(parseInt(gioco.last_couple[1])+1)+".png')");
gioco.elenco[gioco.last_couple[0]].cliccata = false;
gioco.elenco[gioco.last_couple[1]].cliccata = false;
switch_turn();
}

function switch_turn(){

if(gioco.turno == "rosso"){
gioco.turno = "blu"
piazza_segnalino("blu");
}
else
{
gioco.turno = "rosso";
piazza_segnalino("rosso");
}
gioco.game_status = 0;
}


function piazza_segnalino(colore){
if (colore == "rosso"){
$("#segnalino_rosso").css("background-image","url('src/segnalino.png')");
$("#segnalino_blu").css("background","transparent");
}
else
{
$("#segnalino_blu").css("background-image","url('src/segnalino.png')");
$("#segnalino_rosso").css("background","transparent");
}
}

function check_for_win(){
if ((gioco.punti_rossi + gioco.punti_blu) < 15){
$("#cella_"+gioco.last_couple[0]).css("opacity","0");
$("#cella_"+gioco.last_couple[1]).css("opacity","0");
gioco.elenco[gioco.last_couple[0]].attiva = false;
gioco.elenco[gioco.last_couple[1]].attiva = false;
gioco.game_status = 0;
}
else
{
$("#tabellone").hide();
if (gioco.punti_rossi > gioco.punti_blu){
$("#vittoria").css("background-image","url('src/vittoria_rossa.png')");}
else
{
$("#vittoria").css("background-image","url('src/vittoria_blu.png')");
}
$("#vittoria").show();
}
}

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};