var MiAplicacion = angular.module('Pto3',[]);

MiAplicacion.controller("Atributos", function($scope)
{

$scope.titulo="Ejercicio Nº 3";

	//Establece atributo a "NumUno", hara que el input=text
	//$scope.NumUno = "1";

	$scope.PrimeraFuncion = "De Celcius a Fahrenheit";
	$scope.SegundaFuncion = "De Fahrenheit a Celcius";



$scope.C_Fahrenheit = function()
{
	//alert($scope.NumUno + $scope.NumDos + $scope.NumTres);

	var Celcius = parseInt($scope.NumC);
	var RDO = Celcius * 1.8;
	RDO += 32;

	//$scope.RDOf = RDO;
	$scope.RDOf = Celcius * (9/5) + 32;
}

$scope.F_Celcius = function()
{
	//alert($scope.NumUno + $scope.NumDos + $scope.NumTres);
	var Fahrenheit = parseInt($scope.NumF);

	$scope.RDOc = (Fahrenheit - 32) * (5/9);	
}



});