'use strict'
angular.module('app').directive('appPositionInfo',[function(){
    return{
        restrict:'AE',
        replace:true,
        templateUrl:'view/template/positioninfo.html'
    }
}])