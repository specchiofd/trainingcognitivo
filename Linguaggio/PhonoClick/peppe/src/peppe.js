audio = ["pappagallo","Peppe","padrona","passeggiare","parco","pericolo","punto","ape"];

audiostoria = "peppestoria";

acapo = [10,22,32,45]; 

parole = [
["Peppe",true,2,4.32,false],
["era",false,2,5.11,false],
["stanco",false,2,5.31,false],
["della",false,2,5.71,false],
["sua",false,1,5.89,false],
["padrona",true,3,6.10,false],
[",",false,2,6.10,true],
["allora",false,3,7.25,false],
["un",false,1,7.94,false],
["giorno",false,2,8.11,false],
["pensò:",false,2,8.50,false],
["'Perché",false,2,9.81,false],
["non",false,1,10.07,false],
["posso",false,2,10.25,false],
["passeggiare",true,4,10.55,false],
["per",false,1,11.25,false],
["il",false,1,11.35,false],
["parco",true,2,11.53,false],
["proprio",false,2,12.38,false],
["come",false,2,12.67,false],
["un",false,1,12.83,false],
["pappagallo",true,4,12.91,false],
["libero?'.",false,3,13.45,false],
["Probabilmente",false,5,15.20,false],
["aveva",false,3,15.83,false],
["ragione,",false,3,16.08,false],
["ma",false,1,17.20,false],
["c'erano",false,3,17.31,false],
["molti",false,2,17.60,false],
["pericoli",true,3,17.96,false],
["nel",false,1,18.35,false],
["parco",true,2,18.55,false],
[".",false,1,18.55,true],
["Decise",false,3,20.00,false],
["di",false,1,20.32,false],
["provare,",false,3,20.42,false],
["andò",false,2,21.50,false],
["al",false,1,21.67,false],
["parco",true,2,21.84,false],
["e",false,1,22.59,false],
["fu",false,1,22.71,false],
["punto",true,2,22.84,false],
["da",false,1,23.14,false],
["un'",false,1,23.25,false],
["ape",true,2,23.37,false],
["!",false,1,23.37,true],
["'Ahia",false,1,24.29,false],
["che",false,1,24.58,false],
["male!'",false,2,24.73,false],
["pensò",false,2,25.45,false],
["Peppe",true,2,25.82,false],
["che",false,1,26.91,false],
["ancora",false,3,27.13,false],
["piò",false,1,27.45,false],
["pauroso",false,3,27.61,false],
["tornò",false,2,28.27,false],
["dalla",false,2,28.53,false],
["sua",false,1,28.66,false],
["padrona",true,3,28.85,false],
[".",false,2,28.85,false]];

$(document).ready(function(){

bombo = new Storia("Peppe il pappagallo pauroso", audiostoria, audio, parole,acapo);
bombo.load();
});