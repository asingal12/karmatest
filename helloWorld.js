
angular.module('helloWorldApp', [])
.controller('helloWorldCtrl', [function() {
	var self = this;
	self.helloWorld= function() {
		return ("Hello World");
	}
	self.add= function(num1,num2) {
		num=num1+num2;
		return (num);
	}
	
}]);
