import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Encabezado from "../catalogos_components/Encabezado";
import Busqueda from "../catalogos_components/Busqueda";
import Tabla from "../catalogos_components/Tabla";
function CCLientes(){
    return(
        <div className="container">
            <Encabezado titulo={'Clientes'} txt_boton={'Añadir'}/>
            <Busqueda/>
            <Tabla/>
        </div>
    );
}

export default CCLientes;