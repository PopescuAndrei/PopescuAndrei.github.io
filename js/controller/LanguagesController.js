cvApp.controller('LanguagesController', ['$scope', function LanguagesController($scope) {
    $scope.languages = [
      {
        "name":"English",
        "level":"100"
      }, {
        "name":"French",
        "level":"30"
      }, {
        "name":"German",
        "level":"30"
      }
    ];
}]);
