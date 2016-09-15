var MiAplicacion = angular.module('Pto5',[]);

MiAplicacion.controller("ControllerTP", function($scope)
{

$scope.titulo="Ejercicio Nº 5";

	//Establece atributo a "NumUno", hara que el input=text
	//$scope.NumUno = "1";

	$scope.NumSecreto = Math.floor((Math.random() * 10) + 1);
	$scope.Cont;



	$scope.Verificar = function()
	{
	$scope.Cont++;
	console.log($scope.NumSecreto);
	console.log($scope.NumUno);
	
		if(parseInt($scope.NumUno) == $scope.NumSecreto)
		{
			alert("Sos un ganador");
		}
	}
	
});