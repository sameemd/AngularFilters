// Code goes here

var app = angular.module("myApp", []);

app.service("postdata", function($http) {
  this.getData = function() {
    return $http.get("https://jsonplaceholder.typicode.com/posts");
  };
});

app.controller("tabController", function($scope, postdata) {
  
  postdata.getData().then(function(data) {
    $scope.data = data.data;
});
});