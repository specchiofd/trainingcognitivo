function salva(){
  window.alert("ok");
  var uri = "http://www.trainingcognitivo.it/GC/barrage/index.html?"+
  "modalita="+modalita+
  "&totalestimoli="+totale_stimoli+
  "&tempo="+tempo+
  "&tempotrascorso="+tempotrascorso+
  "&stimolofisso="+stimolofisso+
  "&quandocambia="+quandocambia+
  "&quantistimoli="+quantistimoli+
  "&quantisecondi="+quantisecondi+
  "&feedback="+feedback+
  "&mostrafeedback="+mostra_feedback+
  "&ordinatacasuale="+ordinatacasuale+
  "&oscura="+oscura+
  "&stimoli="+stimoli+
  "&distrattori="+distrattori+
  "&tipodistrattori="+tipo_distrattori+
  "&larghezza="+larghezza+
  "&altezza="+larghezza+
  "&mouseotastiera="+mouseotastiera+
  "&barrarossa="+barrarossa

  ;
  var res = encodeURI(uri);
  muri = res;


  gapi.client.setApiKey('AIzaSyCPGG_TU77GgmuJFkCint9SMUnhVzaUyVQ');
  gapi.client.load('urlshortener', 'v1',makeRequest);
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
                $("#saveModal").modal("show");
            });
}
function myParse(ms){
  modalita = ms.modalita;
  totale_stimoli = ms.totalestimoli;
  tempo = ms.tempo;
  tempotrascorso = ms.tempotrascorso;
  stimolofisso = ms.stimolofisso;
  quandocambia = ms.quandocambia;
  quantistimoli = ms.quantistimoli;
  quantisecondi = ms.quantisecondi;
  feedback = ms.feedback;
  mostra_feedback = ms.mostrafeedback;
  ordinatacasuale = ms.ordinatacasuale;
  oscura = ms.oscura;
  stimoli = ms.stimoli;
  distrattori = ms.distrattori;
  tipo_distrattori = ms.tipodistrattori;
  larghezza = ms.larghezza;
  altezza = ms.altezza;
  mouseotastiera = ms.mouseotastiera;
  barrarossa = ms.barrarossa;
  initialSettings();
}
