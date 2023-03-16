import Encabezado from "../catalogos_components/Encabezado";
import Busqueda from "../catalogos_components/Busqueda";
import Tabla from "../catalogos_components/Tabla";
function CUsuarios(){
    return(
        <div className="container">
            <Encabezado titulo={'Usuarios'} txt_boton={'Añadir'}/>
            <Busqueda/>
            <Tabla/>
        </div>
    );
}

export default CUsuarios;