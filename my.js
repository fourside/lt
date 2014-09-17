
angular.module('myApp', []).controller("myCtrl", function($scope) {

  $scope.users = [
    {"name": "hoge", "score": 100},
    {"name": "fuga", "score": 88}
  ];

});
