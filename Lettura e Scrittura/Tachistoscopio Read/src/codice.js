$(document).ready(function(){
$("#carica").click(function(){
if(false == true){

}
else{

if($("#codice").val() == ""){

$('#mayerror').fadeIn(400).delay(2000).fadeOut(400); //fade out after 3 seconds
}
else{

}
}
});


$("#copy").click(function(){
if($("#codeToSave").text() != ""){
$("#tmp").val($("#codeToSave").text());
$("#tmp").focus();
$("#tmp").select();
document.execCommand("copy");
$('#copied').fadeIn(400).delay(2000).fadeOut(400); //fade out after 3 seconds
}
});
});