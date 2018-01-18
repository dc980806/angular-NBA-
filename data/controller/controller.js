var my=angular.module('myController',[]);
/*list.html页面的控制器*/
my.controller('selectAll', function(selectUser,$scope,$rootScope,$location){
	selectUser.selectAll().then(function (req) {
		console.log(req.data)
		$scope.userobj=angular.fromJson(req.data)
	})
	/*设置点击名字*/
	$scope.cont=function (num) {
		$rootScope.id=num;
	}

	/*跳转编辑球员信息*/
	$scope.update=function (num) {
		$rootScope.bianJiId=num;
		 $location.path("/bianJi");
	}
	/*删除数据*/
	$scope.dele=function (num) {
		$.ajax({
			type:'post',
			url:'php/deleteUser.php',
			data:{id:num},
			success:function (data) {
				if(data=="ok"){
					alert("删除成功！");
					selectUser.selectAll().then(function (req) {
						console.log(req.data)
						$scope.userobj=angular.fromJson(req.data)
						$location.path('/list')
					})
				}else{
					alert("删除失败！")
				}
			}
		})
	}
	/*新增球员信息*/
	$scope.addUser=function () {
		$location.path('/insertUser')
	}
})



/*userCont.html的页面控制器*/
my.controller('selectOne',function ($rootScope,$scope,selectUser,$location) {
	/*通过全局属性得到点击的主键ID*/
	$scope.userId=$rootScope.id;
	/*遍历ID对应的球员信息*/
	selectUser.selectAll().then(function (req) {
		$scope.userobj=req.data;
		$scope.One='';
		for(var i=0;i<$scope.userobj.length;i++){
			if($scope.userobj[i].id==$scope.userId){
				$scope.One=$scope.userobj[i]
			}
		}
		console.log($scope.One);
	})
	/*设置返回*/
	$scope.return=function () {
		 $location.path("/list");
	}

	/*投票*/
	$scope.add=function (num) {
		$scope.bool=true;
		$scope.One.piaoshu=parseInt($scope.One.piaoshu)+1;
		$scope.piao=$scope.One.piaoshu;
		$.ajax({
			type:'post',
			url:'php/touPiao.php',
			data:{id:$scope.userId,piaoshu:$scope.piao},
			success:function (data) {
				if(data=="ok"){
					alert("投票成功！")
				}else{
					alert("投票失败！")
				}
			}
		})
	}
})



/*bianJi.html页面的控制器*/
my.controller('bianJi',function ($scope,$location,$rootScope,selectUser) {
	/*设置返回*/
	$scope.remove=function () {
		$location.path("/list");
	}
    /*遍历ID对应的球员信息*/
	selectUser.selectAll().then(function (req) {
		$scope.userobj=req.data;
		$scope.bianJiCont;
		for(var i=0;i<$scope.userobj.length;i++){
			if($scope.userobj[i].id==$rootScope.bianJiId){
				$scope.bianJiCont=$scope.userobj[i];		
			}
		}
		/*双向绑定接收填写信息*/
		$scope.id=$rootScope.bianJiId;
		$scope.name=$scope.bianJiCont.name;
		$scope.number=$scope.bianJiCont.number;
    	$scope.add=$scope.bianJiCont.add;
   		$scope.qiudui=$scope.bianJiCont.qiudui
	})
	/*修改保存*/
	$scope.save=function () {
		$.ajax({
			type:'post',
			url:'php/updateUser.php',
			data:{id:$scope.id,name:$scope.name,number:$scope.number,add:$scope.add,qiudui:$scope.qiudui},
			success:function (data) {
				if(data=="ok"){
					alert("修改数据成功！")
				}else{
					alert("您为做出修改！")
				}
			}
		})
	}
})


/*insertUser.html页面的控制器*/
my.controller('insertUser',function ($location,$scope) {
	/*设置返回*/
	$scope.back=function () {
		$location.path("/list");
	}
		/*双向绑定接收填写信息*/
	$scope.rname;
	$scope.rnumber;
	$scope.radd;
	$scope.rqiudui;
	$scope.new=function () {
		if($("#rname").val()!=""&&$("#rnumber").val()!=""&&$("#radd").val()!=""&&$("#rqiudui").val()!=""){
			$.ajax({
				type:'post',
				url:'php/insertUser.php',
				data:{name:$scope.rname,number:$scope.rnumber,add:$scope.radd,qiudui:$scope.rqiudui},
				success:function (data) {
					if(data=="ok"){
						alert("新增球员成功！")
					}else{
						alert("新增球员失败！")
					}
				}
			})
		}else{
			alert("您有选项尚未完成！")
		}
	}
})