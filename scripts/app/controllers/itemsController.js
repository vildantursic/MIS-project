angular.module("bee").controller('itemsController', function($scope, $http){

  $http.get('scripts/app/items.json').success(function(data) {
    
      $scope.items = data;
  });

  $scope.orderProp = 'price';

});