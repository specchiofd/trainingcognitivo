removeId = 0;

function activaTab(tab){
    $('.nav-tabs div[href="#' + tab + '"]').tab('show');
};

function myParse(ms){
	console.log(ms);
		$("#autooptions").hide();
		$("#customoptions").show();
		$("#customauto").val('custom');
		T.custom = true;
		ms.lista = unescape(ms.lista);
		T.lista = ms.lista.split(',');
		
		$("#listapersonalizzata").text(ms.lista);
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
setOptButtons();
}
$(document).ready(function(){
	var search = location.search.substring(1);
	if(search != ""){
	myson = search?JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}',
	function(key, value) { return key===""?value:decodeURIComponent(value) }):{};
	myParse(myson);
	}
	else{
		T.normal();
	}
	
	

$("#second").click(function(){
recap();
$("#atablista").removeClass("noborder");
$("#atabopzioni").addClass("noborder");
$("#atabinizia").removeClass("noborder");
    activaTab('tabopzioni');
});

$("#third").click(function(){
recap();
$("#atablista").removeClass("noborder");
$("#atabopzioni").removeClass("noborder");
$("#atabinizia").addClass("noborder");
    activaTab('tabinizia');
});



$("#atablista").click(function(){
$("#atablista").addClass("noborder");
$("#atabopzioni").removeClass("noborder");
$("#atabinizia").removeClass("noborder");
});
$("#atabopzioni").click(function(){
$("#atablista").removeClass("noborder");
$("#atabopzioni").addClass("noborder");
$("#atabinizia").removeClass("noborder");
});
$("#atabinizia").click(function(){
recap();
$("#atablista").removeClass("noborder");
$("#atabopzioni").removeClass("noborder");
$("#atabinizia").addClass("noborder");
});
$("#content").css("padding-top",$("#alto").height()+10+"px");
setSettingButton();
setStartSettings();


});

function setSettingScreen(screen){
$("#tachistoscopio").hide();
$("#report").hide();
switch(screen){
case 0:
//lista
$("#info").text("Scegli o crea la lista, poi clicca su Opzioni");
break;
case 1:
//opzioni
$("#info").text("Imposta le opzioni, poi clicca su Inizia");
break;
case 2:
//inizia
recap();
$("#info").text("Controlla che sia tutto ok e premi Avvia");
$("#recap").show();

break;
}
}

function setSettingButton(){
//Progress

$("#settablista").click(function(){
setSettingScreen(0);
});
$("#settabopzioni").click(function(){
setSettingScreen(1);
});
$("#settabinizia").click(function(){
setSettingScreen(2);
});

$("#avantiuno").click(function(){
window.scrollTo(0,0);
setSettingScreen(1);
});
$("#avantidue").click(function(){
window.scrollTo(0,0);
setSettingScreen(2);
});
$("#indietrodue").click(function(){
window.scrollTo(0,0);
setSettingScreen(0);
});
$("#indietrotre").click(function(){
window.scrollTo(0,0);
setSettingScreen(1);
});
//List Creation
$("#customauto").change(function(){
if($(this).val() == 'custom'){
$("#autooptions").hide();
$("#customoptions").show();
T.custom = true;
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
showpreview(T.lista);
});
}

function setStartSettings(){
setSettingScreen(0);
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
	console.log(sillabe);
	console.log(gruppo);
T.lista = [];
available = [];
for(i=0;i<L[sillabe-1].length;i++){
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
showpreview(T.lista);
}

function showpreview(lista){
$("#previewcontainer").empty();
$("#elementi").text("La lista contiene " + T.lista.length + " elementi");
var option = '';
for (var i=0;i<lista.length;i++){
   option += '<div class="row previewrow" id="previewrow_'+ i +'"><div class="col-xs-2"></div><div class="col-xs-8"><h4 class="previewelement" id="lista_'+ i + '">' + lista[i] + '</h4></div><div class="col-xs-2"><img src="src/deleteicon.jpg" class="removeelement" whichelement='+i+'></div></div></div>';
}
$('#previewcontainer').append(option);
$('.removeelement').click(function(){
removeId = $(this).attr("whichelement");
$("#previewrow_"+removeId).fadeOut(500,function(){
T.lista.splice(removeId, 1);
showpreview(T.lista);
});

});
}