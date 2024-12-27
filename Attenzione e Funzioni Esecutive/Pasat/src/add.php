<?php

$date = date('Y-m-d H:i:s');
$nome = strval($_GET['nome']);
$modalita = strval($_GET['modalita']);
$operazione = strval($_GET['operazione']);
$nstimoli = intval($_GET['nstimoli']);
$span = intval($_GET['span']);
$feedback = intval($_GET['feedback']);
$ranges = intval($_GET['ranges']);
$tempoesposizione = intval($_GET['tempoesposizione']);
$peresatte = intval($_GET['peresatte']);
$pererrate = intval($_GET['pererrate']);
$mediaponderata = intval($_GET['mediaponderata']);
$mediaesatte = intval($_GET['mediaesatte']);
$mediaerrate = intval($_GET['mediaerrate']);

$con = mysqli_connect('62.149.150.204','Sql720809','fbea2wct8r','Sql720809_2');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}
echo 'ok';
mysqli_query($con,"INSERT INTO Pasat (data,nome,modalita,operazione,nstimoli,span,feedback,ranges,tempoesposizione,peresatte,pererrate,mediaponderata,mediaesatte,mediaerrate)
VALUES ('$date', '$nome', '$modalita', '$operazione', '$nstimoli','$span','$feedback','$ranges','$tempoesposizione','$peresatte','$pererrate','$mediaponderata','$mediaesatte','$mediaerrate')");

mysqli_close($con);
?>
