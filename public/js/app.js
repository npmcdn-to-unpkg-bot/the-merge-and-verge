

var app = angular.module('myApp', ['ui.router']); 

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('/home', {
            url : '/home',
            templateUrl: '/static/partials/home.html'
        })
        .state('/chart', {
            url : '/charts',
            templateUrl: '/static/partials/chart.html',
            controller: 'ChartsCtrl'
        })
        .state('/test', {
            url : '/test',
            templateUrl: '/static/partials/test.html',
            controller: 'TestCtrl'
        });

});

app.controller('ChartsCtrl', [
    '$scope',
    function($scope) {


        function init() {
            
        }

        // main
        init();

    }
]);


app.directive('chartContainer', function() {

    // chart constraints
    var margin = 20,
        width = 960,
        height = 500 - .5 - margin,
        color = d3.interpolateRgb('#f77', '#77f');

    return {
        restrict: 'E',
        scope: {
            val: '=',  // scope values get passed in
        },
        link: function(scope, element, attrs) {

            // initialization
            // called once per <my-directive>

            var data = [
                { 'x_axis' : 30, 'y_axis' : 30, 'radius' : 20, 'color' : 'green'},
                { 'x_axis' : 70, 'y_axis' : 70, 'radius' : 20, 'color' : 'purple'},
                { 'x_axis' : 100, 'y_axis' : 100, 'radius' : 20, 'color' : 'red'}
            ];

            // make the container
            var vis = d3.select(element[0])
                .append('svg')
                .attr('width', width)
                .attr('height', height + margin + 100);

            var circles = vis.selectAll('circle')
                .data(data)
                .enter()
                .append('circle');

            var circleAttributes = circles
                .attr('cx', function(d) { return d.x_axis;})
                .attr('cy', function(d) { return d.y_axis;})
                .attr('r', function(d) { return d.radius;})
                .style('fill', function(d) { return d.color;});


            // whenever 'exp' changes, run this
            scope.$watch('exp', function(newVal, oldVal) {
                // ..
            });

        }
    };

});




// testing bullshit
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

