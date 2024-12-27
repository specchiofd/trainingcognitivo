
function inizia_gioco(){
document.getElementById('container').style.display = 'none';
document.getElementById('canvas_container').style.display = 'block';
Tachistoscopio.init($("#area_esposizione").val(),$("#area_intertempo").val(),$("#area_font").val(),$("#area_stimoli").val());
}

function erase(){
$("#area_stimoli").val("");
}

function canvas_click_handler(in_game, ended){
if (!in_game && !ended){
Tachistoscopio.erase();
Tachistoscopio.start_loop();
}
else if (!in_game && ended){
ended = false;
document.getElementById('canvas_container').style.display = 'none';
document.getElementById('container').style.display = 'block';
}
}


function aggiungi_lista(){
console.log("ok");
valore = $("#lista_stimoli").val();
switch(valore){
case "1":
$("#area_stimoli").val("casa,voce,noce,dado,fune,luna,pane,sono,sete,pino,lato,erba,gola,devo,neve,luca,luce,remo,foro,solo");
break;
case "2":
$("#area_stimoli").val("duna,pila,vela,mela,teso,reso,leso,cosa,pipa,lana,rito,vino,riso,gufo,vano,raso,gino,fifa,muro,bene");
break;
case "3":
$("#area_stimoli").val("cono,molo,pari,idea,lago,luce,luna,lupo,mano,modo,nave,neve,nome,pace,sera,sole,topo,uomo,vita,voce");
break;
case "4":
$("#area_stimoli").val("alga,arco,arma,asta,atto,base,bene,cima,dado,dama,dito,faro,gelo,gola,idea,moda,nano,nero,nido,noce,nota,onda,orto,oste");
break;
case "5":
$("#area_stimoli").val("oste,palo,pena,pepe,pino,polo,remo,riga,riso,riva,roba,sale,seta,sete,tela,tono,toro,tubo,tuta,vaso,vela,vino,volo");
break;
case "6":
$("#area_stimoli").val("pilone,comico,torino,remare,pisolo,volere,tavolo,farina,carota,sedano,banana,timone,pelato,girino,salame,cavolo,marito,condito,vicino,rovente,segnale,tesoro,canale,finire,limone");
break;
case "7":
$("#area_stimoli").val("ditale,mostrare,cattura,vandali,orecchio,pigiama,murati,palazzo,fortuna,postale,bicchiere,dorato,scaldato,silenzio,bolletta,capretta,segnale,tenero,patata,lumaca,signora,camicia,tovaglia,bottiglia");
break;
case "8":
$("#area_stimoli").val("castagna,pallone,focaccia,pecora,mantello,giornale,segreto,vicino,lontano,fucile,bottiglia,viaggiare,soldato,veloce,sereno,collina,silenzio,palestra,ragazzo,pillola,pastiglia,collana,salute,vetrina,stufato");
break;
case "9":
$("#area_stimoli").val("squalo, quarto,unghia,giglio,giungla,sciarpa,chiunque,vigna,fascia,schifo,taglio,fruscio,spugna,schema,meglio,granchio,cuoio,scheda,muschio,guscio,ghianda,torcia,pigna,gnocco,sciolto,socio,purché,soglia,sciocco,treccia");
break;
case "10":
$("#area_stimoli").val("lancia,degno,scelto,giusto,schiaffo,maschio,lancio,gregge,taglia,fascio,ascia,ghiaia,pregio,chioma,biglia,chiaro,cieco,boccia,quieto,frangia,uscio,gioioso,agio,coccio,chiazza,lince,scoppio,cuoio,picchio,bignè");
break;
case "11":
$("#area_stimoli").val("meglio,aglio,griglia,schianto,acqueo,schiera,laccio,scemo,scialle,cachi,quassù,cuocere,cieco,marcia,scopa,casco,riccio,coccio,laccio,reggia,buccia,pulce,saggio,torcia,treccia,lancia,giusto,cieco,boccia,quieto");
break;
case "12":
$("#area_stimoli").val("arabo,atomo,cedere,carico,suonare,corona,nascita,gustare,terrore,carrello,rapido,massimo,beccare,boccone,faraone,metodo,cicciotto,sudato,saluto,diritto,diffuso,fidare,legato,foglietto,rimedio,nocciola,gabbiano,riunione,azzurro,contorno");
break;
case "13":
$("#area_stimoli").val("bibita,cellula,giraffa,cotone,caduta,fanale,ovale,fiducia,soffice,lettore,piccino,orrore,narrare,abile,passeggio,giurare,nobile,carico,carezza,piccione,deluso,letizia,attore,latino,dotare,radura,fisico,paffuto,limite,sedici");
break;
case "14":
$("#area_stimoli").val("umore,galassia,vietare,lucciola,orale,tipico,liquido,acciaio,rettile,rigore,rimare,sapore,accorto,aguzzo,cinese,finito,tabella,tifoso,duemila,solido,malato,pennello,basare,rovina,acuto,deciso,rizzare,nocivo,vitello,mutare");
break;
case "15":
$("#area_stimoli").val("agire,filato,dannoso,cenere,gettone,cannone,animo,pallino,merito,novità,orario,nemico,bassotto,logico,burrone,ruotare,rilievo,gelido,amato,tossico,carriera,menare,diretto,ridare,pineta,bocciare,mollare,litigio,budino,finora");
break;
case "16":
$("#area_stimoli").val("piazzare,ripido,sebbene,civile,piattino,latino,pollice,uranio,appeso,ideale,ciliegio,gocciola,pozione,salice,velluto,fallire,cipolla,zoccolo,tradurre,bollire,vittima,divisa,ticchettio,divino,ferito,parrucca,usato,futuro,pavone,vagone");
break;
case "17":
$("#area_stimoli").val("pulsante,talvolta,anziano,scarpetta,svenire,fulmine,sovrano,stasera,custode,splendente,antenna,intenso,carnoso,concorso,tedesco,sbucare,allarme,drogato,cemento,sospiro,esperto,commercio,premere,armato,porgere,campana,scrittura,preghiera,dolcezza,distante");
break;
case "18":
$("#area_stimoli").val("paziente,ovunque,ansioso,statale,cintura,lenzuolo,presenza,pompiere,selvaggio,contatto,gradino,distratto,estremo,gigante,volgere,classico,rivista,opposto,tramonto,cultura,controllo,linguaggio,distrutto,sfortuna,mandorla,sviluppo,incrocio,vendita,bistecca,novembre");
break;
case "19":
$("#area_stimoli").val("calcolo,oriente,pasticcio,buongiorno,processo,arrosto,triangolo,onesto,danzare,stanotte,distrarre,composto,sospeso,cartina,spazzare,celeste,governo,vantare,esperto,riserva,agente,scrittore,bambino,spaccare,corteccia,incubo,armare,calzare,grattare,etrusco,formula,smontare");
break;
case "20":
$("#area_stimoli").val("calzino,sdraiato,spedire,perdita,aumento,progresso,promessa,imporre,balzare,francese,minestra,crollare,scudetto,fornello,stufare,esterno,scaffale,compiere,mercante,inviare,confuso,ventuno,organo,bilancia,riguardo,brivido,oscuro,marmotta,fragile,modesto");
break;
case "21":
$("#area_stimoli").val("frazione,straniero,capriccio,polenta,zampina,sfilare,martello,sfilata,proposta,convinto,pratico,astuto,parlante,compenso,recente,bestiame,raccolto,ritratto,riflesso,studente,arancio,tradire,guardiano,maschile,riassunto,notturno,mortale,astuccio,grandezza,candido");
break;
case "22":
$("#area_stimoli").val("bruciato,sfogliare,spavento,piombare,pendolo,scalino,frenare,sorgente,mandorlo,canestro,nucleare,protetto,pulmino,attrarre,urbano,evento,provvista,malvagio,questione,privare,pantera,sfidare,straniero,interno,anitra,adulto,scodella,gustoso,fermata,coperchio");
break;
case "23":
$("#area_stimoli").val("risveglio,mugnaio,squillare,cognome,veglione,scacciare,tacchino,richiamo,sequenza,pasquale,sbagliato,matrigna,sceriffo,parcheggio,dovunque,artiglio,ghiacciaio,asciutto,cinquanta,acquario,chitarra,inchiostro,succhiare,scivolo,quadretto,sciocchezza,maschietto,strisciare,chimico,agnello");
break;
case "24":
$("#area_stimoli").val("guinzaglio,schizzare,parrocchia,schiacciato");
break;
case "25":
$("#area_stimoli").val("fabbricare,capitale,ugualmente,personale,offendere,marinaro,casalingo,pubblicità,dinosauro,restituire,calpestare,sconfiggere,navigare,trasferire,profondità,sopracciglio,equipaggio,apprezzare,impegnato,accostare,cartoncino,relazione,invadere,cerimonia,orgoglioso,moschettiere,consigliare,burattino,pianoforte,musicale");
break;
case "26":
$("#area_stimoli").val("obbedire,concedere,località,arrendersi,pipistrello,isolato,spaventoso,impiegato,cameriere,napoleone,maltrattare,sacrificio,aquilone,educare,giovanotto,popolare,galleggiare,orecchino,coccinella,somigliare,ventiquattro,artistico,raffreddare,navicella,indirizzo,periferia,commettere,anteriore,cimitero,favoloso");
break;
case "27":
$("#area_stimoli").val("prevedere,mormorare,travestire,poverino,allevare,descrizione,riprovare,apposito,nuvoloso,religione,disordine,immergere,dondolare,meccanico,dichiarare,celebrare,contribuire,illuminato,diminuire,destinare,posteriore,recipiente,vincitore,agricolo,falegname,ricostruire,esistenza,spalancare,comprensione,danneggiare");
break;
case "28":
$("#area_stimoli").val("sfumatura,cavallino,francobollo,arricchire,militare,informare,incantato,segretario,tramontare,antichità,aranciata,inciampare,sprofondare,sospirare,lampadina,immobile,raggruppare,punizione,panorama,cavalletta,scatenare,giardinetto,solitario,marmellata,intelligenza,umanità,sufficiente,relativo,maturare,dominare");
break;
case "29":
$("#area_stimoli").val("ingegnere,improvviso,labirinto,dormiglione,comodità,africano,tentativo,nuovamente,sacerdote,investire,confondere,improvviso,sfortunato,infermiere,esitare,infuriare,soffocare,introdurre,consultare,accidenti,convenire,entusiasmo,delusione,annusare,cravatta,affermare,popolare,governare,ospitare,ballerino");
break;
case "30":
$("#area_stimoli").val("comodino,dipendere,umidità,pomodoro,indumento,ubbidiente,dolcemente,verticale,documento,giornalista,particella,università,incidere,rimandare,partorire,adattare,rallentare,pubblicare,ipotesi,passeggero,venticinque,ripensare,ripulire,proiettare,ricamare,apertura,radunare,rumoroso,soprannome,solletico");
break;
case "31":
$("#area_stimoli").val("negoziante,decorare,davanzale,solitudine,incastrare,commerciante,giapponese,concorrente,miniatura,applaudire,terremoto,pascolare,porcellino,assegnare,entusiasta,birichino,ricercare,olimpiade,svolazzare,mattinata,prigioniero,pattinaggio,consentire,riprodurre,impastare,elevato,inoltrare,maledetto,rimediare,risultare");
break;
case "32":
$("#area_stimoli").val("assalire,abitato,incrociare,avvocato,deposito,classifica,ragionare,quotidiano,rosicchiare,limitare,sparecchiare,intrecciare,catechismo,motoscafo,confrontare,assoluto,pasticceria,bastoncino,ricompensa,apprendere,metallico,ferroviario,borbottare,tradizione,conosciuto,commuovere,spolverare,disputare,rinchiudere,contenuto");
break;
case "33":
$("#area_stimoli").val("rilassare,sussurrare,necessità,scommettere,ingrandire,nocciolina,adottare,arrotolare,indagine,sensibile,passerotto,provvedere,soddisfare,imprimere,variopinto,morsicare,risuonare,attrazione,avvisare,distendere,opinione,parolaccia,malinconia,comunità,favorire,collezione,passatempo,prigioniero,riflessione,antenato");
break;
case "34":
$("#area_stimoli").val("segnalare,tormentare,serenità,distruzione,appetito,verifica,sgradevole,commerciale,lampadario,vendicare,vergognare,ispirare,lavandino,ufficiale,religioso,quattordici,militare,aggrappare,scavalcare,alfabeto,illustrare,gentilezza,natalizio,precedere,strofinare,concentrare,mandarino,capannone,socchiudere,minaccioso");
break;
case "35":
$("#area_stimoli").val("avversario,importante,granoturco,affogare,barboncino,braccialetto,divisione,pasticcino,impaziente,bandierina,aggressivo,infelice,girotondo,condannare,artigiano,manifesto,ricambiare,effettuare,benedetto,sorvegliare,femminile,inghiottire,affollato,immondizia,regolare,armatura,predicato,vicinanza,autorità,notevole");
break;
case "36":
$("#area_stimoli").val("benedetto,specialità,prepotente,padroncino,elencare,papavero,addestrare,vitamina,sospendere,abolire,digerire,astronauta,abbondante,esibire,sbadigliare,ciminiera,normalmente,pellicola,pretendere,funerale,pacifico,componente,grammatica,sconosciuto,giardiniere,affollare,sotterraneo,accudire,chiaramente,penisola");
break;
case "37":
$("#area_stimoli").val("possibile,condominio,campanile,ripassare,familiare,nascondiglio,microfono,comprensivo,ululare,lontananza,sottoporre,comunale,acquazzone,leggermente,replicare,viceversa,confermare,rassegnare,gentilmente,camminata,saporito,coccolare,essenziale,lavatrice,familiare,longobardo,protezione,discussione,favorevole,faticare,");
break;
case "38":
$("#area_stimoli").val("taglialegna,singolare,differente,necessario,raramente,primitivo,visibile,prenotare,attaccante,rinnovare,sospettare,invitato,municipio,locomotiva,discendere,accusare,ricadere,cassaforte,cattiveria,ritirata,imbarcare,simpatico,rivoltare,confessare,adriatico,liberamente,autentico,antipasto,scappamento,derubare");
break;
case "39":
$("#area_stimoli").val("prospettiva,macchinario,abbronzare,rincorrere,carnivoro,etichetta,avvenire,pantofola,accogliente,screpolare,innalzare,ombrellone,archeologo,ragioniere,parrucchiere,circolare,applicare,asfaltare,collocare,imboccare,contemplare,riservare,invidiare,manifestare,confidenza,capolavoro,scoraggiare,medesimo,centomila,officina");
break;
case "40":
$("#area_stimoli").val("approvare,rinchiudere,carburante,disperdere,viaggiatore,precisare,rallegrare,aggirare,ammalato,ingannare,olandese,batuffolo,garantire,traversata,catastrofe,maleducato,maggioranza,sorellastra,accademia,cosiddetto,vulcanico,tenerezza,fischietto,riservato,pubblicitario,deludere,eleggere,pennarello,categoria,programmare");
break;
case "41":
$("#area_stimoli").val("resistente,ribattere,diecimila,innaffiare,allattare,valutare,avanzato,istruttivo,incendiare,caminetto,edicola,accaduto,espansione,aspirare,ragnatela,minerale,orribile,inventore,crocifisso,abilità,allagare,custodire,banconota,turistico,testolina,sotterraneo,esemplare,eleganza,intervista,racchiudere");
break;
case "42":
$("#area_stimoli").val("cinquecento,oscurità,spostamento,gradevole,estinguere,acquatico,terraferma,emanare,gentiluomo,telescopio,astronomo,devastare,scintillare,arredare,edizione,camicetta,impigliare,ovviamente,cicatrice,complicato,affilato,annegare,patrimonio,invasione,estremità,spiacevole,oscurare,pisolino,scricchiolare,sopravvivenza");
break;
case "43":
$("#area_stimoli").val("coltivato,trentacinque,gareggiare,atomico,disabitato,calendario,desolato,germogliare,cannocchiale,espandere,escludere,individuo,nutrimento,vaporetto,curiosare,processione,esplorare,maggiormente,attualmente,apostolo,ottocento,medioevo,iniziale,orientale,catinella,igienico,scatenato,rannicchiare,acquolina,gradinata");
break;
case "44":
$("#area_stimoli").val("nonostante,rigirare,soleggiato,disboscare,tavoletta,travolgere,negativo,pedalare,galoppare,diligenza,caffettiera,ondeggiare,focolare,azionare,ridicolo,balbettare,sventolare,predicare,cospargere,nevicata,alimento,giapponese,detestare,sbarazzare,attribuire,polverina,scalinata,cittadino,sparpagliare,zampettare");
break;
case "45":
$("#area_stimoli").val("incarico,cardinale,vegetale,invidioso,lentiggine,ribellare,evidente,colpevole,decorato,insultare,economia,petroliera,impetuoso,tradimento,rilevare,vegetale,capodanno,ceramica,sorreggere,mescolare,sbalordire,incantare,ingessare,permaloso,rattristare,drammatico,tramutare,irrequieto,verniciare,istruttore");
break;
case "46":
$("#area_stimoli").val("scintillare,politica,pareggiare,rinascere,contentezza,emergere,appannare,travestito,metropoli,vanitoso,addobbare,licenziare,risplendere,avvistare,facilità,illusione,diciassette,materasso,eccezione,testimone,garofano,saccheggiare,maresciallo,laborioso,vittorioso,allarmare,noleggiare,inzuppare,furibondo,accennare");
break;
case "47":
$("#area_stimoli").val("decollare,intestino,equivoco,monopolio,anticipo,mercatino,pasticcione,indeciso,lucidare,annunziare,iniziale,giardinaggio,elastico,obbligare,imponente,pensionato,gravemente,minestrone,animare,attrezzare,grattacielo,tondeggiante,poveretto,vincitore,commentare,opportuno,culturale,girasole,rigagnolo,acciuffare");
break;
case "48":
$("#area_stimoli").val("sfruttamento,contributo,innocente,fannullone,analisi,acrobazia,adeguato,spazzolino,fontanella,ingrassare,disprezzare,piramide,esistente,materiale,altrettanto,convocare,esaudire,mozzarella,salutare,indifeso,pitturare,esplodere,canticchiare,parabola,rimbombare,preistorico,ingiustizia,vicinato,romantico,filosofo");
break;
case "49":
$("#area_stimoli").val("nazionale,inquietare,superiore,camioncino,colpevole,espressivo,estrazione,panettone,australiano,ambientare,arrangiare,gioielleria,anemone,rischiare,riscuotere,prolungare,infinito,roditore,difensore,strabiliante,proclamare,invasore,bastonata,imbroglione,battesimo,bisbigliare,risentire,indagare,constatare,ecologia");
break;
case "50":
$("#area_stimoli").val("abboccare,rubinetto,alberello,funzionario,pensierino,discoteca,limitato,regionale,riassumere,censimento,sottovoce,britannico,ninna nanna,mascherato,ricopiare,comignolo,camionista,resistenza,raddoppiare,femminuccia,ingrossare,partigiano,polmonare,starnutire,rincasare,scorpacciata,accingere,pallottola,tempestoso,damigella");
break;
case "51":
$("#area_stimoli").val("cappellino,ufficiale,schiamazzare,circostanza,bruscamente,macinare,copertina,gracidare,conversare,meditare,minigonna,biancospino,dimagrire,dissetare,centesimo,piattaforma,successore,colorato,ambulanza,esattezza,altopiano,esigenza,immediato,installare,quotidiano,salvadanaio,filastrocca,comitiva,assordante,poveretto");
break;
case "52":
$("#area_stimoli").val("sviluppato,porcellana,singhiozzare,potabile,discepolo,allacciare,sofferenza,giustamente,estinzione,tribunale,identico,socievole,vellutato,portafortuna,fantasioso,ingerire,marachella,pronuncia,salvatore,progettare,seggiolino,sovrapporre,totalmente,pergamena,delinquente,assassino,suscitare,rivivere,modellino,medicare");
break;
case "53":
$("#area_stimoli").val("fallimento,scarafaggio,formulare,invitante,commissario,raffinato,vertebrato,carrucola,precisione,peperone,arrostire,imbrogliare,rianimare,verdeggiante,stupefare,marittimo,pianeggiante,suonatore,bambolotto,domatore,precauzione,ventinove,emergenza,produttore,cruciverba,millimetro,recintare,ferroviere,scivoloso,arrossire");
break;
case "54":
$("#area_stimoli").val("somiglianza,accoppiare,cannonata,sterminare,occorrente,cattolico,appassire,imbarazzo,abbellire,pupazzetto,atletico,trascurare,ammiraglio,occidente,incapace,incontrario,contagioso,rincontrare,sonnellino,arruffato,susseguire,fantascienza,trafficare,settecento,infernale,raffreddato,accertare,positivo,rimbalzare,efficace");
break;
case "55":
$("#area_stimoli").val("giacimento,microscopio,bomboniera,appostare,dinamico,aggettivo,fattorino,cinquemila,segatura,vocabolo,circostante,apparenza,giuramento,rinforzare,ermellino,frequentato,temperino,circolare,stranamente,dentifricio,messaggero,brontolone,lampeggiare,eccellente,compilare,esigere,espellere,sottomesso,accorciare,soffocato");
break;
case "56":
$("#area_stimoli").val("rispettoso,autografo,saldamente,brizzolato,olimpico,musicista,puntualmente,carpentiere,colossale,confezione,rapinare,costeggiare,uragano,ricorrenza,promozione,riduzione,eschimese,erodere,freddoloso,quadrupede,settecento,protettore,evadere,coinvolgere,caffellatte,dormiveglia,apparente,riordinare,sanguinare,arricciare");
break;
case "57":
$("#area_stimoli").val("imperiale,prelevare,ammassare,scampagnata,ammonire,avventare,odorare,prodigioso,affittare,benessere,gabinetto,acquisire,indicato,dubitare,ripiegare,traballare,imbiancare,compassione,linguistico,variabile,fortemente,addizione,atterraggio,assetato,preferito,tentazione,cofanetto,dilagare,politico,ispettore");
break;
case "58":
$("#area_stimoli").val("assistenza,laterale,vivacità,difficile,emigrare,penzolare,scongiurare,spazzolare,convertire,sciroppare,cattedrale,inchiodare,ingiallire,percepire,prelibato,rivendere,fiammeggiante,accordato,personale,usignolo,accampare,soffermare,ambulante,imbottito,accucciarsi,sterminato,tecnologia,riversare,manovrare,allineato");
break;
case "59":
$("#area_stimoli").val("brevemente,identità,diavoletto,gelateria,estensione,pensieroso,adirare,confortare,macchinista,mendicante,distrazione,fidanzare,commozione,ingrediente,limonata,protettivo,violentare,egiziano,riattaccare,autocarro,accessorio,debitore,protettore,emigrante,ruzzolare,molecola,addentare,impugnare,infiltrare,ridacchiare,imprevisto,rapimento,specifico");
break;
case "60":
$("#area_stimoli").val("saca,cevo,ceno,doda,nefu,nalu,nepa,noso,este,nopi,tola,rabe,loga,vode,enve,calu,mero,rofo,loso");
break;
case "61":
$("#area_stimoli").val("nadu,lapi,lave elma,sote, sore, selo, saco, ippa, nala,roti, nivo, sori, fogu, navo, sora,nogi,fafi,rumo,nebe");
break;
case "62":
$("#area_stimoli").val("noco,lomo,rapi,eadi, galo,celu,nula,pulo,noma,domo,neva,enve,mone,cepa,ersa,olse,poto,oumo,tavi,cevo");
break;
case "63":
$("#area_stimoli").val("agla,cora,rama,tasa,otta,seba,nebe,maci,doda,mada,todi,rofa,loge,loga,edia,damo,onna,rone,ondi,neco,tano,ando,otro,esto");
break;
case "64":
$("#area_stimoli").val("tose,lopa,nape,eppe,nopi,lopo,rome,gari,sori,ravi,rabo,lase,tase,este,late,onto,roto,buto,tatu,sova,lave,novi,lovo");
break;
}
}