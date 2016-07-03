

var app = angular.module('myApp', ['ui.router']); 

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('/home', {
            url : '/home',
            templateUrl: '/static/partials/home.html'
        })
        .state('/test', {
            url : '/test',
            templateUrl: '/static/partials/test.html',
            controller: 'TestCtrl'
        });

});

app.controller('TestCtrl', [
    '$scope',
    function($scope) {

        var data = [10, 20, 30, 40, 800];

        d3.select(".chart")
            .selectAll("div")
                .data(data)
            .enter().append("div")
                .style("width", function(d) { return d * 10 + "px"; })
                .text(function(d) { return d; });

    }
]);

