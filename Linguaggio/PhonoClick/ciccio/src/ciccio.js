audio = ["bruciare","celeste","cerbiatto","cibi","Ciccio","Ciro","cucina","pasticcini"];

audiostoria = "ciccioStoria";

acapo = [4,19]; 

parole = [["Ciccio",false,2,6.04,false],
["è",false,1,7.09,false],
["un",false,1,7.47,false],
["cerbiatto",true,3,7.67,false],
["pasticcione.",false,4,8.85,false],
["Ogni",false,2,10.48,false],
["giorno",false,2,10.91,false],
["cucina",false,3,11.7,false],
["cento",false,2,12.77,false],
["pasticcini",true,4,13.5,false],
["nella",false,2,14.87,false],
["sua",false,1,15.24,false],
["cucina",true,3,15.96,false],
["tutta",false,2,16.94,false],
["celeste",true,3,17.57,false],
["e",false,1,18.63,false],
["li",false,1,18.75,false],
["fa",false,1,18.94,false],
["bruciare",true,3,19.55,false],
["!",false,1,19.55,true],
["Il",false,1,21.37,false],
["suo",false,1,21.56,false],
["amico",false,3,22.16,false],
["Ciro",true,2,22.87,false],
["cerca",false,2,23.88,false],
["di",false,1,24.69,false],
["aiutarlo:",false,4,25.00,false],
["Ciccio",true,2,26.76,false],
["e",false,1,27.62,false],
["Ciro",true,2,27.83,false],
["preparano",false,4,28.84,false],
["tanti",false,2,29.62,false],
["cibi",true,2,30.22,false],
["per",false,1,31.33,false],
["tutti",false,2,31.63,false],
["gli",false,1,32.24,false],
["animali",false,4,32.46,false],
["del",false,1,33.27,false],
["vicinato",false,4,33.50,false],
];

$(document).ready(function(){

bombo = new Storia("Ciccio il cerbiatto pasticcione", audiostoria, audio, parole,acapo);
bombo.load();
});