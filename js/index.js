import Cl_universidad from "./Cl_universidad.js";
import Cl_profesor from "./Cl_profesor.js";
import Dt_profesores from "./data.js";

const universidad = new Cl_universidad();

Dt_profesores.forEach((profesor) =>
  universidad.agregarProfesor(
    new Cl_profesor(profesor.cedula, profesor.nombre, profesor.sexo, profesor.categoria)
  )
);

const contenedorSalida = document.getElementById('salida');

for (let categoria = 1; categoria <= 5; categoria++) {
  
  const profesoresCategoria = universidad.profesoresCategoria(Dt_profesores, categoria);
  
  let datosCategoria = `<h2>Profesores de la Categoría ${categoria}</h2>`;
  
  profesoresCategoria.forEach((profesor) => {
    datosCategoria += `<p>Cédula: ${profesor.cedula}, Nombre: ${profesor.nombre}, Sexo: ${profesor.sexo}</p>`;
  });

  const porcentajeFemenino = universidad.porcProfesSexoEnCategoria(Dt_profesores, categoria, 'F');
  const porcentajeMasculino = universidad.porcProfesSexoEnCategoria(Dt_profesores, categoria, 'M');

  datosCategoria += `<p>Porcentaje de mujeres: ${porcentajeFemenino.toFixed(2)}%</p>`;
  datosCategoria += `<p>Porcentaje de hombres: ${porcentajeMasculino.toFixed(2)}%</p>`;

  contenedorSalida.innerHTML += datosCategoria;
}
