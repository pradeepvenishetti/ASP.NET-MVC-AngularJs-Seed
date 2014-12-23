﻿(function () {
    'use strict';

    angular.module('emixApp',
        ['ngRoute',
        'ngCookies',
        'ngLocale',
        'ngAnimate',
        'emixApp.controllers',
        'emixApp.directives',
        'emixApp.services',
        'ui.bootstrap', //ui boostrap must be loaded before ngStrap
        'ui.slimscroll',
        'ui.emixLte', //AdminLte specific code
        'mgcrea.ngStrap',
        'ngMorris',
        'pascalprecht.translate',
        'blueimp.fileupload'
        ])
        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider
                .when('/dashboard', {
                    controller: 'dashboard_index',
                    templateUrl: 'ngApp/pages/dashboard/index.html'
                })
                .when('/charts/morris', {
                    controller: 'section_index',
                    templateUrl: 'ngApp/pages/section/index.html'
                })
                .when('/fileupload', {
                    controller: 'fileupload_index',
                    templateUrl: 'ngApp/pages/fileupload/index.html'
                })
                .otherwise({
                    redirectTo: '/dashboard'
                });

        }])
        .config(['$translateProvider', function ($translateProvider) {

            $translateProvider.useStaticFilesLoader({
                prefix: Emix.Web.translationsFolder,
                suffix: '.json'
            });

            $translateProvider.preferredLanguage(Emix.Settings.defaultLanguage);
            $translateProvider.fallbackLanguage(Emix.Settings.defaultLanguage);

            $translateProvider.storagePrefix('emix');
            $translateProvider.storageKey('lang');

            $translateProvider.useCookieStorage();
        }]);

    angular.module('emixApp.services', []);
    angular.module('emixApp.controllers', []);
    angular.module('emixApp.directives', []);
}());