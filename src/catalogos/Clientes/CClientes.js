import Encabezado from "../../catalogos_components/Encabezado";
import Busqueda from "../../catalogos_components/Busqueda";
import Tabla from "../../catalogos_components/Tabla";
import ModalRegClientes from "./ModalRegClientes";
import { useState, useEffect } from "react";
import {datosCliente,getClientes,guardarCliente,cookies} from '../Clientes/Clientes.api'
import { swal  } from '../../helpers/helpers'
import { ReactDOM } from "react";
function CCLientes() {
 
  const [Movimiento, setMovimiento] = useState("");
  const [newCliente, setnewCLiente] = useState(datosCliente);



const token = cookies.get("isAuth");
const config = {
    headers: { Authorization: `Bearer ${token}` },
  };


  useEffect(() => {
    const fetchCustomers = async() =>{
      try{  
        const clientes = await getClientes(config);
        console.log(clientes);
      }catch(error){

      }
    }
    fetchCustomers();
  }, []);
  const limpiar = (e) => {
    setnewCLiente(datosCliente);
  };
  const inputChange = (name, value) => {
    setnewCLiente((prevsetdata) => ({
      ...prevsetdata,
      [name]: value,
    }));
    console.log(newCliente);
  };
  const changeMovimiento = (val) => {
    setMovimiento(val);
  };
  const guardar = async (evt) => {
    evt.preventDefault();
    let res = await guardarCliente(newCliente,config);
    const {alert_icon,alert_text,alert_title} = res.data;
    swal(alert_title,alert_text,0,alert_icon) 
    limpiar();
  }
  return (
    <div className="container-fluid ">
      <Encabezado titulo={"Clientes"} />
      <Busqueda txt_boton={""}>
        <div className="col-sm-2 col-md-6 mt-1">
          <button
            type="button"
            className="btn btn-lg btn-primary fw-bold"
            onClick={(e) => {
              limpiar(e);
              changeMovimiento("Alta");
            }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="bi bi-plus-circle fs-4 "></i>
          </button>
        </div>
      </Busqueda>
      <Tabla Movimiento={Movimiento} changeMovimiento={changeMovimiento} />
      <ModalRegClientes
        inputChange={inputChange}
        guardar={guardar}
        newCliente={newCliente}
        Movimiento={Movimiento}
        changeMovimiento={changeMovimiento}
      />
    </div>
  );
}

export default CCLientes;
