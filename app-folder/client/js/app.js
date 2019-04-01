angular
  .module('app', [
    'lbServices',
    'ui.router',
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('todo', {
        url: '',
        templateUrl: 'views/home.html',
        controller: 'TodoController',
      });

    $urlRouterProvider.otherwise('todo');
  }]);
