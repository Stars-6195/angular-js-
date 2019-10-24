var app = angular.module('angularTable', ['angularUtils.directives.dirPagination']);
//app.Access-Control-Allow-Methods( GET, POST, OPTIONS)
app.controller('list',function($scope, $http){
    //declaring an empty array
    $scope.users = []; 
    header= "json/employeelist.json",{headers:{'Access-Control-Allow-Origin': 'GET'}};
    $http.get(header).success(function(response){
        //to fetch data into $scope.data
        $scope.users = response;  
    });

    
    //sorting
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
});