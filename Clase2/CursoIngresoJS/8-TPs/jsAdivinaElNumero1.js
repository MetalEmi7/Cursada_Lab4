var MiAplicacion = angular.module('adivinaElNumero1',[]);

MiAplicacion.controller("controladorAdb1", function($scope)
{

$scope.test="Hola Mundo";
$scope.numSecreto=15;






$scope.verificar = function()
{
	//Atencion------
	if(console.log($scope.numSecreto) == 15)
	{
		alert("“Usted es un ganador!!! y en solo 1? intentos”");
	}
}


});