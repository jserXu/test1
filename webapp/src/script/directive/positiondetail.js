'use strict'
angular.module('app').directive('appPositionDetail',[function(){
       return{
           restrict:'AE',
           replace:true,
           templateUrl:'view/template/positiondetail.html'
       }
}]);