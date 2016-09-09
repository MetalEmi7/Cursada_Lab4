var miAplicacion = angular.module("Alvarez",['ui.router']);


miAplicacion.config(function($stateProvider, $urlRouterProvider)
{

$stateProvider
      .state("inicio",{
      url: "/inicio",     
      templateUrl: 'inicio.html', 
      controller: "controlInicio",

        views:{
          alta: "formAlta.html"
                
        }

      })


      .state("persona",{
      url: "/persona",
      templateUrl: 'persona.html',
      controller: "controlpersona"
      })


      .state("abstractPersona",{
      url: "/abstractPersona",
      templateUrl: 'abstractPersona.html',
      controller: "controlabstractPersona",
      abstract: true
      })


      .state("personaMenu",{
      url: "/persona",
      templateUrl: 'persona.html',
      controller: "controlpersona",
      })





     $urlRouterProvider.otherwise("/inicio");
});



miAplicacion.controller("controlInicio", function($scope)
{

}); 



miAplicacion.controller("controlabstractPersona", function($scope)
{



}); 


//Completar LO ANTERIOR CON AUDIO <--

//Completar ALTA
//Completar GRILA