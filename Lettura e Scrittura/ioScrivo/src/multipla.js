increment = 0;

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

function avviaMultipla(){
	//Eccezioni
	//Sono suoni simili
	switch(game_array[current_game].tipo){
		case "simili":
		simili = true;
		$("#simili_uno").css("background-image","url('./img/simili/"+game_array[current_game].alternative[0]+".png')");
		$("#simili_due").css("background-image","url('./img/simili/"+game_array[current_game].alternative[1]+".png')");
		$("#simili_wrapper").show();
		break;
		default:
		simili = false;
		$("#simili_wrapper").hide();
		break;
	};

	shuffle(game_array[current_game].database[level]);
	setScore();
	updatePoints();
	currentScore();
	m_showItem();
	$("#multipla").show();
	
}

function m_showItem(){
	$("#feedback").hide();
	$("#vaiavanti").hide();
	if (simili){
		$("#simili_wrapper").show();
	}

	setQuestion();
	setButtons();
	$("#domanda").css("background-color","transparent");
	$("#domanda").show();
	$("#risposte").fadeIn(500);
}

function setScore(){
	$("#punti_wrapper").empty();
	for(i=0;i<10;i++){
		$("#punti_wrapper").append("<span id='punti_"+ i + "' class='glyphicon glyphicon-star grey' aria-hidden='true'></span>")
	}
}

function currentScore(){
	$("#punti_"+current_item).removeClass("grey");
	$("#punti_"+current_item).addClass("current");
}

function setButtons(){
	$("#btn_uno").text(game_array[current_game].database[level][current_item][3]);
	$("#btn_due").text(game_array[current_game].database[level][current_item][4]);
	$("#btn_uno").attr("val",game_array[current_game].database[level][current_item][3]);
	$("#btn_due").attr("val",game_array[current_game].database[level][current_item][4]);

}

function setQuestion(){
	$("#primo").text(game_array[current_game].database[level][current_item][0]);
	$("#secondo").text(game_array[current_game].database[level][current_item][2]);
	$("#mezzo").text("__");


}

function updatePoints(){
	$("#punti").text(points);
}

function check(ris){
	if(ris == game_array[current_game].database[level][current_item][1]){
		feedback(1);
	}
	else{
		feedback(0);
	}
}

function feedback(success){
		$("#simili_wrapper").hide();
	$("#risposte").fadeOut(500,function(){$("#vaiavanti").fadeIn(500);});
	
	$("#mezzo").text(game_array[current_game].database[level][current_item][1]);
	if(success){
	$("#domanda").css("background-color","darkgreen");
	$("#punti_"+current_item).removeClass("current");
	$("#punti_"+current_item).addClass("success");
	increment = 0;
	mTimeout = setInterval(function(){if(increment!= 100){increment+=10;points+=10;updatePoints();}else{clearInterval(mTimeout);}},100);
	}
	else{
	$("#domanda").css("background-color","darkgrey");
	$("#punti_"+current_item).removeClass("current");
	$("#punti_"+current_item).addClass("error");			
	}
	
}

function nextItem(){
	current_item +=1;
	if(current_item < MAX){
	$("#vaiavanti").fadeOut(500,function(){currentScore(); m_showItem()});
	}
	else{
		$("#domanda").hide();
		if(level == 1){
			
			if(points<SOGLIA){
			$("#vaiavanti").fadeOut(500,function(){currentScore(); $("#responso").text("Mi dispiace, devi fare almeno 700 punti per passare al livello 2"); $("#next_lvl").hide(); $("#riprova").show(); $("#back_winner").hide(); $("#feedback").fadeIn(500);});}
			else{
			$("#vaiavanti").fadeOut(500,function(){currentScore(); $("#responso").text("Hai superato il primo livello!"); firstPoints = points; $("#next_lvl").show(); $("#riprova").hide(); $("#back_winner").hide();$("#feedback").fadeIn(500); });}				
			}
		
		else{
			if(points<SECONDASOGLIA){
			$("#vaiavanti").fadeOut(500,function(){currentScore(); $("#responso").text("Mi dispiace, devi fare almeno 1400 punti per completare questa parte!"); $("#riprova").show(); $("#next_lvl").hide(); $("#back_winner").hide(); $("#feedback").fadeIn(500);});}
			else{
			$("#vaiavanti").fadeOut(500,function(){currentScore(); $("#responso").text(game_array[current_game].finale); $("#feedback").fadeIn(500); $("#next_lvl").hide(); $("#back_winner").show(); $("#next_lvl").hide(); });}				
		}
	}
	}