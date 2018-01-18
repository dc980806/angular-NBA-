var my=angular.module('myApp',['ngRoute','server','myController','myFilter']);
/*主路由*/
my.config(function($routeProvider) {
	$routeProvider.when('/list',{
		controller:'selectAll',
		templateUrl:'data/page/list.html'
	}).when('/userCont',{
		controller:'selectOne',
		templateUrl:'data/page/userCont.html'
	}).when('/bianJi',{
		controller:'bianJi',
		templateUrl:'data/page/bianJi.html'
	}).when('/insertUser',{
		controller:'insertUser',
		templateUrl:'data/page/insertUser.html'
	}).otherwise({
		redirectTo:'/list'
	})
})