import axios from "axios";
import {HOST,PROTOCOL} from '../../helpers/api'
import { Cookies } from "react-cookie";
export const cookies = new Cookies();
// const cookies = new Cookies();


// const token = cookies.get("isAuth");
// const config = {
//     headers: { Authorization: `Bearer ${token}` },
//   };


export const getClientes = async (config) =>{


    const response = await axios.get(PROTOCOL+HOST+"/api/customers",config);
    return response;
}

export const   datosCliente = {
    nombres: "",
    ap_paterno: "",
    ap_materno: "",
    fecha_nacimiento: "",
    calle: "",
    colonia: "",
    numero_exterior: "",
    cp: "",
    ciudad: "",
    estado: "",
    telefono: "",
    capacidad: "",
    credencial1: "",
    crededncial2: "",
    baja: "",
  };

export const    guardarCliente = async (newCliente,config) => {
    return  await axios.post(
      "http://localhost:8000/api/customer",
      newCliente,
      config
    );
  };
