winner = 0;
winners = [];

function winScreen(){
  winners = [];
  winner = 0;
  if(players == 2){
    if(punti[0] > punti[1]){
      $("#vittoria").css("background-color","red");
      $("#imgvittoria").attr("src","src/coppa.png");
      $("#txtvittoria").text(VITTORIAPER + " " + $("#squadrauno").val() + "!");
    }else if(punti[0] < punti[1]){
      $("#vittoria").css("background-color","blue");
      $("#imgvittoria").attr("src","src/coppa.png");
      $("#txtvittoria").text(VITTORIAPER + " " + $("#squadradue").val() + "!");
    }else{
      $("#vittoria").css("background-color","grey");
      $("#imgvittoria").attr("src","src/bilancia.png");
      $("#txtvittoria").text(PAREGGIO);
    }
  }
  else{
    winner = indexOfMax(punti);
    winners.push(winner);
    addWinners(winner);
    colore = "";
    if(winners.length == 1){
      switch(winners[0]){
        case 0:
        vincitore = $("#squadrauno").val();
        colore = "red";
        break;
        case 1:
        colore = "blue";
        break;
        case 2:
        vincitore = $("#squadratre").val();
        colore = "green";
        break;
        case 3:
        vincitore = $("#squadraquattro").val();
        colore = "black";
        break;
      }
      $("#vittoria").css("background-color",colore);
      $("#imgvittoria").attr("src","src/coppa.png");
      $("#txtvittoria").text(VITTORIAPER + " " + toName(winners[0]) + "!");
    }else if(winners.length == players){
      $("#vittoria").css("background-color","grey");
      $("#imgvittoria").attr("src","src/bilancia.png");
      $("#txtvittoria").text(PAREGGIO);
    }else{
      if(winners.length == 2){
        $("#imgvittoria").attr("src","src/coppa.png");
        $("#vittoria").css("background-color","brown");
        $("#txtvittoria").text(VITTORIAPER + " " + toName(winners[0]) + " " +  AND + " " + toName(winners[1]) + "!");
      }else{
        $("#imgvittoria").attr("src","src/coppa.png");
        $("#vittoria").css("background-color","darkgoldenrod");
        $("#txtvittoria").text(VITTORIAPER + " " + toName(winners[0]) + ", " + toName(winners[1]) + ", " + AND + " " + toName(winners[2]) + "!");
      }
    }
  }
  setScreen("win");

}

function toName(n){
  switch(n){
    case 0:
    return $("#squadrauno").val();
    case 1:
    return $("#squadradue").val();
    case 2:
    return $("#squadratre").val();
    case 3:
    return $("#squadraquattro").val();

  }
}

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

function addWinners(ind){
  for(i=0;i<punti.length;i++){
    if(i != winner && punti[i] == punti[winner]){
      winners.push(i);
    }
  }
}
