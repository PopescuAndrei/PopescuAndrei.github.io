cvApp.controller('ProjectsController', ['$scope', function ProjectsController($scope) {
    $scope.projects = [
        [{
            "id": 1,
            "tag": "Java",
            "title": "Cabin",
            "image": "img/portfolio/cabin.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, et, illum perferendis veritatis velit sunt similique qui magni totam harum tempore eius laboriosam accusantium necessitatibus voluptatum? Enim, itaque dignissimos quia.",
            "technologies": [
                    {
                        "name":"java",
                        "icon":"devicon-java-plain"
                    },
                    {
                        "name": "apache",
                        "icon":"devicon-apache-plain"
                    }
            ]
        }, {
            "id": 2,
            "tag": "C#",
            "title": "Cake",
            "image": "img/portfolio/cake.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, et, illum perferendis veritatis velit sunt similique qui magni totam harum tempore eius laboriosam accusantium necessitatibus voluptatum? Enim, itaque dignissimos quia.",
            "technologies": [
                    {
                        "name":"java",
                        "icon":"devicon-java-plain"
                    },
                    {
                        "name": "apache",
                        "icon":"devicon-apache-plain"
                    }
            ]
        }, {
            "id": 3,
            "tag": "C++",
            "title": "Circus",
            "image": "img/portfolio/circus.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, et, illum perferendis veritatis velit sunt similique qui magni totam harum tempore eius laboriosam accusantium necessitatibus voluptatum? Enim, itaque dignissimos quia.",
            "technologies": [
                    {
                        "name":"java",
                        "icon":"devicon-java-plain"
                    },
                    {
                        "name": "apache",
                        "icon":"devicon-apache-plain"
                    }
            ]
        }, {
            "id": 4,
            "tag": "Python",
            "title": "Game",
            "image": "img/portfolio/game.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, et, illum perferendis veritatis velit sunt similique qui magni totam harum tempore eius laboriosam accusantium necessitatibus voluptatum? Enim, itaque dignissimos quia.",
            "technologies": [
                    {
                        "name":"java",
                        "icon":"devicon-java-plain"
                    },
                    {
                        "name": "apache",
                        "icon":"devicon-apache-plain"
                    }
            ]
        }],
        [{
            "id": 5,
            "tag": "Python",
            "title": "Game",
            "image": "img/portfolio/game.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, et, illum perferendis veritatis velit sunt similique qui magni totam harum tempore eius laboriosam accusantium necessitatibus voluptatum? Enim, itaque dignissimos quia.",
            "technologies": [
                    {
                        "name":"java",
                        "icon":"devicon-java-plain"
                    },
                    {
                        "name": "apache",
                        "icon":"devicon-apache-plain"
                    }
            ]
        }, {
            "id": 6,
            "tag": "HTML, CSS",
            "title": "Safe",
            "image": "img/portfolio/safe.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, et, illum perferendis veritatis velit sunt similique qui magni totam harum tempore eius laboriosam accusantium necessitatibus voluptatum? Enim, itaque dignissimos quia.",
            "technologies": [
                    {
                        "name":"java",
                        "icon":"devicon-java-plain"
                    },
                    {
                        "name": "apache",
                        "icon":"devicon-apache-plain"
                    }
            ]
        }, {
            "id": 7,
            "tag": "PHP",
            "title": "Submarine",
            "image": "img/portfolio/submarine.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, et, illum perferendis veritatis velit sunt similique qui magni totam harum tempore eius laboriosam accusantium necessitatibus voluptatum? Enim, itaque dignissimos quia.",
            "technologies": [
                    {
                        "name":"java",
                        "icon":"devicon-java-plain"
                    },
                    {
                        "name": "apache",
                        "icon":"devicon-java-plain"
                    }
            ]
        }, {
            "id": 8,
            "tag": "PHP",
            "title": "Submarine",
            "image": "img/portfolio/submarine.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, et, illum perferendis veritatis velit sunt similique qui magni totam harum tempore eius laboriosam accusantium necessitatibus voluptatum? Enim, itaque dignissimos quia.",
            "technologies": [
                    {
                        "name":"java",
                        "icon":"devicon-java-plain"
                    },
                    {
                        "name": "apache",
                        "icon":"devicon-apache-plain"
                    }
            ]
        }]
    ];

    $scope.isProjectsSectionVisible = false;

    $scope.hide = function () {
        $scope.isProjectsSectionVisible = !$scope.isProjectsSectionVisible;
    }

}]);
