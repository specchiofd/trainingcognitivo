function costriusci_responso(){
if(esatte < current_ach[0]){
  $("#responso_img").attr("src","src/tempo.png");
  $("#responso_txt").text("Oh no! È finito il tempo!");
}else if(esatte >= current_ach[0] && esatte < current_ach[1]){
  $("#responso_img").attr("src","src/bronzo.png");
  $("#responso_txt").text("Medaglia di bronzo! Ma possiamo fare di meglio!");
}else if(esatte >= current_ach[1] && esatte < current_ach[2]){
  $("#responso_img").attr("src","src/argento.png");
  $("#responso_txt").text("Medaglia d'argento! Ci siamo quasi!");
}
}

function vittoria(){
  $("#responso_img").attr("src","src/oro.png");
  $("#responso_txt").text("Complimenti! Ce l'hai fatta!");
}
