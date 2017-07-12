angular.module("flight", ["ngRoute"])
.config(function($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl: "views/home.html",
    controller: "home-controller"
  })
  .when("/search", {
    templateUrl: "views/search.html",
    controller: "search-controller"
  })
  .otherwise({
    templateUrl: "views/home.html",
    controller: "home-controller"
  });
});
