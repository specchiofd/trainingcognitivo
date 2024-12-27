parziale = [];
current_ans =0;
alfabet = ["A","B","C","D","E","F","G","H","I","L","M","N","O","P","Q","R","S","T","U","V","Z","J","K","W","X","Y"]
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function avviaComponi(){
	shuffle(game_array[current_game].database[level-1]);
		setScore();
	updatePoints();
	currentScore();
	c_showItem();
	$("#componi").show();
}

function c_showItem(){
	$("#c_feedback").hide();
	$("#c_vaiavanti").hide();
	setc_Buttons();
	setc_Question();
	setc_Suggerimento();
	$("#c_domanda").css("background-color","transparent");
	$("#c_domanda").show();
	$("#c_risposte").fadeIn(500);
	$("#c_risposte").css("opacity",1);
}

function setc_Suggerimento(){
	switch(current_game){
		case 20:
		$("#c_suggerimento").text("Il contrario di "+game_array[current_game].database[level-1][current_item][0]);
		break;
		case 21:
		$("#c_suggerimento").text("Trova l'anagramma di " + game_array[current_game].database[level-1][current_item][0]);
		break;
		case 22:
		case 23:
		case 24:
		$("#c_suggerimento").text(game_array[current_game].database[level-1][current_item][0]);
		break;
	}
	}

function setc_Buttons(){

	parziale= [];
	
	for(i=0;i<game_array[current_game].database[level-1][current_item][2].length;i++){
		parziale.push(game_array[current_game].database[level-1][current_item][2][i]);
	}
	for(j=game_array[current_game].database[level-1][current_item][2].length;j<16;j++){
		parziale.push(alfabet[getRandomInt(0,alfabet.length-1)]);
	}
	shuffle(parziale);
	for(k=0;k<16;k++){
		$("#"+k).text(parziale[k]);
	}
	$(".lettera").attr("active","true");
	$(".lettera").css("opacity",1);
	$(".lettera").removeClass("inactivelet");
	current_ans = game_array[current_game].database[level-1][current_item][1].length;
}

function setc_Question(){
	$("#c_testo").text(game_array[current_game].database[level-1][current_item][1] + stringlenght());


}

function stringlenght(){
	var str = "";
	
	for(i=current_ans;i<game_array[current_game].database[level-1][current_item][3].length;i++){
		str += "_";
	}
	return str;
}

function componi_evaluate(letter){
	if(game_array[current_game].database[level-1][current_item][3][current_ans] == letter){
		current_ans ++;
		$("#c_testo").text(game_array[current_game].database[level-1][current_item][3].substring(0,current_ans) + stringlenght());
		if($("#c_testo").text() == game_array[current_game].database[level-1][current_item][3]){
				$("#c_risposte").fadeOut(500,function(){$("#c_vaiavanti").fadeIn(500);});
				$("#c_domanda").css("background-color","darkgreen");
				$("#punti_"+current_item).removeClass("current");
				$("#punti_"+current_item).addClass("success");
				increment = 0;
				mTimeout = setInterval(function(){if(increment!= 100){increment+=10;points+=10;updatePoints();}else{clearInterval(mTimeout);}},100);
		}
	}else{
		$("#c_testo").text(game_array[current_game].database[level-1][current_item][3]);
		$(".lettera").attr("active","false");
		$("#c_risposte").fadeTo(500, 0.5,function(){$("#c_vaiavanti").fadeIn(500);});
				$("#c_domanda").css("background-color","darkgrey");
	$("#punti_"+current_item).removeClass("current");
	$("#punti_"+current_item).addClass("error");	
		}
}

function c_nextItem(){
	current_item +=1;
	if(current_item < MAX){
	$("#c_vaiavanti").fadeOut(500,function(){currentScore(); c_showItem()});
	}
	else{
		$("#c_domanda").hide();
		$("#c_risposta").hide();
		if(level == 1){
			
			if(points<SOGLIA){
			$("#c_vaiavanti").fadeOut(500,function(){currentScore(); $("#c_responso").text("Mi dispiace, devi fare almeno 700 punti per passare al livello 2"); $("#c_next_lvl").hide(); $("#c_riprova").show(); $("#c_back_winner").hide(); $("#c_feedback").fadeIn(500);});}
			else{
			$("#c_vaiavanti").fadeOut(500,function(){currentScore(); $("#c_responso").text("Hai superato il primo livello!"); firstPoints = points; $("#c_next_lvl").show(); $("#c_riprova").hide(); $("#c_back_winner").hide();$("#c_feedback").fadeIn(500); });}				
			}
		
		else{
			if(points<SECONDASOGLIA){
			$("#c_vaiavanti").fadeOut(500,function(){currentScore(); $("#c_responso").text("Mi dispiace, devi fare almeno 1400 punti per completare questa parte!"); $("#c_riprova").show(); $("#c_next_lvl").hide(); $("#c_back_winner").hide(); $("#c_feedback").fadeIn(500);});}
			else{
			$("#c_vaiavanti").fadeOut(500,function(){currentScore(); $("#c_responso").text(game_array[current_game].finale); $("#c_feedback").fadeIn(500); $("#c_next_lvl").hide(); $("#c_back_winner").show(); $("#c_next_lvl").hide(); });}				
		}
	}
	}

