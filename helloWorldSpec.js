describe("hello world",function(){

	// Instantiate a new version of my module before each test
	beforeEach(module('helloWorldApp'));
	var ctrl;
	// Before each unit test, instantiate a new instance of the controller
	beforeEach(inject(function($controller) {
		ctrl=$controller('helloWorldCtrl');
	}));
	it("calls hello world function",function(){
		expect(ctrl.helloWorld()).toEqual('Hello World');
	});
	it("calls add function",function(){
		expect(ctrl.add(2,3)).toBe(5);
	});
	
});