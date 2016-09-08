var MiAplicacion = angular.module('Pto1',[]);

MiAplicacion.controller("Atributos", function($scope)
{

$scope.titulo="Ejercicio Nº 1";

	//Establece atributo a "NumUno", hara que el input=text
	//$scope.NumUno = "1";



$scope.Suma = function()
{
	//alert($scope.NumUno + $scope.NumDos + $scope.NumTres);

	var NumUno = parseInt($scope.NumUno);
	var NumDos = parseInt($scope.NumDos);
	var NumTres = parseInt($scope.NumTres);

	$scope.RDO = NumUno + NumDos + NumTres;
}

$scope.Prom = function()
{
	//alert($scope.NumUno + $scope.NumDos + $scope.NumTres);

	var NumUno = parseInt($scope.NumUno);
	var NumDos = parseInt($scope.NumDos);
	var NumTres = parseInt($scope.NumTres);

	$scope.RDO = (NumUno + NumDos + NumTres) / 3;
}

$scope.Iva = function()
{
	//alert($scope.NumUno + $scope.NumDos + $scope.NumTres);

	var NumUno = parseInt($scope.NumUno);
	var NumDos = parseInt($scope.NumDos);
	var NumTres = parseInt($scope.NumTres);

	$scope.RDO = (NumUno + NumDos + NumTres) * 1.21;
}



});