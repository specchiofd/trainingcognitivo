var fonema = 22;
var maiuscolo = 0;
var modalita = 0;
var difficolta = 0;
var classe = 3;
var maiuscolo_array = ["No","Sì"];
var modalita_array = ["A tempo","No tempo"];
var difficolta_array = ["Facile","Medio","Difficile"];
var classe_array = ["Sostantivi","Verbi","Aggettivi","Tutte"];
var achievment_facile = [3,6,10];
var achievment_medio = [5,10,15];
var achievment_difficile = [7,14,21];

$(document).ready(function(){
    setScreen("settings");
    $('[data-toggle="tooltip"]').tooltip();
    setButtons();
    updateSettings();
});

function setScreen(schermo){
    $(".screen").hide();
    $("#"+schermo).fadeIn(500);
}

function updateSettings(){
    update(fonema,alfabeto,$("#fonema"));
    update(maiuscolo,maiuscolo_array,$("#maiuscolo"));
    update(modalita,modalita_array,$("#modalita"));
    update(difficolta,difficolta_array,$("#difficolta"));
    update(classe,classe_array,$("#classe"));
    if(modalita == 1){
        $("#difficoltawrapper").hide();
    }else{
        $("#difficoltawrapper").show();
    }
}

function update(myvar,myarr,div){
    div.text(myarr[myvar]);
}

function setButtons(){
    $("#esci").click(function(){
        in_game = false;
        setScreen("settings");
    });
    $("#riavvia").click(function(){
        in_game = false;
        setScreen("settings");
    });
    $("#gamecenter").click(function(){
        window.open("http://www.trainingcognitivo.it/gamecenter");
    });
    $("#istruzioni").click(function(){
        setScreen("infos");
        creaIstruzioni();
    });
    $(".more").click(function(){
        window[$(this).attr("target")] = add(window[$(this).attr("target")],rel_array(window[$(this).attr("target")]));
        updateSettings();
    });
    $(".less").click(function(){
        window[$(this).attr("target")] = subtract(window[$(this).attr("target")],rel_array($(this).attr("target")));
        updateSettings();
    });
    $("#avvia").click(function(){
        avviaGioco();
    })
}

function rel_array(variabile){

    switch(variabile){
        case 'fonema':
        return alfabeto;
        case 'maiuscolo':
        return maiuscolo_array;
        case 'modalita':
        return modalita_array;
        case 'difficolta':
        return difficolta_array;
        case 'classe':
        return classe_array;
    }
}
function add(variabile,thearray){

    variabile += 1;
    if(variabile == thearray.length){
        variabile = 0;
    }
    return variabile;
}

function subtract(variabile,thearray){

    variabile -= 1;
    if(variabile == -1){
        variabile = thearray.length-1;
    }
    return variabile;
}
