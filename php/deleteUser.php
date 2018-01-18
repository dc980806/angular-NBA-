<?php 
$id=$_POST['id'];
header("content-type:text/html;charset=utf-8");
$link=mysqli_connect(localhost,root,root)or die("1");
mysqli_set_charset($link,"utf8")or die("2");
mysqli_select_db($link,"test");

$sql="DELETE FROM nba WHERE id='{$id}';";
$query=mysqli_query($link,$sql);
if($query&&mysqli_affected_rows($link)>0){
	echo "ok";
}else{
	echo "error";
}

?>
