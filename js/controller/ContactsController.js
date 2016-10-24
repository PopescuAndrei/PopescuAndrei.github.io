cvApp.controller('ContactsController', ['$scope', function ContactsController($scope) {
    $scope.contacts = [
    {
        "title":"+40 745 314 873",
        "icon":"fa fa-phone fa-fw",
        "link":"tel:+40745314873"
    }, {
        "title":"Email me!",
        "icon":"fa fa-envelope-o fa-fw",
        "link":"mailto:andrei.popescu93@gmail.com"
    }, {
        "title":"Github",
        "icon":"fa fa-github fa-fw",
        "link":"https://www.github.com/PopescuAndrei"
    }, {
        "title":"Facebook",
        "icon":"fa fa-facebook fa-fw",
        "link":"https://www.facebook.com/andreiipopescu"
    }, {
        "title":"Linkedin",
        "icon":"fa fa-linkedin fa-fw",
        "link":"https://www.linkedin.com/in/andreiipopescu"
    }];
}]);
