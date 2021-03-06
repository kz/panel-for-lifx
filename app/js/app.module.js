angular.module('app', [
  'ui.router',
  'ngMaterial'
])

  .config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/index');

    $stateProvider
      .state('index', {
        url: '/index',
        views: {
          screen: {
            templateUrl: '/views/index.html'
          }
        }
      })
      .state('auth', {
        url: '/auth',
        views: {
          partial: {
            templateUrl: '/views/partials/auth.html'
          }
        }
      })
      .state('dashboard', {
        url: '/dashboard',
        views: {
          partial: {
            templateUrl: '/views/partials/dashboard.html'
          }
        }
      });
  });
