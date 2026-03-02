package gp.rh.Servicio;

import gp.rh.Modelo.Empleado;

import java.util.List;

public interface EmpleadoServicio {
    List<Empleado> listarEmpleados();
    Empleado obtenerEmpleadoPorId(Long id);
    Empleado guardarEmpleado(Empleado empleado); // Crear o actualizar
    void eliminarEmpleado(Long id);
}
