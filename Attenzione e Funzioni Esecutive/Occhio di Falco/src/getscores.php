<?php
header('Access-Control-Allow-Origin: *');




$host="62.149.150.204"; // Host name 
$username="Sql720809"; // Mysql username 
$password="fbea2wct8r"; // Mysql password 
$db_name="Sql720809_5"; // Database name 
$tbl_name="occhiodifalco"; // Table name

// Connect to server and select database.
mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
mysql_select_db("$db_name")or die("cannot select DB");

// Retrieve data from database 
$sql="SELECT * FROM occhiodifalco ORDER BY score DESC LIMIT 20";
$result=mysql_query($sql);

// Start looping rows in mysql database.
while($rows=mysql_fetch_array($result)){
echo $rows['name'] . "|" . $rows['score'] . "|";

// close while loop 
}

// close MySQL connection 
mysql_close();
?>