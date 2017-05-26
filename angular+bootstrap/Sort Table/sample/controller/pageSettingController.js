productModule.controller("pageSettingController",function($scope, pageSettingService) {
		
 
 /*
*this function take JSON data from service and pass those to UI 
**/
	$scope.init = function(){
				pageSettingService.getData(function(data){//as AJAX call is asynchronous call , we used callback function
				$scope.items = data;
				$scope.pageSize = 2;// initially row per page is set to 2 which is changable from UI
				});				
	}
	$scope.letters = ['Y', 'N'];
/*
*this function allows to show max 5 row will show in table 
**/
	$scope.page1stPart = function(){
	$scope.pageSize = 5;
	}

/*
*this function allows to show max 10 row will show in table 
**/
	$scope.page2ndPart = function(){
	$scope.pageSize = 10;
	}
	
/*
*this function allows to show max 25 row will show in table 
**/
	$scope.page3rdPart = function(){
	$scope.pageSize = 25;
	}
	
/*
*this function allows to show max 50 row will show in table 
**/
	$scope.page4thPart = function(){
	$scope.pageSize = 50;
	}
		
	$scope.scheduled = function(){
	//functionality of this button u need to write here
	alert("write functionality here");
	}
});