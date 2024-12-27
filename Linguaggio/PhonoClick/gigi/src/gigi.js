audio = ["girare","Gigi","giorno","giostre","gira","Gira"];

audiostoria = "gigistoria";

acapo = [13,27,48]; 

parole = [
["Come",false,2,3.30,false],
["fa",false,1,3.51,false],
["a",false,1,3.97,false],
["girare",true,3,4.16,false],
["così",false,2,4.82,false],
["veloce",false,3,5.32,false],
["con",false,1,6.30,false],
["il",false,1,6.46,false],
["suo",false,1,6.76,false],
["piedone",false,3,7.14,false],
["Gigi",true,2,8.27,false],
["il",false,1,8.83,false],
["gigante",false,3,9.12,false],
["?",false,1,9.12,true],
["Gira",true,2,10.94,false],
["di",false,1,11.45,false],
["qua",false,1,11.58,false],
[",",false,1,11.58,true],
["gira",true,2,12.95,false],
["di",false,1,12.99,false],
["là",false,1,13.04,false],
["e",false,1,13.76,false],
["un",false,1,13.87,false],
["bel",false,1,14.11,false],
["giorno",true,2,14.32,false],
["Gigi",false,2,15.20,false],
["cadrà",false,2,15.62,false],
["!",false,1,15.62,false],
["'Forse",false,2,17.15,false],
["è",false,1,17.66,false],
["meglio",false,2,17.76,false],
["andare",false,3,18.10,false],
["su",false,1,18.42,false],
["una",false,2,18.56,false],
["giostra",true,2,18.88,false],
["!' ",false,1,18.88,true],
["dice",false,2,20.00,false],
["Gigi",false,2,20.53,false],
[" '",false,1,20.53,true],
["ma",false,1,22.10,false],
["dove",false,2,22.32,false],
["la",false,1,22.57,false],
["trovo",false,2,22.80,false],
["una",false,2,23.66,false],
["giostra",true,2,24.06,false],
["gigante",false,3,25.00,false],
["come",false,2,25.78,false],
["me",false,1,26.10,false],
["?' ",false,1,26.10,true],
["Gigi",true,2,27.66,false],
["decide",false,3,28.55,false],
["di",false,1,29.25,false],
["andare",false,3,29.30,false],
["nel",false,1,30.10,false],
["paese",false,2,30.40,false],
["dei",false,1,30.87,false],
["giostrai",false,2,31.10,false],
["giganti",false,3,31.70,false],
["e",false,1,33.10,false],
["girare",true,3,33.30,false],
["sulle",false,2,34.05,false],
["loro",false,2,34.50,false],
["giostre",true,2,34.77,false],
["!",false,1,34.77,true]

];

$(document).ready(function(){
bombo = new Storia("Gigi il gigante", audiostoria, audio, parole,acapo);
bombo.load();
});