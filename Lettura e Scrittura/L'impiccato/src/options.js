var Settings = {
	players:1,
	categorie:0,
	categorieArray:["Tutte","Animali","Mestieri","Cibi","Vestiti"],
	turni:3,
	tentativi:5

}

var player_one = {
	name:"",
	avatar:0,
	points:0,
	lives:5
}

var player_two = {
	name:"",
	avatar:0,
	points:0,
	lives:5
}
var player_three = {
	name:"",
	avatar:0,
	points:0,
	lives:5
}

var player_four = {
	name:"",
	avatar:0,
	points:0,
	lives:5
}


$(document).ready(function(){
	$('.carousel').carousel({
    interval: false
});


	initialSettings();
	setButtons();
});



function initialSettings(){
	$("#categorie").val(Settings.categorieArray[Settings.categorie]);
	$("#turni").val(Settings.turni);
	$("#tentativi").val("Medio (5)");
	$("#avatar_1").css("background","url('img/"+player_one.avatar+".png')");
	$("#avatar_2").css("background","url('img/"+player_two.avatar+".png')");
	$("#avatar_3").css("background","url('img/"+player_three.avatar+".png')");
	$("#avatar_4").css("background","url('img/"+player_four.avatar+".png')");
}

function setButtons(){
	$(".player").click(function(){
		Settings.players = $(this).attr("players");
		$("#myCarousel").carousel("next");
		switch($(this).attr("players")){
			case "1":
			$("#player_two_wrapper").hide();
			$("#player_three_wrapper").hide();
			$("#player_four_wrapper").hide();
			$("#tentativi_wrapper").show();
			$("#gioca_single").show();
			$("#gioca_multi").hide();
			break;
			/*
			case "2":
			$("#player_two_wrapper").show();
			$("#player_three_wrapper").hide();
			$("#player_four_wrapper").hide();		
			$("#tentativi_wrapper").hide();		
			$("#gioca_single").hide();
			$("#gioca_multi").show();			
			break;
			case "3":
			$("#player_two_wrapper").show();
			$("#player_three_wrapper").show();
			$("#player_four_wrapper").hide();	
			$("#tentativi_wrapper").hide();		
			$("#gioca_single").hide();
			$("#gioca_multi").show();				
			break;
			case "4":
			$("#player_two_wrapper").show();
			$("#player_three_wrapper").show();
			$("#player_four_wrapper").show();	
			$("#tentativi_wrapper").hide();
			$("#gioca_single").hide();
			$("#gioca_multi").show();				
			break;			
			*/
		}

	});
	$(".arrow").click(function(){
	if($(this).attr("direction")=="left"){

		switch($(this).attr("player")){
			case "1":
			player_one.avatar -= 1;
			if(player_one.avatar == -1) {player_one.avatar = 11};
			$("#avatar_1").css("background","url('img/"+player_one.avatar+".png')");
			break;
			case "2":
			player_two.avatar -= 1;
			if(player_two.avatar == -1) {player_two.avatar = 11};
			$("#avatar_2").css("background","url('img/"+player_two.avatar+".png')");
			break;			
			break;
			case "3":
			player_three.avatar -= 1;
			if(player_three.avatar == -1) {player_three.avatar = 11};
			$("#avatar_3").css("background","url('img/"+player_three.avatar+".png')");
			break;			
			break;
			case "4":
			player_four.avatar -= 1;
			if(player_four.avatar == -1) {player_four.avatar = 11};
			$("#avatar_4").css("background","url('img/"+player_four.avatar+".png')");
			break;			
			break;
		}
	}	else {
					
			switch($(this).attr("player")){
			case "1":
			player_one.avatar += 1;
			if(player_one.avatar == 12) {player_one.avatar = 0};
			$("#avatar_1").css("background","url('img/"+player_one.avatar+".png')");
			break;
			case "2":
			player_two.avatar += 1;
			if(player_two.avatar == 12) {player_two.avatar = 0};
			$("#avatar_2").css("background","url('img/"+player_two.avatar+".png')");
			break;			
			break;
			case "3":
			player_three.avatar += 1;
			if(player_three.avatar == 12) {player_three.avatar = 0};
			$("#avatar_3").css("background","url('img/"+player_three.avatar+".png')");
			break;			
			break;
			case "4":
			player_four.avatar += 1;
			if(player_four.avatar == 12) {player_four.avatar = 0};
			$("#avatar_4").css("background","url('img/"+player_four.avatar+".png')");
			break;			
			break;
		}	
		
		
	}
	});
	
		$(".increment").click(function(){
		if($(this).attr("target") == "categorie"){
		  if($(this).attr("amount")<0){
			 Settings.categorie -= 1;
			 if(Settings.categorie == -1){
			 Settings.categorie = 4;}
		  }
		  else{
			Settings.categorie += 1;
			if(Settings.categorie == 5){
				Settings.categorie = 0;
			}
		  }
		$("#categorie").val(Settings.categorieArray[Settings.categorie]);
		}
		else if($(this).attr("target") == "turni"){
			if($(this).attr("amount") > 0){
				Settings.turni += 1;
			}
			else{
			if(Settings.turni>1){
				Settings.turni -= 1;
			}
			}
		$("#turni").val(Settings.turni);
		}
		else if($(this).attr("target") == "tentativi"){
			if($(this).attr("amount") > 0){
				switch(Settings.tentativi){
					case 10:
					Settings.tentativi = 5;
					$("#tentativi").val("Medio (5)");
					break;
					case 5:
					Settings.tentativi = 2;
					$("#tentativi").val("Difficile (2)");
					break;
					case 2:
					Settings.tentativi = 10;
					$("#tentativi").val("Facile (10)");
					break;
				}
			}
			else{
				switch(Settings.tentativi){
					case 10:
					Settings.tentativi = 2;
					$("#tentativi").val("Difficile (2)");
					break;
					case 5:
					Settings.tentativi = 10;
					$("#tentativi").val("Facile (10)");
					break;
					case 2:
					Settings.tentativi = 5;
					$("#tentativi").val("Medio (5)");
					break;
				}
			}
		$("#turni").val(Settings.turni);
		}
	});
	
	
	$("#prossima").click(function(){
		Single.current_turn += 1;
		startSingle();
	});
	
	$("#rigioca").click(function(){
			$("#single").hide();
			$("#myCarousel").show();			
	});
	


	
	
	$("#gioca_single").click(function(){
		$("#myCarousel").hide();
		if($("#player_one_name").val() != ""){
		player_one.name = $("#player_one_name").val();
		$("#single_nome").text(player_one.name);
	$("#single_nome").show();}
	else{
		$("#single_nome").hide();
	}
		startSingle();
	});
	
}



