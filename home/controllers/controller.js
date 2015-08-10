var app = angular.module('app', [])
app.controller('cardController', ['$scope', function($scope){
    $scope.repos = data
    for (repo in data){
        for (header in data[repo]['headers']){
            aboutObj = data[repo]['headers'][header]
            if (aboutObj['header'] === "About"){
                data[repo]['about'] = aboutObj['textgi']
            }
        }
    }
}])