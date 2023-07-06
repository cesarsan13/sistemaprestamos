import Encabezado from "../../catalogos_components/Encabezado";
import Busqueda from "../../catalogos_components/Busqueda";
import Tabla from "../../catalogos_components/Tabla";
import ModalRegClientes from "./ModalRegClientes";
import { useState, useEffect } from "react";
import {
  datosCliente,
  getClientes,
  guardarCliente,
  cookies,
} from "../Clientes/Clientes.api";
import { swal, swalConfirm } from "../../helpers/helpers";
function CCLientes({ changeLoading }) {
  const [Movimiento, setMovimiento] = useState("");
  const [newCliente, setnewCLiente] = useState(datosCliente);
  const [clientes, setClientes] = useState([]);
  const [clientesFiltrados, setClientesFiltrados] = useState([]);
  const [filtroBusqueda, setFiltroBusqueda] = useState({
    nombres: '',
    apellidos: '',
  });

  const token = cookies.get("isAuth");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        changeLoading(true);
        const listclientes = await getClientes(config);
        let dataClient = listclientes.data.data;
        setClientes(dataClient);
        setClientesFiltrados(dataClient);
        changeLoading(false);
      } catch (error) {}
    };
    fetchCustomers();
  }, []);

  const changeBusqueda =  (name, value) => {
    setFiltroBusqueda((prevsetdata) => ({
      ...prevsetdata,
      [name]: value,
    }));

    let { nombres, apellidos } = filtroBusqueda;
     const resClientes =  clientes.filter( (elemento) =>{
        if(elemento.nombres.toString().toLowerCase().includes(nombres.toString().toLowerCase())
          //||
          // elemento.ap_paterno.toString().toLowerCase().includes(apellidos.toString().toLowerCase())||
          // elemento.ap_materno.toString().toLowerCase().includes(apellidos.toString().toLowerCase())
          ){
            return (
              elemento.nombres.toLowerCase().includes(nombres.toLowerCase()) &&
              elemento.apellidos.toLowerCase().includes(apellidos.toLowerCase())
            );
          }
        } );
    // let clientesFiltrados=[];
    // if (nombres !== '' && apellidos !== '') {
      console.log(resClientes);
      setClientesFiltrados(resClientes);
    }
  

  const verRegistro = (cliente) => {
    changeLoading(true);
    setnewCLiente((prevData) => {
      return { ...prevData, ...cliente };
    });
    changeLoading(false);
  };
  const buscar = async (e) => {
    changeLoading(true);
    const listclientes = await getClientes(config);
    let dataClient = listclientes.data.data;
    setClientes(dataClient);
    setClientesFiltrados(dataClient);
    changeLoading(false);
  };
  const limpiar = (e) => {
    setnewCLiente(datosCliente);
  };
  const inputChange = (name, value) => {
    setnewCLiente((prevsetdata) => ({
      ...prevsetdata,
      [name]: value,
    }));
    // console.log(newCliente);
  };
  const changeMovimiento = (val) => {
    setMovimiento(val);
  };
  const guardar = async (evt) => {
    try {
      evt.preventDefault();
      let res;
      if (Movimiento === "Alta" || Movimiento === "Cambio") {
        changeLoading(true);
        res = await guardarCliente(newCliente, config, Movimiento);
      }
      if (Movimiento === "Baja") {
        let resultado = await swalConfirm(
          "¿Desdea Continuar?",
          "Se eliminara el registro del cliente " +
            newCliente.nombres +
            " " +
            newCliente.ap_paterno +
            " " +
            newCliente.ap_materno,
          "warning",
          true,
          "Eliminar",
          "Cancelar"
        );
        if (resultado.isConfirmed) {
          changeLoading(true);
          newCliente.baja = "*";
          res = await guardarCliente(newCliente, config, Movimiento);
        }
      }
      if (res) {
        const { alert_icon, alert_text, alert_title } = res.data;
        swal(alert_title, alert_text, 0, alert_icon);
      }
      changeLoading(false);
      limpiar();
      let btnCerrar = document.getElementById("btn_cerrar_modal");
      btnCerrar.click();
      const listclientes = await getClientes(config);
      let dataClient = listclientes.data.data;
      setClientes(dataClient);
    } catch (error) {
      const { alert_icon, alert_text, alert_title } = error.response.data;
      console.log(error);
      swal(alert_title, alert_text, 0, alert_icon);
    }
  };
  return (
    <div className="container-fluid ">
      <Encabezado titulo={"Clientes"} />
      <Busqueda txt_boton={""} buscar={buscar} changeBusqueda={changeBusqueda}>
        <div className="col-sm-2 col-md-6 mt-1">
          <button
            type="button"
            className="btn btn-lg btn-primary fw-bold"
            onClick={(e) => {
              changeLoading(true);
              limpiar(e);
              changeMovimiento("Alta");
              changeLoading(false);
            }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="bi bi-plus-circle fs-4 "></i>
          </button>
        </div>
      </Busqueda>
      <Tabla
        Movimiento={Movimiento}
        changeMovimiento={changeMovimiento}
        clientes={clientesFiltrados}
        verRegistro={verRegistro}
      />
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
