<?php
require_once"AccesoDatos.php";
class Alumno
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	//GRILLA ARREGLADA: Las mayusculas de las columnas de la DB no coincidian con los atributos de esta clase.
	private $Id;
	private $Nombre;
 	private $Apellido;
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
  	public function GetId()
	{
		return $this->Id;
	}
	public function GetApellido()
	{
		return $this->Apellido;
	}
	public function GetNombre()
	{
		return $this->Nombre;
	}

	

	public function SetId($valor)
	{
		$this->Id = $valor;
	}
	public function SetApellido($valor)
	{
		$this->Apellido = $valor;
	}
	public function SetNombre($valor)
	{
		$this->Nombre = $valor;
	}

//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
	public function __construct($idAlumno=NULL)
	{
		if($idAlumno != NULL)
		{
			$obj = Alumno::TraerUnaPersona($idAlumno);
			
			$this->Apellido = $obj->apellido;
			$this->Nombre = $obj->snombre;
			$this->Id = $id;
		}
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  	return $this->Apellido."-".$this->Nombre;
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODO DE CLASE
	public static function TraerUnaPersona($idParametro) 
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from Alumno where id =:id");
		$consulta->bindValue(':id', $idParametro, PDO::PARAM_INT);
		$consulta->execute();

		$personaBuscada= $consulta->fetchObject('Alumno');
		return $personaBuscada;	
					
	}
	
	public static function TraerTodasLasPersonas()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from Alumno");
		$consulta->execute();			

		$arrPersonas= $consulta->fetchAll(PDO::FETCH_CLASS, "Alumno");	
		return $arrPersonas;
	}
	
	public static function Borrar($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("delete from Alumno WHERE id=:id");	
		$consulta->bindValue(':id',$idParametro, PDO::PARAM_INT);		
		$consulta->execute();
		return $consulta->rowCount();
		
	}
	
	public static function Modificar($Alumno)
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				update Alumno 
				set nombre=:nombre,
				apellido=:apellido,				
				WHERE id=:id");
			$consulta->bindValue(':id',$Alumno->Id, PDO::PARAM_INT);
			$consulta->bindValue(':nombre',$Alumno->Nombre, PDO::PARAM_STR);
			$consulta->bindValue(':apellido', $Alumno->Apellido, PDO::PARAM_STR);
			
			return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//


	public static function Insertar($Alumno)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
				$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into Alumno (nombre,apellido)values(:nombre,:apellido)");
				$consulta->bindValue(':nombre',$Alumno->Nombre, PDO::PARAM_STR);
				$consulta->bindValue(':apellido', $Alumno->Apellido, PDO::PARAM_STR);
				
				$consulta->execute();		
				return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
//--------------------------------------------------------------------------------//

}