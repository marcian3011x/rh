import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function EditarEmpleado() {

  const urlBase =  "http://localhost:8080/api/empleados";

  const {id} = useParams();

  useEffect(() => {
    cargarEmpleado();
  }, []);

  const cargarEmpleado = async () =>  {
    const resultado = await axios.get(`${urlBase}/${id}`)
    setEmpleado(resultado.data);
  }

  const[empleado, setEmpleado]=useState({
    nombre:"",
    departamento:"",
    sueldo:"" 
  })

  const{nombre, departamento, sueldo} = empleado;

  const onInputChange = (e) => {
    // spread operator ... (Expandir los atributos)
    setEmpleado({... empleado, [e.target.name]: e.target.value})
  }

  let navegacion = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${urlBase}/${id}`,  empleado);
    // Redirigimos a la pagina inicio
    navegacion('/');
  }

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Editar Empleado</h3>
      </div>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre" name="nombre" required={true} 
            value={nombre} onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="departamento" className="form-label">Departamento</label>
          <input type="text" className="form-control" id="departamento" name="departamento"
            value={departamento} onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="sueldo" className="form-label">Sueldo</label>
          <input type="number" step="any" className="form-control" id="sueldo" name="sueldo"
            value={sueldo} onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="text-center">

        <button type="submit" className="btn btn-light btn-sm me-3">Agregar</button>
        <a href="/" className="btn btn-danger btn-sm">Regresar</a>

        </div>
      </form>
    </div>
  );
}
