function mostraRiepilogo(){
  riep(modalita,modalita_array,$("#r_modalita"));
  if(!modalita){
    riep_sem(tempo + " secondi",$("#r_tempo"));
    $("#r_tempo_wrapper").show();
  }else{
    $("#r_tempo_wrapper").hide();
  }
  riep(totale_stimoli,totale_stimoli_array,$("#r_totale_stimoli"));
  riep(tempotrascorso,tempotrascorso_array,$("#r_tempotrascorso"));
  riep(stimolofisso,stimolofisso_array,$("#r_stimolofisso"));
  if(stimolofisso){
    $("#r_cambia_wrapper").hide();
  }else{
    $("#r_cambia_wrapper").show();
  }
  if(quandocambia == 0){
    $("#r_quandocambia").text(quantisecondi + " secondi");
  }else{
    $("#r_quandocambia").text(quantistimoli + " stimoli");
  }
  riep(feedback,feedback_array,$("#r_feedback"));
  riep(mostra_feedback,mostra_feedback_array,$("#r_mostrafeedback"));
  riep(ordinatacasuale,ordinatacasuale_array,$("#r_ordinatacasuale"));
  riep(oscura,oscura_array,$("#r_oscura"));
  riep_sem(stimoli,$("#r_stimoli"));
  riep_sem(distrattori,$("#r_distrattori"));
  riep(tipo_distrattori,tipo_distrattori_array,$("#r_tipodistrattori"));
  riep_sem(larghezza,$("#r_larghezza"));
  riep_sem(altezza,$("#r_altezza"));
  riep(mouseotastiera,mouseotastiera_array,$("#r_mousetastiera"));
  riep(barrarossa,barrarossa_array,$("#r_barrarossa"));


}

function riep(v,arr,divisore){
  divisore.text(arr[v]);
}

function riep_sem(v,divisore){
  divisore.text(v);
}
