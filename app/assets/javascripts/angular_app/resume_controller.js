app.controller('ResumeController', ['$scope', function($scope) {
  $scope.active = {};

  $scope.toggleActive = function(company) {
    if ($scope.active == company) {
      $scope.active = {};
    } else {
      $scope.active = company;
    }
  }

  $scope.isActive = function(company) {
    if ($scope.active == company) {
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
      technologies: ['JavaScript', 'HTML', 'CSS'],
      blurb: "I was QA and Tech Support for a music education software company. I taught myself HTML, CSS, and JavaScript in order to improve the tech support site based on observations I made of customer needs."
    },
    {
      title: "Developer- Intern",
      company: "RealPage Inc",
      start_date: "April 2014",
      end_date: "September 2014",
      technologies: ['JavaScript', 'CoffeeScript', 'AngularJS', 'PHP', 'git', 'bower', 'CSS', 'sass'],
      blurb: "I acted as one of two front-end developers on the ActiveBuilding product, submitting production code starting my first week. I owned and implemented features in both a new AngularJS app and a legacy PHP app."
    
    },
    {
      title: "Guest Lecturer",
      company: "Ada Developers Academy",
      start_date: "January 2015",
      end_date: "January 2015",
      technologies: ['JavaScript', 'AngularJS'],
      blurb: "I solely created a curriculum which I personally taught during a two-week guest lecturer position at Ada Developers Academy. The topics covered included AngularJS, introduction of front-end framework fundamentals and important concepts in JavaScript development. I also included the use of asynchronous calls and promise objects."
    },
    {
      title: "Web Developer",
      company: "NIRD LLC",
      start_date: "August 2014",
      end_date: "September 2015",
      technologies: ['JavaScript', 'AngularJS', 'CoffeeScript', 'git', 'Rails', 'Ruby', 'rspec', 'jasmine', 'bootstrap'],
      blurb: "As a member of the consulting team, I owned both new features and updates to existing features on a wide variety of projects. "
    },
    {
      title: "Web Developer",
      company: "Foundry Interactive",
      start_date: "January 2016",
      end_date: "April 2016",
      technologies: ['Java', 'JavaScript', 'Jasmine', 'perforce'],
      blurb: "I acted as a team member within a global travel corporation and implemented new features, bug fixes, and hotfixes in a large enterprise code base."
    },
    {
      title: "Software Engineer",
      company: "Latchel",
      start_date: "February 2017",
      end_date: "March 2017",
      technologies: ['git', 'JavaScript', 'Rails', 'AngularJS'],
      blurb: "I acted as a team member of an early-stage startup, quickly building features and resolving bugs."
    },
    {
      title: "Software Engineer",
      company: "Freelance",
      start_date: "April 2016",
      end_date: new Date,
      technologies: ['git', 'JavaScript', 'Jekyll', "Rails", "Ruby", "AngularJS"],
      blurb: "I provide consultative services for my clients to help them create or improve their online presence and impact in a variety of professional fields. "
    }
  ];
}]);