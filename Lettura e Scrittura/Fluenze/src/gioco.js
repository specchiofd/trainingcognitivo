in_game_array = [];
real_fonema = 0;
current = 0;
in_word_current = 1;
current_word = "";
var glo_ogg;
tempo = 60;
esatte = 0;
var current_ach;
in_game = false;
function avviaGioco(){
  azzera();
    setScreen("game");
}

function azzera(){
  in_game_array = [];

  current = 0;
  in_word_current = 1;
  current_word = "";
  tempo = 60;
  esatte = 0;
  in_game = true;

  if(modalita == 0){
    $("#ico_tempo").show();

  }else{
    $("#ico_tempo").hide();
  }
  update_esatte()
    next_ach();
    createArray();
    if(modalita == 0){
    countdown();}
}

function mostra(){

  in_word_current = 1;
  lett_ris = [];
  current_word = in_game_array[current][0];
  if(maiuscolo){
      $("#suggerimento_wrapper").text(in_game_array[current][1].toUpperCase());
  }else{
    $("#suggerimento_wrapper").text(in_game_array[current][1]);
  }

  $("#tastiera_wrapper").empty();
  $("#to_guess_wrapper").empty();
  $("#to_guess_wrapper").append("<div class='primo'>"+current_word[0].toUpperCase()+"</div>");
  for(i=1;i<current_word.length;i++){
    lett_ris.push(current_word[i]);
    $("#to_guess_wrapper").append("<div class='toguess' id='lettera_"+i+"'>_</div>");
  }
  if(difficolta == 1){
    for(j=lett_ris.length-1;j<12;j++){
      lett_ris.push(alfabetointero[getRandomInt(0,alfabetointero.length-1)]);
    }
  }
  else if(difficolta == 2){
    for(j=lett_ris.length-1;j<14;j++){
      lett_ris.push(alfabetointero[getRandomInt(0,alfabetointero.length-1)]);
    }
  }

  shuffle(lett_ris);
  for(k=0;k<lett_ris.length;k++){
    if(maiuscolo){
      $("#tastiera_wrapper").append("<div class='risposta' cliccabile='si'>"+lett_ris[k].toUpperCase()+"</div>")

    }else{
      $("#tastiera_wrapper").append("<div class='risposta' cliccabile='si'>"+lett_ris[k]+"</div>")

    }
  }

  $(".risposta").click(function(){
    if($(this).attr("cliccabile") == "si"){
    if(current_word[in_word_current].toUpperCase() == $(this).text().toUpperCase()){
      corretta($(this));
    }else{
      errata($(this));
    }
  }
  });

}

function corretta(ogg){
  glo_ogg = ogg;
  if(maiuscolo){
    $("#lettera_"+in_word_current).text(current_word[in_word_current].toUpperCase());
  }else{
    $("#lettera_"+in_word_current).text(current_word[in_word_current]);

  }
  in_word_current += 1;
  glo_ogg.css("background-color","green");
  $(this).attr("cliccabile","no");
  setTimeout(function(){
    glo_ogg.addClass("opaco");
    if(in_word_current == current_word.length){
      $(".primo").css("background-color","green");
      $(".toguess").css("background-color","green");
      setTimeout(function(){
        esatte +=1;
        if(esatte == current_ach[2]){
          in_game = false;
          setScreen("responso");
          vittoria();
        }
        if(difficolta == 0 || difficolta == 1){
        tempo += (current_word.length*2)}else{
        tempo += (current_word.length)
        }
        current+=1;

        next_ach()
        mostra();
        update_esatte()
      },250)

    }
  },150);
}

function errata(ogg){
  if(difficolta == 0){
    tempo -= 3;
  }else if(difficolta == 1){
    tempo -= 6;
  }else{
    tempo -= 9;
  }
  if(modalita == 0){
    if(tempo > 0){
    $("#tempo").text(tempo);
    }else{
    $("#tempo").text(0);
    }


}
  glo_ogg = ogg;
  glo_ogg.addClass("errato");
  glo_ogg.attr("cliccabile","no");
  setTimeout(function(){
      glo_ogg.attr("cliccabile","si");
      glo_ogg.removeClass("errato");
  },200);
}

function countdown(){
  tempo-=1;
  $("#tempo").text(tempo);
  if(tempo <= 0 && in_game){

    in_game = false;
    setScreen("responso");
    costriusci_responso();

  }else{
    setTimeout(function(){
    countdown();
    },1000)

  }
}

function createArray(){
  tmp_array = [];

          for(i=0;i<parole[real_fonema].length;i++){
          tmp_array.push(parole[real_fonema][i]);}

  shuffle(tmp_array);
  for(j=0;j<27;j++){
    in_game_array.push(tmp_array[j]);
  }
  mostra();
}

function next_ach(){
if(esatte<current_ach[0]){
  $("#next").text(current_ach[0]);
  $("#stella").css("color","white");
}  else if(esatte>=current_ach[0] && esatte < current_ach[1]){
  $("#next").text(current_ach[1]);
  $("#stella").css("color","brown");
}else{
  $("#next").text(current_ach[2]);
  $("#stella").css("color","grey");
}
}

function update_esatte(){
  $("#esatte").text(esatte);
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
