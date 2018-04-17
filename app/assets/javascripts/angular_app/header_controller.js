app.controller('HeaderController', ['$scope', '$timeout', '$http', '$cookies', '$window', function($scope, $timeout, $http, $cookies, $window) {
  $scope.loadedStyle = {};
  $scope.showFace = false;
  $scope.count = 0
  $scope.showBanner = false;
  $scope.bannerStyle = {top: '10px'}

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

  $timeout(function() {
    cookie = $cookies.get('sawBanner')
    today = new Date
    diff = today - parseInt(cookie)
    if ( (cookie == null) || ( Math.ceil(diff / (1000 * 3600 * 24)) > 1)){
      $scope.showBanner = true;
      $cookies.put('sawBanner', today)
    }
  }, 1500)

  updateBannerStyle = function() {
    console.log($window.pageYOffset)
    $scope.bannerStyle = {top: $window.pageYOffset + 'px'}
  }

  angular.element($window).bind("scroll", function() {
    if($scope.showBanner){
      updateBannerStyle();
      $scope.$apply();
    }
  });
}]);