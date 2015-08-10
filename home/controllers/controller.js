var app = angular.module('app', [])
app.controller('cardController', ['$scope', function($scope){
    $scope.repos = data
    console.log($scope.repos)
}])