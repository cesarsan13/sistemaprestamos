import Encabezado from "../../catalogos_components/Encabezado";
import Busqueda from "../../catalogos_components/Busqueda";
import Tabla from "../../catalogos_components/Tabla";
import ModalRegClientes from "./ModalRegClientes";
import { useState } from "react";
function CCLientes(){
    const datosCliente = {
        nombres:'',
        ap_paterno:'',
        ap_materno:'',
        fecha_nacimiento:'',
        calle:'',
        colonia:'',
        numero_exterior:'',
        cp:''
        
    }
    const [Movimiento, setMovimiento] = useState("");
    const [newCliente, setnewCLiente] = useState(datosCliente);
    const limpiar=(e)=>{
      e.preventDefault();
       setnewCLiente(datosCliente);
    }
    const inputChange=(name,value)=>{
        setnewCLiente(prevsetdata=>({
            ...prevsetdata,
            [name]:value
        }));
    }
    const changeMovimiento=(val)=>{
        setMovimiento(val)
    }
    const guardar=(evt)=>{
        evt.preventDefault();
        console.log("guardar registro")
    }
    return (
      <div className="container-fluid ">
        <Encabezado titulo={"Clientes"} />
        <Busqueda txt_boton={""}>
          <div className="col-sm-2 col-md-6 mt-1">
            <button type="button" className="btn btn-lg btn-primary fw-bold" onClick={(e)=>{
                limpiar(e)
                changeMovimiento("Alta")
                }
            }
                  data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i className="bi bi-plus-circle fs-4 "></i>
            </button>
          </div>
        </Busqueda>
        <Tabla Movimiento={Movimiento} changeMovimiento={changeMovimiento} />
        <ModalRegClientes inputChange={inputChange} guardar={guardar} newCliente={newCliente} Movimiento={Movimiento} changeMovimiento={changeMovimiento}/>
      </div>
    );
}

export default CCLientes;
