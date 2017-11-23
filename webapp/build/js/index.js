'use strict'
angular.module('app',['ui.router'])
'use strict'
angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
      $stateProvider.state('main',{
          url:'/main',
          templateUrl:'view/main.html',
          controller:'mainCtrl'
      }).state('position',{
          url:'/position/:id',
          templateUrl:'view/position.html',
          controller:'positionCtrl'
      });
      $urlRouterProvider.otherwise('main');
}])
'use strict'
angular.module('app').controller('mainCtrl',['$scope',function($scope){
    
}])
'use strict'
angular.module('app').controller('positionCtrl',[function($scope){

}]);
'use strict'
angular.module('app').directive('appFooter',[function(){
    return{
        restrict:'AE',
        replace:true,
        templateUrl:'view/template/footer.html'
    }
}])
'use strict'
angular.module('app').directive('appHead',[function(){
    return{
        restrict:'AE',
        replace:true,
        templateUrl:'view/template/head.html'
    }
}])
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
'use strict'
angular.module('app').directive('appPositionDetail',[function(){
       return{
           restrict:'AE',
           replace:true,
           templateUrl:'view/template/positiondetail.html'
       }
}]);
'use strict'
angular.module('app').directive('appPositionInfo',[function(){
    return{
        restrict:'AE',
        replace:true,
        templateUrl:'view/template/positioninfo.html'
    }
}])
'use strict'
 angular.module('app').directive('appPositionList',[function(){
      return{
          restrict:'AE',
          replace:true,
          templateUrl:'view/template/apppositionlist.html'
      }
 }])