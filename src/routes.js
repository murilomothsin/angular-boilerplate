// Configuração do ui-router
app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  $stateProvider
    // Rota para o HOME
    .state('home', {
      url: "/home",
      views: {
        "container@": {
          controller: "HomeController",
          templateUrl: "views/home/home.html"
        },
        "nav@": {
          controller: "HomeController",
          templateUrl: "views/navbar.html"
        }
      }
    })
    .state('about', {
      url: "/about",
    views: {
      "container@": {
        controller: "HomeController",
        templateUrl: "views/home/about.html"
      },
      "nav@": {
        controller: "HomeController",
        templateUrl: "views/navbar.html"
      }
    }
  });
  });