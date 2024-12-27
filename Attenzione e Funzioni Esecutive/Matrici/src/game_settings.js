assets=["animali_0.png","animali_1.png","animali_2.png","animali_3.png","animali_4.png",
"bandiera_0.png","bandiera_1.png","bandiera_2.png","bandiera_3.png","bandiera_4.png",
"carta_0.png","carta_1.png","carta_2.png","carta_3.png","carta_4.png",
"distrattore_0.png","distrattore_1.png","distrattore_2.png","distrattore_3.png","distrattore_4.png","distrattore_5.png","distrattore_6.png","distrattore_jolly.png",
"giorni_0.png","giorni_1.png","giorni_2.png","giorni_3.png","giorni_4.png",
"lettere_0.png","lettere_1.png","lettere_2.png","lettere_3.png","lettere_4.png",
"numeri_0.png","numeri_1.png","numeri_2.png","numeri_3.png","numeri_4.png",
"scacchi_0.png","scacchi_1.png","scacchi_2.png","scacchi_3.png","scacchi_4.png",
"help_distrattore.jpg","help_immagini.jpg","help_modalita_riproduzione.jpg","help_sottocompito.jpg","help_tipo_distrattore.jpg","rubber.png"]

modalita_array = ["Riproduzione","Sequenza","Sequenza inversa"];
modalita = 0;
sottomodalita_array = ["Semplice", "Spazialmente modificata", "Speculare"];
sottomodalita = 0;
tipo_distrattori_array = ["Diverso colore","Immagine del set", "Diversa immagine"];
tipo_distrattori = 0;
distrattori = 0;
immagini_array = ["Scacchi","Carte da gioco","Numeri","Lettere","Bandiere","Animali","Giorni della settimana"];
immagini = 0;
tempo = 2000;
delay = 600;
stimoli = 3;
larghezza = 3;
altezza = 3;
uguali = 0;
uguali_array = ["Uguali","Diversi"];
esatte = 0;
errate = 0;
omesse = 0;
noimmagine = 0;
loadedfile = 0;

$(document).ready(function(){


  initialSettings();
  setButtons();
});

function salva(){
var uri = "http://www.trainingcognitivo.it/GC/matrici/index.html?"+
"modalita="+modalita+
"&sottomodalita="+sottomodalita+
"&tipodistrattori="+ tipo_distrattori+
"&immagini="+immagini+
"&modalita="+modalita+
"&distrattori="+distrattori+
"&tempo="+tempo+
"&delay="+delay+
"&stimoli="+stimoli+
"&larghezza="+larghezza+
"&altezza="+altezza+
"&uguali="+uguali;
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
                $("#saveModal").modal("show");
                $("#casella").val(response.id);
            });
}

function myParse(ms){

modalita=parseInt(ms.modalita);
sottomodalita=parseInt(ms.sottomodalita);
tipo_distrattori=parseInt(ms.tipodistrattori);
distrattori = parseInt(ms.distrattori);
immagini = parseInt(ms.immagini);
tempo = parseInt(ms.tempo);
delay =parseInt( ms.delay);
stimoli = parseInt(ms.stimoli);
larghezza = parseInt(ms.larghezza);
altezza = parseInt(ms.altezza);
uguali = parseInt(ms.uguali);
initialSettings();
}

function loadImages(){

  var preload = new createjs.LoadQueue();
  preload.addEventListener("fileload",  function(){loadedfile+=1; if(loadedfile == assets.length){
    $("#loadmodal").modal("hide");
  }
});
for(i=0;i<assets.length;i++){
preload.loadFile("img/"+ assets[i]);}
}

function initialSettings(){
  $("#game").hide();
  $("#pre_instructions").hide();
  $("#tipo_distrattori_wrapper").hide();
  update($("#modalita"),modalita_array,modalita);
  update($("#sottomodalita"),sottomodalita_array,sottomodalita);
  update($("#sottomodalita"),sottomodalita_array,sottomodalita);
  update($("#tipodistrattori"),tipo_distrattori_array,tipo_distrattori);
  update($("#immagini"),immagini_array,immagini);
  update($("#uguali"),uguali_array,uguali);
  $("#distrattori").text(distrattori);
  $("#larghezza").text(larghezza);
  $("#altezza").text(altezza);
  $("#tempo").text(tempo);
  $("#delay").text(delay);
  $("#stimoli").text(stimoli);
}

function setButtons(){

  $("#save").click(function(){
  salva();
  });

  $("#done").click(function(){
    if(game_state == 0){
      if(modalita == 0){
        check();
      }
      else{
        if(sequenza.length != sequenza_utente.length){
          if(sequenza.length - sequenza_utente.length == 1){
          window.alert("Devi posizionare ancora una figura")
          }
          else{
          window.alert("Devi posizionare ancora " + (sequenza.length - sequenza_utente.length) + " figure")
          }

        }
        else{
          check();
        }
      }

    }
  });

  $(".next").click(function(){
    switch($(this).attr("target")){
      case 'modalita':
      modalita += 1;
      if(modalita == 3){
        modalita = 0;
        $("#titolo_tempo").text("Tempo di esposizione");
        $("#titolo_stimoli").text("Numero di stimoli");
      } else{
        $("#titolo_tempo").text("Tempo tra le presentazioni");
        $("#titolo_stimoli").text("Numero di presentazioni");
      }
      update($("#modalita"),modalita_array,modalita);
      break;
      case 'sottomodalita':
      sottomodalita += 1;
      if(sottomodalita == 3){
        sottomodalita = 0;
      }
      update($("#sottomodalita"),sottomodalita_array,sottomodalita);
      break;
      case 'tipo_distrattori':
      tipo_distrattori += 1;
      if(tipo_distrattori == tipo_distrattori_array.length){
        tipo_distrattori = 0;
      }
      update($("#tipodistrattori"),tipo_distrattori_array,tipo_distrattori);
      break;
      case 'immagini':
      immagini += 1;
      if(immagini == immagini_array.length){
        immagini = 0;
      }
      update($("#immagini"),immagini_array,immagini);
      break;
      case 'uguali':
      uguali += 1;
      if(uguali == uguali_array.length){
        uguali = 0;
      }
      update($("#uguali"),uguali_array,uguali);
      break;
    }
  });

  $(".prev").click(function(){
    switch($(this).attr("target")){
      case 'modalita':
      modalita -= 1;
      if(modalita == -1){
        modalita = 2;
        $("#titolo_tempo").text("Tempo tra le presentazioni");
        $("#titolo_stimoli").text("Numero di presentazioni");
      }else{
        $("#titolo_tempo").text("Tempo di esposizione");
        $("#titolo_stimoli").text("Numero di stimoli");
      }
      update($("#modalita"),modalita_array,modalita);
      break;
      case 'sottomodalita':
      sottomodalita -= 1;
      if(sottomodalita == -1){
        sottomodalita = 2;

      }
      update($("#sottomodalita"),sottomodalita_array,sottomodalita);
      break;
      case 'tipo_distrattori':
      tipo_distrattori -= 1;
      if(tipo_distrattori == -1){
        tipo_distrattori = tipo_distrattori_array.length-1;
      }
      update($("#tipodistrattori"),tipo_distrattori_array,tipo_distrattori);
      break;
      case 'immagini':
      immagini -= 1;
      if(immagini == -1){
        immagini = immagini_array.length-1;
      }
      update($("#immagini"),immagini_array,immagini);
      break;
      case 'uguali':
      uguali -= 1;
      if(uguali == -1){
        uguali = 1;
      }
      update($("#uguali"),uguali_array,uguali);
      break;
    }
  });

  $(".increase").click(function(){
    tempo += 200;
    $("#tempo").text(tempo);
  });

  $(".decrease").click(function(){
    if(tempo>200){
      tempo -= 200;
      $("#tempo").text(tempo);}
    });

    $(".increasedelay").click(function(){
      delay += 200;
      $("#delay").text(delay);
    });

    $(".decreasedelay").click(function(){
      if(delay>200){
        delay -= 200;
        $("#delay").text(delay);}
      });

    $(".increasestimoli").click(function(){
      if(stimoli < (altezza*larghezza-1)){
      stimoli += 1;}
      $("#stimoli").text(stimoli);
    });

    $(".decreasestimoli").click(function(){
      if(stimoli>1){
        stimoli -= 1;
        $("#stimoli").text(stimoli);
      }
  });

  $(".increasedistrattori").click(function(){
    if(stimoli+distrattori < (altezza*larghezza-1)){
    distrattori += 1;}
    $("#distrattori").text(distrattori);
    if(distrattori>0){
      $("#tipo_distrattori_wrapper").show();
      $("#avvia").hide();
    }else{
      $("#tipo_distrattori_wrapper").hide();
      $("#avvia").show();
    }
  });

  $(".decreasedistrattori").click(function(){
    if(distrattori>0){
      distrattori -= 1;
      $("#distrattori").text(distrattori);
      if(distrattori>0){
        $("#tipo_distrattori_wrapper").show();
      }else{
        $("#tipo_distrattori_wrapper").hide();
      }
    }
});

  $(".increaselarghezza").click(function(){
    larghezza += 1;
    $("#larghezza").text(larghezza);
  });

  $(".decreaselarghezza").click(function(){
    if(larghezza>2 && (larghezza-1)*altezza > (stimoli+distrattori)){
      larghezza -= 1;
      $("#larghezza").text(larghezza);
    }
});

  $(".increasealtezza").click(function(){
    altezza += 1;
    $("#altezza").text(altezza);
  });

  $(".decreasealtezza").click(function(){
    if(altezza>2 && larghezza*(altezza-1) > (stimoli+distrattori)){
      altezza -= 1;
      $("#altezza").text(altezza);
    }
  });

  $("#avvia_istr").click(function(){

    $("#settings").hide();
    $("#pre_instructions").fadeIn(500);
    pre();
  });



  $("#hocapito").click(function(){
    $("#pre_instructions").hide();
    avvia();
  });

  $(".glyphicon-info-sign").click(function(){
     show_info($(this));
  });

  $("#back").click(function(){
    $("#mod_back").modal("show");
  });

  $("#lowback").click(function(){
    $("#mod_back").modal("show");
  });

  $("#refresh").click(function(){
    $("#mod_refresh").modal("show");
  });

  $("#lowrefresh").click(function(){
    $("#mod_refresh").modal("show");
  });

  $("#yesback").click(function(){
    back();
  });

  $("#yesrefresh").click(function(){
    refresh();
  });

  $("#alleimpostazioni").click(function(){
    $("#pre_instructions").hide();
    $("#settings").fadeIn(500);
  });
}


function update(div,arr,index){
  div.text(arr[index]);
}
