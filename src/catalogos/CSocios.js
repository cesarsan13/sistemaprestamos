import Encabezado from "../catalogos_components/Encabezado";
import Busqueda from "../catalogos_components/Busqueda";
import Tabla from "../catalogos_components/Tabla";
function CSocios(){
    return(
        <div className="container">
            <Encabezado titulo={'Socios'} txt_boton={'Añadir'}/>
            <Busqueda/>
            <Tabla/>
        </div>
    );
}

export default CSocios;