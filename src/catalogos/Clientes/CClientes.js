import Encabezado from "../../catalogos_components/Encabezado";
import Busqueda from "../../catalogos_components/Busqueda";
import Tabla from "../../catalogos_components/Tabla";
import ModalRegClientes from "./ModalRegClientes";
import { useState } from "react";
import { Cookies } from "react-cookie";
import axios from "axios";
function CCLientes(){
const cookies = new Cookies();
const datosCliente = {
        nombres:'',
        ap_paterno:'',
        ap_materno:'',
        fecha_nacimiento:'',
        calle:'',
        colonia:'',
        numero_exterior:'',
        cp:'',
        ciudad:'',
        estado:'',
        telefono:'',
        capacidad:'',
        credencial1:'',
        crededncial2:'',
        baja:''
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
        console.log(newCliente)
    }
    const changeMovimiento=(val)=>{
        setMovimiento(val)
    }
    const guardar= async (evt)=>{
        evt.preventDefault();
        console.log(newCliente);
     let token = cookies.get("isAuth");
        const config = {
          headers: { Authorization: `Bearer ${token}` }
      };
      let res = await axios.post("http://localhost:8000/api/customer",newCliente,config);
        console.log("guardar registro ",res  )
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
