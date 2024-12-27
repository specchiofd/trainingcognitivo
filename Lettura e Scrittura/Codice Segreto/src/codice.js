var larghezza, altezza, numerostimoli, currentitem, currentword, sillabe, array_sillabe, in_game, risposte_array,inner_sillaba,confronto;

function initialSettings(){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    larghezza = 4;
    altezza = 3;
}else{
  larghezza = 10;
  altezza = 3;
}

  numerostimoli = 3;
  sillabe = 3;
  maiuscolo = 0;
}

$(document).ready(function(){
  setButtons();
  initialSettings();
  updateSettings();
  showSettings();
});


function avvia(){
  $("#risposta").css("background-color","transparent");
  $("#confronto").text("");
  $("#confronto").hide();
  $("#risposta").prop('disabled', false);
  $("#risposta").val("");
  currentword = 0;
  in_game = false;
  array_sillabe = [];
  array_parole = [];
  scegli_parole();

}

function scegli_parole(){
  tmp_arr = [];
  switch(sillabe){
    case 2:
    tmp_arr = bisillabe;
    break;
    case 3:
    tmp_arr = trisillabe;
    break;
    case 4:
    tmp_arr = quadrisillabe;
    break;
    case 5:
    tmp_arr = pentasillabe;
    break;
  }
  shuffle(tmp_arr);
  arr_ret = [];
  for(i=0;i<numerostimoli;i++){
    arr_ret.push(tmp_arr[i]);
  }
  array_parole = arr_ret;
  aggiungiSillabe();
}

function aggiungiSillabe(){
  array_temp = [];
  uniqueArray = [];
  for(i=0;i<array_parole.length;i++){
    a = array_parole[i].split('/');
    for(j=0;j<a.length;j++){
          array_temp.push(a[j]);
    }

  }
  uniqueArray = array_temp.filter(function(item, pos) {
    return array_temp.indexOf(item) == pos;
  })
  array_sillabe = uniqueArray;
  riempi_resto();
}

function riempi_resto(){
  i = array_sillabe.length;
  while(i<altezza*larghezza){
    tmp = getRandomInt(0,lib_sillabe.length-1);
    if(array_sillabe.indexOf(lib_sillabe[tmp]) == -1){
      array_sillabe.push(lib_sillabe[tmp]);
      i+=1;
    }
  }
  shuffle(array_sillabe);
  mostra_tabella();
}

function mostra_tabella(){
  $("#tabella").empty();
  for(i=1;i<altezza*larghezza+1;i++){
    $("#tabella").append("<div posizione="+(i-1)+"' id='cella_"+(i-1)+"' class='cella'><div class='sopra'>"+i+"</div><div class='sotto'>"+isMa(array_sillabe[(i-1)])+"</div></div>")
  }
  w = Math.floor(($("#riferimento").width()/larghezza)-8);
  $(".cella").width(w);
  $(".cella").height(w);
  $(".sopra").css("line-height",Math.floor(w/3)+"px");
  $(".sotto").css("line-height",Math.floor(w/3*2)+"px");
  $(".sotto").css("font-size",Math.floor(w/4)+"px");
  $("#game").show();
  crea_avanzamento();
  mostra_parola();
}

function mostra_parola(){
    $("#confronto_wrapper").hide();
array_parole[currentword] = array_parole[currentword].split('/');
tmp = [];

for(i=0;i<array_parole[currentword].length;i++){
  tmp.push(array_sillabe.indexOf(array_parole[currentword][i])+1);
}
$("#codice").text(tmp.join(" - "));
if(maiuscolo){
  $("#risposta").css("text-transform","uppercase");
}
$("#risposta").focus();
in_game = true;
$("#risposta").prop('disabled', false);
mostra_avanzamento();
$("#ok").show();
}

function feedback(){
  in_game = false;
  $("#confronto").show();
  $("#risposta").prop('disabled', true);
  $("#ok").hide();
  inner_sillaba = 0;
  confronto = "";
  $("#confronto_wrapper").show();
  giroFeedback();
}

function giroFeedback(){
  confronto += array_parole[currentword][inner_sillaba];
  $("#cella_"+(array_sillabe.indexOf(array_parole[currentword][inner_sillaba]))).addClass('highlighted');
  $("#confronto").text(confronto);
  setTimeout(function(){
  $("#cella_"+(array_sillabe.indexOf(array_parole[currentword][inner_sillaba]))).removeClass('highlighted');
  inner_sillaba += 1;
  if(inner_sillaba != array_parole[currentword].length){
  giroFeedback();
}else{
  if($("#confronto").text().toUpperCase() == $("#risposta").val().toUpperCase()){
        $("#risposta").css("background-color","green");
        risposte_array[currentword] = 0;
    setTimeout(function(){
      in_game = true;
      currentword +=1;
      if(currentword<array_parole.length){
        $("#risposta").css("background-color","transparent");
        $("#confronto").text("");
        $("#confronto").hide();
        $("#risposta").prop('disabled', false);
        $("#risposta").val("");
        $("#risposta").focus();
        $("#ok").show();
        mostra_parola();
      }else{
        mostra_avanzamento();
        setTimeout(function(){
          in_game=false;
          $("#game").hide();
          $("#win").show();
        },500);
      }
    },1000);
  }else{

    $("#risposta").css("background-color","grey");
    setTimeout(function(){
      in_game = true;
      $("#risposta").css("background-color","transparent");
      $("#confronto").text("");
      $("#confronto").hide();
      $("#risposta").prop('disabled', false);
      $("#risposta").val("");
      $("#risposta").focus();
      $("#ok").show();
    },1000);


  }
}
},2000)
}


function crea_avanzamento(){
risposte_array = [];
for(i=0;i<array_parole.length;i++){
  risposte_array.push(-1);
}
}

function mostra_avanzamento(){
  $("#avanzamento_wrapper").empty();
  for(i=0;i<array_parole.length;i++){
    if(risposte_array[i] == -1){
      $("#avanzamento_wrapper").append("<div class='avanzamento_inner' id='avanzamento_"+i+"'> <span class='glyphicon glyphicon-lock' aria-hidden='true'></span></div>")
    }else if(risposte_array[i] == 0){
      $("#avanzamento_wrapper").append("<div class='avanzamento_inner' id='avanzamento_"+i+"'> <span style='color:darkgreen' class='glyphicon glyphicon-star' aria-hidden='true'></span></div>")
    }
  }
  $("#avanzamento_"+currentword).css("color","yellow");
  $(".avanzamento_inner").width(Math.floor($("#riferimento").width()/array_parole.length));
}

function updateSettings(){
  update($("#larghezza"),larghezza);
  update($("#altezza"),altezza);
  update($("#numerostimoli"),numerostimoli);
  update($("#sillabe"),sillabe);
  update($("#maiuscolo"),maiuscolo);
}

function showSettings(){
$("#settings").show();
$("#win").hide();
$("#game").hide();
}

function setButtons(){
  $("#riavvia").click(function(){
    showSettings();
  })
$(".prev").click(function(){
  prev($(this).attr("target"));
});
$(".next").click(function(){
  next($(this).attr("target"));
});
$("#avvia").click(function(){
  $("#settings").hide();
  avvia();
})
$("#ok").click(function(){
  if(in_game){
    feedback();
  }
});
$( "#risposta" ).keypress(function(e) {

    if(e.keyCode == 13 && in_game){
      feedback();
    }

})
}

function update(mydiv, myvar){
  if(myvar != maiuscolo){
    mydiv.text(myvar)
  }else{
    if(maiuscolo){
      mydiv.text("Sì")
    }else{
      mydiv.text("No")
    }
  }
}

function prev(target){
  switch(target){
    case 'larghezza':
    if(((larghezza-1)*altezza)<numerostimoli*sillabe){
      window.alert("La tabella è troppo piccola!")
    }else{
      larghezza-=1;
      update($("#larghezza"),larghezza);
    }
    break;
    case 'altezza':
    if((larghezza*(altezza-1))<numerostimoli*sillabe){
      window.alert("La tabella è troppo piccola!")
    }else{
      altezza-=1;
      update($("#altezza"),altezza);
    }
    break;
    case 'maiuscolo':
    if(maiuscolo == 0){
      maiuscolo = 1;
    }else{
      maiuscolo -= 1;
    }
    update($("#maiuscolo"),maiuscolo);
    break;
    case 'sillabe':
    if(sillabe >2){
      sillabe -= 1;
    }
    update($("#sillabe"),sillabe);
    break;
    case 'numerostimoli':
    if(numerostimoli >1){
      numerostimoli -= 1;
    }
    update($("#numerostimoli"),numerostimoli);
    break;
  }
}

function next(target){
  switch(target){
    case 'larghezza':
    if(altezza<10){
      larghezza+=1;}
      update($("#larghezza"),larghezza);
    break;
    case 'altezza':
    if(altezza<10){
    altezza+=1;}
    update($("#altezza"),altezza);
    break;
    case 'maiuscolo':
    if(maiuscolo == 1){
      maiuscolo = 0;
    }else{
      maiuscolo += 1;
    }
    update($("#maiuscolo"),maiuscolo);
    break;
    case 'sillabe':
    if(sillabe <5){
      sillabe += 1;
    }
    update($("#sillabe"),sillabe);
    break;
    case 'numerostimoli':
    if((numerostimoli+1)*sillabe <= (altezza*larghezza)){
      numerostimoli += 1;
      update($("#numerostimoli"),numerostimoli);
    }
    else{
      window.alert("La tabella è troppo piccola per il numero di parole!")
    }
    break;
  }
}

function isMa(p){
if(maiuscolo){
  return p.toUpperCase();
}  else{
  return p
}
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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
