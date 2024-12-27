left_selected = 0;
prev_index = 0;
is_prev = false;

$(document).ready(function(){
  $("#riepilogo_wrapper").hide();
  $('#riscritta').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    T.check_riscrivi();
}
});
  $("#tachistoscopio_wrapper").hide();
  setButtons();
  showButton(0);
  prev_index = 0;
  var search = location.search.substring(1);
 
  T.normal();
  initialS();
  setOptButtons();
  startListaSettings();


})

function startListaSettings(){
  if(location.search.substring(1) == ""){
  $("#customauto").val("auto");
  $("#gruppoortografico").val("tutti");
  $("#parolenonparole").val("parole");
  $("#numerosillabe").val(2);
  $("#autooptions").show();
  $("#customoptions").hide();
  $("#ifsillabe").show();
  updatelistaliste(T.pnp,T.sillabe,T.gruppo);}
}

function updatelistaliste(pnp,sillabe,gruppo){
T.lista = [];
available = [];
for(i=0;i<L[T.sillabe-1].length;i++){
if(L[sillabe-1][i][1] == pnp){
if(gruppo == 'tutti'){
available.push(i);
}
else{
if(L[sillabe-1][i][2] == gruppo){
available.push(i);
}
}
}
}
var option = '';
$("#listaliste").empty();
for (var i=0;i<available.length;i++){
   option += '<option value='+ available[i] + '>' + L[sillabe-1][available[i]][0] + '</option>';
}
$('#listaliste').append(option);
if(available.length > 0){
T.nomelista = L[sillabe-1][available[0]][0];
T.lista = L[sillabe-1][available[0]][3].split(',');

}
showPreview(T.lista);
}

function setButtons(){

$("#final_cambia").click(function(){

  T.stopped = true;
  $('#stop_modal').modal({
  backdrop: 'static',
  keyboard: false
});
});

$("#final_riavvia").click(function(){
  $('#riavvia_modal').modal({
  backdrop: 'static',
  keyboard: false
});


});

$("#riscrivi_ok").click(function(){
  $("#riscrivi_ok").hide();
  T.check_riscrivi();
});

$("#riscrivi_avanti").click(function(){
  $("#riscrivi_avanti").hide();
  $("#riscrivi").hide();
  $("#tachistoscopio_parola_wrapper").show();
  T.mostra_blank();
});

  $("#feedback_si").click(function(){
    $("#feedback").hide();
    $("#tachistoscopio_parola_wrapper").show();
    T.mostra_blank();
  });

  $("#feedback_no").click(function(){
    $("#feedback").hide();
    $("#tachistoscopio_parola_wrapper").show();
    T.errore = true;
    T.mostra_blank();
  })

  $("#tachistoscopio").click(function(){

  if(T.errorable && !T.errore && T.modalita == "normale"){
  T.errore = true;

  }
  });

$("#stop").click(function(){
  if(!T.isCountdown){
  T.stopped = true;
  $('#stop_modal').modal({
  backdrop: 'static',
  keyboard: false
});}
})

$("#riavvia").click(function(){
  if(!T.isCountdown){
  T.stopped=true;
  $('#riavvia_modal').modal({
  backdrop: 'static',
  keyboard: false
});}
})

$("#annulla_stop").click(function(){
  T.stopped=false;
  $("#stop_modal").modal("hide");
  if(T.index != T.lista.length-1){
    T.esposizione_normale();
  }
});

$("#annulla_riavvia").click(function(){
  T.stopped=false;
  $("#riavvia_modal").modal("hide");
  if(T.index != T.lista.length-1){
    T.esposizione_normale();
  }
});

$("#ok_riavvia").click(function(){
  $("#riavvia_modal").modal("hide");
  $("#tachistoscopio_wrapper").show();

  $("#riepilogo_wrapper").hide();
  T.avvia();
});

$("#ok_stop").click(function(){
  $("#riepilogo_wrapper").hide();
  $("#stop_modal").modal("hide");
  $("#tachistoscopio_wrapper").hide();
  $(".left-buttons").show();
  showButton(0);
  $("#settings_wrapper").show();
  $(".settings_panel").hide();
  $("#lista").show();
  $(".recap_panel").hide();
  $("#recap_lista").show();
});


$("#avvia_vero").click(function(){
  $("#tachistoscopio_wrapper").show();

  T.avvia();
})
  $( "#listapersonalizzata" ).keydown(function( event ) {
    setTimeout(function(){
      if(T.custom){
        T.lista = $("#listapersonalizzata").val().split(",");
      }
      for(i=0;i<T.lista.length;i++){
        if(T.lista[i]==""){
          T.lista.splice(i,1);
        }
      }
      if(T.lista.length > 0){
      showPreview(T.lista);}
    },200)


});
/*
$( "#listapersonalizzata" ).keydown(function( event ) {
  if(event.which == 8){
    if(T.custom){
      T.lista = $("#listapersonalizzata").val().split(",");
    }
    for(i=0;i<T.lista.length;i++){
      if(T.lista[i]==""){
        T.lista.splice(i,1);
      }
    }
    if(T.lista.length > 0){
    showPreview(T.lista);}
  }



});
*/
  $("#avvia_anteprima").click(function(){
    if(!is_prev){
    avviaAnteprima();}
  })
  $("#save").click(function(){
    salva();
    $("#saveModal").modal("show");
  });
  $("#btn_lista").click(function(){
  if(left_selected == 1 || left_selected == 2){
    showButton(0);
    left_selected = 0;
  }
  })
  $("#btn_options").click(function(){
      if(left_selected == 0 || left_selected == 2){
    showButton(1);
    left_selected = 1;
  }
  })
  $("#btn_parola").click(function(){
      if(left_selected == 0 || left_selected == 1){
    showButton(2);
    left_selected = 2;
  }
  })
}

function showButton(i){
  $(".left-buttons").removeClass("mydisabled");
  if(i==0){
    $(".left-buttons").addClass("myunselected");
    $("#btn_lista").removeClass("myunselected");
    $("#opzioni").hide();
    $("#lista").show();
    $("#parola").hide();
    $("#recap_lista").show();
    $("#recap_options").hide();
    $("#recap_parola").hide();
  }else if (i==1){
    $(".left-buttons").addClass("myunselected");
    $("#btn_options").removeClass("myunselected");
    $("#opzioni").show();
    $("#lista").hide();
    $("#parola").hide();
    $("#recap_lista").hide();
    $("#recap_options").show();
    $("#recap_parola").hide();
  }
  else{
    $(".left-buttons").addClass("myunselected");
    $("#btn_parola").removeClass("myunselected");
    $("#parola").show();
    $("#opzioni").hide();
    $("#lista").hide();
    $("#recap_lista").hide();
    $("#recap_options").hide();
    $("#recap_parola").show();
  }
}

function setOptButtons(){

$("#tempo").change(function(){
T.tempo = $(this).val();
});

$("#intertempo").change(function(){
T.intertempo = $(this).val();
});

$("#posizione").change(function(){
T.posizione = $(this).val();
});

$("#modalita").change(function(){
T.modalita = $(this).val();
});

$("#prestimolo").change(function(){
T.prestimolo = $(this).is(':checked');
});

$("#incremento").change(function(){
if($(this).is(':checked')){
$("#quantoincrementowrapper").show();
}else{
$("#quantoincrementowrapper").hide();
}
T.incremento = $(this).is(':checked');
});


$("#mescola").change(function(){
T.mescola = $(this).is(':checked');
});

$("#mascheramento").change(function(){
T.mascheramento = $(this).is(':checked');
});


$("#quantoincremento").change(function(){
T.quantoincremento = $(this).val();
});

$("#dimensioni").change(function(){
$("#wordpreview").css("font-size",$(this).val()+"em");
T.dimensioni = $(this).val()+"em";
T.dimensionitoexport = $(this).val()
});

$("#carattere").change(function(){
$("#wordpreview").css("font-family",$(this).val());
T.carattere = $(this).val();
});

$("#coloretesto").change(function(){
$("#wordpreview").css("color",$(this).val());
T.coloretesto = $(this).val();
});

$("#coloresfondo").change(function(){
  $("#mini_schermo_parola").css("background-color",$("#coloresfondo").val());
T.coloresfondo = $(this).val();
});

$("#maiuscole").change(function(){
if($(this).is(':checked')){
$("#wordpreview").css("text-transform","uppercase");
}else{
$("#wordpreview").css("text-transform","none");
}
T.maiuscole = $(this).is(':checked');
});

$("#customauto").change(function(){
if($(this).val() == 'custom'){
$("#autooptions").hide();
$("#customoptions").show();
T.custom = true;
T.lista = $("#listapersonalizzata").val();
showPreview(T.lista);
}
else{
$("#autooptions").show();
$("#customoptions").hide();
T.custom = false;
if(T.sillabe == null){
	T.normal();
}
updatelistaliste(T.pnp,T.sillabe,T.gruppo);
}
});

$("#parolenonparole").change(function(){
if($(this).val() == 'parole'){
T.pnp = 'parole';
T.sillabe = 2;
$("#numerosillabe").val(2);
$("#ifsillabe").show();
}
else if($(this).val() == 'nonparole'){
$("#ifsillabe").show();
T.sillabe = 2;
$("#numerosillabe").val(2);
T.pnp = 'nonparole';
}
else{
T.pnp = 'sillabe';
T.sillabe = 1;
$("#ifsillabe").hide();
}
updatelistaliste(T.pnp,T.sillabe,T.gruppo);
});

$("#numerosillabe").change(function(){
T.sillabe = $(this).val();

updatelistaliste(T.pnp,T.sillabe,T.gruppo);
});
$("#gruppoortografico").change(function(){
T.gruppo = $(this).val();
updatelistaliste(T.pnp,T.sillabe,T.gruppo);
});
$("#listaliste").change(function(){
T.nomelista = L[T.sillabe-1][$(this).val()][0];
T.lista = L[T.sillabe-1][$(this).val()][3].split(',');

showPreview(T.lista);
});

$("#avvia").click(function(){
if(T.lista.length > 0){
  switch(T.modalita){
    case 'normale':
    $("#primotesto").text(" normale.");
    $("#secondotesto").text("Quando l'utente legge male, clicca sullo schermo per segnare l'errore.");
    $("#img_modalita").attr("src","./src/mod_normale.png");
    break;
    case 'feedback':
    $("#primotesto").text(" feedback.");
    $("#img_modalita").attr("src","./src/mod_feedback.png");
    $("#secondotesto").text("Dopo ogni parola, verrà chiesto di valutare la correttezza della lettura.");
    break;
    case 'riscrivi':
    $("#primotesto").text(" riscrivi.");
    $("#img_modalita").attr("src","./src/mod_riscrivi.png");
    $("#secondotesto").text("Dopo aver letto la parola, verrà chiesto di riscriverla.");
    break;
  }
  $('#avvia_modal').modal({
  backdrop: 'static',
  keyboard: false
});

}else{
  window.alert("La lista è vuota!");
}
});



}

function initialS(){
$("#wordpreview").css("font-family",$("#carattere").val());
if($("#incremento").is(':checked')){
$("#quantoincrementowrapper").show();
}else{
$("#quantoincrementowrapper").hide();
}
$("#wordpreview").css("color",$("#coloretesto").val());
$("#mini_schermo_parola").css("background-color",$("#coloresfondo").val());
if($("#maiuscole").is(':checked')){
$("#wordpreview").css("text-transform","uppercase");
}else{
$("#wordpreview").css("text-transform","none");
}
$("#wordpreview").css("font-size",$("#dimensioni").val()+"em");
}

function myParse(ms){
		$("#autooptions").hide();
		$("#customoptions").show();
		$("#customauto").val('custom');
		T.custom = true;
		ms.lista = unescape(ms.lista);
		T.lista = ms.lista.split(',');

		$("#listapersonalizzata").text(ms.lista);
    T.prestimolo = ms.prestimolo;
		T.tempo = ms.tempo;
		T.intertempo = ms.intertempo;
		T.mescola = ms.mescola == "true"?true:false;
		T.posizione = ms.posizione;
		T.mauiscole = ms.maiuscole == "true"?true:false;
		T.modalita = ms.modalita;
		T.incremento = ms.incremento == "true"?true:false;
		T.dimensioni = ms.dimensioni;
		T.dimensionitoexport = ms.dimensionitoexport;
		T.quantoincremento = ms.quantoincremento;
		//T.sillabapersillaba = ms.sillabapersillaba;
		T.mascheramento = ms.mascheramento == "true"?true:false;
		T.carattere = ms.carattere;
		T.coloretesto = unescape(ms.coloretesto);
		T.coloresfondo = unescape(ms.coloresfondo);
		$("#tempo").val(ms.tempo);
    $("#prestimolo").prop('checked', ms.prestimolo == "true"?true:false);
		$("#intertempo").val(ms.intertempo);
		$("#mescola").prop('checked', ms.mescola == "true"?true:false);
		$("#posizione").val(ms.posizione);
		$("#modalita").val(ms.modalita);
		$("#incremento").prop('checked', ms.incremento == "true"?true:false);
		if(ms.incremento == "true"?true:false){
			$("#quantoincrementowrapper").show();
			$("#quantoincremento").val(ms.quantoincremento);
		}
		else{
			$("#quantoincrementowrapper").hide();
		}
		$("#mascheramento").prop('checked', ms.mascheramento == "true"?true:false);
		$("#maiuscole").prop('checked', ms.maiuscole == "true"?true:false);
		$("#dimensioni").val(ms.dimensionitoexport);
		$("#wordpreview").css("font-size",ms.dimensioni);
		$("#carattere").val(ms.carattere);

		$("#coloretesto").val(unescape(ms.coloretesto));
		$("#coloresfondo").val(unescape(ms.coloresfondo));
    showPreview(T.lista);
setOptButtons();
}

function salva(){
  var uri = "http://www.trainingcognitivo.it/Tachistoscopio/index.html?custom=true&lista="+escape(T.lista.join())+
  "&tempo="+T.tempo+
  "&intertempo="+T.intertempo+
  "&mescola="+T.mescola+
  "&posizione="+T.posizione+
  "&mauiscole="+T.mauiscole+
  "&modalita="+T.modalita+
  "&prestomolo="+T.prestimolo+
  "&incremento="+T.incremento+
  "&dimensioni="+T.dimensioni+
  "&dimensionitoexport="+T.dimensionitoexport+
  "&quantoincremento="+T.quantoincremento+
  "&mascheramento="+T.mascheramento+
  "&carattere="+T.carattere+
  "&coloretesto="+escape(T.coloretesto)+
  "&coloresfondo="+escape(T.coloresfondo)
  ;
  var res = encodeURI(uri);
  muri = res;


  gapi.client.setApiKey('AIzaSyCPGG_TU77GgmuJFkCint9SMUnhVzaUyVQ');
  gapi.client.load('urlshortener', 'v1',makeRequest);
}

function makeRequest(){
	  var request = gapi.client.urlshortener.url.insert({
                'resource': {
                    'longUrl': muri // Your long URL
                }
            });

            request.execute(function(response)
            {
                $("#tmp").val(response.id);
            });
}

function showPreview(lista){
$("#preview").empty();
$("#nelementi").text(T.lista.length);
var option = '';
for (var i=0;i<lista.length;i++){
   option += '<div class="row" style="margin:0px 0px 2px 0px" id="previewrow_'+ i +'"><div class="col-xs-12 previewrow"><h7 class="previewelement" id="lista_'+ i + '">' + lista[i] + '<span class="glyphicon glyphicon-trash pull-right removeelement" aria-hidden="true" whichelement='+i+'></span></h5></div></div></div>';
}
$('#preview').append(option);

$('.removeelement').click(function(){
removeId = $(this).attr("whichelement");
$("#previewrow_"+removeId).fadeOut(500,function(){
T.lista.splice(removeId, 1);
if(T.custom){
  $("#listapersonalizzata").val(T.lista.join(','));
}
showPreview(T.lista);
});

});
}

function avviaAnteprima(){
    is_prev = true;
    $("#avvia_anteprima").addClass("disabled");
    T.mescola = $("#mescola").is(':checked');
      T.tempo = parseInt($("#tempo").val());
  switch(T.posizione){
  case "centro":
  $("#mini_parola").css("text-align","center");
  $("#mini_prestimolo").css("text-align","center");
  break;
  case "sinistra":
  $("#mini_parola").css("text-align","left");
$("#mini_prestimolo").css("text-align","left");
  break;
  case "destra":
  $("#mini_parola").css("text-align","right");
  $("#mini_prestimolo").css("text-align","right");
  break;
  }
  if(prev_index<5){

    if(T.prestimolo){
      pre_prestimolo();
    }else{
      pre_parola();
    }
}else{
  prev_index = 0;
  is_prev = false;
  window.alert("Ok");
  $("#avvia_anteprima").removeClass("disabled");
}
}

function pre_prestimolo(){
  var tmp = "";
  $("#mini_parola").hide();
  $("#mini_primalettera").css("color",T.coloretesto);

  for(i=0;i<T.lista[prev_index].length-1;i++){
    tmp += "#";
  }

  $("#mini_restoprestimolo").text(tmp);
  $("#mini_restoprestimolo").css("color",T.coloresfondo);
  $("#mini_prestimolo").show();
  setTimeout(function(){
      mini_blank();
  },400);
}

function mini_blank(){
  $("#mini_prestimolo").hide();
  setTimeout(function(){
    pre_parola();
  },200);
}

function pre_parola(){
    $("#mini_prestimolo").hide();

  if(T.mescola){
    $("#mini_parola").text(T.lista[getRandomInt(0,T.lista.length)]);
  }else{
  $("#mini_parola").text(T.lista[prev_index]);
  }
  $("#mini_parola").show();
  setTimeout(function(){
    if(T.mascheramento){
      pre_mascheramento();
    }else{
      pre_blank();
    }
  },T.tempo);
}

function pre_mascheramento(){
  $("#mini_parola").text("#####");
  setTimeout(function(){
    pre_blank();
  },200);
}

function pre_blank(){
  $("#mini_parola").text("");
  prev_index += 1;
  setTimeout(function(){
    avviaAnteprima();
  },T.intertempo);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
