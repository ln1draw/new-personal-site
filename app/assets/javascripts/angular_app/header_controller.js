app.controller('HeaderController', ['$scope', '$timeout', '$http', function($scope, $timeout, $http) {
  $scope.loadedStyle = {};
  $scope.showFace = false;
  $scope.count = 0

  $http.get('/counter/show').then( function(response) { $scope.count = response.data.clicks }, function(response){} )

  $timeout(function() {
    $scope.loadedStyle = {'transform': 'rotateY(' + (180 * setInt()) + 'deg)'};
  }, 500);

  setInt = function () {
    int = Math.floor(Math.random() * 7) + 1;
    // showFace is true if int is odd
    $scope.showFace = int % 2 != 0;
    return int;
  }

  $scope.faceToggle = function() {
    $scope.loadedStyle = {};
    $scope.showFace = !$scope.showFace;
    addFaceCount();
  }

  addFaceCount = function() {
    $http.get('/counter/add_one').then( function(response) { $scope.count = response.data.clicks } );
  }
}]);