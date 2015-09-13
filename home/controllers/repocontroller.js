var repoApp = angular.module('repoApp', [])
repoApp.controller('repoController', ['$scope', function($scope){
    $scope.repos = data
    $scope.constructed = []
    title = window.location.href.split('#')[1]
    for (repo in data){
        if (data[repo]['title'] === title){
            $scope.repo = data[repo]
        }
    }

    for (obj in $scope.repo['headers']){
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

    for (link in $scope.links.jotNotes){
        linkObj = {}
        val =  $scope.links.jotNotes[link]
        linkObj.link = val
        if (val.indexOf("play.google.com") > -1){
            linkObj.representation = "Play Store"
        }else if (val.indexOf("itunes.apple.com") > -1){
            linkObj.representation = "App Store"
        }else{
            linkObj.representation = val.split("www.")[1]
        }
        $scope.constructed.push(linkObj)
    }
}])