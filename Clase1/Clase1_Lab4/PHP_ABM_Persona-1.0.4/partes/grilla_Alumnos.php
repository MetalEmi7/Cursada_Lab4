<?php
	//ARCHIVOO MODIFICADO PARA ALUMNO.

	//require_once('clases/Personas.php');
	require_once('clases/Alumnos.php');

	//SOLUCIONADO EL PROBLEMA CON LA GRILLA, VER EN ALUMNOS...
	$ArrayDePersonas = Alumno::TraerTodasLasPersonas();

	echo "<table class='table table-hover table-responsive'>
			<thead>
				<tr>		
					<th>  Nombre     </th>
					<th>  Apellido   </th>

					<th>  BORRAR     </th>
					<th>  MODIFICAR  </th>
				</tr> 
			</thead>";   	



		foreach ($ArrayDePersonas as $Alum)
		{
			echo " 	<tr>						
						<td>". $Alum->GetNombre() ."</td>
						<td>". $Alum->GetApellido() ."</td>
						<td><button class='btn btn-danger' name='Borrar' onclick='Borrar(".$Alum->GetId().")'>   <span class='glyphicon glyphicon-remove-circle'>&nbsp;</span>Borrar</button></td>
						<td><button class='btn btn-warning' name='Modificar' onclick='Modificar(".$Alum->GetId().")'><span class='glyphicon glyphicon-edit'>&nbsp;</span>Modificar</button></td>
					</tr>";
		}	
	echo "</table>";		
?>
