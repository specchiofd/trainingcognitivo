﻿audio = ["mosca","montagna","monopattino","mangio","merenda","mento","Molly","molesta","mano"];

audiostoria = "mollystoria";

acapo = [15,28,42,60,67]; 

parole = [
["Mentre",false,2,4.04,false],
["sono",false,2,4.60,false],
["su",false,1,5.20,false],
["in",false,1,5.35,false],
["montagna",true,3,5.57,false],
[",",false,1,5.57,true],
["sul",false,1,6.84,false],
["mio",false,1,7.12,false],
["bel",false,1,7.31,false],
["monopattino",true,5,7.60,false],
["a",false,1,8.55,false],
["giocare,",false,3,6.63,false],
["sento",false,2,9.84,false],
["all'improvviso",false,5,10.31,false],
["qualcuno",false,3,11.52,false],
["ronzare.",false,3,12.15,false],
["Entro",false,2,13.90,false],
["in",false,1,14.33,false],
["casa",false,2,14.58,false],
["e",false,1,15.16,false],
["lei",false,1,15.30,false],
["mi",false,1,15.60,false],
["segue,",false,2,15.76,false],
["mentre",false,2,16.83,false],
["mangio",true,2,17.32,false],
["la",false,1,17.80,false],
["mia",false,1,18.00,false],
["merenda",true,3,18.40,false],
[".",false,1,18.40,true],
["Ronza",false,2,20.34,false],
["ronza",false,2,29.94,false],
["vicino",false,3,21.51,false],
["al",false,1,22.04,false],
["mio",false,1,22.31,false],
["mento",true,2,22.43,false],
[",",false,1,22.43,true],
["poi",false,1,23.48,false],
["sale",false,2,23.70,false],
["su",false,1,24.02,false],
["verso",false,2,24.67,false],
["l'orecchio:",false,3,25.12,false],
["chi",false,1,26.36,false],
["è?",false,1,26.62,false],
["È",false,1,27.89,false],
["Molly",true,2,28.03,false],
["la",false,1,28.43,false],
["mosca!",false,2,28.60,false],
["Vola",false,2,30.00,false],
["veloce",false,3,30.48,false],
["di",false,1,31.20,false],
["qua",false,1,31.48,false],
["e",false,1,31.62,false],
["di",false,1,31.73,false],
["à",false,1,31.88,false],
["e",false,1,,false],
["molto",false,2,32.64,false],
["in",false,1,32.73,false],
["alto",false,2,33.14,false],
["spesso",false,2,33.89,false],
["lei",false,1,34.51,false],
["va.",false,1,34.77,false],
["Mi",false,1,36.00,false],
["gira",false,2,36.23,false],
["intorno",false,3,36.73,false],
["e",false,1,37.32,false],
["mi",false,1,37.50,false],
["molesta",true,3,37.71,false],
["!",false,1,37.71,false],
["Vai",false,1,39.20,false],
["via",false,1,39.51,false],
["mosca",true,2,39.94,false],
["Molly",false,2,40.46,false],
["Non",false,1,42.05,false],
["mi",false,1,42.31,false],
["manca",false,2,42.44,false],
["il",false,1,42.96,false],
["coraggio",false,3,43.05,false],
["di",false,1,43.54,false],
["prenderti",false,3,43.73,false],
["con",false,1,44.49,false],
["la",false,1,44.65,false],
["mia",false,1,44.92,false],
["mano",true,2,45.06,false],
["e",false,1,45.82,false],
["spingerti",false,3,46.03,false],
["molto",false,2,46.80,false],
["lontano!",false,3,47.33,false],
];

$(document).ready(function(){

bombo = new Storia("Molly la mosca", audiostoria, audio, parole,acapo);
bombo.load();
});