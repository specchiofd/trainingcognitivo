function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

//Ce-che
var parole=[
[
["chiesa","ciesa","cesa"],
["cena","ciena","chena"],
["oche","oce","ocie"],
["cento","chento","ciento"],
["cestino","chestino","ciestino"],
["piacere","piachere","piaciere"],
["maniche","manice","manicie"],
["licenza","lichenza","licienza"],
["neanche","neance","neancie"],
["voce","vocie","voche"],
["uccello","ucchiello","ucciello"],
["concerto","concherto","concierto"],
["mucche","muccie","mucce"]
],
[
["gelato","gielato","ghelato"],
["gesto","ghesto","giesto"],
["spaghetti","spagietti","spagetti"],
["rughe","ruge","rugie"],
["magenta","maghenta","magienta"],
["argento","arghento","argiento"],
["esagerato","esagherato","esagierato"],
["oggetto","ogghetto","oggietto"],
["righello","rigello","rigiello"],
["fingere","fingiere","finghere"],
["ungere","unghere","ungiere"],
["seghetto","segetto","segietto"],
["gentile","ghentile","gientile"]
],
[
["cigno","cinnio","cignio"],
["bisogno","bisognio","bisonio"],
["maglione","maglone","mallione"],
["ognuno","onniuno","ogniuno"],
["disegno","disennio","disegnio"],
["bagnino","bannino","baglino"],
["biglia","billia","bignia"],
["famiglia","famillia","famigna"],
["sveglia","svegla","svellia"],
["imbroglio","imbrognio","imbrolio"],
["paglia","pallia","pagnia"],
["magnifico","manifico","mannifico"],
["voglia","vognia","vollia"]
],
[
["discesa","dischesa","diesciesa"],
["ascella","aschella","asciella"],
["maschera","mascera","masciera"],
["ascia","asca","aschia"],
["moscerino","moscherino","moscierino"],
["fresche","frescie","fresce"],
["schiavo","sciavo","siavo"],
["dischetto","discietto","discetto"],
["tasche","tascie","tasce"],
["nascere","nasciere","naschere"],
["uscita","uschita","ussita"],
["rischio","riscio","rissio"],
["buche","bucie","buce"]
],
[
["attesa","atesa","atessa"],
["aspetto","aspeto","asspetto"],
["ottenere","otenere","otennere"],
["attivo","ativo","ativvo"],
["cassetta","casseta","caseta"],
["settembre","setembre","settenbre"],
["provetta","provveta","proveta"],
["occasione","ocasione","ocassione"],
["diritto","dirrito","dirritto"],
["dubito","dubitto","dubbito"],
["sabato","sabbato","sabatto"],
["veleno","velleno","velenno"],
["affitto","affito","afitto"],
["usato","usatto","ussato"],
["cattivo","cativo","cativvo"]
]
]