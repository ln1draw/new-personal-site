app.controller('StitchifierController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
  // var csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  $scope.width = 50;
  $scope.url = 'http://www.ellenwondra.com/MYFACE.jpg'
  $scope.results = ''
  $scope.loading = false;

  $scope.submit = function() {
    $scope.loading = true;
    var req = {
      method: 'GET',
      url: '/stitchify/svg',
      params: {
        width: $scope.width,
        url: $scope.url
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