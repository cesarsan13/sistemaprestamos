import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Encabezado from "../catalogos_components/Encabezado";
import Busqueda from "../catalogos_components/Busqueda";
import Tabla from "../catalogos_components/Tabla";
import logo from "../logo.svg";
function CCLientes(){
    let cliente ="Prueba";
    return(
        <div className="container">
            <Encabezado titulo={'Clientes'} txt_boton={'Añadir'}/>
            <Busqueda/>
            <Tabla/>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Accion Cliente {cliente}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="row">
            <div className="col-lg-3 col-sm-3 col-sm-12 col-12">
                <div class="text-center">
                    <img src={logo}  class="rounded" alt="..."/>
                </div>
            </div>
            <div className="col-lg-9 col-sm-9 col-sm-12 col-12">
                <div className="row">
                    <div className="form-floating mb-3 col-lg-4 col-md-4 col-sm-12 col-12">
                        <input type="text" className="form-control"id="t_nombres" placeholder="Nombres" />
                        <label for="t_nombres">Nombres</label>
                    </div>
                    <div className="form-floating mb-3 col-lg-4 col-md-4 col-sm-12 col-12">
                        <input type="text" className="form-control"id="t_ap_paterno" placeholder="Apellido Paterno" />
                        <label for="t_ap_paterno">Apellido Paterno</label>
                    </div>
                    <div className="form-floating mb-3 col-lg-4 col-md-4 col-sm-12 col-12">
                        <input type="text" className="form-control"id="t_ap_materno" placeholder="Apellido Materno" />
                        <label for="t_ap_materno">Apellido Materno</label>
                    </div>
                    <div className="form-floating mb-3 col-lg-4 col-md-4 col-sm-12 col-12">
                        <input type="date" className="form-control"id="t_fecha_nac" placeholder="Fecha Nacimiento"  />
                        <label for="t_fecha_nac">Fecha de Nacimiento</label>
                    </div>
                    <div className="col-lg-8 col-md-8"></div>
                    <div className="form-floating mb-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <input type="text" className="form-control"id="t_calle" placeholder="Calle"  />
                        <label for="t_calle">Calle</label>
                    </div>
                    <div className="form-floating mb-3 col-lg-6 col-md-6 col-sm-12 col-12">
                        <input type="text" className="form-control"id="t_colonia" placeholder="colonia"  />
                        <label for="t_colonia">Colonia</label>
                    </div>
                    <div className="form-floating mb-3 col-lg-4 col-md-4 col-sm-6 col-6">
                        <input type="text" className="form-control"id="t_numero_exterior" placeholder="Num. Ext"  />
                        <label for="t_numero_exterior">Núm. Ext.</label>
                    </div><div className="form-floating mb-3 col-lg-4 col-md-4 col-sm-6 col-6">
                        <input type="text" className="form-control"id="t_cp" placeholder="Código Postal"  />
                        <label for="t_cp">Código Postal</label>
                    </div>
                </div>
            </div>

        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Guardar</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
}

export default CCLientes;