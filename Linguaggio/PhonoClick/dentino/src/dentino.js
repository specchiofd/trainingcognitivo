audio = ["Daniele","fatina dentina","soldini"];

audiostoria = "dentinoStoria";

acapo = [9,24]; 

parole = [["Daniele",true,3,4.54,false],
["ha",false,1,5.6,false],
["un",false,1,5.8,false],
["dentino",true,3,6.09,false],
["molto",false,2,7.00,false],
["dispettoso:",false,4,7.71,false],
["proprio",false,2,9.4,false],
["non",false,1,10.2,false],
["vuole",false,2,10.49,false],
["cadere!",false,3,11.00,false],
["- Forza",false,2,12.56,false],
["dentino",true,3,13.35,false],
["perché",false,2,14.40,false],
["non",false,1,14.89,false],
["cadi?",false,2,15.05,false],
["Deve",false,2,16.6,false],
["arrivare",false,4,16.87,false],
["la",false,1,17.46,false],
["fatina",false,3,17.67,false],
["dei",false,1,18.11,false],
["denti",false,2,18.27,false],
["a",false,1,19.14,false],
["darmi",false,2,19.30,false],
["i",false,1,19.63,false],
["soldini",true,3,19.7,false],
[" -",false,1,19.7,true],
["Daria",false,2,21.7,false],
["la",false,1,23.15,false],
["fatina dentina",true,6,23.40,false],
["con",false,1,25.65,false],
["la",false,1,25.89,false],
["sua",false,1,26.050,false],
["bacchetta",false,3,26.40,false],
["magica",false,3,27.20,false],
["fa",false,1,28.28,false],
["cadere",false,3,28.53,false],
["il",false,1,29.00,false],
["dentino",true,3,29.12,false],
["dispettoso",false,4,29.80,false],
["di",false,1,30.73,false],
["Daniele",true,3,30.87,false],
["in",false,1,31.80,false],
["un",false,1,31.91,false],
["solo",false,2,32.11,false],
["colpo!",false,2,32.48,false]

];

$(document).ready(function(){
bombo = new Storia("Il dentino dispettoso", audiostoria, audio, parole,acapo);
bombo.load();
});