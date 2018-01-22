app.controller('HeaderController', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.loadedStyle = {};
  $timeout(function() {
    $scope.loadedStyle = {'transform': 'rotateY(' + (180 * getInt()) + 'deg)'};
  }, 500);

  getInt = function () {
     return Math.floor(Math.random() * 7) + 1;
  }
}]);