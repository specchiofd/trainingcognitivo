var difficolta = 0;
var difficolta_array = ["FACILE","MEDIO","DIFFICILE"];
var max_ships = 0;
var max_weapons = 0;
var max_radars = 0;
var current_ships = 0;
var current_radars = 0;
var current_weapons = 0;
var risposte = [];
var my_width;
var pointer_position;
var ship_positions = [];
var user_guess = "";
var to_answer = 0;
var lastobj;
var isAudio = true;


//weapon_mode 0 = missile; 1 = radar
var weapon_mode = 0;

//game_state
// 0 = normal   1 = sta accadendo qualcosa
var game_state = 0;

$(document).ready(function(){


  my_width = $("#hidden").width()/12;
  $("#settings").width($("#settings").height());
  createjs.Sound.registerSound("./mp3/draw.mp3", "draw");
  createjs.Sound.registerSound("./mp3/error.mp3", "error");
  createjs.Sound.registerSound("./mp3/victory.mp3", "victory");
  createjs.Sound.registerSound("./mp3/explosion.mp3", "explosion");
  createjs.Sound.registerSound("./mp3/missing.mp3", "missing");
  createjs.Sound.registerSound("./mp3/radar.mp3", "radar");
  createjs.Sound.registerSound("./mp3/radarloading.mp3", "radarloading");
  createjs.Sound.registerSound("./mp3/load.mp3", "load");
  showSettings();
  setButtons();
  updateDifficolta();

});

function casella(index,state,value){
  this.index = index;
  this.state = state;
  this.value = value;
}

function setButtons(){
  $("#prevdiff").click(function(){
    difficolta -= 1;
    if(difficolta == -1){
      difficolta = difficolta_array.length-1;
    }
    updateDifficolta();
  });

  $("#nextdiff").click(function(){
    difficolta += 1;
    if(difficolta == difficolta_array.length){
    difficolta = 0;
    }
    updateDifficolta();
  });
  $("#restart").click(function(){
    showSettings();
  });


    $("#start").click(function(){
      avviaGioco();
    });

    $(".pulsante").click(function(){
      if(user_guess == "" & parseInt($(this).attr("val")) == 0)
      {

      }
      else{
      user_guess = user_guess + $(this).attr("val");}
          update_user_guess();
    });

    $(".erase").click(function(){
      if(user_guess !=""){
      user_guess = user_guess.substring(0, user_guess.length - 1);
      update_user_guess();}
    });

    $(".fire").click(function(){
      if($("#risultato").text() != ""){
      checkResult();}
      else{
        $("#msg-error").show();
      }
    });

    $("#select_missile").click(function(){
      if(weapon_mode == 1 && game_state == 0){
        weapon_mode = 0;
        updateWeaponMode();
      }
    });

    $("#select_radar").click(function(){
      if(current_radars > 0 && game_state == 0){
      if(weapon_mode == 0){
        weapon_mode = 1;
        updateWeaponMode();
      }}
    });

    $("#audio").click(
      function(){
      isAudio = !isAudio;
      updateIsAudio();
      }
    );

    $("#info").click(
      function(){
          $("#infomodal").modal('show');
      }
    );

    $("#come").click(
      function(){
          $("#infomodal").modal('show');
      }
    );
}

function updateWeaponMode(){
if(weapon_mode == 0){
  if(isAudio){
  createjs.Sound.play("load");}
  $("#select_missile").css("background-color","yellow");
  $("#select_missile").css("border","2px solid red");
    $("#select_radar").css("background-color","darkgrey");
    $("#select_radar").css("border","2px solid grey");
}
else{
  if(isAudio){
  createjs.Sound.play("radar");}
    $("#select_missile").css("background-color","darkgrey");
    $("#select_missile").css("border","2px solid grey");
    $("#select_radar").css("background-color","yellow");
    $("#select_radar").css("border","2px solid red");
}
}

function update_user_guess(){
  $("#risultato").text(user_guess);
}

function updateDifficolta(){
      $("#difficolta_setting").text(difficolta_array[difficolta]);

}

function updateData(){
  //Aggiorna visualizzazione armi e navi
  $("#num_missili").text("x "+current_weapons);
  $("#num_radar").text("x " + current_radars);

}

function showSettings(){
  $("#settings").show();
  $("#game").hide();
  $("#result").hide();
}

function showGame(){
  $("#settings").hide();
  $("#game").show();
  $("#result").hide();
}

function avviaGioco(){
  lastobj = null;
  user_guess = "";
  to_answer = 0;
  game_state = 0;
  weapon_mode = 0;
  ship_positions = [];
  updateWeaponMode();
  pointer_position = 0;
  switch(difficolta){
    case 0:
    max_weapons = 20;
    max_ships = 3
    max_radars = 3;
    current_weapons = 20;
    current_ships = 3;
    current_radars = 4;
    break;
    case 1:
    max_weapons = 14;
    max_ships = 4;
    max_radars = 2;
    current_weapons = 14;
    current_ships = 4;
    current_radars = 2;
    break;
    case 2:
    max_weapons = 10;
    max_ships = 5;
    max_radars = 1;
    current_weapons = 10;
    current_ships = 5;
    current_radars = 1;
    break;
  }
  updateIsAudio();
  updateData();
  createTable();
  put_ships();
  createEnemies();
  showGame();
}

function updateIsAudio(){
  if(isAudio){
    $("#audio").addClass("glyphicon-volume-up");
  }
  else{
    $("#audio").removeClass("glyphicon-volume-up");
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function put_ships(){
  i = 0;
  while(i<max_ships){
    pos = getRandomInt(0,99);
    if(ship_positions.indexOf(pos) == -1){
      ship_positions.push(pos);
      i++;
    }

    /*
    if(game_array[Math.floor(pos / 10)][pos%10] == 0){
      game_array[Math.floor(pos / 10)][pos%10] = 1;
      i++;
    }
    */

  }

}


function createTable(){
  $("#board").empty();
  for(i=0;i<11;i++){
    if(i>0){
    $("#board").append("<div class='cella_head' id='headv_"+i+"'>"+i+"</div>");
  }
  else{
    $("#board").append("<div class='cella_head'>x</div>");
  }
  }
  for(j=0;j<10;j++){
    $("#board").append("<div class='row' id='row_"+(j+i)+"'></div>")
    for(k=0;k<11;k++){
      if(k==0){
        $("#board").append("<div class='cella_head' id='heado_"+(j+1)+"'>" +(j+1)+"</div>");
      }
      else{
        $("#board").append("<div class='cella' state='normal' id='cella_"+(k+(j*10))+"' row="+(j+1)+" column="+(k)+ " position="+(k+(j*10))+"></div>");
      }
    }
  }
  $(".cella_head").width(my_width);
  $(".cella_head").height(my_width);
  $(".cella").width(my_width);
  $(".cella").height(my_width);
  $(".cella_head").css("line-height",my_width+"px")

  $(".cella").hover(function(){
  if(game_state == 0 && weapon_mode == 0){
    clear_prev();
    clear_prev_radar();
    pointer_position = parseInt($(this).attr("position"));
    hover_missile($(this));
  }
  else if (game_state == 0 && weapon_mode == 1){
    clear_prev();
    clear_prev_radar();
    pointer_position = parseInt($(this).attr("position"));
    hover_radar($(this));
  }
  });

  $(".cella").click(function(){

    if(game_state == 0 && $(this).attr("state") == "normal" && weapon_mode == 0){
      lastobj = $(this);
      current_weapons -= 1;
      to_answer = parseInt($(this).attr("row"))*parseInt($(this).attr("column"));
      $("#dafare").text($(this).attr("row")+ " X " + $(this).attr("column") + " = ");
      user_guess = "";
      update_user_guess();
      $("#msg-error").hide();
      $('#operazione').modal({
        backdrop: 'static',
        keyboard: false
      });
      }
      else if(game_state == 0 && weapon_mode == 1 && current_radars > 0 && pointer_position>10 && pointer_position<91 && pointer_position % 10 > 1 && pointer_position % 10 != 0){
pointer_position = parseInt($(this).attr("position"));

      radar_check($(this));
}
  });

  $("#suggestions_text").text("Abbiamo individuato " + max_ships + " navi in questa zona. Clicca sulla casella per lanciare un missile o usa il radar!");
}

function checkResult(){
  $("#operazione").modal('hide');
  game_state = 1;

  if(to_answer == parseInt(user_guess)){


    //Controlla se la nave fa parte della lista
    if(ship_positions.indexOf(parseInt(lastobj.attr("position"))) != -1){
      ship_positions.splice(ship_positions.indexOf(parseInt(lastobj.attr("position"))),1);
if(isAudio){
createjs.Sound.play("explosion");}

    setTimeout(function(){
lastobj.addClass("colpita");
      setTimeout(function(){
        lastobj.removeClass("colpita");
        lastobj.addClass("affondato");
        lastobj.attr("state","affondato");
        updateEnemies();
        checkforwin();
      },1500);

    },1400);

  }else{
    if(isAudio){
    createjs.Sound.play("missing");}
    setTimeout(function(){
      lastobj.addClass("acqua");
      lastobj.attr("state","acqua");
      if(!checkforloose()){
      game_state = 0;
    updateConsiglio();}
    },1400);

  }

  updateData();
}else{

  current_weapons -= 1;
  game_state = 0;
  if(!checkforloose()){
      $("#operazione").modal('hide');
      if(isAudio){
        createjs.Sound.play("error");
      }
      $("#errore").modal('show');

  }

}
}

function checkforloose(){
  if(current_weapons > 0){
  return false;}
  else{
    game_state = 1;
  winScreen(0);
  }
}

function checkforwin(){
  if(!ship_positions.length){
    game_state = 1;
   winScreen(1);
 }else{
   if(!checkforloose()){
   game_state = 0;}
 }

}

function clear_prev(){
$(".cella").removeClass("myhover");
$(".cella").removeClass("affondatohover");
$(".cella").removeClass("puntato");
$(".cella").removeClass("acquahover");
$(".cella_head").css("background-color","darkgrey");
}

function clear_prev_radar(){
$(".cella").removeClass("acquaradar");
$(".cella").removeClass("affondatoradar");
$(".cella").removeClass("puntato_radar");
$(".cella").removeClass("nienteradar");
}

function clearActiveRadar(){
$(".cella").removeClass("acquaradaractive");
$(".cella").removeClass("affondatoradaractive");
$(".cella").removeClass("nienteradaractive");
$(".cella").removeClass("naveradar");
}

function hover_missile(ogg){
$("#cella_"+pointer_position).addClass("puntato");
$("#headv_"+ogg.attr("column")).css("background-color","red");
$("#heado_"+ogg.attr("row")).css("background-color","red");
if(pointer_position % 10 != 1){
  for(i=1;i<101;i++){
    if(($("#cella_"+i).attr("row")==ogg.attr("row")) && (pointer_position > $("#cella_"+i).attr("position")) ){
      if($("#cella_"+i).attr("state")=="normal"){
      $("#cella_"+i).addClass("myhover");}
      else if ($("#cella_"+i).attr("state")=="affondato"){
      $("#cella_"+i).addClass("affondatohover");
      }
      else if ($("#cella_"+i).attr("state")=="acqua"){
      $("#cella_"+i).addClass("acquahover");
      }
    }
  }
}
if(pointer_position >10){
  for(i=1;i<101;i++){
    if(($("#cella_"+i).attr("column")==ogg.attr("column")) && (pointer_position > $("#cella_"+i).attr("position")) ){
      if($("#cella_"+i).attr("state")=="normal"){
      $("#cella_"+i).addClass("myhover");}
      else if ($("#cella_"+i).attr("state")=="affondato"){
      $("#cella_"+i).addClass("affondatohover");

      }
      else if ($("#cella_"+i).attr("state")=="acqua"){
      $("#cella_"+i).addClass("acquahover");

      }
    }
  }
}

}

function hover_radar(ogg){
if(pointer_position>10 && pointer_position<91 && pointer_position % 10 > 1 && pointer_position % 10 != 0){
  if($("#cella_"+pointer_position).attr("state") == "normal"){
    $("#cella_"+pointer_position).addClass("puntato_radar");
  }
  else{
      check_radar($("#cella_"+(pointer_position)));
  }
  check_radar($("#cella_"+(pointer_position+1)));
  check_radar($("#cella_"+(pointer_position-1)));
  check_radar($("#cella_"+(pointer_position+10)));
  check_radar($("#cella_"+(pointer_position-10)));
  check_radar($("#cella_"+(pointer_position+11)));
  check_radar($("#cella_"+(pointer_position-11)));
  check_radar($("#cella_"+(pointer_position+9)));
  check_radar($("#cella_"+(pointer_position-9)));
}
}

function check_radar(ogg){

  switch(ogg.attr("state")){
    case "affondato":
    ogg.addClass("affondatoradar");
    break;
    case "normal":
    ogg.addClass("acquaradar");
    break;
    case "acqua":
    ogg.addClass("nienteradar");
    break;
  }

}

function radar_check(ogg){
  clear_prev_radar();
  current_radars -= 1;
  updateData();
  if(isAudio){
  createjs.Sound.play("radarloading");}
  game_state = 1;
  is_ship($("#cella_"+(pointer_position)));
  is_ship($("#cella_"+(pointer_position+1)));
  is_ship($("#cella_"+(pointer_position-1)));
  is_ship($("#cella_"+(pointer_position+10)));
  is_ship($("#cella_"+(pointer_position-10)));
  is_ship($("#cella_"+(pointer_position+11)));
  is_ship($("#cella_"+(pointer_position-11)));
  is_ship($("#cella_"+(pointer_position+9)));
  is_ship($("#cella_"+(pointer_position-9)));
  setTimeout(function(){
    clearActiveRadar();
    game_state = 0;
    if(!current_radars){
      weapon_mode = 0;
      updateWeaponMode();
    }
  },2000);
}

function is_ship(ogg){
  switch(ogg.attr("state")){
    case "affondato":
    ogg.addClass("affondatoradaractive");
    break;
    case "normal":
    if(ship_positions.indexOf(parseInt(ogg.attr("position"))) > -1){
      ogg.addClass("naveradar");
    }else{
    ogg.addClass("acquaradaractive");
}
    break;
    case "acqua":
    ogg.addClass("nienteradaractive");
    break;
  }
}

function createEnemies(){

  $("#navinemiche").empty();
  for(i=0;i<ship_positions.length;i++){

    $("#navinemiche").append("<img id='nemico_"+i+"' class='img-responsive nemico' src='./img/navenemica.png'/>")
  }
}

function updateEnemies(){
  $("#nemico_"+(max_ships - ship_positions.length - 1)).attr("src","./img/navenemicacolpita.png");
}

function updateConsiglio(){

  tmp = getRandomInt(0,ship_positions.length-1);
  tabellina = Math.floor(ship_positions[tmp] / 10);
  if(tabellina == 0){
    $("#suggestions_text").text("Un sottomarino ha trovato una nave sulla tabellina dell'uno!");  }else{
    $("#suggestions_text").text("Un sottomarino ha trovato una nave sulla tabellina del "+(tabellina+1)+ "!");
  }

}


function winScreen(res){
  $("#game").fadeOut(1000);
if(res == 0){
  if(isAudio){
    createjs.Sound.play("draw");
  }
    $("#final_image").attr("src","./img/sconfitta.png");
    $("#result").css("background-color","#940000");
    $("#responso").text("Oh no! Abbiamo finito i missili e le navi sono scappate!");
  }
  else{
    if(isAudio){
      createjs.Sound.play("victory");
    }
    $("#final_image").attr("src","./img/vittoria.png");
    $("#result").css("background-color","darkgreen");
    $("#responso").text("Ben fatto ammiraglio! Abbiamo affondato tutte le navi nemiche!");
  }
  setTimeout(function(){$("#result").fadeIn(1000);
},1000);
  $("#settings").hide();



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
