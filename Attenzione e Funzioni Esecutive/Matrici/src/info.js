function show_info(ogg){
    $(".immagini_istruzioni").hide();
    $("#testo_istruzioni").text("");
    $("#tipo_istruzione").text("");
    switch(ogg.attr("tipo")){
        case 'modalita':
        $("#tipo_istruzione").text(" - Modalità");
        $("#testo_istruzioni").text("Sono disponibili 3 modalità: \n \n - nella modalità Riproduci lo scopo sarà quello di riprodurre la matrice che apparirà sullo schermo \n \n  - nella modalità Sequenza si dovrà riprodurre la matrice nell'ordine di comparsa degli stimoli \n \n  - nella modalità Sequenza inversa si dovrà riprodurre al contrario l'ordine di comparsa degli stimoli.");
        $("#help_modalita_riproduzione").show();
        break;
        case 'compito':
        $("#tipo_istruzione").text(" - Compito");
        $("#testo_istruzioni").text("Nella modalità Semplice bisognerà riprodurre la matrice nello spazio in cui essa appare. \n \n Nella modalità Spazialmente modificata bisogna riprodurla in uno spazio sottostante. \n \n Anche nella modalità Speculare bisogna riprodurre la matrice nello spazio sottostante, ma come se fosse riflessa allo specchio.");
        $("#help_sottocompito").show();
        break;
        case 'numerodistrattori':
        $("#tipo_istruzione").text(" - Distrattore");
        $("#testo_istruzioni").text("I distrattori sono stimoli che devono essere ignorati nella riproduzione della matrice. \n \n All'inizio di ogni attività coi distrattori verranno mostrati i distrattori da non considerare.");
        $("#help_distrattori").show();
        break;
        case 'tipodistrattori':
        $("#tipo_istruzione").text(" - Tipo di distrattore");
        $("#testo_istruzioni").text("È possibile selezionare tre tipi di distrattore: \n \n - Diverso colore: il distrattore è simile alle immagini da ricordare, ma di diverso colore \n \n - Immagine del set: il distrattore è simile alle immagini da tenere a mente \n \n - Diversa immagine: il distrattore è un'immagine totalmente diversa (un pallone da calcio).");
        $("#help_tipo_distrattori").show();
        break;
        case 'immagini':
        $("#tipo_istruzione").text(" - Immagini");
        $("#testo_istruzioni").text("Di seguito sono mostrati i diversi set di immagini disponibili, ciascuno dotato di un suo distrattore.");
        $("#help_immagini").show();
        break;
    }

    $("#istruzioni").modal("show");

}
