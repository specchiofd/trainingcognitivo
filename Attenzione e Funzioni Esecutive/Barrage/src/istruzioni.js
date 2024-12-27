$(document).ready(function(){
  $("#avvia_istr").click(function(){
    generaIstruzioni();
    $("#btn_left_wrapper").hide();
    $("#settings").hide();
    $("#pre_instructions").show();
    $("#game").hide();
    $("#feedback_wrapper").hide();
  });

  $("#hocapito").click(function(){
    avviaGioco();
  })
});

function generaIstruzioni(){
  txt = "";
  if(modalita == 0){
    txt = "Trova tutte le immagini corrispondenti al target prima che scada il tempo.";
  }else{
    txt = "Trova tutte le immagini corrispondenti al target.";
  }
  if(stimolofisso){
    $("#txt_istruzioni_feedback").text("");
    $("#img_feedback").hide();
  }
  else{
    $("#txt_istruzioni_feedback").text("Lo stimolo target cambierà nel corso dell'esercizio, per cui è necessario tenere d'occhio l'immagine da cercare. ")
    $("#img_feedback").show();
  }
  if(!ordinatacasuale){
    txt+= "Hai selezionato la modalità 'Ordinata', quindi dovrai trovare gli stimoli in ordine, senza saltare da una riga all'altra. "
  }
  if(feedback == 0){
    txt+= " Dopo aver cliccato su ogni stimolo ti apparirà il feedback giusto/sbagliato."
    $("#img_modo").attr("src","./img/intro_1.png");
    $("#txt_istruzioni_modo").text(txt);
  }
    else{
    txt+= " Alla fine clicca su 'Ho finito' per vedere il numero di stimoli indovinati, mancati o sbagliati."
    $("#img_modo").attr("src","./img/intro_2.png");
    $("#txt_istruzioni_modo").text(txt);
  }
  if(mouseotastiera == 0){
    $("#txt_istruzioni_input").text("Usa il mouse per cliccare sugli stimoli target. ");
    $("#img_input").attr("src","./img/intro_6.png");

  }
  else{
    $("#txt_istruzioni_input").text("Usa le frecce per muoverti tra gli stimoli e premi Barra Spazio per selezionarli. ")
    $("#img_input").attr("src","./img/intro_3.png");

  }




}
