var audio=["0","1","2","3","4","5","6","7","8","9"];

$(document).ready(function(){
  setOptChanges();
  console.log($("#s_spaziale"));
  var queue = new createjs.LoadQueue();
  queue.installPlugin(createjs.Sound);  
  queue.on("complete", mostraNext, this);
  for(i=0;i<audio.length;i++){
  queue.loadFile({id:audio[i], src:"assets/suoni/"+[i]+".mp3"});
  }
  $("#next").click(function(){
	 $("#load").hide();
	 showOptions();
  });
  $("#avvia").click(function(){
	  $("#options").hide();
	  Nback.startGame(); 
  });
	$("#inizia").click(function(){
		Nback.in_game = true;
		$("#inizia").hide();
		Nback.inizio_gioco();
	});
	
		$("#riavvia").click(function(){
		Nback.in_game = false;
		$("#responso").hide();
		showOptions();
	});
	
	$("#feedback_spaziale").click(function(){
				if (Nback.in_game && Nback.elemento_attuale >= Nback.n_back && !Nback.cliccato_visuospaziale && (Nback.modalita == 1 || Nback.modalita == 4 || Nback.modalita == 5 || Nback.modalita == 7))
		{
		Nback.cliccato_visuospaziale = true;
		if (Nback.lista_visuospaziale[Nback.elemento_attuale] == Nback.lista_visuospaziale[Nback.elemento_attuale-Nback.n_back])
		{
		//Feedback positivo

		$("#s_spaziale").addClass("glyphicon-thumbs-up");
		$("#s_spaziale").removeClass("glyphicon-fullscreen");
		$("#s_spaziale").css("color","green");
		$("#feedback_spaziale").fadeTo(100,1);
		Nback.risposte_visuospaziale.push("S");
		Nback.risposte_esatte_visuospaziale +=1;
		}
		else
		{
		//Feedback negativo


		$("#s_spaziale").addClass("glyphicon-thumbs-down");
		$("#s_spaziale").removeClass("glyphicon-fullscreen");
		$("#s_spaziale").css("color","red");
		$("#feedback_spaziale").fadeTo(100,1);
		Nback.risposte_visuospaziale.push("N");
		Nback.risposte_errate_visuospaziale +=1;
		}
		}
});

$("#feedback_visivo").click(function(){
		if (Nback.in_game && Nback.elemento_attuale >= Nback.n_back && !Nback.cliccato_visivo && (Nback.modalita == 3 || Nback.modalita == 5 || Nback.modalita == 6 || Nback.modalita == 7))
		{
		Nback.cliccato_visivo = true;
		if (Nback.lista_visivo[Nback.elemento_attuale] == Nback.lista_visivo[Nback.elemento_attuale-Nback.n_back])
		{
		//Feedback positivo
		$("#s_visivo").addClass("glyphicon-thumbs-up");
		$("#s_visivo").removeClass("glyphicon-eye-open");
		$("#s_visivo").css("color","green");
		$("#feedback_visivo").fadeTo(100,1);
		Nback.risposte_visivo.push("S");
		Nback.risposte_esatte_visivo +=1;
		}
		else
		{
		//Feedback negativo
		$("#feedback_visivo").fadeTo(100,1);
		$("#s_visivo").addClass("glyphicon-thumbs-up");
		$("#s_visivo").removeClass("glyphicon-eye-open");
		$("#s_visivo").css("color","green");
		$("#feedback_visivo").fadeTo(100,1);
		Nback.risposte_visivo.push("N");
		Nback.risposte_errate_visivo +=1;
		}
		}
});

$("#feedback_uditivo").click(function(){
if (Nback.in_game && Nback.elemento_attuale >= Nback.n_back && !Nback.cliccato_uditivo && (Nback.modalita == 2 || Nback.modalita == 4 || Nback.modalita == 6 || Nback.modalita == 7))
		{
		Nback.cliccato_uditivo = true;
		if (Nback.lista_uditivo[Nback.elemento_attuale] == Nback.lista_uditivo[Nback.elemento_attuale-Nback.n_back])
		{
		//Feedback positivo
		$("#s_uditivo").addClass("glyphicon-thumbs-up");
		$("#s_uditivo").removeClass("glyphicon-volume-up");
		$("#s_uditivo").css("color","green");
		$("#feedback_uditivo").fadeTo(100,1);
		Nback.risposte_uditivo.push("S");
		Nback.risposte_esatte_uditivo +=1;
		}
		else
		{
		//Feedback negativo
		$("#s_uditivo").addClass("glyphicon-thumbs-down");
		$("#s_uditivo").removeClass("glyphicon-volume-up");
		$("#s_uditivo").css("color","red");
		$("#feedback_uditivo").fadeTo(100,1);
		Nback.risposte_uditivo.push("N");
		Nback.risposte_errate_uditivo +=1;
		}
		}
});

});

function mostraNext(){
	$("#spinner").hide();
	$("#next").show();
}

function setOptChanges(){
	$("#nome").change(function(){
		Nback.nome = $(this).val();
	});
		$("#lato_matrice").change(function(){
		Nback.lato_quadrato = parseInt($(this).val());
	});
		$("#nback").change(function(){
		Nback.n_back = parseInt($(this).val());
	});
		$("#latenza").change(function(){
		Nback.delay = parseInt($(this).val());
		Nback.secondi = parseInt($(this).val());
	});
		$("#item").change(function(){
		Nback.item = $(this).val();
	});
		$("#modalita").change(function(){
		Nback.modalita = parseInt($(this).val());
	});
}

function showOptions(){
	$("#options").show();
	$("#nome").val(Nback.nome);
	$("#lato_matrice").val(Nback.lato_quadrato);
	$("#nback").val(Nback.n_back);
	$("#latenza").val(Nback.delay);
	$("#item").val(Nback.item);
	$("#modalita").val(Nback.modalita);
}

