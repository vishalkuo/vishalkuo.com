var repoApp = angular.module('repoApp', [])
repoApp.controller('repoController', ['$scope', function($scope){
    $scope.repos = data
    title = window.location.href.split('#')[1]
    for (repo in data){
        if (data[repo]['title'] === title){
            $scope.repo = data[repo]
        }
    }

    for (obj in $scope.repo['headers']){
        console.log($scope.repo['headers'][obj])
        if ($scope.repo['headers'][obj].header === 'About'){
            $scope.about = $scope.repo['headers'][obj]
        }
        if ($scope.repo['headers'][obj].header === 'Technologies'){
            $scope.technologies = $scope.repo['headers'][obj]
        }
        if ($scope.repo['headers'][obj].header === "Dates"){
            $scope.dates = $scope.repo['headers'][obj]
        }

        if ($scope.repo['headers'][obj].header === "Links"){

            $scope.links = $scope.repo['headers'][obj]
        }
     }
}])