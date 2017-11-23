'use strict'
 angular.module('app').directive('appPositionList',[function(){
      return{
          restrict:'AE',
          replace:true,
          templateUrl:'view/template/apppositionlist.html'
      }
 }])