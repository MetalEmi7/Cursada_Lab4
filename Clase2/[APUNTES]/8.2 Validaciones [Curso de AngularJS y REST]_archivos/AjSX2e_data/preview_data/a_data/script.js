var app = angular.module("app", []);

app.controller("PruebaController", ['$scope',function($scope) {

  $scope.requeridoNombre=true;
  $scope.patternNombre=/^[a-zA-Z]*$/;

}]);