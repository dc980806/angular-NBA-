<?php 
$piaoshu=$_POST['piaoshu'];
$id=$_POST['id'];

header("content-type:text/html;charset=utf-8");
$link=mysqli_connect(localhost,root,root);
mysqli_set_charset($link,'utf8');
mysqli_select_db($link,'test');

$sql="UPDATE nba SET piaoshu='{$piaoshu}' WHERE id='{$id}'";
$query=mysqli_query($link,$sql);
if($query&&mysqli_affected_rows($link)>0){
	echo "ok";
}else{
	echo "error";
}

 ?>