

letteraScelta = "";
globalIndex = 0;
found = 0;

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

var Single = {
	current_lives:5,
	current_word:"",
	word_set:[],
	current_turn:1,
	game_state:0,
	rimanenti:0
	}
	
function startSingle(){
	Single.current_lives = Settings.tentativi;
	word_set = [];
	setWordSet();
	prepareScreen();
}	

function setWordSet(){
	var temp = [];
	Single.word_set = [];
	if(Settings.categorie == 0){
	temp = temp.concat(parole[1],parole[2],parole[3],parole[4]);
	shuffle(temp);
	for(i=0;i<Settings.turni;i++){
		Single.word_set.push(temp[i]);
	}
	}
	else{
		for(i=0;i<parole[Settings.categorie].length;i++){
			temp.push(parole[Settings.categorie][i]);
		}
		for(i=0;i<Settings.turni;i++){
		Single.word_set.push(temp[i]);
	}
	}
}

function prepareScreen(){
	updateTurn();
	updateLives();
	setKeyboard();
	setWord();
	$("#single_avatar").css("background","url('./img/"+player_one.avatar+".png'");
	$("#single_avatar").css("background-size","cover");
}

function updateTurn(){

	$("#turn").text(Single.current_turn + "/" + Settings.turni);
}

function updateLives(){
	$("#lives").empty();
	for(i=0; i<Single.current_lives;i++){
	$("#lives").append('<span class="glyphicon glyphicon-heart" aria-hidden="true" style="color:yellow"></span> ')
	}
	for(i=0; i<(Settings.tentativi - Single.current_lives);i++){
	$("#lives").append('<span class="glyphicon glyphicon-heart" aria-hidden="true" style="color:grey"></span> ')
	}
}

function setWord(){

	Single.current_word = Single.word_set[Single.current_turn-1].toUpperCase();
	Single.rimanenti = Single.current_word.length;
	$("#word_wrapper").empty();
	for(i=0;i<Single.current_word.length;i++){
		$("#word_wrapper").append("<div class='lettera' id='lettera_"+i+"'>"+isVowel(Single.current_word[i])+"</div>");
	}
	Single.game_state = 0;
	$("#single").show();	
}

function isVowel(lettera){
	if(lettera == "A" || lettera == "E" || lettera == "I" || lettera == "O" || lettera == "U"){
		return "+";
	}
	else{
		return "_";
	}
}

function isKeyVowel(lettera){
	if(lettera == "A" || lettera == "E" || lettera == "I" || lettera == "O" || lettera == "U"){
		return true;
	}
	else{
		return false;
	}
}

function setKeyboard(){
	$("#keyboard_wrapper").empty();
	for(i=0;i<alfabeto.length;i++){
		$("#keyboard_wrapper").append("<div class='tasto' id='"+alfabeto[i]+"' tasto='"+alfabeto[i]+"'>"+alfabeto[i]+"</div>");
		if(isKeyVowel(alfabeto[i])){
			$("#"+alfabeto[i]).css("background-color","orange");
		}
	}
	$(".tasto").click(function(){
		if(!$(this).hasClass('giacliccato') && Single.game_state == 0){
			$(this).addClass('giacliccato');
			Single.game_state = 1;
			globalIndex = 0;
			
			letteraScelta = $(this).attr("tasto");
			found = 0;
			check();
		}
	});
}

function check(){

	scorre = setTimeout(function(){
	if(globalIndex <= Single.current_word.length){
	if(globalIndex > 0){
	$("#lettera_"+(globalIndex-1)).removeClass("controllo");
	$("#lettera_"+(globalIndex-1)).removeClass("trovato");
	}
	if(globalIndex < Single.current_word.length){
	$("#lettera_"+globalIndex).addClass("controllo");
	if(Single.current_word[globalIndex] == letteraScelta){
		$("#lettera_"+globalIndex).addClass("trovato");
	found+=1;
	Single.rimanenti -= 1;
	$("#lettera_"+globalIndex).text(letteraScelta);
	}
	globalIndex += 1;
	check();
	}
	else{
		if(found == 0){
		Single.current_lives -= 1;
		if(Single.current_lives > 0){
		Single.game_state = 0;
		updateLives();}
		else{
			$(".modalbutton").hide();
			$(".modal-title").text("OH NO!");
			$("#testo").text("Purtroppo hai finito le vite! La parola era:");
			$(".parolacorretta").text(Single.current_word);
			if(Single.current_turn<Settings.turni){
				$("#secondotesto").text("Ma non preoccuparti, puoi provare a indovinare la prossima!");
				$("#prossima").show();
			}
			else{
				$("#secondotesto").text("Vuoi giocare ancora?");
				$("#rigioca").show();
				$("#altrigiochi").show();
			}
			$("#responso").modal('show');
		}
		}
		else if(Single.rimanenti == 0){
			$(".modalbutton").hide();
			$(".modal-title").text("VITTORIA!");
			$("#testo").text("Esatto! La parola era proprio:");
			$(".parolacorretta").text(Single.current_word);
			if(Single.current_turn<Settings.turni){
				$("#secondotesto").text("Sei pronto per la prossima?");
				$("#prossima").show();
			}
			else{
				$("#secondotesto").text("Vuoi giocare ancora?");
				$("#rigioca").show();
				$("#altrigiochi").show();
			}
			$("#responso").modal('show');
		}
		else{
		Single.game_state = 0;}
	}
	}
	},300)
}

