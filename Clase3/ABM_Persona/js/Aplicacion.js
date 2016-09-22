var miAplicacion = angular.module('app',['ui.router'])
// se incluyo angular ui-rout

miAplicacion.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
		.state('inicio',{
			url: "/inicio",
			templateUrl: "inicio.html",
			controller:'controlInicio'
		})
		
		.state('persona',{
			url: "/persona",
			abstract: true,
			templateUrl: "abstract_persona.html",
			controller:'controlpersona'
		})
		.state('persona.menu',{
			url: "/menu",
			views: {
				'contenido':{
					url: "persona_menu.html",
					controller: "control_persona_menu"
				}
			}
		})

	$urlRouterProvider.otherwise('/persona');
	/*
	Esto establece cual sera el "templateUrl" asociado a este "url" que se iniciara
	al entrar al index.html
	*/


});

miAplicacion.controller('controlInicio',function($scope){










});

miAplicacion.controller('controlpersona',function($scope){










});

miAplicacion.controller('control_persona_menu',function($scope){










});
