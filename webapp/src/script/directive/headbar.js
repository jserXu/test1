'use strict'
angular.module('app').directive('appHeaderBar',[function(){
    return{
        restrict:'AE',
        replace:true,
        templateUrl:'view/template/appheadbar.html',
        link:function(scope){
            scope.back=function(){
                window.history.back();
            }
        }
    }
}])