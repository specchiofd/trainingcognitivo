<?php
$data = json_decode(file_get_contents('php://input'),true);
$newJsonString = json_encode($data);
file_put_contents('record.json', $newJsonString);
?>