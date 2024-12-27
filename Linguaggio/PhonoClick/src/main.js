var storie = [["B","Bombo il bisonte","bombo.png","bombo"],
["C","Chicco e Carlo","chicco.png","chicco"],
["Ci","Ciccio il cerbiatto","ciccio.png","chicco"],
["D","Il dentino dispettoso","dentino.png","dentino"],
["F","Fanny la farfalla","fanny.png","fanny"],
["G","Gaia la gallina","gaia.png","gaia"],
["Gi","Gigi il gigante","gigi.png","gigi"],
["L","Lillo il leone","lillo.png","lillo"],
["M","Molly la mosca","molly.png","molly"],
["N","Nino il nibbio","nino.png","nino"],
["P","Peppe il pappagallo","peppe.png","peppe"],
["R","Riccardo il ramarro","riccardo.png","riccardo"],
["S","Simone il serpente","simone.png","simone"],
["T","Totò il topo","toto.png","toto"],
["V","Viki la vespa","viki.png","viki"],
["Z","Zorba la zanzara","zorba.png","zorba"]];

mainindex = 0;

$(document).ready(function(){
	$('.storia').click(function(){
	window.open($(this).attr('id')+"/index.html",'_self');
	});
	/*
	mywidth = $("#disegno").width();
    $('#mainwrapper').css('top', $('#action').outerHeight());
	$('#bigmainwrapper').css('top', $('#action').outerHeight());
	$("#disegno").height(mywidth);
	$(".sidecol").height($(".sidecol").width()*2);
	$("#firstcredits").css("margin-top",($("#firstcredits").height()/2)*-1);
	$("#firstcredits").css("margin-left",($("#firstcredits").width()/2)*-1);
	*/
	setStory();
	$("#firstcredits").hide();
	$("#firstcreditsbg").hide();
	$("#help").click(function(){
	$("#firstcredits").show();
	$("#firstcreditsbg").show();
	});

	$("#firstcreditsbg").click(function(){
	$("#firstcredits").hide();
	$("#firstcreditsbg").hide();
	});
	$("#mainleft").click(function(){
	
	mainindex -= 1;
	if(mainindex == -1){
	mainindex = storie.length-1;
	}
	setStory();
	});
	$("#mainright").click(function(){
	mainindex += 1;
	if(mainindex == storie.length){
	mainindex = 0;
	}
	setStory();
	});
	
	$("#disegno").click(function(){
	window.open('./'+storie[mainindex][3]+'/index.html','_self',false);
	});
	
});

function setStory(){
$("#fonema").text(storie[mainindex][0]);
$("#disegno").css("background-image","url('src/heads/"+storie[mainindex][2]+"')");
$("#titolo").text(storie[mainindex][1]);
}