current_position = 0;
prev_position = -1;
function su(){
  if(current_position-in_width > -1){
    if(!parseInt(stabiliscicella(current_position-in_width).attr("semi"))){
    prev_position = current_position;
    current_position -= in_width;
    updatePosition(prev_position,current_position);}
  }
}

function giu(){
  if(current_position+in_width < in_width*in_height){
    if(!parseInt(stabiliscicella(current_position+in_width).attr("semi"))){
    prev_position = current_position;
    current_position += in_width;
    updatePosition(prev_position,current_position);}
  }
}

function sinistra(){
  if(current_position-1 > -1){
    if(!parseInt(stabiliscicella(current_position-1).attr("semi"))){
    prev_position = current_position;
    current_position -= 1;
    updatePosition(prev_position,current_position);}
  }
}

function destra(){
  if(current_position+1 < in_width*in_height){
    if(!parseInt(stabiliscicella(current_position+1).attr("semi"))){
    prev_position = current_position;
    current_position += 1;
    updatePosition(prev_position,current_position);}
  }
}

function stabiliscicella(n){
  return($("#cella_"+n));
}

function setFirst(){
  $("#cella_0").addClass("myselecteded");
}

function updatePosition(pre,current){
  stabiliscicella(pre).removeClass("myselecteded");
  stabiliscicella(current).addClass("myselecteded");
}
