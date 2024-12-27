function fine(causa){
    in_ingame = false;
    if(causa == "tempo"){
      $("#img_fine").attr("src","./img/time.png");
      $("#responso").text("Tempo scaduto!");
      if((stimoli-somma(in_esatte)) != 1){
      $("#sottoresponso").text("Mancavano ancora " + (stimoli-somma(in_esatte)) + " figure!");
}
else{
    $("#sottoresponso").text("Mancava solo una figura!");

}
    }else{
      txt = "";
      $("#img_fine").attr("src","./img/success.png");
      $("#responso").text("Complimenti!");
      txt = "Hai trovato tutte le " + stimoli + " figure in " + (tempo-in_current_time) + " secondi";
      if(in_errate == 0){
          txt+= " senza fare errori!";
      }
      else if(in_errate == 1){
          txt+= " commettendo un solo errore!";
      }
      else{
          txt+=" commettendo " + in_errate + " errori";
      }
      $("#sottoresponso").text(txt);
    }
    $("#fine").modal("show");
}
