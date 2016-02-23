'use strict';

angular.module('tFGProjectApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


