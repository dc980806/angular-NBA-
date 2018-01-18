<?php
$name=$_POST['name'];
$number=$_POST['number'];
$add=$_POST['add'];
$qiudui=$_POST['qiudui'];
$piaoshu=$_POST['piaoshu'];


header("content-type:text/html;charset=utf-8");
$link=mysqli_connect(localhost,root,root);
mysqli_set_charset($link,'utf8');
mysqli_select_db($link,'test'); 

$sql="INSERT INTO nba (name,`add`,`number`,qiudui,piaoshu) VALUES ('{$name}','{$add}','{$number}','{$qiudui}','{$piaoshu}')";
$query=mysqli_query($link,$sql);
if($query&&mysqli_affected_rows($link)>0){
	echo "ok";
}else{
	echo "error";
}
?>