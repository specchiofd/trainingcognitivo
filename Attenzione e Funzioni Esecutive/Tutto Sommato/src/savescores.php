
<?php


$db = "Sql720809_5";//Your database name
$dbu = "Sql720809";//Your database username
$dbp = "fbea2wct8r";//Your database users' password
$host = "62.149.150.204";//MySQL server - usually localhost

$dblink = mysql_connect($host,$dbu,$dbp);
$seldb = mysql_select_db($db);

if(isset($_POST['name']) && isset($_POST['score'])){

     //Lightly sanitize the GET's to prevent SQL injections and possible XSS attacks
     $name = strip_tags(mysql_real_escape_string($_POST['name']));
     $score = strip_tags(mysql_real_escape_string($_POST['score']));
     $sql = mysql_query("INSERT INTO `$db`.`tuttosommato` (`id`,`name`,`score`) VALUES ('','$name','$score');");
     
     if($sql){
     
          //The query returned true - now do whatever you like here.
          echo 'Your score was saved. Congrats!';
          
     }else{
     
          //The query returned false - you might want to put some sort of error reporting here. Even logging the error to a text file is fine.
          echo 'There was a problem saving your score. Please try again later.';
          
     }
     
}else{
     echo 'Your name or score wasnt passed in the request. Make sure you add ?name=NAME_HERE&score=1337 to the tags.';
}

mysql_close($dblink);//Close off the MySQL connection to save resources.
?>