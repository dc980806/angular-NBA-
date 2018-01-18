<?php 
header("content-type:text/html;charset=utf-8");
$link=mysqli_connect(localhost,root,root)or die("1");
mysqli_set_charset($link,"utf8")or die("2");
mysqli_select_db($link,"test");

$sql="SELECT * FROM nba";
$query=mysqli_query($link,$sql);
if($query&&mysqli_num_rows($query)>0){
	echo json_encode(mysqli_fetch_all($query,MYSQLI_ASSOC),JSON_UNESCAPED_UNICODE);
}else{
	echo "error";
}
 ?>
