cvApp.controller('NavbarController', ['$scope', function NavbarController($scope) {
    $scope.items = [
      {
        "title":"About Me",
        "section":"1"
      }, {
        "title":"Education",
        "section":"2"
      }
      , {
        "title":"Experience",
        "section":"3"
      }, {
        "title":"Projects",
        "section":"4"
      }
    ];
}]);
