//[Livello[numeroitem[primaparte,daindovinare,secondaparte,alternativa1, alternativa2]

$(document).ready(function(){
	console.log("database caricato");
});
mof = [	["MASCHILE (IL)","IL","FEMMINILE (LA)","LA"],
		[
			["","IL","gatto","IL","LA"],
			["","IL","sole","IL","LA"],
			["","IL","dottore","IL","LA"],
			["","IL","tavolo","IL","LA"],
			["","IL","fazzoletto","IL","LA"],
			["","LA","busta","IL","LA"],
			["","LA","chitarra","IL","LA"],
			["","LA","fotografia","IL","LA"],
			["","LA","tazza","IL","LA"],
			["","LA","molletta","IL","LA"]
		],
		[
			["","IL","pescatore","IL","LA"],
			["","IL","mantello","IL","LA"],
			["","IL","piede","IL","LA"],
			["","IL","cane","IL","LA"],
			["","IL","sentiero","IL","LA"],
			["","LA","luna","IL","LA"],
			["","LA","fisarmonica","IL","LA"],
			["","LA","matita","IL","LA"],
			["","LA","palla","IL","LA"],
			["","LA","mano","IL","LA"]
		]
];

unun = [	["MASCHILE (UN)","UN","FEMMINILE (UN')","UN'"],
		[
			["","UN'","ASTRONAVE","UN","UN'"],
			["","UN'","ARANCIA","UN","UN'"],
			["","UN","AMICO","UN","UN'"],
			["","UN'","AZIONE","UN","UN'"],
			["","UN","ATTIMO","UN","UN'"],
			["","UN'","OMBRA","UN","UN'"],
			["","UN'","IMPRESA","UN","UN'"],
			["","UN","ABITO","UN","UN'"],
			["","UN","COLORE","UN","UN'"],
			["","UN","DIRETTORE","UN","UN'"]
		],
		[
			["","UN'","ISTRUZIONE","UN","UN'"],
			["","UN","IMBUTO","UN","UN'"],
			["","UN","AMORE","UN","UN'"],
			["","UN'","ESCA","UN","UN'"],
			["","UN","SENTIERO","UN","UN'"],
			["","UN","IMPERO","UN","UN'"],
			["","UN'","ARMATA","UN","UN'"],
			["","UN","ANZIANO","UN","UN'"],
			["","UN'","OSTERIA","UN","UN'"],
			["","UN","FLAUTO","UN","UN'"]
		]
];

plu = [	["","","",""],
		[
			["LA VALIGIA /","LE VALIGIE","","LE VALIGIE","LE VALIGE"],
			["L'ARANCIA /","LE ARANCE","","LE ARANCIE","LE ARANCE"],
			["LA FACCIA /","LE FACCE","","LE FACCE","LE FACCIE"],
			["LA DOCCIA /","LE DOCCE","","LE DOCCE","LE DOCCIE"],
			["LA GUANCIA /","LE GUANCE","","LE GUANCIE","LE GUANCE"],
			["IL CAPOSTAZIONE /","I CAPISTAZIONE","","I CAPISTAZIONI","I CAPISTAZIONE"],
			["IL CATALOGO /","I CATALOGHI","","I CATALOGHI","I CATALOGI"],
			["LO PSICOLOGO /","GLI PSICOLOGI","","GLI PSICOLOGHI","GLI PSICOLOGI"],
			["IL CAPOLUOGO /","I CAPOLUOGHI","","I CAPOLUOGHI","I CAPILUOGO"],
			["IL TEMPO /","I TEMPI","","I TEMPI","I TEMPLI"]
		],
		[
			["LA CAMICIA /","LE CAMICIE","","LE CAMICE","LE CAMICIE"],
			["LA CILIEGIA /","LE CILIEGIE","","LE CILIEGIE","LE CILIEGE"],
			["L'AMICO /","GLI AMICI","","GLI AMICHI","GLI AMICI"],
			["L'ABACO /","GLI ABACHI","","GLI ABACHI","GLI ABACI"],
			["IL MONACO /","I MONACI","","I MONACHI","I MONACI"],
			["L'EPILOGO /","GLI EPILOGHI","","GLI EPILOGHI","GLI EPILOGI"],
			["IL DIALOGO /","I DIALOGHI","","I DIALOGHI","I DIALOGI"],
			["IL SACRILEGO /","I SACRILEGHI","","I SACRILEGI","I SACRILEGHI"],
			["L'ARCIPELAGO /","GLI ARCIPELAGHI","","GLI ARCIPELAGI","GLI ARCIPELAGHI"],
			["IL VALICO /","I VALICHI","","I VALICHI","I VALICI"]
		]
];

doppie = [	["","","",""],
		[
			["","PROMESSA","","PROMESSA","PROMESA"],
			["","UBBIDIRE","","UBIDIRE","UBBIDIRE"],
			["","PROFESSIONE","","PROFESSIONE","PROFESIONE"],
			["","ROTOLARE","","ROTOLARE","ROTTOLARE"],
			["","POMODORO","","POMMODORO","POMODORO"],
			["","DICHIARAZIONE","","DICHIARAZZIONE","DICHIARAZIONE"],
			["","OZIARE","","OZZIARE","OZIARE"],
			["","SOLLECITARE","","SOLLECITARE","SOLECITARE"],
			["","SUBITO","","SUBBITO","SUBITO"],
			["","SUDARE","","SUDARRE","SUDARE"]
		],
		[
			["","PREGIO","","PREGIO","PREGGIO"],
			["","POMERIGGIO","","POMERIGIO","POMERIGGIO"],
			["","SPAZIO","","SPAZZIO","SPAZIO"],
			["","AGILE","","AGILE","AGGILE"],
			["","SOFFIARE","","SOFIARE","SOFFIARE"],
			["","ADATTARE","","ADATARE","ADATTARE"],
			["","APPOGGIARE","","APPOGGIARE","APPOGIARE"],
			["","ORGANIZZAZIONE","","ORGANIZAZIONE","ORGANIZZAZIONE"],
			["","ONDEGGIARE","","ONDEGIARE","ONDEGGIARE"],
			["","PROBLEMA","","PROBLEMA","PROBBLEMA"]
		]
];

essere = [	["","","",""],
		[
			["NON ","È"," VERO","E","È"],
			["HO TROVATO LE CHIAVI ","E"," I SOLDI","E","È"],
			["GIOCARE ","È"," DIVERTENTE","E","È"],
			["IL ROSSO ","È"," UN COLORE","E","È"],
			["PRENDO IL CAFFÈ ","E"," LO ZUCCHERO","E","È"],
			["OLIO ","E"," SALE","E","È"],
			["LA MAMMA ","È"," SEDUTA","E","È"],
			["L'ACQUA ","È"," BAGNATA","E","È"],
			["LO ZIO ","È"," TORNATO","E","È"],
			["ROSSO ","E"," BLU SONO COLORI","E","È"]
		],
		[
			["CARNE ","E"," PATATINE","E","È"],
			["PARTIRE ","È"," UN VERBO","E","È"],
			["IL RE ","E"," LA REGINA","E","È"],
			["ANDATA","E"," RITORNO","E","È"],
			["CI VEDIAMO OGGI","E"," DOMANI","E","È"],
			["NON","È"," POSSIBILE","E","È"],
			["COS'","È"," QUESTA STORIA?","E","È"],
			["DOVE ","E"," QUANDO CI VEDIAMO?","E","È"],
			["NON ","È"," PIù TORNATO","E","È"],
			["LA PASTA ","È"," PRONTA","E","È"]
		]
];

avere = [	["","","",""],
		[
			["LORO ","HANNO"," SEDICI ANNI","HANNO","ANNO"],
			["L' ","ANNO"," SCORSO ANDAI A PESCA","HANNO","ANNO"],
			["RUBA ","AI"," RICCHI PER DARE AI POVERI","HAI","AI"],
			["","AI"," MIEI TEMPI ERA TUTTO PIù SEMPLICE","HAI","AI"],
			["QUANTO VORREI TORNARE ","A"," SCUOLA","HA","A"],
			["IL 2016 È STATO UN ","ANNO"," BISESTILE","HANNO","ANNO"],
			["L'","HA"," PAGATO DUE EURO","HA","A"],
			["MI SPIACE, NON NE ","HA"," PIù","HA","A"],
			["LA BANDIERA ITALIANA ","HA"," TRE COLORI","HA","A"],
			["","A"," CHE ORA CI VEDIAMO?","HA","A"]
		],
		[
			["L'","HAI"," DETTO ALLA MAMMA?","HAI","AI"],
			["PREFERISCO ANDARE ","A"," PIEDI","HA","A"],
			["STAVOLTA ","HO"," L'AUTORIZZAZIONE","HO","O"],
			["SONO PASSATI TROPPI ","ANNI","","HANNI","ANNI"],
			["SOGNO ","O"," SON DESTO?","HO","O"],
			["NON BISOGNA SPENDERE PIù DI QUEL CHE SI ","HA","","HA","A"],
			["","HO"," PRESO UN BEL VOTO IN GEOGRAFIA","HO","O"],
			["DOVRESTI PENSARE ","AI"," TUOI AMICI","HAI","AI"],
			["CHISSà SE ","HA"," RICEVUTO LA LETTERA","HA","A"],
			["NON SARà ","A"," CASA PER MEZZOGIORNO","HA","A"]
		]
];

fusioni = [	["","","",""],
		[
			["È STATO MOLTO ","ATTENTO"," ALLA LEZIONE","HA TENTO","ATTENTO"],
			["MARCO ","HA TROVATO"," DEI SOLDI PER STRADA","HA TROVATO","ATTROVATO"],
			["NON ","HO OTTENUTO"," QUELLO CHE VOLEVO","OTTENUTO","HO OTTENUTO"],
			["RIESCI ","A SCRIVERE"," UN MESSAGGIO?","A SCRIVERE","ASCRIVERE"],
			["NON VUOLE ","APPRENDERE"," NULLA","APPRENDERE","A PRENDERE"],
			["ALCUNI SE NE ","APPROFITTANO"," APPENA POSSONO","A PROFITTANO","APPROFITTANO"],
			["HO PARLATO CON IL RAGAZZO ","ADDETTO"," ALLA CONSEGNA","HA DETTO","ADDETTO"],
			["NON ","HO FATTO"," NIENTE DI MALE!","OFFATTO","HO FATTO"],
			["NON BISOGNA ","ARRECARE"," DANNI A PERSONE O COSE","ARRECARE","A RECARE"],
			["SI STA LAVANDO LE MANI PERCHé ","HA TOCCATO"," UN OGGETTO SPORCO","ATTOCCATO","HA TOCCATO"]
		],
		[
			["NON MI CONVINCE ","AFFATTO","","AFFATTO","HA FATTO"],
			["LA POLIZIA HA SVENTATO L'","ATTENTATO","","HA TENTATO","ATTENTATO"],
			["SARà ","ATTIVO"," DAL PROSSIMO ANNO","A TIVO","ATTIVO"],
			["SONO DUE COLORI DIFFICILI DA ","ABBINARE","","ABBINARE","HA BINARE"],
			["QUESTO SITO è ","OTTIMO","","HO TIMO","OTTIMO"],
			["HAI VISTO SIA ","L'UNA"," CHE L'ALTRA?","LUNA","L'UNA"],
			["HAI PERSO UNA BUONA ","OCCASIONE","","HO CASIONE","OCCASIONE"],
			["DOVREBBERO ESSERE ","ADDIRITTURA"," TRENTA","ADDIRITTURA","A DIRITTURA"],
			["HO AZIONATO L'","ALLARME","","ALLARME","A LARME"],
			["CHI ","HA DECISO"," DI ANDARE A GIOCARE?","ADDECISO","HA DECISO"]
		]
];

cuqu = [	["","","",""],
		[
			["","CUORE","","CUORE","QUORE"],
			["","CUOIO","","QUOIO","CUOIO"],
			["","CUOCERE","","QUOCERE","CUOCERE"],
			["","QUATTRO","","CUATTRO","QUATTRO"],
			["","CUSTODIA","","CUSTODIA","QUSTODIA"],
			["","SQUALO","","SCUALO","SQUALO"],
			["","QUADERNO","","QUADERNO","CUADERNO"],
			["","ACQUA","","ACQUA","AQUA"],
			["","TACCUINO","","TACQUINO","TACCUINO"],
			["","CURIOSO","","CURIOSO","QURIOSO"]
		],
		[
			["","ACCUSARE","","ACCUSARE","ACQUSARE"],
			["","ACQUISTO","","ACQUISTO","ACCUISTO"],
			["","ACQUATICO","","ACQUATICO","AQQUATICO"],
			["","OCCUPATO","","OQUPATO","OCCUPATO"],
			["","EQUITà","","ECUITà","EQUITà"],
			["","QUIETE","","QUIETE","CUIETE"],
			["","SOQQUADRO","","SOQQUADRO","SOCQUADRO"],
			["","QUADRATO","","CUADRATO","QUADRATO"],
			["","EQUAZIONE","","ECUAZIONE","EQUAZIONE"],
			["","CIRCUITO","","CIRQUITO","CIRCUITO"]
		]
];

sz = [	["","","",""],
		[
			["","INSETTO","","INSETTO","INZETTO"],
			["","INIZIARE","","INISSIARE","INIZIARE"],
			["","INSERIRE","","INSERIRE","INZERIRE"],
			["","PINZA","","PINSA","PINZA"],
			["","PENSIERO","","PENSIERO","PENZIERO"],
			["","CONSUMARE","","CONSUMARE","CONZUMARE"],
			["","RONZIO","","RONSIO","RONZIO"],
			["","INSABBIARE","","INSABBIARE","INZABBIARE"],
			["","INZUPPARE","","INSUPPARE","INZUPPARE"],
			["","ASIA","","ASIA","AZIA"]
		],
		[
			["","INSALATA","","INSALATA","INZALATA"],
			["","POSARE","","POSARE","POZARE"],
			["","PRENSILE","","PRENSILE","PRENZILE"],
			["","SABBIA","","SABBIA","ZABBIA"],
			["","DOSARE","","DOSARE","DOZARE"],
			["","ESATTO","","ESATTO","EZATTO"],
			["","INIZIO","","INISIO","INIZIO"],
			["","EQUAZIONE","","EQUASIONE","EQUAZIONE"],
			["","PAZIENZA","","PASIENZA","PAZIENZA"],
			["","ZAPPARE","","SAPPARE","ZAPPARE"]
		]
];

bd = [	["","","",""],
		[
			["","BUSTA","","BUSTA","DUSTA"],
			["","DESERTO","","BESERTO","DESERTO"],
			["","DISCOTECA","","BISCOTECA","DISCOTECA"],
			["","BISCOTTO","","BISCOTTO","DISCOTTO"],
			["","BORSETTA","","BORSETTA","DORSETTA"],
			["","CONDIRE","","CONBIRE","CONDIRE"],
			["","PERDERE","","PERBERE","PERDERE"],
			["","BUCCIA","","BUCCIA","DUCCIA"],
			["","CADERE","","CABERE","CADERE"],
			["","ODORE","","OBORE","ODORE"]
		],
		[
			["","DIECI","","BIECI","DIECI"],
			["","BELLEZZA","","BELLEZZA","DELLEZZA"],
			["","BRUCIATO","","BRUCIATO","DRUCIATO"],
			["","SCUDO","","SCUBO","SCUDO"],
			["","CALDO","","CALBO","CALDO"],
			["","ABITARE","","ABITARE","ADITARE"],
			["","BOSCAIOLO","","BOSCAIOLO","DOSCAIOLO"],
			["","DODICI","","BOBICI","DODICI"],
			["","BRAVO","","BRAVO","DRAVO"],
			["","BOLLINO","","BOLLINO","DOLLINO"]
		]
];

pb = [	["","","",""],
		[
			["","PORTA","","PORTA","BORTA"],
			["","PESCATORE","","PESCATORE","BESCATORE"],
			["","BIANCO","","PIANCO","BIANCO"],
			["","BERRETTO","","PERRETTO","BERRETTO"],
			["","PROSCIUTTO","","PROSCIUTTO","BROSCIUTTO"],
			["","PESCA","","PESCA","BESCA"],
			["","LAMPADA","","LAMPADA","LAMBADA"],
			["","CARAIBI","","CARAIPI","CARAIBI"],
			["","PIOGGIA","","PIOGGIA","BIOGGIA"],
			["","BUSSARE","","PUSSARE","BUSSARE"]
		],
		[
			["","BRESAOLA","","PRESAOLA","BRESAOLA"],
			["","PROVOLA","","PROVOLA","BROVOLA"],
			["","BIGLIETTAIO","","PIGLIETTAIO","BIGLIETTAIO"],
			["","POESIA","","POESIA","BOESIA"],
			["","PRODURRE","","PRODURRE","BRODURRE"],
			["","BOCCIA","","POCCIA","BOCCIA"],
			["","PELLEGRINO","","PELLEGRINO","BELLEGRINO"],
			["","COLOMBA","","COLOMPA","COLOMBA"],
			["","PASTICCINO","","PASTICCINO","BASTICCINO"],
			["","CALABRONE","","CALAPRONE","CALABRONE"]
		]
];

mn = [	["","","",""],
		[
			["","MUSICA","","MUSICA","NUSICA"],
			["","NIENTE","","MIENTE","NIENTE"],
			["","MESCOLARE","","MESCOLARE","NESCOLARE"],
			["","CANZONE","","CANZOME","CANZONE"],
			["","MERITARE","","MERITARE","NERITARE"],
			["","ANNOIARSI","","AMMOIARSI","ANNOIARSI"],
			["","METODO","","METODO","NETODO"],
			["","COMPARSA","","COMPARSA","CONBARSA"],
			["","DANNOSO","","DAMMOSO","DANNOSO"],
			["","CANARINO","","CAMARINO","CANARINO"]
		],
		[
			["","AMBITO","","AMBITO","ANBITO"],
			["","AMERICANO","","AMERICANO","ANERICANO"],
			["","GIAPPONE","","GIAPPOME","GIAPPONE"],
			["","CAMBIARE","","CAMBIARE","CANBIARE"],
			["","STANCO","","STAMCO","STANCO"],
			["","GAMBE","","GAMBE","GANBE"],
			["","PROBLEMA","","PROBLEMA","PROBLENA"],
			["","NASCERE","","MASCERE","NASCERE"],
			["","MANDARINO","","MANDARIMO","MANDARINO"],
			["","SONNIFERO","","SOMMIFERO","SONNIFERO"]
		]
];

ceche = [	["","","",""],
		[
			["","CERVO","","CERVO","CHERVO"],
			["","BANCHE","","BANCE","BANCHE"],
			["","CENTINAIA","","CENTINAIA","CHENTINAIA"],
			["","CERTEZZA","","CERTEZZA","CHERTEZZA"],
			["","PRATICHE","","PRATICE","PRATICHE"],
			["","MANICHE","","MANICE","MANICHE"],
			["","CERVELLO","","CERVELLO","CHERVELLO"],
			["","CEMENTO","","CEMENTO","CHEMENTO"],
			["","GIUDICE","","GIUDICE","GIUDICHE"],
			["","ARCHETTO","","ARCETTO","ARCHETTO"]
		],
		[
			["","ALCE","","ALCE","ALCHE"],
			["","NEANCHE","","NEANCE","NEANCHE"],
			["","MAGICHE","","MAGICE","MAGICHE"],
			["","OCHE","","OCE","OCHE"],
			["","VELOCE","","VELOCE","VELOCHE"],
			["","CALCE","","CALCE","CALCHE"],
			["","INCENDIO","","INCENDIO","INCHENDIO"],
			["","FANTASTICHE","","FANTASTICE","MANTASTICHE"],
			["","PROCESSO","","PROCESSO","PROCHESSO"],
			["","POLLICE","","POLLICE","POLLICHE"]
		]
];

cichi = [	["","","",""],
		[
			["","CIVILE","","CIVILE","CHIVILE"],
			["","CHIODO","","CIODO","CHIODO"],
			["","CHIRURGO","","CIRURGO","CHIRURGO"],
			["","CIONDOLO","","CIONDOLO","CHIONDOLO"],
			["","MACIGNO","","MACIGNO","MACHIGNO"],
			["","CHIAREZZA","","CIAREZZA","CHIAREZZA"],
			["","CHIEDERE","","CIEDERE","CHIEDERE"],
			["","FACILE","","FACILE","FACHILE"],
			["","DODICI","","DODICI","DODICHI"],
			["","UNICI","","UNICI","UNICHI"]
		],
		[
			["","MEDICI","","MEDICI","MEDICHI"],
			["","CHIESA","","CIESA","CHIESA"],
			["","ARCHITETTO","","ARCITETTO","ARCHITETTO"],
			["","INCHIESTA","","INCIESTA","INCHIESTA"],
			["","MANICI","","MANICI","MANICHI"],
			["","FELICI","","FELICI","FELICHI"],
			["","CIRCO","","CIRCO","CHIRCO"],
			["","CHIAMARE","","CIAMARE","CHIAMARE"],
			["","INCIDENTE","","INCIDENTE","INCHIDENTE"],
			["","PRECISO","","PRECISO","PRECHISO"]
		]
];

geghe = [	["","","",""],
		[
			["","GENITORI","","GENITORI","GHENITORI"],
			["","UNGHERIA","","UNGERIA","UNGHERIA"],
			["","PIANGERE","","PIANGERE","PIANGHERE"],
			["","GESTIRE","","GESTIRE","GHESTIRE"],
			["","GENTILE","","GENTILE","GHENTILE"],
			["","PIEGHEVOLE","","PIEGEVOLE","PIEGHEVOLE"],
			["","CONGELARE","","CONGELARE","CONGHELARE"],
			["","PAGHEREMO","","PAGEREMO","PAGHEREMO"],
			["","GELSOMINO","","GHELSOMINO","GELSOMINO"],
			["","DIGERIRE","","DIGERIRE","DIGHERIRE"]
		],
		[
			["","MAGENTA","","MAGENTA","MAGHENTA"],
			["","SPIGHE","","SPIGE","SPIGHE"],
			["","RUGHE","","RUGE","RUGHE"],
			["","PREGEVOLE","","PREGEVOLE","PREGHEVOLE"],
			["","GETTARE","","GETTARE","GHETTARE"],
			["","PAGELLA","","PAGELLA","PAGHELLA"],
			["","DIGHE","","DIGE","DIGHE"],
			["","UNGERE","","UNGERE","UNGHERE"],
			["","UNGHERESE","","UNGERESE","UNGHERESE"],
			["","ALGHE","","ALGE","ALGHE"]
		]
];

gighi = [	["","","",""],
		[
			["","GITA","","GITA","GHITA"],
			["","GINOCCHIO","","GINOCCHIO","GHINOCCHIO"],
			["","RINGHIERA","","RINGIERA","RINGHIERA"],
			["","PREGHIERA","","PREGIERA","PREGHIERA"],
			["","DIGITARE","","DIGITARE","DIGHITARE"],
			["","PREGIO","","PREGIO","PREGHIO"],
			["","UNGHIE","","UNGIE","UNGHIE"],
			["","GIALLO","","GIALLO","GHIALLO"],
			["","GIROTONDO","","GIROTONDO","GHIROTONDO"],
			["","GIORNALE","","GIORNALE","GHIORNALE"]
		],
		[
			["","MAGICO","","MAGICO","MAGHICO"],
			["","AGIRE","","AGIRE","AGHIRE"],
			["","GIAPPONE","","GIAPPONE","GHIAPPONE"],
			["","GHIACCIO","","GIACCIO","GHIACCIO"],
			["","GENGIVA","","GENGIVA","GENGHIVA"],
			["","GHIANDE","","GIANDE","GHIANDE"],
			["","BUGIARDO","","BUGIARDO","BUGHIARDO"],
			["","ALBERGHI","","ALBERGI","ALBERGHI"],
			["","LOGICO","","LOGICO","LOGHICO"],
			["","RINGHIO","","RINGIO","RINGHIO"]
		]
];

scesche = [	["","","",""],
		[
			["","SCENA","","SCENA","SCHENA"],
			["","NASCERE","","NASCERE","NASCHERE"],
			["","SCHERMO","","SCERMO","SCHERMO"],
			["","SCHERZO","","SCERZO","SCHERZO"],
			["","SCELTA","","SCELTA","SCHELTA"],
			["","CRESCERE","","CRESCERE","CRESCHERE"],
			["","SCHELETRO","","SCELETRO","SCHELETRO"],
			["","CONOSCERE","","CONOSCERE","CONOSCHERE"],
			["","VASCELLO","","VASCELLO","VASCHELLO"],
			["","VASCHETTA","","VASCETTA","VASCHETTA"]
		],
		[
			["","FASCETTA","","FASCETTA","FASCHETTA"],
			["","FIASCHETTO","","FIASCETTO","FIASCHETTO"],
			["","VASCHE","","VASCE","VASCHE"],
			["","BRUSCHETTA","","BRUSCETTA","BRUSCHETTA"],
			["","TEDESCHE","","TEDESCE","TEDESCHE"],
			["","MISCELA","","MISCELA","MISCHELA"],
			["","SCENDERE","","SCENDERE","SCHENDERE"],
			["","SCHEDA","","SCEDA","SCHEDA"],
			["","DISCEPOLO","","DISCEPOLO","DISCHEPOLO"],
			["","SCETTRO","","SCETTRO","SCHETTRO"]
		]
];

scischi = [	["","","",""],
		[
			["","SCIARE","","SCIARE","SCHIARE"],
			["","SCHIAVO","","SCIAVO","SCHIAVO"],
			["","MASCHIO","","MASCIO","MASCHIO"],
			["","SCIOGLIERE","","SCIOGLIERE","SCHIOGLIERE"],
			["","ASCIUGARE","","ASCIUGARE","ASCHIUGARE"],
			["","SCHIAFFO","","SCIAFFO","SCHIAFFO"],
			["","SCHIENA","","SCIENA","SCHIENA"],
			["","SCIVOLARE","","SCIVOLARE","SCHIVOLARE"],
			["","PESCIVENDOLO","","PESCIVENDOLO","PESCHIVENDOLO"],
			["","FASCICOLO","","FASCHICOLO","FASCICOLO"]
		],
		[
			["","DISCIPLINA","","DISCIPLINA","DISCHIPLINA"],
			["","VISCIDO","","VISCIDO","VISCHIDO"],
			["","MARESCIALLO","","MARESCIALLO","MARESCHIALLO"],
			["","GIRADISCHI","","GIRADISCI","GIRADISCHI"],
			["","CUSCINO","","CUSCINO","CUSCHINO"],
			["","BOSCHI","","BOSCI","BOSCHI"],
			["","PROBOSCIDE","","PROBOSCIDE","PROBOSCHIDE"],
			["","SCIENZA","","SCIENZA","SCHIENZA"],
			["","MESCHINO","","MESCINO","MESCHINO"],
			["","USCITA","","USCITA","USCHITA"]
		]
];

lgl = [	["","","",""],
		[
			["","TAGLIARE","","TALIARE","TAGLIARE"],
			["","ABBAGLIANTE","","ABBALIANTE","ABBAGLIANTE"],
			["","AGLIO","","ALIO","AGLIO"],
			["","ALCOLICO","","ALCOLICO","ALCOGLICO"],
			["","COGLIERE","","COLIERE","COGLIERE"],
			["","ALIMENTARI","","ALIMENTARI","AGLIMENTARI"],
			["","PALIO","","PALIO","PAGLIO"],
			["","PAGLIA","","PALIA","PAGLIA"],
			["","BILIARDO","","BILIARDO","BIGLIARDO"],
			["","MILIARDI","","MILIARDI","MIGLIARDI"]
		],
		[
			["","BILICO","","BILICO","BIGLICO"],
			["","BISBIGLIARE","","BISBILIARE","BISBIGLIARE"],
			["","CIMELIO","","CIMELIO","CIMEGLIO"],
			["","MIGLIORARE","","MILIORARE","MIGLIORARE"],
			["","CIGLIA","","CILIA","CIGLIA"],
			["","DELICATO","","DELICATO","DEGICATO"],
			["","MAGLIONE","","MALIONE","MAGLIONE"],
			["","SVEGLIARSI","","SVELIARSI","SVEGLIARSI"],
			["","GRIGLIA","","GRILIA","GRIGLIA"],
			["","SCOGLIO","","SCOLIO","SCOGLIO"]
		]
];

ngn = [	["","","",""],
		[
			["","BAGNO","","BANIO","BAGNO"],
			["","GUADAGNO","","GUADANIO","GUADAGNO"],
			["","ANTONIO","","ANTONIO","ANTOGNO"],
			["","GENIO","","GENIO","GEGNO"],
			["","DISEGNO","","DISENIO","DISEGNO"],
			["","BISOGNO","","BISONIO","BISOGNO"],
			["","URANIO","","URANIO","URAGNO"],
			["","RAGNO","","RANIO","RAGNO"],
			["","VERGOGNA","","VERGONIA","VERGOGNA"],
			["","SOGNARE","","SONIARE","SOGNARE"]
		],
		[
			["","SPAGNA","","SPANIA","SPAGNA"],
			["","UNIONE","","UNIONE","UGNONE"],
			["","OPINIONE","","OPINIONE","OPIGNONE"],
			["","STAGNO","","STANIO","STAGNO"],
			["","INSEGNANTE","","INSENIANTE","INSEGNANTE"],
			["","INGEGNERE","","INGENIERE","INGEGNERE"],
			["","NIENTE","","NIENTE","GNENTE"],
			["","BAGNARSI","","BANIARSI","BAGNARSI"],
			["","MANIERA","","MANIERA","MAGNERA"],
			["","CAGNOLINO","","CANIOLINO","CAGNOLINO"]
		]
];

contrario = [	
		[
			["SALITA","DIS","CESA","DISCESA"],
			["TORNARE","PAR","TIRE","PARTIRE"],
			["RUVIDO","LI","SCIO","LISCIO"],
			["STANCO","RIPO","SATO","RIPOSATO"],
			["CONCRETO","ASTR","ATTO","ASTRATTO"],
			["SACRO","PRO","FANO","PROFANO"],
			["MILITARE","CI","VILE","CIVILE"],
			["RICCO","PO","VERO","POVERO"],
			["LEGGERO","PES","ANTE","PESANTE"],
			["LENTO","VE","LOCE","VELOCE"]
		],
		[
			["ALLUNGARE","ACCOR","CIARE","ACCORCIARE"],
			["INIZIARE","CON","CLUDERE","CONCLUDERE"],
			["AGGIUSTARE","RO","MPERE","ROMPERE"],
			["UNIRE","DI","VIDERE","DIVIDERE"],
			["NASCONDERE","MO","STRARE","MOSTRARE"],
			["DIMINUIRE","AU","MENTARE","AUMENTARE"],
			["BAGNATO","A","SCIUTTO","ASCIUTTO"],
			["SPORCO","P","ULITO","PULITO"],
			["RALLENTARE","ACCE","LERARE","ACCELERARE"],
			["SPENTO","A","CCESO","ACCESO"]
		]
];

anagrammi = [	
		[
			["MAESTRO","STI","MARE","STIMARE"],
			["TECNICA","ACC","ENTI","ACCENTI"],
			["ATTENTO","TEN","TATO","TENTATO"],
			["ARROSTIRSI","RIST","ORARSI","RISTORARSI"],
			["RISERVA","SER","RAVI","SERRAVI"],
			["SALIRESTI","RISA","LISTE","RISALISTE"],
			["GARBATI","BRI","GATA","BRIGATA"],
			["SPUNTATE","PUNT","ASTE","PUNTASTE"],
			["PROMOSSI","PROS","SIMO","PROSSIMO"],
			["RESPIRI","RIP","RESI","RIPRESI"]
		],
		[
			["PRESENTE","SER","PENTE","SERPENTE"],
			["LOCANDIERA","CALE","NDARIO","CALENDARIO"],
			["MONILE","LI","MONE","LIMONE"],
			["PIETRO","PE","RITO","PERITO"],
			["ENRICO","CE","RINO","CERINO"],
			["CARMELO","CLA","MORE","CLAMORE"],
			["STORMI","MO","STRI","MOSTRI"],
			["PIRATI","RA","PITI","RAPITI"],
			["IGNARE","RE","GINA","REGINA"],
			["VOLATO","TA","VOLO","TAVOLO"]
		]
];

animali = [	
		[
			["VIVE NELLA SAVANA E HA UN COLLO LUNGO","G","IRAFFA","GIRAFFA"],
			["È UN RODITORE CHE FA LE DIGHE","CA","STORO","CASTORO"],
			["HA LA PROBOSCIDE E LUNGHE ZANNE","E","LEFANTE","ELEFANTE"],
			["È UN ANIMALE DOMESTICO CHE FA LE FUSA","","GATTO","GATTO"],
			["HA UN GUSCIO E VIVE SULLA TERRA O IN ACQUA","TAR","TARUGA","TARTARUGA"],
			["È UN CETACEO E HA UNO SFIATATOIO SUL DORSO","B","ALENA","BALENA"],
			["È UN RETTILE CHE STRISCIA E PUò MORDERE","SE","RPENTE","SERPENTE"],
			["È UN INSETTO CHE SALTA. C'È IN PINOCCHIO","G","RILLO","GRILLO"],
			["IL RE DELLA FORESTA","L","EONE","LEONE"],
			["È UN INSETTO CHE VIVE NELL'ALVEARE E FA IL MIELE","","APE","APE"]
		],
		[
			["È UN INSETTO ROSSO COI PUNTINI NERI","COC","CINELLA","COCCINELLA"],
			["È UN ANIMALE CON UN CORNO SUL NASO","RI","NOCERONTE","RINOCERONTE"],
			["È UN UCCELLO BIANCO CHE VIVE VICINO AL MARE","GAB","BIANO","GABBIANO"],
			["HA LE STRISCE BIANCHE E NERE","Z","EBRA","ZEBRA"],
			["È UN INSETTO CHE FA LUCE DI NOTTE","LUC","CIOLA","LUCCIOLA"],
			["È UN RODITORE CHE AMA IL FORMAGGIO","T","OPO","TOPO"],
			["È GRANDE E CI Dà IL LATTE","M","UCCA","MUCCA"],
			["LO SONO IL GORILLA E IL BABBUINO","SC","IMMIE","SCIMMIE"],
			["TI PUNGE DI NOTTE","ZA","NZARA","ZANZARA"],
			["È OOME L'APE MA PIù GRANDE E NERO","CA","LABRONE","CALABRONE"]
		]
];

emozioni = [	
		[
			["REAZIONE DI MERAVIGLIA PER UN EVENTO INASPETTATO","SOR","PRESA","SORPRESA"],
			["IRRITAZIONE VIOLENTA PROVOCATA DA GRAVI OFFESE","RA","BBIA","RABBIA"],
			["ATTESA FIDUCIOSA DI QUALCOSA DI BUONO","SPE","RANZA","SPERANZA"],
			["DESIDERIO ACUTO DI TORNARE A UN TEMPO PASSATO","NO","STALGIA","NOSTALGIA"],
			["STATO DI INTENSA AGITAZIONE INTERIORE PROVOCATA DA INCERTEZZA","AN","SIA","ANSIA"],
			["TIMORE DI PERDERE LA PERSONA AMATA AD OPERA DI ALTRI","GE","LOSIA","GELOSIA"],
			["TORMENTO DI CHI HA COMPIUTO UN'AZIONE CONTRO LA PROPRIA MORALE","RI","MORSO","RIMORSO"],
			["DISAGIO PROVOCATO DA UN RISULTATO CONTRARIO A UN'ASPETTATIVA","DEL","USIONE","DELUSIONE"],
			["SENTIMENTO DI CHI HA DETTO O FATTO QUALCOSA DI DISONOREVOLE","VER","GOGNA","VERGOGNA"],
			["STATO D'ANIMO GIOIOSO E SPENSIERATO","AL","LEGRIA","ALLEGRIA"]
		],
		[
			["REAZIONE NEGATIVA PER COMPORTAMENTI AVUTI IN PASSATO","RIM","PIANTO","RIMPIANTO"],
			["FORTE SENTIMENTO POSITIVO NEI CONFRONTI DI QUALCUNO O QUALCOSA","A","MORE","AMORE"],
			["AVVERSIONE CONTRO PERSONE O COSE","ANT","IPATIA","ANTIPATIA"],
			["SENTIMENTO PROVATO DA QUALCOSA CHE SUSCITA PIETà O AMMIRAZIONE","COMM","OZIONE","COMMOZIONE"],
			["FORTE SENTIMENTO DI PAURA E RIBREZZO","OR","RORE","ORRORE"],
			["EMOZIONE CONTRARIA ALLA GIOIA E ALLA FELICITà","TRI","STEZZA","TRISTEZZA"],
			["STUPORE E SORPRESA SUSCITATA DA QUALCOSA","MERA","VIGLIA","MERAVIGLIA"],
			["SENTIMENTO NEGATIVO DI CHI VORREBBE GLI OGGETTI O LE QUALITà DEGLI ALTRI","IN","VIDIA","INVIDIA"],
			["LA RINUNCIA AL RANCORE VERSO UNA PERSONA","PER","DONO","PERDONO"],
			["FORTE SENSO DI AUTOSTIMA VERSO LE PROPRIE CAPACITà","OR","GOGLIO","ORGOGLIO"]
		]
];

mestieri = [	
		[
			["PREPARA IL PANE E I BISCOTTI","F","ORNAIO","FORNAIO"],
			["RIPARA LE AUTOMOBILI","ME","CCANICO","MECCANICO"],
			["EMETTE LE SENTENZE IN TRIBUNALE","GI","UDICE","GIUDICE"],
			["DIPINGE LE PARETI DELLE CASE","IMB","IANCHINO","IMBIANCHINO"],
			["GUIDA GLI AEREI","P","ILOTA","PILOTA"],
			["COMANDA SULLA NAVE","CA","PITANO","CAPITANO"],
			["VENDE GLI OGGETTI","COMMER","CIANTE","COMMERCIANTE"],
			["PROGETTA LE CASE","ARC","HITETTO","ARCHITETTO"],
			["CURA GLI AMMALATI","DO","TTORE","DOTTORE"],
			["CURA GLI ANIMALI","VETE","RINARIO","VETERINARIO"]
		],
		[
			["SUONA GLI STRUMENTI","MUS","ICISTA","MUSICISTA"],
			["PULISCE LA SCUOLA","BI","DELLO","BIDELLO"],
			["SPIEGA E INTERROGA","INSE","GNANTE","INSEGNANTE"],
			["DONNA CHE VENDE I FIORI","FI","ORAIA","FIORAIA"],
			["GOVERNA LA CITTà","SI","NDACO","SINDACO"],
			["DIRIGE IL TRAFFICO","VI","GILE","VIGILE"],
			["RIPARA I TUBI E I LAVANDINI","IDR","AULICO","IDRAULICO"],
			["COLTIVA LA TERRA","CON","TADINO","CONTADINO"],
			["VA SULLA BARCA IN CERCA DI PESCE","PES","CATORE","PESCATORE"],
			["DIRIGE LA REALIZZAZIONE DI UN FILM","RE","GISTA","REGISTA"]
		]
];


pluraliirregolari = [	["","","",""],
		[
			["L'UOVO /","LE UOVA","","GLI UOVI","LE UOVA"],
			["IL GINOCCHIO /","LE GINOCCHIA","","LE GINOCCHIA","I GINOCCHI"],
			["L'UOMO/","GLI UOMINI","","GLI UOMINI","GLI UOMI"],
			["IL DIO /","GLI DEI","","I DII","GLI DEI"],
			["IL BUE /","I BUOI","","I BUOI","I BUI"],
			["IL TEMPIO /","I TEMPLI","","I TEMPLI","I TEMPI"],
			["L'UNIVERSITà /","LE UNIVERSITà","","LE UNIVERSITè","LE UNIVERSITà"],
			["L'AUTOBUS /","GLI AUTOBUS","","GLI AUTOBUS","GLI AUTOBUSI"],
			["LA SERIE /","LE SERIE","","LE SERIE","LE SERI"],
			["IL DITO /","LE DITA","","I DITI","LE DITA"]
		],
		[
			["IL LUOGO /","I LUOGHI","","I LUOGHI","I LUOGI"],
			["IL PROBLEMA /","I PROBLEMI","","I PROBLEMA","I PROBLEMI"],
			["IL NEMICO /","I NEMICI","","I NEMICHI","I NEMICI"],
			["IL TEDESCO /","I TEDESCHI","","I TEDESCI","I TEDESCHI"],
			["L'ARANCIA /","LE ARANCE","","LE ARANCE","LE ARANCIE"],
			["IL CINEMA /","I CINEMA","","I CINEMA","I CINEMI"],
			["LA SPIAGGIA /","LE SPIAGGE","","LE SPIAGGIE","LE SPIAGGE"],
			["LO ZIO /","GLI ZII","","GLI ZII","GLI ZI"],
			["L'AUTO /","LE AUTO","","LE AUTE","LE AUTO"],
			["LA CRISI /","LE CRISI","","LE CRISI","LE CRISE"]
		]
];