var miAplicacion = angular.module('app',['ui.router'])
// se incluyo angular ui-rout

miAplicacion.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
		.state("inicio",{
			url: "/inicio",
			templateUrl: "inicio.html",
			controller:'control_inicio'
		})
		
		.state("persona",{
			url: "/persona",
			abstract: true,
			templateUrl: "abstract_persona.html",
			controller:'abstract_persona'
		})
		.state("persona.menu",
		{
			url: "/menu",
			views:
			{
				'contenido':
				{
					templateUrl: "persona_menu.html",
					controller: "control_persona_menu"
				}
			}
		})

	//$urlRouterProvider.otherwise('/persona');
	$urlRouterProvider.otherwise('/inicio');
	/*
	Esto establece cual sera el "templateUrl" asociado a este "url" que se iniciara
	al entrar al index.html
	*/


});

miAplicacion.controller('control_inicio',function($scope){










});

miAplicacion.controller('abstract_persona',function($scope){










});

miAplicacion.controller('control_persona_menu',function($scope, $state){








});
