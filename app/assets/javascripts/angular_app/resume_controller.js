app.controller('ResumeController', ['$scope', function($scope) {
  $scope.active = {};

  $scope.toggleActive = function(title) {
    if ($scope.active == title) {
      $scope.active = {};
    } else {
      $scope.active = title;
    }
  }

  $scope.isActive = function(title) {
    if ($scope.active == title) {
      return true;
    } else {
      return false;
    }
  }

  $scope.experiences = [
    {
      title: "QA and Tech Support",
      company: "eMedia Music",
      start_date: "September 2012",
      end_date: "September 2013",
      technologies: ['JavaScript']
    },
    {
      title: "Developer- Intern",
      company: "RealPage Inc",
      start_date: "April 2014",
      end_date: "September 2014",
      technologies: ['JavaScript', 'CoffeeScript', 'AngularJS', 'PHP', 'git', 'bower', 'CSS', 'sass']
    },
    {
      title: "Guest Lecturer",
      company: "Ada Developers Academy",
      start_date: "January 2015",
      end_date: "January 2015",
      technologies: ['JavaScript', 'AngularJS']
    },
    {
      title: "Web Developer",
      company: "NIRD LLC",
      start_date: "August 2014",
      end_date: "September 2015",
      technologies: ['JavaScript', 'AngularJS', 'CoffeeScript', 'git', 'Rails', 'Ruby', 'rspec', 'jasmine', 'bootstrap']
    },
    {
      title: "Web Developer",
      company: "Foundry Interactive",
      start_date: "January 2016",
      end_date: "April 2016",
      technologies: ['Java', 'JavaScript', 'Jasmine', 'perforce']
    },
    {
      title: "Software Engineer",
      company: "Latchel",
      start_date: "February 2017",
      end_date: "March 2017",
      technologies: ['git', 'JavaScript', 'Rails', 'AngularJS']
    },
    {
      title: "Software Engineer",
      company: "Freelance",
      start_date: "April 2016",
      end_date: new Date,
      technologies: ['git', 'JavaScript', 'Jekyll', "Rails", "Ruby", "AngularJS"]
    }
  ];
}]);