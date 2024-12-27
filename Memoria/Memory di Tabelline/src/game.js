var table = 2;
var category = 0;
var category_array = ["ANIMALI","CASA","CIBI","MESTIERI","MEZZI DI TRASPORTO"];
var sameturn = false;
var array_carte = [];
var imgArray = [];
var array_animali = ["Ape.png","Cavallo.png","Elefante2.jpg","Orso2.jpg","Pinguino2.png","Serpente2.png","Toro3.png","Uccello2.png","Pesce1.png","Delfino2.png"];
var array_casa = ["Cuscino.jpg","Divano.png","Finestra.jpg","Frigorifero.png","Letto.png","Porta.png","Scaffale1.png","Sedia.png","Tavolo.png","tv.png"];
var array_cibi = ["Arancia1.jpg","Banana.png","Carota.jpeg","Cipolla.jpeg","Formaggio.JPG","Hamburger.jpeg","Limone.jpeg","Mela.png","Pane.png","Torta.png"];
var array_mestieri = ["Avvocato.png","Cantante.jpg","Gelataio.png","Giardiniere.png","Maestra.png","Medico2.png","Infermiera.png","Poliziotto.png","Scienziato.png","Programmatore.png"];
var array_mezzi = ["Aereo.png","Ambulanza.png","Autobus.png","Bici2.png","Camion3.png","Elicottero3.png","Macchinapolizia.jpg","Macchina2.png","Moto3.png","Treno1.png"];
var redscore = 0;
var redscore = 0;
var currentTurn = true;
var moment = 0;
var togo= 10;
var couple = [];
var avanzamento = false;
var appoggiomiste = [];
var degree = 180;

//moment = 0 Deve girare entrambi moment = 1 deve girare il secondo  moment = 2 ha appena girato entrambi

$(document).ready(function(){
  createjs.Sound.registerSound("./mp3/correct.mp3", "correct");
  createjs.Sound.registerSound("./mp3/wrong.mp3", "wrong");
  createjs.Sound.registerSound("./mp3/victory.mp3", "victory");
  createjs.Sound.registerSound("./mp3/draw.mp3", "draw");
  createjs.Sound.registerSound("./mp3/flip.mp3", "flip");
  showSettings();
  setButtons();
  updateTableSetting();
  updateCategorySetting();
  updateAvanzamento();
});

function carta(index,state,text,url,value){
  this.index = index;
  this.state = state;
  this.text = text;
  this.url = url;
  this.value = value;
}

function flipCard(i){
createjs.Sound.play("flip");
  $("#carta_"+i).css("background-image","url('img/"+array_carte[i].url+"')");
  array_carte[i].state = "flipped";
}

function done(i){
  $("#carta_"+i).addClass("semitrasp");
  array_carte[i].state = "done";
}

function unflip(i){
  $("#carta_"+i).css("background-image","url('img/carta.png')");
  array_carte[i].state = "normal";
}

function setButtons(){
  $("#prevav").click(function(){
    avanzamento = !avanzamento;
    updateAvanzamento();
  });

  $("#nextav").click(function(){
    avanzamento = !avanzamento;
    updateAvanzamento();
  });
  $("#restart").click(function(){
    showSettings();
  });

  $("#prevtable").click(function(){
    table -=1;
    table = table == 1? table = 11 : table;
    updateTableSetting();
  });

  $("#nexttable").click(function(){
    table +=1;
    table = table == 12? table = 2 : table;
    updateTableSetting();  });

    $("#prevcat").click(function(){
      category -=1;
      category = category == -1? category = category_array.length-1 : category;
      updateCategorySetting();
    });

    $("#nextcat").click(function(){
      category +=1;
      category = category == category_array.length? category = 0 : category;
      updateCategorySetting();  });

    $("#start").click(function(){
      avviaGioco();
    });
}

function updateAvanzamento(){
    if(!avanzamento){
      $("#avanzamento_setting").text("TURNI ALTERNATI");
    }
    else{
      $("#avanzamento_setting").text("CHI INDOVINA VA AVANTI");
    }
}

function updateTableSetting(){
  if(table<11){
  $("#tabellina_setting").text("TABELLINA DEL  " + table)}
  else{
  $("#tabellina_setting").text("TABELLINE MISTE!")
  }
}

function updateCategorySetting(){
  $("#categoria_setting").text(category_array[category]);
}

function updateScores(){
  $("#puntirossi").text(redscore);
  $("#puntiblu").text(bluescore);
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
  array_carte = [];
  redscore = 0;
  bluescore = 0;
  togo = 10;
  couple = [];
  moment = 0;
  appoggiomiste = [];
  switch(category){
    case 0:
    imgArray = array_animali;
    break;
    case 1:
    imgArray = array_casa;
    break;
    case 2:
    imgArray = array_cibi;
    break;
    case 3:
    imgArray = array_mestieri;
    break;
    case 4:
    imgArray = array_mezzi;
    break;
  }
  if(table<11){
  for(i=1; i<11;i++){
    array_carte.push(new carta(i-1,"normal",table*i,imgArray[i-1],table*i));
    array_carte.push(new carta(i+9,"normal",table + " x " + i,imgArray[i-1],table*i));
  }}else{
    for(i=0;i<20;i++){
      appoggiomiste.push(getRandomInt(2,10));
    }
    console.log(appoggiomiste);
    for(j=0; j<10;j++){
      array_carte.push(new carta(j,"normal",appoggiomiste[j*2]*appoggiomiste[j*2+1],imgArray[j],appoggiomiste[j*2]*appoggiomiste[j*2+1]));
      array_carte.push(new carta(j+10,"normal",appoggiomiste[j*2] + " x " + appoggiomiste[j*2+1],imgArray[j],appoggiomiste[j*2]*appoggiomiste[j*2+1]));
    }
    console.log(array_carte);
  }
  shuffle(array_carte);
  createTable();
  updateScores();
  setFirstTurn();
  showGame();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setFirstTurn(){
currentTurn = Math.round(Math.random()) == 0? true : false;
updateTurn();
}

function updateTurn(){
  if(currentTurn){
    $("#redbox").removeClass("semitrasp");
    $("#redturn").show();
    $("#blueturn").hide();
    $("#bluebox").addClass("semitrasp");
  }else{
    $("#redbox").addClass("semitrasp");
    $("#redturn").hide();
    $("#blueturn").show();
    $("#bluebox").removeClass("semitrasp");
  }
}

function createTable(){
  $("#gametable").empty();
  for(i=0;i<20;i++){
    $("#gametable").append("<div id='carta_"+i+"' class='carta ' value='"+i+"'>"+array_carte[i].text+"</div>")
  }
  $(".carta").click(function(){
    if(moment <2){
      i = $(this).attr("value");
      if(array_carte[i].state == "normal"){
        flipCard(i);
        couple.push(i);
        moment += 1;
      }
      if(moment == 2){
        check();
      }
    }


  });
}

function check(){
  if(array_carte[couple[0]].value == array_carte[couple[1]].value){
    if(currentTurn){
      redscore += 1;
    }else{
      bluescore +=1;
    }
    updateScores();

    setTimeout(function(){createjs.Sound.play("correct"); done(couple[0]);done(couple[1]); couple = []; togo -=1; checkWin()},500);
  }
  else{

    setTimeout(function(){createjs.Sound.play("wrong"); unflip(couple[0]);unflip(couple[1]); couple = []; moment = 0; switchTurn();},1000);

  }

}

function switchTurn(){
  currentTurn = !currentTurn;
  updateTurn();
}

function checkWin(){
  if(togo == 0){
    winScreen();
  }else{
    moment = 0;
    if(!avanzamento){
    switchTurn();}
  }
}

function winScreen(){
  $("#game").fadeOut(500);
  setTimeout(function(){$("#result").fadeIn(500)},700);
  $("#settings").hide();

  if(redscore > bluescore){
    createjs.Sound.play("victory");
    $("#chivince").text("LA SQUADRA ROSSA VINCE " + redscore + " A " + bluescore + "!");
    $("#result").css("background-color","red");
  }
  else if(redscore < bluescore){
    createjs.Sound.play("victory");
    $("#chivince").text("LA SQUADRA BLU VINCE " + bluescore + " A " + redscore + "!");
    $("#result").css("background-color","navy");
  }
  else{
    createjs.Sound.play("draw");
    $("#chivince").text("PAREGGIO!");
    $("#result").css("background-color","grey");
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
