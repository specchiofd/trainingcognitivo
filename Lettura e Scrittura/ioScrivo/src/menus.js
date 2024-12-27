current_item = 0;
current_game = 0;
aiuto = true;
simili = false;
var me;
level = 1;
points = 0;
MAX = 10;
SOGLIA = 700;
SECONDASOGLIA = 1400;
firstPoints = 0;


function reset(){
	level = 1;
	current_item = 0;
	points = 0;
	$(".game_kind").hide();
}


function avvio(){
		$("#game_screen").hide();
		$("#menu").fadeOut(500, function(){
			if(ifrand){
				current_game = getRandomInt(0,game_array.length-1);
			}else{
				
			current_game = parseInt(me.attr("gameid"));}
			console.log(game_array[current_game].regola);
			if(game_array[current_game].regola.length <1){
		$("#btn_regola").hide();
		$("#in_btn_regola").hide();
	}
	else{
		$("#btn_regola").show();
		$("#in_btn_regola").show();
	}
		showInstruction(); });
}

$(document).ready(function(){
	$("#instructions").hide();
	$("#menu").show();
	$("#game_screen").hide();
	$(".menu_item").click(function(){
		ifrand = false;
		me = $(this);
		avvio();



	});
	$("#random").click(function(){
		ifrand = true;
		avvio();
	});
	$("#avanza").click(function(){
		nextItem();
	});
	$("#avvia").click(function(){
				startGame();
	});
	$("#back").click(function(){
				$("#instructions").fadeOut(500, function(){$("#menu").fadeIn(500); });
				
	});
	$("#realquit").click(function(){
				$("#quit").modal('hide');
				$("#game_screen").fadeOut(500,function(){
					reset();
					$("#menu").fadeIn(500);
				});
	});
	$("#btn_uno").click(function(){
	check($(this).attr("val"));
	});
	$("#btn_due").click(function(){
	check($(this).attr("val"));	
	});	
	$("#next_lvl").click(function(){
	level = 2;
	setScore();
	current_item = 0;
	m_showItem();
	});
		$("#c_next_lvl").click(function(){
	level = 2;
	setScore();
	current_item = 0;
	c_showItem();
	});
	$("#simili_toggle").click(function(){
		aiuto = !aiuto;
		if(aiuto){
			$("#simili_uno").show();
			$("#simili_due").show();
		}
		else{
			$("#simili_uno").hide();
			$("#simili_due").hide();			
		}
	});
	$("#riprova").click(function(){
	if(level == 1){
	reset();
			updatePoints();}
	else{
		points = firstPoints;
		updatePoints();
		current_item = 0;
	}
	setScore();
	current_item = 0;
	m_showItem();		
	});
		$("#c_riprova").click(function(){
	if(level == 1){
	reset();
			updatePoints();}
	else{
		points = firstPoints;
		updatePoints();
		current_item = 0;
	}
	setScore();
	current_item = 0;
	c_showItem();
	$("#componi").show();	
	});
	$("#back_winner").click(function(){
		reset();
		$("#game_screen").fadeOut(500,function(){
					reset();
					$("#menu").fadeIn(500);
				});
	});
		$("#c_back_winner").click(function(){
		reset();
		$("#game_screen").fadeOut(500,function(){
					reset();
					$("#menu").fadeIn(500);
				});
	});
	$(".lettera").click(function(){
		if($(this).attr("active") == "true"){
			$(this).fadeTo(500,0.2);
			$(this).attr("active","false");
			$(this).addClass("inactivelet");
			componi_evaluate($(this).text());
		}
	});
	$("#c_avanza").click(function(){
		c_nextItem();
	});
});

function startGame(){
	reset();
	$("#instructions").fadeOut(500,function(){
	
	switch(game_array[current_game].tipo)
	{
		case "multipla":
		case "simili":
		avviaMultipla();
		break;
		case "componi":
		avviaComponi();
		break;
	}	
	$("#game_screen").fadeIn(500);
	});
}

function showInstruction(){
		$("#instructions_title").text(game_array[current_game].titolo);
		$("#instructions_txt").text(game_array[current_game].introduzione);
		$("#regola_txt").empty();
		for(i=3;i<game_array[current_game].regola.length;i++){
		$("#regola_txt").append("<h5>"+game_array[current_game].regola[i]+"</h5>");}
	$("#instructions").fadeIn(500);
}