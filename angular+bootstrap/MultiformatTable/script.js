angular.module('myApp', ['ui.bootstrap'])
      .controller('myCtrl', ['$scope',
        function($scope) {
			$scope.people = [
        { id: 1, first: 'John', last: 'Rambo', actor: 'Silvester' },
        { id: 2, first: 'Rocky', last: 'Balboa', actor: 'Silvester' },
        { id: 3, first: 'John', last: 'Kimble', actor: 'Arnold' },
        { id: 4, first: 'Ben', last: 'Richards', actor: 'Arnold' }
    ];
          $scope.rows = [1,2,3,4,5,6,7,8,9];
          
        

          $scope.status = {
            isopen: false
          };

          $scope.toggled = function(open) {
            console.log('Dropdown is now: ', open);
          };

          $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
          };

        }
      ]);