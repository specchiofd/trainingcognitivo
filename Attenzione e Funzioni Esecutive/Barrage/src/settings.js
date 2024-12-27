var assets=["0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png",
"8.png","9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png",
"17.png","18.png","19.png","20.png","21.png","22.png","23.png","24.png","25.png",
"26.png","27.png","28.png","29.png","intro_1.png","intro_2.png","intro_3.png",
"intro_5.png","intro_6.png","missed.png","sad.png","success.png","time.png","tot.png","v.png","wrong.png","x.png"]
loadedfile = 0;
page_width = 0;
modalita = 0;
modalita_array = ["A tempo","Trova tutti gli stimoli"];
totale_stimoli = 1;
totale_stimoli_array = ["No","Sì"];
tempo = 120;
txt_tempotrascorso = ["Mostra tempo rimanente","Mostra tempo trascorso"];
tempotrascorso = 1;
tempotrascorso_array = ["No","Sì"];
stimolofisso = 1;
stimolofisso_array = ["Variabile","Fisso"];
quandocambia = 0;
quandocambia_array = ["Ogni tot secondi", "Ogni tot stimoli"];
txt_quandocambia = ["Dopo quanti secondi?","Dopo quanti stimoli?"];
quantistimoli = 5;
quantisecondi = 30;
feedback = 0;
feedback_array = ["Immediato","Alla fine"];
mostra_feedback = 1;
mostra_feedback_array = ["Uno alla volta","Tutto insieme"];
ordinatacasuale = 1;
ordinatacasuale_array = ["Ordinata","Casuale"];
oscura = 0;
oscura_array = ["No","Sì"]
stimoli = 10;
distrattori = 3;
tipo_distrattori = 0;
tipo_distrattori_array = ["Simili","Diversi"];
larghezza = 6;
altezza = 5;
mouseotastiera = 0;
mouseotastiera_array = ["Mouse","Tastiera"];
barrarossa = 0;
barrarossa_array = ["No","Sì"];

$(document).ready(function(){



  $("#refresh").click(function(){
    $("#mod_refresh").modal("show");
  });
  $("#lowrefresh").click(function(){
    $("#mod_refresh").modal("show");
  });
  $("#yesrefresh").click(function(){
    in_ingame = false;
        $("#mod_refresh").modal("hide");
    setTimeout(function(){

      set_variabili();
    },1000);
  });
  $("#back").click(function(){
    $("#mod_back").modal("show");
  });
  $("#lowback").click(function(){
    $("#mod_back").modal("show");
  });
  $("#yesback").click(function(){
    in_ingame = false;
    $("#mod_back").modal("hide");
    setTimeout(function(){

      showSettings();
    },1000);
  });
  $("#finerestart").click(function(){
    $("#fine").modal("hide");
      showSettings();
  });
  $("#alleimpostazioni").click(function(){
    showSettings();
  });
  $("#done").click(function(){
    final_feedback_choice();
  });
  $("#save").click(function(){
    salva();
  });
  $(document).keydown(function(e) {
  if(mouseotastiera == 1 && in_ingame){
    if (e.keyCode == '38') {
      e.preventDefault();
     su();
 }
 else if (e.keyCode == '40') {
   e.preventDefault();
     giu();
 }
 else if (e.keyCode == '37') {
   e.preventDefault();
    sinistra();
 }
 else if (e.keyCode == '39') {
   e.preventDefault();
    destra();
 }
 else if (e.keyCode == '32'){
   e.preventDefault();
   ha_clickato(stabiliscicella(current_position));
 }
  }
});
  page_width = $("#riferimento").width();
  setLeftButtons();
  showLeftButton(0);
    setButtons();
  initialSettings();

});

function loadImages(){

  var preload = new createjs.LoadQueue();
  preload.addEventListener("fileload",  function(){loadedfile+=1; if(loadedfile == assets.length){
    $("#loadmodal").modal("hide");
  }
});
for(i=0;i<assets.length;i++){
preload.loadFile("img/"+ assets[i]);}
}


function setLeftButtons(){
  $("#btn_attivita").click(function(){
    showLeftButton(0);
  })
  $("#btn_stimoli").click(function(){
    showLeftButton(1);
  })
  $("#btn_foglio").click(function(){
    showLeftButton(2);
  })
}

function showLeftButton(i){
  switch(i){
    case 0:
    $("#btn_attivita").removeClass("btn_unselected");
    $("#btn_stimoli").addClass("btn_unselected");
    $("#btn_foglio").addClass("btn_unselected");
    $("#wrapper_attivita").show();
    $("#wrapper_stimoli").hide();
    $("#wrapper_foglio").hide();
    break;
    case 1:
    $("#btn_attivita").addClass("btn_unselected");
    $("#btn_stimoli").removeClass("btn_unselected");
    $("#btn_foglio").addClass("btn_unselected");
    $("#wrapper_attivita").hide();
    $("#wrapper_stimoli").show();
    $("#wrapper_foglio").hide();
    break;
    case 2:
    $("#btn_attivita").addClass("btn_unselected");
    $("#btn_stimoli").addClass("btn_unselected");
    $("#btn_foglio").removeClass("btn_unselected");
    $("#wrapper_attivita").hide();
    $("#wrapper_stimoli").hide();
    $("#wrapper_foglio").show();
    break;
  }
}

function setButtons(){
  $(".prev").click(function(){
    switch($(this).attr("target"))
    {
      case 'modalita':
      modalita = riduci(modalita,modalita_array);
      update(modalita,modalita_array,$("#modalita"));
      update_eccezione_modalita();
      break;
      case 'totale_stimoli':
      totale_stimoli = riduci(totale_stimoli,totale_stimoli_array);
      update(totale_stimoli,totale_stimoli_array,$("#totale_stimoli"));
      break;
      case 'tempotrascorso':
      tempotrascorso = riduci(tempotrascorso,tempotrascorso_array);
      update(tempotrascorso,tempotrascorso_array,$("#tempotrascorso"));
      break;
      case 'stimolofisso':
      if(ordinatacasuale == 1){
        stimolofisso = riduci(stimolofisso,stimolofisso_array);
        update(stimolofisso,stimolofisso_array,$("#stimolofisso"));
        update_eccezione_stimolofisso();
      }

      break;
      case 'quandocambia':
      quandocambia = riduci(quandocambia,quandocambia_array);
      update(quandocambia,quandocambia_array,$("#quandocambia"));
      update_eccezione_quandocambia();
      break;
      case 'feedback':
      if(stimolofisso && ordinatacasuale){
      feedback = riduci(feedback,feedback_array);
      update(feedback,feedback_array,$("#feedback"));
      update_eccezione_feedback();}
      break;
      case 'mostra_feedback':
      mostra_feedback = riduci(mostra_feedback,mostra_feedback_array);
      update(mostra_feedback,mostra_feedback_array,$("#mostra_feedback"));
      break;
      case 'ordinatacasuale':
      ordinatacasuale = riduci(ordinatacasuale,ordinatacasuale_array);
      update(ordinatacasuale,ordinatacasuale_array,$("#ordinatacasuale"));
      update_eccezione_ordinatacasuale();
      break;
      case 'oscura':
      oscura = riduci(oscura,oscura_array);
      update(oscura,oscura_array,$("#oscura"));
      break;
      case 'tipodistrattori':
      tipo_distrattori = riduci(tipo_distrattori,tipo_distrattori_array);
      update(tipo_distrattori,tipo_distrattori_array,$("#tipodistrattori"));
      update_eccezione_tipodistrattori();
      break;
      case 'mouseotastiera':
      mouseotastiera = riduci(mouseotastiera,mouseotastiera_array);
      update(mouseotastiera,mouseotastiera_array,$("#mouseotastiera"));
      break;
      case 'barrarossa':
      barrarossa = riduci(barrarossa,barrarossa_array);
      update(barrarossa,barrarossa_array,$("#barraneglect"));
      break;
    }
  });

  $(".next").click(function(){
    switch($(this).attr("target"))
    {
      case 'modalita':
      modalita = aumenta(modalita,modalita_array);
      update(modalita,modalita_array,$("#modalita"));
      update_eccezione_modalita();
      break;
      case 'totale_stimoli':
      totale_stimoli = aumenta(totale_stimoli,totale_stimoli_array);
      update(totale_stimoli,totale_stimoli_array,$("#totale_stimoli"));
      break;
      case 'tempotrascorso':
      tempotrascorso = aumenta(tempotrascorso,tempotrascorso_array);
      update(tempotrascorso,tempotrascorso_array,$("#tempotrascorso"));
      break;
      case 'stimolofisso':
            if(ordinatacasuale == 1){
      stimolofisso = aumenta(stimolofisso,stimolofisso_array);
      update(stimolofisso,stimolofisso_array,$("#stimolofisso"));
      update_eccezione_stimolofisso();}
      break;
      case 'quandocambia':
      quandocambia = aumenta(quandocambia,quandocambia_array);
      update(quandocambia,quandocambia_array,$("#quandocambia"));
      update_eccezione_quandocambia();
      break;
      case 'feedback':
      if(stimolofisso && ordinatacasuale){
      feedback = aumenta(feedback,feedback_array);
      update(feedback,feedback_array,$("#feedback"));
      update_eccezione_feedback();}
      break;
      case 'mostra_feedback':
      mostra_feedback = aumenta(mostra_feedback,mostra_feedback_array);
      update(mostra_feedback,mostra_feedback_array,$("#mostra_feedback"));
      break;
      case 'ordinatacasuale':
      ordinatacasuale = aumenta(ordinatacasuale,ordinatacasuale_array);
      update(ordinatacasuale,ordinatacasuale_array,$("#ordinatacasuale"));
      update_eccezione_ordinatacasuale();
      break;
      case 'oscura':
      oscura = aumenta(oscura,oscura_array);
      update(oscura,oscura_array,$("#oscura"));
      break;
      case 'tipodistrattori':
      tipo_distrattori = aumenta(tipo_distrattori,tipo_distrattori_array);
      update(tipo_distrattori,tipo_distrattori_array,$("#tipodistrattori"));
      update_eccezione_tipodistrattori();
      break;
      case 'mouseotastiera':
      mouseotastiera = aumenta(mouseotastiera,mouseotastiera_array);
      update(mouseotastiera,mouseotastiera_array,$("#mouseotastiera"));
      break;
      case 'barrarossa':
      barrarossa = aumenta(barrarossa,barrarossa_array);
      update(barrarossa,barrarossa_array,$("#barraneglect"));
      break;
    }
  });

  $("#more_secondistimoli").click(function(){
    if(quandocambia){
      if(quantistimoli < stimoli-1){
      quantistimoli +=1;
      update_eccezione_quandocambia();
      }
    }
    else{
      if((modalita == 0 && quantisecondi < (tempo -1)) || modalita == 1){
      quantisecondi +=1;
      update_eccezione_quandocambia();
    }
    }
  });

  $("#less_secondistimoli").click(function(){
    if(quandocambia){
      if(quantistimoli > 1){
      quantistimoli -=1;
      update_eccezione_quandocambia();
      }
    }
    else{
      if(quantisecondi > 5){
      quantisecondi -=1;
      update_eccezione_quandocambia();
    }
    }
  });

  $("#less_secondi").click(function(){
    if(modalita == 1 || stimolofisso || (!stimolofisso && modalita == 0 && (tempo > quantisecondi+6))){
      if(tempo-5 > 5){
      tempo-=5;}
      updateTempo();
    }
  });

  $("#more_secondi").click(function(){
    tempo +=5;
    updateTempo();
  });

  $("#more_stimolitarget").click(function(){
    if(stimoli+1 < (larghezza*altezza+distrattori))
    stimoli+=1;
    updateStimoliTarget();
  });

  $("#less_stimolitarget").click(function(){
    if(stimoli > 1){
      if((quandocambia && (stimoli > quantistimoli+2)) || !quandocambia){
        stimoli-=1;
      }
    }
    updateStimoliTarget();
  });

  $("#more_distrattori").click(function(){
    if(larghezza*altezza > stimoli + distrattori){
      if(tipo_distrattori != 0 || tipo_distrattori == 0 && distrattori <3){
    distrattori+=1;
  updateDistrattori();}}
    else{
      window.alert("Griglia troppo piccola, aumentare le dimensioni");
    }
  });

  $("#less_distrattori").click(function(){
    if(distrattori > 1){
      distrattori -= 1;
    }
    updateDistrattori();
  });

  $("#meno_larghezza").click(function(){
    if((larghezza-1)*altezza > stimoli+distrattori){
      larghezza-=1;
    }
    updateLarghezza();
  });

  $("#piu_larghezza").click(function(){
    larghezza+=1;
    updateLarghezza();
  });

  $("#meno_altezza").click(function(){
    if((larghezza)*(altezza-1) > stimoli+distrattori){
      altezza-=1;
    }
    updateAltezza();
  });

  $("#piu_altezza").click(function(){
    altezza+=1;
    updateAltezza();
  });

}

function riduci(v,arr){
  v -= 1;
  if(v == -1){
    v = arr.length-1;
  }
  return v;
}

function aumenta(v,arr){
  v += 1;
  if(v == arr.length){
    v = 0;
  }
  return v;
}

function update(v,arr,ogg){
  ogg.text(arr[v]);
}

function updateDistrattori(){
    $("#distrattori").text(distrattori);
}

function updateStimoliTarget(){

  $("#stimoli").text(stimoli);
}

function updateTempo(){
    $("#tempo").text(tempo);
}

function updateLarghezza(){
  $("#larghezza").text(larghezza);
}

function updateAltezza(){
  $("#altezza").text(altezza);
}
function update_eccezione_modalita(){
  $("#txt_tempotrascorso").text(txt_tempotrascorso[modalita]);
  if(modalita){
    $("#tempo_wrapper").hide();

    update(totale_stimoli,totale_stimoli_array,$("#totale_stimoli"));
  }
  else{
    $("#tempo_wrapper").show();

  }
}

function update_eccezione_stimolofisso(){
  if(stimolofisso){
    $("#quandocambia_wrapper").hide();
    $("#sub_variabile_wrapper").hide();
    $("#left_feedback").removeClass("mydisabled");
    $("#right_feedback").removeClass("mydisabled");

  }else{
    $("#quandocambia_wrapper").show();
    $("#sub_variabile_wrapper").show();
    feedback = 0;
    update(feedback,feedback_array,$("#feedback"));
    update_eccezione_feedback();
    $("#left_feedback").addClass("mydisabled");
    $("#right_feedback").addClass("mydisabled");
  }
}




function update_eccezione_quandocambia(){
  $("#txt_quandocambia").text(txt_quandocambia[quandocambia]);
  if(quandocambia){
    $("#secondistimoli").text(quantistimoli);
  }
  else{
    $("#secondistimoli").text(quantisecondi);
  }
}

function update_eccezione_feedback(){
  if(feedback){
    $("#mostra_feedback_wrapper").show();
    update(mostra_feedback,mostra_feedback_array,$("#mostra_feedback"));
  }else{
    $("#mostra_feedback_wrapper").hide();
  }
}

function update_eccezione_ordinatacasuale(){
  if(ordinatacasuale){
    $("#oscura_wrapper").hide();
    update(feedback,feedback_array,$("#feedback"));
    $("#left_feedback").removeClass("mydisabled");
    $("#right_feedback").removeClass("mydisabled");
    $("#left_stimolofisso").removeClass("mydisabled");
    $("#right_stimolofisso").removeClass("mydisabled");
    update_eccezione_feedback();
  }else{
    $("#oscura_wrapper").show();
    feedback = 0;
    update(feedback,feedback_array,$("#feedback"));
    stimolofisso = 1;
    update(stimolofisso,stimolofisso_array,$("#stimolofisso"));
    update_eccezione_stimolofisso();
    $("#left_stimolofisso").addClass("mydisabled");
    $("#right_stimolofisso").addClass("mydisabled");
    $("#right_feedback").addClass("mydisabled");
    $("#left_feedback").addClass("mydisabled");
    $("#right_feedback").addClass("mydisabled");
    update_eccezione_feedback();
  }
}

function update_eccezione_tipodistrattori(){
  if(tipo_distrattori == 0 && distrattori > 4){
    distrattori = 4;
    updateDistrattori();
  }
}

function initialSettings(){
  update(modalita,modalita_array,$("#modalita"));
  update_eccezione_modalita();
  update(totale_stimoli,totale_stimoli_array,$("#totale_stimoli"));
  update(tempotrascorso,tempotrascorso_array,$("#tempotrascorso"));
  update(stimolofisso,stimolofisso_array,$("#stimolofisso"));
  update_eccezione_stimolofisso();
  update(quandocambia,quandocambia_array,$("#quandocambia"));
  update_eccezione_quandocambia();
  updateTempo();
  update(feedback,feedback_array,$("#feedback"));
  update_eccezione_feedback();
  update(mostra_feedback,mostra_feedback_array,$("#mostra_feedback"));
  update(ordinatacasuale,ordinatacasuale_array,$("#ordinatacasuale"));
  update_eccezione_ordinatacasuale();
  update(oscura,oscura_array,$("#oscura"));
  updateStimoliTarget();
  updateDistrattori();
  update(tipo_distrattori,tipo_distrattori_array,$("#tipodistrattori"));
  update_eccezione_tipodistrattori();
  update(mouseotastiera,mouseotastiera_array,$("#mouseotastiera"));
  update(barrarossa,barrarossa_array,$("#barraneglect"));
  updateLarghezza();
  updateAltezza();
  showSettings();
}

function showSettings(){
  $("#btn_left_wrapper").show();
  $("#settings").show();
  $("#pre_instructions").hide();
  $("#game").hide();
  $("#feedback_wrapper").hide();
}
