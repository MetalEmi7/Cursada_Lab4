var miAplicacion = angular.module('app',['ui.router']);
// se incluyo angular ui-rout

miAplicacion.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
		.state('inicio',{
			url: "/inicio",
			templateUrl: "inicio.html",
			controller:"controlInicio"
		})

	$urlRouterProvider.otherwise('/inicio');

});

miAplicacion.controller('ControlInicio',function($scope){
		// minuto 1,20 horas
});



/*



miAplicacion.config(function(){
	//Parametros

	$stateProvider,
	$urlRouterProvider
	//Manejara la navegacion del sitio, y gestionara la logica de los distintos 
	//controladoras que se interactuan entre si de diferentes maneras



	$stateProvider
		.state('inicio',{
			url:"/inicio",
			templateUrl:"inicio.html",
			controller:"controlInicio"
		})







});







*/