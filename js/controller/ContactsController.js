cvApp.controller('ContactsController', ['$scope', function ContactsController($scope) {
    $scope.contacts = [{
        "title":"Github",
        "icon":"fa fa-github fa-gh",
        "link":"https://www.github.com/PopescuAndrei"
    }, {
        "title":"Facebook",
        "icon":"fa fa-facebook fa-fw",
        "link":"https://www.facebook.com/andreiipopescu"
    }];
}]);
