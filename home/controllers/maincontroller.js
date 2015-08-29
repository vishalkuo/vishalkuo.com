var colours = ["#607D8B","#2296F3","#009688","#673AB7","#FF9800"]

var app = angular.module('app', [])
app.controller('cardController', ['$scope', function($scope){
    $scope.repos = data
    for (repo in data){
        data[repo]['bg'] = "#3F51B5"
        for (header in data[repo]['headers']){
            aboutObj = data[repo]['headers'][header]
            if (aboutObj['header'] === "About"){
                data[repo]['about'] = aboutObj['text']
            }
        }
    }
}])
