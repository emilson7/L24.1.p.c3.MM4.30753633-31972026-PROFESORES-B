class Cl_universidad {
    constructor() {
      this.professores = [];
    }
  
    agregarProfesor(profesor) {
      this.professores.push(profesor);
    }
  
    profesoresCategoria(profesores, categoria) {
      return profesores.filter(profesor => profesor.categoria === categoria); // Filtra los profesores por categoría
    }
  
    porcProfesSexoEnCategoria(profesores, categoria, sexo) {

      const profesoresCategoria = this.profesoresCategoria(profesores, categoria);
      
      const profesoresSexo = profesoresCategoria.filter(profesor => profesor.sexo === sexo);
      
      if (profesoresCategoria.length === 0) {
        return 0;
      }
  
      const porcentaje = (profesoresSexo.length / profesoresCategoria.length) * 100;
  
      return porcentaje;
    }
  }
  
  export default Cl_universidad;
  