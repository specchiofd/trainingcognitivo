game_array = [];
game_state = -1;
var first_obj;
var second_obj;
var first_num;
var second_num;
var current_team;
punti = [];
num_arr = [1,2,3,4,5,6,7,8,9,10,11,12];

function avvia(){
 azzera();
}

function azzera(){
  punti = [];
  $("#board").empty();
  current_team = -1;
  first_num = 0;
  second_num = 0;
  first_obj = null;
  second_obj = null;
  game_array = [];
  game_state = 0;
  shuffle(num_arr);
  createArray();
}

function createArray(){
  switch(tipostimoli){
    case 0:
    for(i=0;i<quantistimoli;i++){
      game_array.push(num_arr[i]);
    }
    for(j=0;j<quantistimoli;j++){
      game_array.push(num_arr[j]);
    }
    break;
    case 1:
    for(i=0;i<quantistimoli;i++){
      game_array.push(num_arr[i]);
    }
    for(j=0;j<quantistimoli;j++){
      game_array.push(num_arr[j]*100);
    }
    break;
    case 2:
    for(i=0;i<quantistimoli;i++){
      game_array.push(num_arr[i]*100);
    }
    for(j=0;j<quantistimoli;j++){
      game_array.push(num_arr[j]*100);
    }
    break;
  }
  shuffle(game_array);
  mostra();
}

function mostra(){
for (i=0;i<quantistimoli*2;i++){
  $("#board").append('<div class="cella" dagirare="si" num='+game_array[i]+' id="cella_'+i+'"><div class="front" id="front_'+i+'"></div><div class="back" id="back_'+i+'"></div></div>')
  $("#front_"+i).append('<img class="img-responsive" src="src/retro.png" />');
  $("#back_"+i).append('<img class="img-responsive" src="'+cercaImmagine(game_array[i])+'"/>');
  $("#cella_"+i).flip();
  $("#cella_"+i).click(function(){
    cliccato($(this));
  })
}
addTeams();
}

function addTeams(){
  for(i=0;i<players;i++){
    punti.push(0);
  }
  $("#nome_0").text($("#squadrauno").val());
  $("#nome_1").text($("#squadradue").val());
  if(players == 2){
    $("#team_2").hide();
    $("#team_3").hide();
  }
  else if(players == 3){
    $("#nome_2").text($("#squadratre").val());

    $("#team_2").show();
    $("#team_3").hide();
  }
  else{
    $("#nome_2").text($("#squadratre").val());
    $("#nome_3").text($("#squadraquattro").val());
    $("#team_2").show();
    $("#team_3").show();
  }
    update_score(0,0);
    update_score(1,0);
    update_score(2,0);
    update_score(3,0);
    setScreen("game");
    advance_team();
}

function update_score(squadra,amount){
  punti[squadra]+=amount;
  $("#punti_"+squadra).text(punti[squadra]);
}

function cliccato(ogg){

  if(ogg.attr("dagirare") == "si"){
  if(game_state == 0){
    ogg.flip(true);
    first_obj = ogg;
    first_num = parseInt(ogg.attr("num"));
    game_state = 1;

    ogg.attr("dagirare","no");
  }else if(game_state == 1){
    game_state = 2;
    ogg.flip(true);
    second_obj = ogg;
    second_num = parseInt(ogg.attr("num"));
    if(second_num != first_num && second_num != first_num*100 && second_num*100 != first_num){
    $(".cella").off('.flip');
      setTimeout(function(){
        first_obj.flip(false);
        second_obj.flip(false);
        first_obj.attr("dagirare","si");
        second_obj.attr("dagirare","si");
        advance_team();
        game_state = 0;
      },1000);
    }else{
      $(".cella").off('.flip');
      setTimeout(function(){
        setTimeout(function(){
          first_obj.css("opacity",1);
          second_obj.css("opacity",1);
          setTimeout(function(){
            first_obj.css("opacity",0.3);
            second_obj.css("opacity",0.3);
            setTimeout(function(){
              first_obj.css("opacity",1);
              second_obj.css("opacity",1);
              setTimeout(function(){
                first_obj.css("opacity",0);
                second_obj.css("opacity",0);
                setTimeout(function(){
                  if(!checkwin()){
                          game_state = 0;
                  if(alternanza == 1){
                    advance_team();
                  }}
                  else{
                    $("#game").fadeOut(1000);
                    setTimeout(function(){
                      winScreen();
                    },1000);

                  }
                },100)

              },75);
            },75);
          },75);
        },75);
        first_obj.css("opacity",0.3);
        second_obj.css("opacity",0.3);
        first_obj.attr("dagirare","no");
        second_obj.attr("dagirare","no");
        update_score(current_team,1);
      },1000);
    }

  }else{
    ogg.off("flip");
  }
}else{
  ogg.flip("true");
}
}

function checkwin(){

  tot = 0;
  for(i=0;i<players;i++){
    tot = tot+punti[i];
  }

  if(tot==quantistimoli){
    return true
  }else{
    return false
  }
}

function advance_team(){
  current_team += 1;
  if(current_team == players){
    current_team = 0;
  }
  show_team();
}

function show_team(){
  $(".main_team").css("opacity",0.2);
  $(".main_team").css("border","2px solid white");
  $(".segna").css("opacity",0);
  $("#segna_"+current_team).css("opacity",1);
  $("#team_"+current_team).css("opacity",1);
  $("#team_"+current_team).css("border","2px solid yellow");
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

function cercaImmagine(numero){

  switch(categoria){
    case 0:
    return "src/animali/"+ numero + ".jpg";
    case 1:
    return "src/cibi/"+ numero + ".jpg";
    case 2:
    return "src/mestieri/"+ numero + ".jpg";
    case 3:
    return "src/mezzi/"+ numero + ".jpg";
    case 4:
    return "src/lettere/"+numero+".jpg";
    
  }
}
