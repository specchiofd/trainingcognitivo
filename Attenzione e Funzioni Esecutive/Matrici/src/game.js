game_state = -1;
larghezza_px = 0;
griglia = [];
griglia_utente = [];
griglia_ribaltata = [];
array_set = ["scacchi","carta","numeri","lettere","bandiera","animali","giorni"]
set = [];
lun_stimoli = 0;
lun_distrattori = 0;
set_size = 0;
total_index = 0;
var first_timeout = null;
var second_timeout = null;
var create_timeout = null;
var sequenza = [];
var sequenza_utente = [];
var confronto_sequenza = [];
var sequenza_distrattori = [];
immagini_griglia_array = [];
token = [];
current_sel = 0;
response_index = 0;

//La griglia (normale o ribaltata da usare nel check)
confronto = [];


remaining = 0;


function avvia(){
  if(sottomodalita !=0){
    $("#fakeboard").show();
    $("#divisor").show();
  }else{
    $("#fakeboard").hide();
    $("#divisor").hide();
  }
  $("#done").addClass("disabled");
  $("#legenda").hide();
  $("#board").empty();
  $("#fakeboard").empty();
  creaMatrice();
  $("#game").show();
}


function setZero(){
  response_index = 0;
  total_index = 0;
  lun_stimoli = 0;
  lun_distrattori = 0;
  esatte = 0;
  errate = 0;
  omesse = 0;
  noimmagine = 0;
  first_timeout = null;
  second_timeout = null;
  create_timeout = null;
  confronto = [];
  griglia = [];
  griglia_utente = [];
  griglia_ribaltata = [];
risposte = [];
sequenza = [];
sequenza_utente = [];
confronto_sequenza = [];
sequenza_distrattori = [];
set = [];
token = [];
set_max = 0;
current_sel = 0;
game_state = -1;
remaining = stimoli;
$("#responso").hide();
$("#responso_bottom").hide();
$("#remaining").text("");
}

function creaMatrice(){
  $("#remaining").text("Osserva la matrice");
 larghezza_px = Math.floor($("#riferimento").width()/larghezza);
 if(sottomodalita == 0){
 if(larghezza_px > 150){
   larghezza_px = 150;
 }}
 else{
   larghezza_px = 100;
 }

 for(i=0;i<altezza;i++){
   $("#board").append("<div class='row' id='riga_"+i+"'></div>");
   if(sottomodalita != 0){
   $("#fakeboard").append("<div class='row' id='fakeriga_"+i+"'></div>");}
   for(j=0;j<larghezza;j++){
   $("#riga_"+i).append("<div id='cella_"+ ((i*larghezza)+(j)) +"' val='"+ ((i*larghezza)+j) + "' class='cella'></div>");
   griglia.push(-1);
   griglia_utente.push(-1);
   if(sottomodalita != 0){
     $("#fakeriga_"+i).append("<div id='fakecella_"+ ((i*larghezza)+(j)) +"' val='"+ ((i*larghezza)+j) + "' class='fakecella'></div>");}
   }
 }

 $(".cella").width(larghezza_px);
 $(".cella").height(larghezza_px);
 $(".fakecella").width(larghezza_px);
 $(".fakecella").height(larghezza_px);
 if(sottomodalita != 0){
 $(".cella").css("background-color","grey");}else{
   $(".cella").css("background-color","white");
 }
 create_timeout = setTimeout(function(){
   //Mostra gli items
   if(modalita == 0){
   creaItems();}
   else{
   creaSequenzaItems();
   }
 },1000);

 $("#board").hover(function(){
if(game_state == 0){
   clearTemp();}
 });
 $(".cella").hover(function(){
    cellaHover($(this));
 });
}

function cellaHover(ogg){
  if(game_state == 0){
    if(current_sel != -1){
      // Token valido
      if(griglia_utente[parseInt(ogg.attr("val"))] == -1){
         clearTemp();
         ogg.addClass("temp");
         ogg.css("background-image", "url("+getImg(current_sel)+")")
      }
    }
    else{
      // Gomma
      if(griglia_utente[parseInt(ogg.attr("val"))]  != -1){
        $(".cella").removeClass("toErase");
        ogg.addClass("toErase");
      }
    }
  }
}

function cellaClick(ogg){
  if(game_state == 0 && remaining > 0 && griglia_utente[parseInt(ogg.attr("val"))]  == -1)
  {
    addTokenToBoard(ogg);
  }
  else if(current_sel == -1 && game_state == 0 && griglia_utente[parseInt(ogg.attr("val"))]  > -1){
    removeTokenFromBoard(ogg);
  }
}

function addTokenToBoard(ogg){
  if(current_sel > -1){
    remaining -= 1;
    updateRemaining();

  griglia_utente[parseInt(ogg.attr(("val")))] = current_sel;
  if(modalita > 0){
    sequenza_utente.push([ogg.attr(("val")),current_sel]);
  }
  ogg.css("background-image","url("+getImg(current_sel)+")");}
clearTemp();
}

function removeTokenFromBoard(ogg){
  remaining += 1;
  updateRemaining();

  griglia_utente[parseInt(ogg.attr(("val")))] = current_sel;
  if(modalita > 0){
    sequenza_utente.splice(sequenza_utente.length-1,1);
  }

 ogg.css("background-image","none");
 $(".cella").removeClass("toErase");
}


function creaSequenzaItems(){
  base = 0;
  if(tipo_distrattori == 1){
base = 1;
  }
  i=stimoli;
  j=distrattori;
  tmp = 0;
  while(i>0){
    tmp = getRandomInt(0,(larghezza*altezza-1));

    var presente = false;
    for(k=0;k<sequenza.length;k++){
      if(sequenza[k][0] == tmp){
        presente = true;
      }
    }
    for(k=0;k<sequenza_distrattori.length;k++){
      if(sequenza[k][0] == tmp){
        presente = true;
      }
    }
    if(!presente){
      sequenza.push([tmp,getRandomInt(base,set_size-1)]);
      i-=1;
    }
    }
    while(j>0){
    tmpb = getRandomInt(0,(larghezza*altezza-1));
    var distrattore_presente = false;
    for(k=0;k<sequenza.length;k++){
      if(sequenza[k][0] == tmpb){
        distrattore_presente = true;
      }
    }
    for(k=0;k<sequenza_distrattori.length;k++){
      if(sequenza[k][0] == tmpb){
        distrattore_presente = true;
      }
    }
    if(!distrattore_presente){
      sequenza_distrattori.push([tmpb,-2]);
      j-=1;
    }

  }
showSequenza();
}

function creaItems(){

  base = 0;
  if(tipo_distrattori == 1){
base = 1;
  }
  i=stimoli;
  j=distrattori;
  tmp = 0;

  //Crea le risposte
  while(i>0){
    tmp = getRandomInt(0,(larghezza*altezza-1));
    if(griglia[tmp] == -1){
      if(tipo_distrattori == 1 && uguali == 0){
      tmp2 = 1}
      else{
        tmp2 = getRandomInt(base,set_size-1);
      }
      griglia[tmp] = tmp2;
      i-=1;
    }
  }
  if(distrattori > 0){
    while(j>0){
      tmp = getRandomInt(0,(larghezza*altezza-1));
      if(griglia[tmp] == -1){
        griglia[tmp] = -2;
        j-=1;
      }

    }
  }

  //Mostra le risposte
  showItems();
}

function mostraImmSequenza(i){
  cella_sottocella = "";
  if(sottomodalita==0){
    cella_sottocella = "#cella_";}
    else{
    cella_sottocella = "#fakecella_"
    }
  if(total_index%2 == 0){
    if(lun_stimoli>0){

      $(cella_sottocella+sequenza[stimoli-lun_stimoli][0]).css("background-image","url('"+getImg(sequenza[stimoli-lun_stimoli][1])+"')");
      lun_stimoli-=1;
    }else{
      $(cella_sottocella+sequenza_distrattori[distrattori-lun_distrattori][0]).css("background-image","url('"+getDistrattore()+"')");
      lun_distrattori-=1;
    }
  }
  else{
    if(lun_distrattori > 0){
      $(cella_sottocella+sequenza_distrattori[distrattori-lun_distrattori][0]).css("background-image","url('"+getDistrattore()+"')");
      lun_distrattori-=1;
    }
    else{
      $(cella_sottocella+sequenza[stimoli-lun_stimoli][0]).css("background-image","url('"+getImg(sequenza[stimoli-lun_stimoli][1])+"')");
      lun_stimoli-=1;
    }
  }
  total_index+=1;
  setTimeout(function(){
    classe_sottocella = "";
    if(sottomodalita==0){
      classe_sottocella = ".cella";}
      else{
      classe_sottocella = ".fakecella"
      }
    $(classe_sottocella).css("background-image","none");
    if(total_index<stimoli+distrattori){
    showWhite();}
    else{
      game_state = 1;
      hideItems();
    }
  },tempo);
}

function showWhite(){
  setTimeout(function(){
      mostraImmSequenza(total_index);
  },delay);
}
function showSequenza(){
lun_stimoli = stimoli;
lun_distrattori = distrattori;
total_index = 0;
classe_sottocella = "";
if(sottomodalita==0){
  classe_sottocella = ".cella";}
  else{
  classe_sottocella = ".fakecella"
  }
$(classe_sottocella).css("background-image","none");
mostraImmSequenza(total_index);

}

function showItems(){
  for(k=0;k<griglia.length;k++){
    if(sottomodalita == 0){
    if(griglia[k]>-1){
    $("#cella_"+k).css("background-image","url('"+getImg(griglia[k])+"')");}
    else if(griglia[k] == -2){
    $("#cella_"+k).css("background-image","url('"+getDistrattore()+"')");
    }
}else{
  if(griglia[k]>-1){
  $("#fakecella_"+k).css("background-image","url('"+getImg(griglia[k])+"')");}
  else if(griglia[k] == -2){
  $("#fakecella_"+k).css("background-image","url('"+getDistrattore()+"')");
  }
}
  }
  hideItems();
}

function hideItems(){
  first_timeout = setTimeout(function(){
    //Blackout
    if(sottomodalita == 0){
    $(".cella").css("background-image","none");
    $(".cella").css("background-color","black");}
    else{
      $(".fakecella").css("background-image","none");
      $(".fakecella").css("background-color","grey");
      $(".cella").css("background-color","white");
    }

    second_timeout = setTimeout(function(){
      $(".cella").css("background-color","white");
      addToken();
      $(".cella").click(function(){
        cellaClick($(this));
      });


      updateRemaining();
      updateCurrentSel();
      game_state = 0;
      if(sottomodalita == 0){
        $("#tokens").css("margin-top","10px");
      }else{
        $("#tokens").css("margin-top",(altezza*100)+16+"px");
      }
      $("#done").removeClass("disabled");
    },delay);
  },tempo);
}

function addToken(){
   if(modalita == 0){
  //Genera token
  token = griglia.filter( onlyUnique );

  token.splice(token.indexOf(-1),1);

  if(distrattori > 0){
  token.splice(token.indexOf(-2),1);}}
  else{
    array_temporaneo = [];
    for(i=0;i<sequenza.length;i++){
    array_temporaneo.push(sequenza[i][1]);
  }
  token = array_temporaneo.filter(onlyUnique);
  }

  $("#tokens").empty();
  for(i=0;i<token.length;i++){
    $("#tokens").append('<div class="token" val='+token[i]+' id="token_'+i+'"></div>');
    $("#token_"+i).css("background-image","url("+getImg(token[i])+")");
  }
  $("#tokens").append('<div class="token" id="rubber" val=-1></div>');

  //Token più piccoli
  if(sottomodalita == 2 || sottomodalita == 1){
  $(".token").addClass("littleToken");}

  //Click sul token
  current_sel = parseInt($("#token_0").attr("val"));
  updateCurrentSel();
  $(".token").click(function(){
    clearTemp();
    current_sel = parseInt($(this).attr("val"));
    updateCurrentSel();
  });
}

function addSet(){
  set_size = 1;
    set = array_set[immagini];
    if(uguali == 1){
    set_size = 5;}


}


function getImg(i){
return "./img/"+set+"_"+i+".png";}

function getDistrattore(){

  if(tipo_distrattori == 0){
      return "./img/distrattore_"+immagini+".png";
  }
  else if(tipo_distrattori == 1){
      return "./img/"+set+"_"+0+".png";
  }else{
    return "./img/distrattore_jolly.png";
  }
}

function updateCurrentSel(){

  if(current_sel > -1){
  $("#rubber").css("border","2px solid black");
  for(i=0;i<token.length;i++){
    if($("#token_"+i).attr("val") == current_sel){
  $("#token_"+i).css("border","5px solid red");}
  else{
  $("#token_"+i).css("border","2px solid black");
  }}}
  else{
  $(".token").css("border","2px solid black");
  $("#rubber").css("border","5px solid red");
  }

}

function updateRemaining(){
  if(remaining > 1){ $("#remaining").text("Hai " + remaining + " immagini da posizionare");}
  else if(remaining == 1){$("#remaining").text("Ti resta un'immagine da posizionare");}
  else{$("#remaining").text("Non hai più immagini da posizionare. Clicca su Ho finito o cancella un'immagine con la gomma.")}
}

function clearTemp(){
  $(".cella").removeClass("temp");
  for(i=0;i<griglia.length;i++){
    if(griglia_utente[i] ==-1 ){
      $("#cella_"+i).css("background-image","none");
    }
  }

}

function ribaltaGriglia(){
  for (i=altezza-1;i>-1;i--){
    for(j=0; j<larghezza;j++){
      griglia_ribaltata.push(griglia[larghezza*i+j]);
    }
  }
  confronto = griglia_ribaltata;
}

function mostraFintaGriglia(){
  $(".fakecella").css("background-color","white");
  for(i=0;i<griglia.length;i++){
    $("#fakecella_"+i).css("background-image","url('"+getImg(griglia[i])+"')");
  }
}

function check(){
  clearTemp();
  confronto = griglia;
  if(sottomodalita != 0){
    mostraFintaGriglia();
    if(sottomodalita == 2){
          ribaltaGriglia();
    }
  }

  if(modalita == 2){
    confronto_sequenza = sequenza.reverse();
  }else{
    confronto_sequenza = sequenza;
  }


  $("#done").addClass("disabled");
  $(".cella").removeClass("toErase");
  game_state = 1;

  // Controlla le risposte dell'utente
  if(modalita== 0){
  for(i=0;i<griglia.length;i++){
    if(confronto[i] != -1 && confronto[i] == griglia_utente[i]){
      //Corretto
      $("#cella_"+i).css("background-color","green");
      esatte += 1;
    }else if((confronto[i] !=-1 && confronto[i] != -2) && griglia_utente[i] == -1){
      //Omesso
      $("#cella_"+i).addClass("temp");
      $("#cella_"+i).css("background-image","url("+getImg(confronto[i])+")");
      omesse+=1;
    }else if(confronto[i] <0  && griglia_utente[i] != -1){
      //Sbagliato
      $("#cella_"+i).css("background-color","red");
      errate+=1;
    }else if(confronto[i] > -1 && griglia_utente[i] != -1 && confronto[i] != griglia_utente[i]){
      //Corretto ma posizione sbagliata
      $("#cella_"+i).css("background-color","yellow");
      noimmagine+=1;
    }
    $("#er").show();
    $("#txterrate").show();
    responso();
  }
}

  else{


        r = setInterval(function(){

          if(response_index == confronto_sequenza.length){
            $("#er").hide();
            $("#txterrate").hide();
            responso();
            clearTimeout(r);
          }
            else{
              if(sottomodalita > 0){
              $("#fakecella_"+confronto_sequenza[response_index][0]).css("background-image","url("+getImg(confronto_sequenza[response_index][1])+")");}
              if(confronto_sequenza[response_index][0] == ifRibalta(sequenza_utente[response_index][0])){

                if(confronto_sequenza[response_index][1] == sequenza_utente[response_index][1]){

                  $("#cella_"+ifRibalta(confronto_sequenza[response_index][0])).css("background-color","green");
                  esatte += 1;
                }
                else{
                  $("#cella_"+ifRibalta(confronto_sequenza[response_index][0])).css("background-color","yellow");
                  noimmagine += 1;
                }
              }else{
                $("#cella_"+ifRibalta(confronto_sequenza[response_index][0])).addClass("temp");
                $("#cella_"+ifRibalta(confronto_sequenza[response_index][0])).css("background-image","url("+getImg(confronto_sequenza[response_index][1])+")");
                omesse += 1;
              }
            }
        response_index += 1;
      },1000);


  }
}

function ifRibalta(pos){
  if(sottomodalita != 2){
    return pos
  }
  else{
      return pos%larghezza+larghezza*((altezza-(Math.floor(pos/larghezza)))-1)

  }
}


  function responso(){
    $("#tokens").empty();
    $("#es").text(esatte);
    if(esatte == 1){
      $("#txtesatte").text("Esatta");
    }
    else{
      $("#txtesatte").text("Esatte");
    }
    $("#er").text(errate);
    if(errate == 1){
      $("#txterrate").text("Errata");
    }
    else{
      $("#txterrate").text("Errate");
    }
    $("#om").text(omesse);
    if(omesse == 1){
      $("#txtomesse").text("Omessa");
    }
    else{
      $("#txtomesse").text("Omesse");
    }
    $("#noim").text(noimmagine);
    if(noimmagine == 1){
      $("#txtnoimmagine").text("Posizione giusta ma immagine sbagliata");
    }
    else{
      $("#txtnoimmagine").text("Posizioni giuste ma immagini sbagliate");
    }
      $("#responso_bottom").show();
    $("#responso").show();
  }





function back(){
  $("#mod_back").modal("hide");
  if(first_timeout != null){
    clearTimeout(first_timeout);
  }
  if(second_timeout != null){
    clearTimeout(second_timeout);
  }
  if(create_timeout != null){
    clearTimeout(create_timeout);
  }
  $("#game").hide();
  $("#settings").show();
}

function refresh(){
  $("#mod_refresh").modal("hide");
  if(first_timeout != null){
    clearTimeout(first_timeout);
  }
  if(second_timeout != null){
    clearTimeout(second_timeout);
  }
  if(create_timeout != null){
    clearTimeout(create_timeout);
  }
  $("#game").hide();
  pre();
  $("#pre_instructions").show();
}
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
