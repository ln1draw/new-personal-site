app.controller('StitchifierController', ['$scope', '$http', function($scope, $http) {
  var csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  $scope.ascii_width = 50;

  $scope.submit = function() {
    var req = {
      method: 'POST',
      url: '/stitchify',
      params: {
        ascii_width: $scope.ascii_width,
        file: $scope.file
      }
    }
    $http(req).then(function(){

    }, function() {

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