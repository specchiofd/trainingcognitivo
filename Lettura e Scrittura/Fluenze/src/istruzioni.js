function creaIstruzioni(){
  /*
  if(fonema != 22){
    real_fonema = fonema;
  }else{
    real_fonema = getRandomInt(0,21);
  }
  */
  if(fonema != 22){
    real_fonema = fonema;
  }else{
    real_fonema = getRandomInt(0,21);
  }
  $("#fonema_scelto").text(alfabeto[real_fonema].toUpperCase());
  if(modalita == 0){
    $("#istruzioni_txt").text("Leggi il suggerimento e componi la parola prima che scada il tempo! Sblocca le medaglie fino ad arrivare alla medaglia d'oro!")
  }else{
    $("#istruzioni_txt").text("Leggi il suggerimento e componi la parola! Sblocca le medaglie fino ad arrivare alla medaglia d'oro!")
  }
  switch(difficolta){
    case 0:
    current_ach = achievment_facile;
    break;
    case 1:
    current_ach = achievment_medio;
    break;
    case 2:
    current_ach = achievment_difficile;
    break;
  }
  $("#first_ach").text(current_ach[0] + " parole");
  $("#second_ach").text(current_ach[1] + " parole");
  $("#third_ach").text(current_ach[2] + " parole");

}
