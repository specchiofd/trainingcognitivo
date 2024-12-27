quantistimoli = 6;
players = 2
tipostimoli = 1;
categoria = 0;
alternanza = 0;
squadrauno = SQUADRAUNOINITIAL;
squadradue = SQUADRADUEINITIAL;
squadratre = SQUADRATREINITIAL;
squadraquattro = SQUADRAQUATTROINITIAL;
TSA = [];
MIN_PLAYERS = 2;
MAX_PLAYERS = 4;
MIN_STIMOLI = 2;
MAX_STIMOLI = 12;

$(document).ready(function(){
  setText();
  setButtons();
  setScreen("settings");
})

function setScreen(screen){
  $(".screen").hide();
  $("#"+screen).fadeIn(500);
  if(screen == "teams"){
    $("#squadrauno").focus();
  }
  window.scrollTo(0,0);
}

function setText(){
  $("#title").text(TITLE);
  $("#playagain").text(PLAYAGAIN);
  $("#credits").text(CREDITS);
  $("#setting_title").text(SETTINGTITLE);
  $("#teams_title").text(TEAMS_TITLE);
  $("#txt_players").text(TXT_PLAYERS);
  $("#txt_tipostimoli").text(TXT_TIPOSTIMOLI);
  $("#txt_alternanza").text(TXT_ALTERNANZA);
  $("#txt_players").text(TXT_PLAYERS);
  $("#txt_quantistimoli").text(TXT_QUANTISTIMOLI);
  $("#txt_categoriastimoli").text(TXT_CATEGORIASTIMOLI);
  $("#categoriastimoli").text(CATEGORIA_ARRAY[categoria]);
  $("#tipostimoli").text(TIPOSTIMOLI_ARRAY[tipostimoli]);
  $("#alternanza").text(ALTERNANZA_ARRAY[alternanza]);
  $("#quantistimoli").text(quantistimoli);
  $("#players").text(players);
  $("#toteams").text(AVANTI);
  $("#togame").text(AVANTI);
  $("#backmain").text(TORNAALMENU);
  $("#squadrauno").val(squadrauno);
  $("#squadradue").val(squadradue);
  $("#squadratre").val(squadratre);
  $("#squadraquattro").val(squadraquattro);
}

function setButtons(){
  $("#playagain").click(function(){
    setScreen("settings");
  })
  $("#togame").click(function(){
    checkNames();
  })
  $(".prev").click(function(){
    switch($(this).attr("target")){
      case "categoriastimoli":
      categoria = decrease(CATEGORIA_ARRAY,categoria,$("#categoriastimoli"));
      if(categoria==4){
        TSA = TIPOSTIMOLI_LETTERE_ARRAY;
      }else{
        TSA = TIPOSTIMOLI_ARRAY;
      }
      $("#tipostimoli").text(TSA[tipostimoli]);
      break;
      case "tipostimoli":
      tipostimoli = decrease(TSA,tipostimoli,$("#tipostimoli"));
      break;
      case "alternanza":
      alternanza = decrease(ALTERNANZA_ARRAY,alternanza,$("#alternanza"));
      break;
      case "players":
      players = meno(MIN_PLAYERS,MAX_PLAYERS,players,$("#players"));
      break;
      case "quantistimoli":
      quantistimoli = meno(MIN_STIMOLI,MAX_STIMOLI,quantistimoli,$("#quantistimoli"));
      break;
    }
  })

  $(".next").click(function(){
    switch($(this).attr("target")){
      case "categoriastimoli":
      categoria = increase(CATEGORIA_ARRAY,categoria,$("#categoriastimoli"));
      if(categoria==4){
        TSA = TIPOSTIMOLI_LETTERE_ARRAY;

      }else{
        TSA = TIPOSTIMOLI_ARRAY;
      }
      $("#tipostimoli").text(TSA[tipostimoli]);
      break;
      case "tipostimoli":
      tipostimoli = increase(TSA,tipostimoli,$("#tipostimoli"));
      break;
      case "alternanza":
      alternanza = increase(ALTERNANZA_ARRAY,alternanza,$("#alternanza"));
      break;
      case "players":
      players = piu(MIN_PLAYERS,MAX_PLAYERS,players,$("#players"));
      break;
      case "quantistimoli":
      quantistimoli = piu(MIN_STIMOLI,MAX_STIMOLI,quantistimoli,$("#quantistimoli"));
      break;
    }
  })

  $("#toteams").click(function(){

    if(players==2){
      $("#squadra_tre_group").hide();
      $("#squadra_quattro_group").hide();
    }
    else if(players == 3){
      $("#squadra_tre_group").show();
      $("#squadra_quattro_group").hide();
    }else{
      $("#squadra_tre_group").show();
      $("#squadra_quattro_group").show();
    }

    setScreen("teams");
  });

  $("#backmain").click(function(){
    setScreen("settings");
  })
}

function decrease(myarr,myvar,mydiv){
  myvar -= 1;
  if(myvar == -1){
    myvar = myarr.length -1;
  }
  mydiv.text(myarr[myvar]);
  return myvar;
}

function increase(myarr,myvar,mydiv){
  myvar += 1;
  if(myvar == myarr.length){
    myvar = 0;
  }
  mydiv.text(myarr[myvar]);
  return myvar;
}

function meno(min,max,myvar,mydiv){
  if(myvar > min){
    myvar -= 1;
  }else{
    myvar = max;
  }
  mydiv.text(myvar);
  return myvar;
}

function piu(min,max,myvar,mydiv){
  if(myvar < max){
    myvar += 1;
  }else{
    myvar = min;
  }
  mydiv.text(myvar);
  return myvar;
}

function checkNames(){
  switch(players){
    case 2:
    if($("#quadrauno").val() != "" && $("#squadradue").val() != ""){
      avvia();
    }else{
      inseriscinomi();
    }
    break;
    case 3:
    if($("#quadrauno").val() != "" && $("#squadradue").val() != "" && $("#squadratre").val() != ""){
      avvia();
    }else{
      inseriscinomi();
    }
    break;
    case 4:
    if($("#quadrauno").val() != "" && $("#squadradue").val() != "" && $("#squadratre").val() != "" && $("#squadraquattro").val() != ""){
      avvia();
    }else{
      inseriscinomi();
    }
    break;
  }
}

function inseriscinomi(){
  window.alert(INSERISCINOMI);
}
