/*自定义HTTP服务*/
angular.module('server', []).factory('selectUser',function ($http) {
	return {
		selectAll:function () {
			return $http({method:'post',url:'php/selectAll.php'})
		}
	}
})