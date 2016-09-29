var miAplicacion = angular.module('app',['ui.router'])
// se incluyo angular ui-rout

miAplicacion.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
		.state("inicio",{
			url: "/inicio",
			templateUrl: "inicio.html",
			controller:'control_inicio'
		})


		.state("login",{
			url: "/login",
			templateUrl: "login.html",
			controller:'control_login'
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

		.state("persona.alta",{
			url: "/alta",
			views:
			{
				'contenido':
				{
				templateUrl: "personaAlta.html",
				controller:'control_persona_alta'
				}
			}

		})

		.state("persona.grilla",{
			url: "/grilla",
			views:
			{
				'contenido':
				{
				templateUrl: "persona_grilla.html",
				controller:'control_persona_grilla'
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

$scope.ir_alta = function()
{
	$state.go('persona.alta');
}

$scope.ir_grilla = function()
{	$state.go('persona.grilla');}

//-- Grilla --
$scope.Borrar = function()
{	$state.go('inicio');}

$scope.Modificar = function()
{	$state.go('inicio');}


});


miAplicacion.controller('control_persona_alta',function($scope, $state, $http){
$scope.Guardar = function()
{	
	console.log("Persona a guardar:");
	console.log($scope.persona);

	$http.post('PHP/nexo.php',{datos:{accion :"traer", persona:$scope.persona}}).then(function(respuesta)
			{     	
 		     //aca se ejetuca si retorno sin errores      	
      	 console.log(respuesta.data);
    },function errorCallback(response) {     		
     		//aca se ejecuta cuando hay errores
     		console.log( response);     			
 	  });

}


});


miAplicacion.controller('control_persona_grilla',function($scope, $state, $http){

	$http.get('MOCK_DATA.json')
	.then( function(datos)
	{
	
	  $scope.listadoDeDatos = datos.data;
	  console.log(datos.data);
	
	});

});


miAplicacion.controller('control_login',function($scope, $state){
$scope.Log = function(){

}

});
