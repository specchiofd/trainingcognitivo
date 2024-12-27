$(document).ready(function(){
	if(location.search.substring(1) == ""){
initialS();
	setOptButtons();}
});



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

$("#incremento").change(function(){
if($(this).is(':checked')){
$("#quantoincrementowrapper").show();
}else{
$("#quantoincrementowrapper").hide();
}
T.incremento = $(this).is(':checked');
});

$("#sillabapersillaba").change(function(){
T.sillabapersillaba = $(this).is(':checked');
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
$("#wordpreview").css("background-color",$(this).val());
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

$("#inizia").click(function(){

$("#tachistoscopio").show();
$("#actionbar").show();
$("#content").hide();
$("#top").hide();
T.avvia();
});

$("#bottomavvia").click(function(){
$("#tachistoscopio").show();
$("#actionbar").show();
$("#content").hide();
$("#top").hide();
T.avvia();
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
$("#wordpreview").css("background-color",$("#coloresfondo").val());
if($("#maiuscole").is(':checked')){
$("#wordpreview").css("text-transform","uppercase");
}else{
$("#wordpreview").css("text-transform","none");
}
$("#wordpreview").css("font-size",$("#dimensioni").val()+"em");
}