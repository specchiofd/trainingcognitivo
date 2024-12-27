function pre(){
  setZero();
  preMode();
  preSubMode();
  preDistrattori();
  addSet();
  base = 0;
  createRecap();


  $("#immagini_da_mostrare").empty();
  if(tipo_distrattori == 1){
    base = 1;
    if(uguali == 0){
    $("#immagini_da_mostrare").append("<div class='esempio' id='esempio_0'></div>");
    $("#esempio_0").css("background-image","url("+getImg(1)+")");}
  }
  for(i=base;i<set_size;i++){
    $("#immagini_da_mostrare").append("<div class='esempio' id='esempio_"+i+"'></div>");
    $("#esempio_"+i).css("background-image","url("+getImg(i)+")");
  }

if(distrattori > 0){
  $("#immagini_wrapper").css("border-right","2px solid grey");
  $("#immagini_wrapper").addClass("col-xs-6");
  $("#distrattore_wrapper").show();
  $("#distrattore_esempio").css("background-image","url("+getDistrattore()+")");
}
else{
  $("#immagini_wrapper").css("border-right","0 px solid grey");
  $("#immagini_wrapper").addClass("col-xs-12");
  $("#distrattore_wrapper").hide();
}
}

function preMode(){
  switch(modalita){
  case 0:
  $("#pre_mode").text("Quando si avvierà l'attività verrà mostrata una griglia con " + stimoli + " immagini. \n \n Dopo un po' di tempo la griglia diventerà nera. Da quel momento si potranno usare le figure sulla destra per riprodurre la disposizione degli elementi visti in precedenza.");
  break;
  case 1:
  $("#pre_mode").text("Quando si avvierà l'attività verrà mostrata una griglia. Per " + stimoli + " volte delle immagini cambieranno di posizione sulla griglia. \n \n Dopo un po' di tempo la griglia diventerà nera. Da quel momento si potranno usare le figure sulla destra per riprodurre la disposizione degli elementi visti in precedenza seguendo l'ordine di presentazione.");
  break;
  case 2:
  $("#pre_mode").text("Quando si avvierà l'attività verrà mostrata una griglia. Per " + stimoli + " volte delle immagini cambieranno di posizione sulla griglia. \n \n Dopo un po' di tempo la griglia diventerà nera. Da quel momento si potranno usare le figure sulla destra per riprodurre la disposizione degli elementi visti in precedenza, ma in ordine di presentazione, cioè partendo dall'ultimo per concludere col primo.");
  break;
}
}

function preSubMode(){
  switch(sottomodalita){
  case 0:
  $("#pre_submode").text("L'immagine dovrà essere riprodotta nello stesso spazio in cui è stata presentata.");
  break;
  case 1:
  $("#pre_submode").text("L'immagine dovrà essere riprodotta esattamente per come si è vista, ma nella griglia sottostante.");
  break;
  case 2:
  $("#pre_submode").text("L'immagine dovrà essere riprodotta nella griglia sottostante, ma come se fosse riflessa allo specchio.");
  break;
}
}

function preDistrattori(){
  if(distrattori>0){
  $("#pre_distrattori").text("In basso sono mostrate le figure da ricordare e quelle da ignorare (distrattori).");
}
else{
  $("#pre_distrattori").text("");
}
}

function createRecap(){

$("#rec_modalita").text(modalita_array[modalita]);
$("#rec_sottomodalita").text(sottomodalita_array[sottomodalita]);
$("#rec_tempo").text(tempo)+ " ms";
$("#rec_delay").text(delay)+ " ms";
$("#rec_stimoli").text(stimoli);
$("#rec_ugualidiversi").text(uguali_array[uguali]);
$("#rec_immagini").text(immagini_array[immagini]);
$("#rec_distrattori").text(distrattori);
$("#rec_tipodistrattori").text(tipo_distrattori_array[tipo_distrattori]);
$("#rec_larghezza").text(larghezza);
$("#rec_altezza").text(altezza);
}
