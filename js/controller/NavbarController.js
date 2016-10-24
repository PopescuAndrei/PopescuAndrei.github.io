cvApp.controller('NavbarController', ['$scope', function NavbarController($scope) {
    $scope.items = [
      {
        "title":"About Me",
        "section":"aboutMe-section"
      }, {
        "title":"Experience",
        "section":"experience-section"
      }, {
        "title":"Education",
        "section":"education-section"
      }, {
        "title":"Projects",
        "section":"projects-section"
      }
    ];
}]);
