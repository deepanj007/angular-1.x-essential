angular.module('myApp', ['ui.router', 'angularUtils.directives.uiBreadcrumbs'])

.config(function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '^',
      views: {
        'main@': {
          templateUrl: 'home.tpl.html',
        }
      },
      data: {
        displayName: 'Home',
      }
    })
    .state('home.users', {
      // this is a demonstration of how abstract states can be handled by this
      // directive. See the docs for a detailed explanation.
      abstract: true,
      data: {
        proxy: 'home.users.list'
      }
    })
    .state('home.users.list', {
      url: 'users/',
      views: {
        'main@': {
          templateUrl: 'userList.tpl.html',
        }
      },
      data: {
        displayName: 'Users'
      }
    })
    .state('home.users.detail', {
      url: ':id',
      views: {
        'main@': {
          templateUrl: 'userDetail.tpl.html',
          controller: function($scope, userName) {
            $scope.userName = userName;
          }
        }
      },
      data: {
        displayName: '{{ userName | uppercase }}'
      },
      resolve: {
        userName: function($stateParams, userService) {
          return userService.getUserName($stateParams.id)
        },
        userImage: function($stateParams, userService) {
          return userService.getUserImage($stateParams.id)
        }
      }
    })
    .state('home.users.detail.image', {
      views: {
        'main@': {
          templateUrl: 'userImage.tpl.html',
          controller: function($scope, $state, userImage) {
            $scope.src = userImage;
            $scope.parent = {
              name: $state.$current.parent.self.name,
              params: $state.params
            };
          }
        }
      },
      data: {
        displayName: false
      },

    })

})

;