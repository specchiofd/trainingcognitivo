var LettereNumeri = {
avvio: function(){
$("#infatti").hide();
$("#controlla").off();
$("#gioco_container").show();
$("#istruzione").text("Trasforma in numero");
$("#gioco_container").css("background-color","aliceblue");
$("#riprova").click(function(){
LettereNumeri.avvio();
});
$("#cambia_parametri").click(function(){
window.open("http://www.trainingcognitivo.it/NumeriLettere","_self");


});
$("#risultato").css("opacity","0");
$("#risultato").text("");
$("#riprova").hide();
$("#cambia_parametri").hide();
$("#controlla").show();
$("#risposta").val("");
$("#risposta").focus();
$("#controlla").click(function(){
LettereNumeri.valuta();
});
$("#risposta").css("opacity","1");
$("#risposta").show();
$("#gioco_container").animate({top:0});


this.unita = [["zero", "0"],["uno", "1"],["due", "2"],["tre", "3"],["quattro", "4"],["cinque", "5"],["sei", "6"],["sette", "7"],["otto", "8"],["nove", "9"]];
this.teens = [["dieci", "10"],["undici", "0"],["dodici", "0"],["tredici", "0"],["quattordici", "0"],["quindici", "0"],["sedici", "0"],["diciassette", "0"],["diciotto", "0"],["diciannove", "0"]];
this.decine = [["venti", "20"],["trenta", "30"],["quaranta", "40"],["cinquanta", "50"],["sessanta", "60"],["settanta", "70"],["ottanta", "80"],["novanta", "90"]];

this.minimo = parseInt($("#minimo").val());
this.massimo = parseInt($("#massimo").val());
this.numeri_generati = "";
this.numeri_convertiti = "";
this.genera_numeri(this.minimo,this.massimo);
$("#numero").text(this.numeri_convertiti);
},

valuta: function(){
if (parseInt($("#risposta").val()) == this.numeri_generati){

$("#risposta").hide(function(){$("#controlla").hide();
$("#gioco_container").animate({backgroundColor:"#90ee90"});
$("#cambia_parametri").show(); $("#riprova").show(); 
$("#risultato").text("Esatto! Il numero era " + String(LettereNumeri.numeri_generati)+ "!"); 
$("#risultato").fadeTo(1000,1); 
$("#riprova").fadeIn(); 
$("#cambia_parametri").fadeIn()
});

}
else
{
$("#risposta").hide(function(){$("#controlla").hide();
$("#gioco_container").animate({backgroundColor:"#f08080"});
$("#cambia_parametri").show(); $("#riprova").show(); 
$("#risultato").text("Hai scritto " + $("#risposta").val() +" ,ma il numero era " + String(LettereNumeri.numeri_generati)+ "!"); 
$("#risultato").fadeTo(1000,1); 
$("#riprova").fadeIn(); 
$("#cambia_parametri").fadeIn()
});
}
},

genera_numeri: function(min,max){
{
this.numeri_generati = this.getRandomInt(min,max);
this.numeri_convertiti = this.converti(this.numeri_generati);
}
},

converti: function(numero){
if (numero < 10){
	return this.unita[numero][0];
}
else if (numero > 9 && numero < 20){
	return this.teens[numero-10][0];
}
else if (numero > 19 && numero < 100){
	stringa_temporanea = "";
	stringa_temporanea += this.decine[Math.floor(numero / 10) - 2][0];
	if (numero%10 == 1){
	stringa_temporanea = stringa_temporanea.slice(0,stringa_temporanea.length-1);
	stringa_temporanea += "uno";
	}
	else if (numero%10 == 3){
	stringa_temporanea += "tré";
	}

	else if (numero%10 == 0){
	stringa_temporanea += "";
	}
	else if (numero%10 == 8){
	stringa_temporanea = stringa_temporanea.slice(0,stringa_temporanea.length-1);
	stringa_temporanea += "otto";
	}
	else{
	stringa_temporanea += this.converti(numero%10);
	}
	return stringa_temporanea;
}

else if (numero > 99 && numero < 1000){
	stringa_temporanea_bis = "";
	if (numero > 199){
	stringa_temporanea_bis += this.unita[Math.floor(numero/100)][0]
	}
	stringa_temporanea_bis += "cento";
	if (numero % 100 == 0){
	return stringa_temporanea_bis;
	}
	else
	{
	if (numero%100 > 79 && numero%100 < 90){
	stringa_temporanea_bis = stringa_temporanea_bis.slice(0,stringa_temporanea_bis.length-1);
	}
	stringa_temporanea_bis += this.converti(numero%100);
	return stringa_temporanea_bis;
	}
}
},

getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
}
