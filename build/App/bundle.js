(function(){
  'use strict';

  var App = angular.module('App',[
	'App.test'
	]);
  
 })();

(function(){
	'use strict';
	
	angular.module('App.test', [
	
	]);

})();
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
//# sourceMappingURL=build/App/bundle.js.map
