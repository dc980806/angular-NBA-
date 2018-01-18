<?php 
$id=$_POST['id'];
$name=$_POST['name'];
$number=$_POST['number'];
$add=$_POST['add'];
$qiudui=$_POST['qiudui'];
header("content-type:text/html;charset=utf-8");
$link=mysqli_connect(localhost,root,root);
mysqli_set_charset($link,'utf8');
mysqli_select_db($link,'test');

$sql="UPDATE nba SET `name`='{$name}',number='{$number}',`add`='{$add}',qiudui='{$qiudui}' WHERE id='{$id}';";
$query=mysqli_query($link,$sql);
if($query&&mysqli_affected_rows($link)>0){
	echo "ok";
}else{
	echo "error";
}
?>