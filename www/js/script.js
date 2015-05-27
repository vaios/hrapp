 // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var minApp = angular.module('minApp', ['ngRoute']);

    // configure our routes
    minApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'starter'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    minApp.controller('starter', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    minApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    minApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });