app.controller('StitchifierController', ['$scope', '$http', '$sce', '$location', function($scope, $http, $sce, $location) {
  // var csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  $scope.width = 50;
  $scope.host = 'http://www.ellenwondra.com/gothprincess.jpg'
  $scope.results = ''
  $scope.loading = false;
  $scope.num_of_colors = 10;
  $scope.custom_colors = '';
  $scope.host = $location.host();

  $scope.submit = function() {
    $scope.loading = true;
    var req = {
      method: 'GET',
      url: '/stitchify/svg',
      params: {
        width: $scope.width,
        url: $scope.url,
        num_of_colors: $scope.num_of_colors,
        custom_colors: $scope.custom_colors
      }
    }
    $http(req).then(function(res){
      $scope.results = $sce.trustAsHtml(res['data']['svg'])
      $scope.loading = false;
    }, function() {
      $scope.loading = false;
    })
  }
}]);

// var req = {
//  method: 'POST',
//  url: 'http://example.com',
//  headers: {
//    'Content-Type': undefined
//  },
//  data: { test: 'test' }
// }

// $http(req).then(function(){...}, function(){...});