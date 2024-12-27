var muri;

function recap(){
if(T.custom){
T.lista = $("#listapersonalizzata").val().split(',');
}

switch(T.modalita){
case 'normale':
$("#modeinfo").text("Modalità normale: per segnare un errore di lettura, clicca o tocca lo schermo");
break;
case 'feedback':
$("#modeinfo").text("Modalità feedback: dopo aver visto la parola ti verrà chiesto di indicare se è stata letta correttamente");
break;
case 'riscrivi':
$("#modeinfo").text("Modalità riscrivi: dopo aver letto la parola ti verrà chiesto di riscriverla");
break;
}
$("#rcustom").text("Lista: " + checkCustom());
if(T.custom){
$("#rtipolista").hide();
$("#rnumerosillabe").hide();
$("#rtiposillabe").hide();
$("#rnomelista").hide();
}
else{
$("#rtipolista").show();
$("#rnumerosillabe").show();
$("#rtiposillabe").show();
$("#rnomelista").show();
}
$("#rtipolista").text("Tipo lista: " + T.pnp);
$("#rnumerosillabe").text("Numero sillabe: " + T.sillabe);
$("#rtiposillabe").text("Tipo di sillabe: " + T.gruppo);
$("#rnomelista").text("Nome lista: " + T.nomelista);
$("#rtempo").text("Tempo: " + T.tempo + " ms");
$("#rintertempo").text("Intertempo: " + T.intertempo + " ms");
$("#rdimensioni").text("Dimensione testo: " + T.dimensioni);
$("#rposizione").text("Posizione: " + T.posizione);
if(T.maiuscole){
$("#rmaiuscole").show();
$("#rmaiuscole").text("Tutte maiuscole");
}
else{
$("#rmaiuscole").hide();
}
$("#rmodalita").text("Modalità: " + T.modalita);
if(T.incremento){
$("#rincremento").text("Autoincremento attivato");
$("#rquantoincremento").show();
$("#rquantoincremento").text("Autoincremento: " + T.quantoincremento + "%");
}
else{
$("#rincremento").text("Autoincremento disattivato");
$("#rquantoincremento").hide();
}
$("#rsillabapersillaba").text("Sillaba per sillaba: " + sino(T.sillabapersillaba));
$("#rmascheramento").text("Mascheramento: " + sino(T.mascheramento));
$("#rcarattere").text("Carattere: " + car(T.carattere));

$("#rcoloretesto").text("Colore testo: " + colore(T.coloretesto));
$("#rcoloresfondo").text("Colore sfondo: " + colore(T.coloresfondo));
$("#rlista").text(T.lista.join(", "));

var uri = "http://www.trainingcognitivo.it/Tachistoscopio/index.html?custom=true&lista="+escape(T.lista.join())+
"&tempo="+T.tempo+
"&intertempo="+T.intertempo+
"&mescola="+T.mescola+
"&posizione="+T.posizione+
"&mauiscole="+T.mauiscole+
"&modalita="+T.modalita+
"&incremento="+T.incremento+
"&dimensioni="+T.dimensioni+
"&dimensionitoexport="+T.dimensionitoexport+
"&quantoincremento="+T.quantoincremento+
"&mascheramento="+T.mascheramento+
"&carattere="+T.carattere+
"&coloretesto="+escape(T.coloretesto)+
"&coloresfondo="+escape(T.coloresfondo)
;
var res = encodeURI(uri);
muri = res;





}

function makeRequest(){
	  var request = gapi.client.urlshortener.url.insert({
                'resource': {
                    'longUrl': muri // Your long URL
                }
            });

            request.execute(function(response)
            {
                $("#tmp").val(response.id);
            });
}


function car(stringa){
switch(stringa){
case "sans-serif":
return "Senza grazie";
break;
case "serif":
return "Con grazie";
break;
case "monospace":
return "Monospazio";
break;
}
}

function colore(stringa){
switch(stringa){
case "#000":
return "Nero";
break;
case "#FFF":
return "Bianco";
break;
case "FF0000":
return "Rosso";
break;
case "#CCC":
return "Grigio";
break;
case "#336600":
return "Verde";
break;
case "0000FF":
return "Blu";
break;
}
}

function checkCustom(){
if(T.custom){
return "Personalizzata"
}
else{
return "Esistente"
}
}

function sino(variabile){
if(variabile){
return "Sì";
}
else{
return "No";
}
}
