﻿audio = ["ascolta","naso","sali","salire","salutarlo","sasso","serpente","sibila","Sissi","Simone","strisciando","su","supereroe"];

audiostoria = "storia";

acapo = [10,26,39,55,72,83]; 

parole = [
["Chi", false, 1,4.1,false],
["c'è", false, 1, 4.2,false],
["dietro", false, 2, 4.5,false],
["quel", false, 1, 4.8,false],
["sasso", true, 2, 5,false],
["?", false, 2, 5,true],
["È", false, 1, 6.2,false],
["Simone", false, 3, 6.45,false],
["il", false, 3, 6.8,false],
["serpente", true, 3, 6.9,false],
["!", false, 3, 6.9,true],
["sibila", true, 3, 8.4,false],
["qua", false, 1, 9.25,false],
["e", false, 1, 9.4,false],
["là,", false, 1, 9.53,false],
["su", true, 0, 10.85,false],
["e", false, 1, 10.5,false],
["giù", false, 1, 10.6,false],
["e", false, 1, 11.3,false],
["vuole", false, 2, 11.4,false],
["salire", true, 3, 11.7,false],
["per", false, 1, 12.2,false],
["scherzo", false, 2, 12.3,false],
["su", false, 1, 13,false],
["quel", false, 1, 13.2,false],
["sasso", true, 2, 13.5,false],
["!", false, 2, 13.5,true],
["Ma", false, 1, 15.1,false],
["il", false, 1, 15.3,false],
["sasso", true, 2, 15.35,false],
["è", false, 1, 15.7,false],
["troppo", false, 2, 15.8,false],
["alto", false, 2, 16.4,false],
["e", false, 1, 16.9,false],
["la", false, 1, 17,false],
["mamma", false, 2, 17.1,false],
["Sissi", true, 2, 17.4,false],
["gli", false, 1, 18.3,false],
["sussurra", false, 3, 18.5,false],
["lentamente:", false, 4, 19.2,false],
["'Sssssssss...", false, 1, 21.5,false],
["attento! ", false, 3, 23.8,false],
["Simone", true, 4, 24.9,false],
[",", false, 3, 24.9,true],
["se", false, 1, 26.58,false],
["sali", true, 2, 26.92,false],
["su", false, 1, 27.5,false],
["quel", false, 1, 27.7,false],
["sasso", true, 2, 28,false],
["puoi", false, 1, 29.2,false],
["cadere", false, 3, 29.5,false],
["e", false, 1, 30.3,false],
["romperti", false, 3, 30.47,false],
["il", false, 1, 31.42,false],
["naso", true, 2, 31.58,false],
["'.", false, 2, 31.58,true],
["Ma", false, 1, 34.5,false],
["Simone", true, 4, 34.7,false],
["non", false, 1, 35.5,false],
["ascolta", true, 2, 35.87,false],
["la", false, 3, 36.47,false],
["mamma", false, 3, 36.57,false],
["Sissi", true, 2, 36.87,false],
["e", false, 1, 37.82,false],
["strisciando", true, 3, 37.91,false],
["strisciando", true, 3, 38.8,false],
["arriva", false, 3, 39.98,false],
["sano", false, 2, 40.5,false],
["e", false, 1, 40.84,false],
["salvo", false, 2, 40.9,false],
["sul", false, 1, 41.38,false],
["sasso", true, 2, 41.76,false],
[".", false, 2, 41.76,true],
["'Guarda", false, 2, 43.8,false],
["mamma!", false, 2, 44.2,false],
["Sembro", false, 2, 45.34,false],
["un", false, 1, 46.1,false],
["supereroe", true, 5, 46.76,false],
["qui", false, 1, 47.8,false],
["tutto", false, 2, 48,false],
["solo", false, 2, 48.46,false],
["sul", false, 2, 48.9,false],
["sasso", true, 2, 49.15,false],
["!'", false, 2, 49.15,true],
["Tutti", false, 2, 51.8,false],
["i", false, 1, 52.1,false],
["suoi", false, 1, 52.17,false],
["amici", false, 3, 52.4,false],
["si", false, 1, 52.8,false],
["girano", false, 3, 53.1,false],
["a", false, 1, 53.6,false],
["salutarlo", true, 4, 53.7,false],
["e", false, 1, 54.89,false],
["Simone", true, 4, 55,false],
["è", false, 1, 55.7,false],
["molto", false, 2, 56.1,false],
["soddisfatto!!!", false, 2, 56.2,false]
];

$(document).ready(function(){
bombo = new Storia("Simone il serpente", audiostoria, audio, parole,acapo);
bombo.load();
});