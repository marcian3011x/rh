package gp.rh.Servicio;

import gp.rh.Modelo.Empleado;
import gp.rh.Repositorio.EmpleadoRepositorio;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service // componente
@Transactional
public class EmpleadoServicioImpl implements EmpleadoServicio {
    private final EmpleadoRepositorio empleadoRepositorio; // injeccion del objeto servicio

    public EmpleadoServicioImpl(EmpleadoRepositorio empleadoRepositorio) {
        this.empleadoRepositorio = empleadoRepositorio;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Empleado> listarEmpleados() {
        return empleadoRepositorio.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Empleado obtenerEmpleadoPorId(Long id) {
        return empleadoRepositorio.findById(id).orElse(null);
    }

    @Override
    public Empleado guardarEmpleado(Empleado empleado){
        // si trae id -> actualiza; si no -> crea
        return empleadoRepositorio.save(empleado);
    }

    @Override
    public void eliminarEmpleado(Long id) {
        empleadoRepositorio.deleteById(id);
    }
}
