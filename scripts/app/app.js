var bee = angular.module("bee", ['ngRoute', 'angularCharts', 'uiGmapgoogle-maps', 'ui.bootstrap']);

//map part
bee.controller('mapCtrl', function($scope) {
    $scope.map = {center: {latitude: 43.8562586, longitude: 18.413076300000057 }, zoom: 14 };
    $scope.options = {scrollwheel: false};

    $scope.marker = {
      id: 0,
      coords: {
        latitude: $scope.map.center.latitude,
        longitude: $scope.map.center.longitude
      },
      options: { draggable: false }
  };
});

bee.controller('ordersController', function($scope, $http){

  $http.get('scripts/app/items.json').success(function(data) {
    $scope.orders = data;
  });

  $scope.orderProp = 'price';

});

bee.controller('navbarController', function($scope){

  var usernameEnter = document.getElementById('usr').value;
  var passwordEnter = document.getElementById('pass').value;

  $scope.oldUser = {
      username: 'vildantursic',
      password: '12345678'
  }

});

bee.controller('userController', function($scope){

  $scope.user = {
        name: 'Vildan',
        surname: 'Tursic',
        username: 'vildantursic',
        age: '21',
        password: '12345678',
        password_repeat: '',
        email: 'vildantursic@hotmail.com',
        email_repeat: '',
        profilePhoto: '../images/265-2.jpg'
    };

    $scope.newsletter = true;
    $scope.notifications = false;

});


bee.controller('mainController', function($scope, $http){

  $http.get('scripts/app/items.json').success(function(data) {
    
      $scope.items = data;
    
  });
});

bee.controller('itemsController', function($scope, $http){

  $http.get('scripts/app/items.json').success(function(data) {
    
      $scope.items = data;
  });

  $scope.orderProp = 'price';

});

bee.controller('purchaseController', function($scope, $http, $routeParams){

  $http.get('scripts/app/items.json').success(function(data) {
    
      $scope.items = data;

      $scope.ID = $routeParams.id;
  });

});

bee.controller('categoryController', function($scope, $http){

  $http.get('scripts/app/items.json').success(function(data) {
    
      $scope.items = data;
  });

});

bee.config(['$routeProvider',
  function($routeProvider, $routeParams) {
    $routeProvider.
      when('/laptops', {
        templateUrl: 'views/categoryPartialView.html',
        controller: 'categoryController'
      }).
      when('/items/:id', {
        templateUrl: 'views/purchasePartialView.html',
        controller: 'purchaseController'
      }).
      when('/', {
        templateUrl: 'views/mainPartialView.html',
        controller: 'mainController'
      }).
      when('/signin', {
        templateUrl: 'views/signinPartialView.html',
        controller: 'userController'
      }).
      when('/profile', {
        templateUrl: 'views/profilePartialView.html',
        controller: 'userController'
      }).
      when('/statistic', {
        templateUrl: 'views/ordersPartialView.html',
        controller: 'ordersController'
      }).
      when('/items', {
        templateUrl: 'views/ItemsPartialView.html',
        controller: 'itemsController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
