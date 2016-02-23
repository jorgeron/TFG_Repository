 'use strict';

angular.module('tFGProjectApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-tFGProjectApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-tFGProjectApp-params')});
                }
                return response;
            }
        };
    });
