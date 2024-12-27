var in_current_item, in_array_items, in_total_time, in_current_time, in_numero_stimoli, in_esatte, in_errate, in_elapsed_time;
var in_stimuli_change_seconds, in_stimuli_change_items, elapsed_time, in_changes, in_ingame, in_width, in_height, in_input_type, in_barra, in_tipo_distrattori, in_num_distrattori;
var in_foglio, in_array_esatte, in_array_errate, cella_width, in_array_risposte;
var me, in_firstpos, in_currentpos,in_array_numero_stimoli;
var in_avanzamentoinner, in_tempoinner;
function avviaGioco(){
  $("#btn_left_wrapper").hide();
  $("#settings").hide();
  $("#pre_instructions").hide();
  $("#feedback_wrapper").hide();
  set_variabili();
}

function set_variabili(){
  $("#board").css("background-color","white");
  mostraRiepilogo();
  current_position = 0;
  prev_position = -1;
  if(feedback){
    $("#done").show();
  }else{
    $("#done").hide();
  }
  in_array_numero_stimoli = [];
  in_tempoinner = 0;
  in_array_risposte = [];
  in_avanzamentoinner = 0;
  in_ingame = true;
  in_current_item = 0;
  in_firstpos = 0;
  in_currentpos=-1;
  in_foglio = [];
  in_array_esatte = [];
  in_array_errate = [];
  in_array_risposte = [];
  in_tipo_distrattori = tipo_distrattori;
  in_num_distrattori = distrattori;
  if(modalita == 0){
    in_total_time = tempo;
    in_current_time = tempo;
  }else{
    in_current_time = 0;
  }
  if(quandocambia == 0){
    in_stimuli_change_seconds = quantisecondi;
  }
  else{
    in_stimuli_change_items = quantistimoli;
  }
  in_esatte = [];
  for(i=0;i<in_num_distrattori+1;i++){
    in_esatte.push(0);
  }
  in_errate = 0;
  update_errate();
  in_numero_stimoli = stimoli;
  elapsed_time = 0;
  in_width = larghezza;
  in_height = altezza;
  set_array_items();
  if(totale_stimoli){
    $(".su").show();
  }else{
    $(".su").hide();
  }
  if(tempotrascorso){
    $("#time_wrapper").show();
  }else{
    $("#time_wrapper").hide();
  }
  if(feedback == 1){
    $("#esatte_wrapper").hide();
    $("#errate_wrapper").hide();
    $("#omesse_wrapper").hide();
  }else{
    $("#esatte_wrapper").show();
    $("#errate_wrapper").show();
    $("#omesse_wrapper").hide();
  }
}

function set_sheet(){
  if(stimolofisso){
  //Inserisce i distrattori
  for(i=0;i<in_width*in_height;i++){
    in_foglio.push(i%(in_num_distrattori)+1);
  }
    shuffle(in_foglio);
  //Inserisce lo stimolo target
  for(j=0;j<in_numero_stimoli;j++){
    in_foglio[j] = 0;
  }
  shuffle(in_foglio);}
  else{
    for(i=0;i<in_width*in_height;i++){
      in_foglio.push(getRandomInt(0,in_num_distrattori));
    }
    shuffle(in_foglio);
    for(m=0;m<(distrattori+1);m++){
      in_array_numero_stimoli[m] = getCount(m);
    }

}

  visualizza_esatte();
  visualizza_foglio();
}



function visualizza_esatte(){
$("#esatte_wrapper").empty();
  if(stimolofisso == 1){
    $("#esatte_wrapper").append("<div class='esatta_super_wrapper' id='esatta_0_super_wrapper'><div class='mini' style='background-image:url("+getImgAdv(in_array_items[0])+")'</div><div class='text-center esatta_wrapper' id='esatta_0_wrapper'><h3><span class='esatta' id='esatta_0'>0</span><span class='su'>/"+getCount(0)+"</h3></span></div>");
    selezionaEsatta(0);
  }else{
    $("#esatte_wrapper").append("<div id='totale_wrapper' class='esatta_super_wrapper'><div class='mini' style='background-image:url("+getTotale()+")'</div><div class='text-center esatta_wrapper' ><h3><span class='esatta' id='totale'>0</span><span class='su'>/"+stimoli+"</h3></span></div>");
    for(z=0;z<distrattori+1;z++){
      $("#esatte_wrapper").append("<div class='esatta_super_wrapper' id='esatta_"+z+"_super_wrapper'><div class='mini' style='background-image:url("+getImgAdv(in_array_items[z])+")'</div><div class='text-center esatta_wrapper' id='esatta_"+z+"_wrapper'><h3><span class='esatta' id='esatta_"+z+"'>0</span><span class='su'>/"+getCount(z)+"</h3></span></div>");

    }
    selezionaEsatta(0);

  }
}

function getTotale(){
  return '"./img/tot.png"';
}
function selezionaEsatta(num){
  $(".esatta_super_wrapper").removeClass("itis");
  $("#esatta_"+num+"_super_wrapper").addClass("itis");
}

function getCount(num){
  counter = 0;
  for(i=0;i<in_foglio.length;i++){
    if(in_foglio[i] == num){
      counter+=1;
    }
  }
  return counter;
}

function visualizza_foglio(){
  if(!barrarossa){
      cella_width = parseInt(page_width) / in_width - 40;
      $("#board").removeClass("barrarossa");
  }
  else{
      cella_width = parseInt(page_width) / in_width - 40 - (50/in_width);
      $("#board").addClass("barrarossa");
  }
  if(cella_width>100){
    cella_width = 100;
  }
  $("#board").empty();
  for(i=0;i<in_height;i++){
    $("#board").append("<div class='row' id='riga_"+i+"'</div>")
    for(j=0;j<in_width;j++){
      $("#riga_"+i).append("<div class='cella' semi=0 barrata=0 val='"+in_foglio[((i*in_width)+j)]+"' pos='"+((i*in_width)+j)+"' fatta=0 id='cella_"+((i*in_width)+j)+"' style='background-image:url("+getImg((i*in_width)+j)+")'></div>")
      in_array_risposte.push(-1);
    }
  }

  $(".cella").css("width",cella_width+"px");
  $(".cella").css("height",cella_width+"px");
  set_to_guess();
  $("#time").text((Math.floor(in_current_time/600)%10)+""+(Math.floor(in_current_time/60)%10)+":"+(Math.floor(in_current_time/10)%6)+Math.floor(in_current_time%10));
  $(".cella").click(function(){
    ha_clickato($(this));
  });

  $("#game").show();
    updateFirstPos();
    if(mouseotastiera == 1){
  setFirst();}
  avvia();
}

function updateFirstPos(){
  tmp = 0;
  for(i=in_width*in_height;i>in_currentpos;i--){
    if(in_foglio[i] == in_current_item){
      tmp = i;
    }
  }
  in_firstpos = tmp;

}

function ha_clickato(cella){
  if(in_ingame && cella.attr("fatta")==0 && feedback == 0){
    if(parseInt(cella.attr("val"))==in_current_item){
    //Corrisponde al target
    if(ordinatacasuale == 0){
      if(parseInt(cella.attr("pos")) == in_firstpos){
        esatta(cella);
        avanzaPosizione(cella);
      }
      else{
        errata(cella);
      }
    }
    else{
      esatta(cella);
    }
  }else{
    errata(cella);
  }
}
  else if(in_ingame && feedback == 1){
    segna(cella);
  }
}

function segna(cella){
  if(parseInt(cella.attr("barrata")) == 0){
    cella.append("<img class='img-responsive' src='./img/x.png'/>");
    cella.attr("fatta",1);
    cella.attr("barrata",1);
    in_array_risposte[parseInt(cella.attr("pos"))] = 0;
  }else{
    cella.empty();
    cella.attr("fatta",0);
    cella.attr("barrata",0);
    in_array_risposte[parseInt(cella.attr("pos"))] = -1;
  }
}

function avanzaPosizione(cella){
  if(oscura){
    for(i=0;i<parseInt(cella.attr("pos"));i++){
      if(!$("#cella_"+i).hasClass("semitrasp")){
      $("#cella_"+i).addClass("semitrasp");
      $("#cella_"+i).attr("semi",1);}
    }
  }

  in_currentpos = parseInt(cella.attr("pos"));
  updateFirstPos();
}

function esatta(cella){
  cella.append("<img class='img-responsive' src='./img/v.png'/>");
  cella.attr("fatta",1);
  cella.attr("barrata",1);
  in_esatte[in_current_item] += 1;
  update_esatte();
  if(!stimolofisso && quandocambia){
    in_avanzamentoinner += 1;
    if(in_avanzamentoinner == quantistimoli){
      cerca_stimolo_successivo();
    }
  }

  checkforwin();
}

function cerca_stimolo_successivo(){
  var tmp = in_current_item;
  for(i=0;i<(distrattori+1);i++){
    tmp = (tmp+1)%(distrattori+1);
    if(in_esatte[tmp] < in_array_numero_stimoli[tmp]){
      in_current_item = tmp;
      in_avanzamentoinner = 0;
      selezionaEsatta(in_current_item);
      $(".to_guess").css("background-image","url("+getImgToGuess(in_array_items[in_current_item])+")");
      $("#cambio").attr("src",getImgToGuessMod(in_array_items[in_current_item]));
      $("#cambio_modale").modal("show");
      return true;
    }else{

    }
  }
      return false;
}

function somma(arr){
  tmp = 0;
  for(i=0;i<arr.length;i++){
    tmp += arr[i];
  }
  return tmp;
}

function checkforwin(){
  if((stimolofisso && in_esatte[0] == stimoli) || (!stimolofisso && somma(in_esatte) == stimoli)){
    in_ingame = false;
    fine("stimoli");
    return;
  }

  else if(!stimolofisso){
    if(in_array_numero_stimoli[in_current_item] == in_esatte[in_current_item]){
      cerca_stimolo_successivo();
    }
  }
}

function errata(cella){
  cella.append("<img class='img-responsive sad' src='./img/sad.png'/>");
  $(".sad").fadeOut(500);
  me = cella;
  in_errate += 1;
  update_errate();
  setTimeout(function(){
    me.empty();

  },500);
}

function update_esatte(){
  $("#totale").text(somma(in_esatte));
  $("#esatta_"+in_current_item).text(in_esatte[in_current_item]);
}

function update_errate(){
  $("#errate").text(in_errate);
}

function avvia(){
    avanzaCronometro();
}

function avanzaCronometro(){
  setTimeout(function(){
    if(modalita == 0){
      in_current_time -= 1;
    }else{
      in_current_time += 1;
    }
    if(tempotrascorso == 1){
      mostra_tempo(in_current_time);
    }
    if(stimolofisso == 0 && quandocambia == 0){
      in_tempoinner += 1;
      if(in_tempoinner == quantisecondi){
        in_tempoinner = 0;
        cerca_stimolo_successivo();
      }
    }
    if(in_ingame && in_current_time != -1){
      avanzaCronometro();
    }
    else if(in_ingame && in_current_time == -1){
      $("#time").text("00:00");
      fine("tempo");
    }
  },1000);
}



function mostra_tempo(mtempo){

  $("#time").text((Math.floor(mtempo/600)%10)+""+(Math.floor(mtempo/60)%10)+":"+(Math.floor(mtempo/10)%6)+Math.floor(mtempo%10));
}

function set_to_guess(){

  $(".to_guess").css("background-image","url("+getImgToGuess(in_array_items[in_current_item])+")");
  $(".to_guess").css("width",cella_width+"px");
  $(".to_guess").css("height",cella_width+"px");
}

function getImg(num){
  return ('"./img/'+in_array_items[in_foglio[num]]+'.png"')
}

function getImgAdv(num){
  return ('"./img/'+num+'.png"')
}

function getImgToGuess(num){
  return ('"./img/'+num+'.png"')
}

function getImgToGuessMod(num){
  return ('./img/'+num+'.png')
}

function set_array_items(){
  // Controlla che lo stimolo sia fisso o variabile; nel caso sia variabile, aggiunge quelli simili o diversi
  current_item = getRandomInt(0,29);
    in_array_items = [];
    in_array_items.push(current_item);
    if(in_tipo_distrattori == 0){
    tmp = 0;
    tmp_array = [];
      for(j=0;j<30;j++){
        if(Math.floor(j/5) == Math.floor(current_item/5) && j != current_item){
          tmp_array.push(j);
        }
      }
      shuffle(tmp_array);
          for(i=0;i<in_num_distrattori;i++){
            in_array_items.push(tmp_array[i]);
          }
    }else{
      for(i=0;i<in_num_distrattori;i++){
        tmp = -1;
        tmp = getRandomInt(0,29);
        while(in_array_items.indexOf(tmp) != -1){
          tmp = getRandomInt(0,29);
        }
        in_array_items.push(tmp);
      }
    }

    set_sheet();
  }


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
