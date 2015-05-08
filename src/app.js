angular.module('app', ['ui.router']);

angular.module('app').controller('MainCtrl', function(){
  this.message = "Hello World";
});

angular.module('app').config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "partials/state1.tpl.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "partials/state1.list.tpl.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "partials/state2.tpl.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "partials/state2.list.tpl.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });
});
