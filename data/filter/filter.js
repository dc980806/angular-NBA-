var my=angular.module('myFilter', []);
my.filter('userFilter',function() {
	return function (val) {
		/*  用来保存转换之后的数据*/
        var pos="";
        switch(val){
            case "SG":
                pos="得分后卫(SG)";
                break;
            case "PF":
                pos="大前锋(PF)";
                break;
            case "SF":
                pos="小前锋(SF)";
                break;
            case "PG":
                pos="控球后卫(PG)";
                break;
            case "C":
                pos="中锋(C)";
                break;
        }
        return pos;

	}
});