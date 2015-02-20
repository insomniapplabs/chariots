'use strict';

angular.module('chariotsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      });
  });
