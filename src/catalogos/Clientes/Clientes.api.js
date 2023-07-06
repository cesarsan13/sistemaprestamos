import axios from "axios";
import { HOST, PROTOCOL } from "../../helpers/api";
import { Cookies } from "react-cookie";
import { config } from "@fortawesome/fontawesome-svg-core";
import Swal from "sweetalert2";
import { swalConfirm } from "../../helpers/helpers";
export const cookies = new Cookies();

export const getClientes = async (config) => {
  const response = await axios.get(PROTOCOL + HOST + "/api/customers", config);
  return response;
};

export const datosCliente = {
  id: 0,
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
  capacidad: 0.0,
  credencial1: "",
  crededncial2: "",
  baja: "",
};


export const guardarCliente = async (newCliente, config, mov) => {
  let res;
  if (mov === "Alta")
    res = await axios.post(
      "http://localhost:8000/api/customer",
      newCliente,
      config
    );

  if (mov === "Cambio")
    res = await axios.post(
      "http://localhost:8000/api/customer/update",
      newCliente,
      config
    );
  if (mov === "Baja")
    res = await axios.post(
      "http://localhost:8000/api/customer/baja",
      newCliente,
      config
    );

  return res;
};
