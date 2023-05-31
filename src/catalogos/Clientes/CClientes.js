import Encabezado from "../../catalogos_components/Encabezado";
import Busqueda from "../../catalogos_components/Busqueda";
import Tabla from "../../catalogos_components/Tabla";
import ModalRegClientes from "./ModalRegClientes";
function CCLientes(){
    return (
      <div className="container-fluid ">
        <Encabezado titulo={"Clientes"} />
        <Busqueda txt_boton={""}>
          <div className="col-sm-2 col-md-6 mt-1">
            <button type="button" className="btn btn-lg btn-primary fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i className="bi bi-plus-circle fs-4 "></i>
            </button>
          </div>
        </Busqueda>
        <Tabla />
        <ModalRegClientes/>
      </div>
    );
}

export default CCLientes;
