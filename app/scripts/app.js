angular.module('integrationApp',['famous.angular', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state("main", {
        url: "/",
        templateUrl: "views/main.html"
      })
      .state("demo", {
        url: "/demo",
        templateUrl: "views/demo.html"
      })
      .state("mainscroll", {
        url: "/main-scroll",
        templateUrl: "views/main-scroll.html"
      })
      .state("modifiers", {
        url: "/modifiers",
        templateUrl: "views/modifiers.html"
      })
      .state("reading", {
        url: "/reading",
        templateUrl: "views/reading.html"
      });
    });

window.famousAngularBootstrap = function(){
  angular.bootstrap(document, ['integrationApp']);
} 
