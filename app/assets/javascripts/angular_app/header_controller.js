app.controller('HeaderController', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.loadedStyle = {};
  $scope.showFace = false;
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
  }
}]);