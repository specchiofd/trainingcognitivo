sto_controlando = false;
tmp_feedback = 0;
my_tmp_esatte = 0;
my_tmp_errate = 0;
my_tmp_omesse = 0;
function final_feedback_choice(){
//0 uno alla volta, 1 tutto insieme
in_ingame = false;
$(".cella").removeClass("myselecteded");
$("#done").hide();
if(mostra_feedback){
  tutto_insieme();
}
else{
  uno_alla_volta();
}
}

function tutto_insieme(){
  tmp_esatte = 0;
  tmp_errate = 0;
  tmp_omesse = 0;
  for(i=0;i<in_width*in_height;i++){
    if(parseInt($("#cella_"+i).attr("val"))==0){
      if(parseInt($("#cella_"+i).attr("barrata"))==1){
        tmp_esatte += 1;
        $("#cella_"+i).empty();
        $("#cella_"+i).append("<img class='img-responsive' src='./img/v.png'/>");
      }else{
        tmp_omesse +=1;
        $("#cella_"+i).empty();
        $("#cella_"+i).append("<img class='img-responsive' src='./img/missed.png'/>");
      }
    }else{
      if(parseInt($("#cella_"+i).attr("barrata"))==1){
        tmp_errate +=1;
        $("#cella_"+i).empty();
        $("#cella_"+i).append("<img class='img-responsive' src='./img/wrong.png'/>");
}
    }
  }
  $("#esatta_0").text(tmp_esatte);
  $("#errate").text(tmp_errate);
  $("#omesse").text(tmp_omesse);
  $("#esatte_wrapper").show();
  $("#errate_wrapper").show();
  $("#omesse_wrapper").show();
  if(tmp_esatte == stimoli){
    $("#board").css("background-color","green");
  }
  else{
    $("#board").css("background-color","darkgrey");
  }
}

function uno_alla_volta(){
  my_tmp_esatte = 0;
  my_tmp_errate = 0;
  my_tmp_omesse = 0;
  $("#esatte_wrapper").show();
  $("#errate_wrapper").show();
  $("#omesse_wrapper").show();
  tmp_feedback = 0;
  sto_controllando = true;
  controlla(tmp_feedback);
}

function controlla(r){
  setTimeout(function(){
    if(r==in_width*in_height){
      sto_controllando = false;
      $(".cella").removeClass("myselecteded");
      if(my_tmp_esatte == stimoli){
        $("#board").css("background-color","green");
      }
      else{
        $("#board").css("background-color","darkgrey");
      }
    }else{
      cella = $("#cella_"+r);
      $(".cella").removeClass("myselecteded");
      cella.addClass("myselecteded");
      if(parseInt(cella.attr("val"))==0){
        if(parseInt(cella.attr("barrata"))==1){
          my_tmp_esatte += 1;
          $("#esatta_0").text(my_tmp_esatte);
          cella.empty();
          cella.append("<img class='img-responsive' src='./img/v.png'/>");
        }else{
          my_tmp_omesse +=1;
          $("#omesse").text(my_tmp_omesse);
          cella.empty();
          cella.append("<img class='img-responsive' src='./img/missed.png'/>");
        }
      }else{
        if(parseInt(cella.attr("barrata"))==1){
          my_tmp_errate +=1;
          $("#errate").text(my_tmp_errate);
          cella.empty();
          cella.append("<img class='img-responsive' src='./img/wrong.png'/>");
  }
      }
      tmp_feedback+=1;
      controlla(tmp_feedback);
    }
  },400);
}
