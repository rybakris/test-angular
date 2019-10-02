(function(){
	
	'use strict';
	
	angular.module('App.test')
		.controller('TestController', TestController);
		
		TestController.$inject=[];
		
		function TestController(){
			var vm = this;
			
			vm.nome = 'Kristina';
			
			console.log(vm);
		}
	
})();