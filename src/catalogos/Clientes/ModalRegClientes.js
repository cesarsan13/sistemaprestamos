import logo from "../../logo.svg";
function ModalRegClientes({inputChange,guardar,newCliente,Movimiento,changeMovimiento}) {
     
return (
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            {Movimiento} Cliente{" "}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="d-flex justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                <img src={logo} className="rounded img-fluid" alt="..." />
              </div>
            </div>

            <div className="col-lg-12 col-sm-12 col-sm-12 col-12">
              <div className="row">
                <div className="form-floating mb-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    id="t_nombres"
                    placeholder="Nombres"
                    name="nombres"
                    value={newCliente.nombres}
                    onChange={(evt) =>
                      inputChange(evt.target.name, evt.target.value)
                    }
                  />
                  <label htmlFor="t_nombres">Nombres</label>
                </div>
                <div className="form-floating mb-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    id="t_ap_paterno"
                    placeholder="Apellido Paterno"
                    name="ap_paterno"
                    value={newCliente.ap_paterno}
                    onChange={(evt) =>
                      inputChange(evt.target.name, evt.target.value)
                    }
                  />
                  <label htmlFor="t_ap_paterno">Apellido Paterno</label>
                </div>
                <div className="form-floating mb-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    id="t_ap_materno"
                    placeholder="Apellido Materno"
                    name="ap_materno"
                    value={newCliente.ap_materno}
                    onChange={(evt) =>
                      inputChange(evt.target.name, evt.target.value)
                    }
                  />
                  <label htmlFor="t_ap_materno">Apellido Materno</label>
                </div>
              
                <div className="form-floating mb-3 col-lg-6 col-md-6 col-sm-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    id="t_calle"
                    placeholder="Calle"
                    name="calle"
                    value={newCliente.calle}
                    onChange={(evt) =>
                      inputChange(evt.target.name, evt.target.value)
                    }
                  />
                  <label htmlFor="t_calle">Calle</label>
                </div>
                <div className="form-floating mb-3 col-lg-6 col-md-6 col-sm-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    id="t_colonia"
                    placeholder="colonia"
                    name="colonia"
                    value={newCliente.colonia}
                    onChange={(evt) =>
                      inputChange(evt.target.name, evt.target.value)
                    }
                  />
                  <label htmlFor="t_colonia">Colonia</label>
                </div>
                <div className="form-floating mb-3 col-lg-4 col-md-6 col-sm-12 col-12">
                  <input
                    type="date"
                    className="form-control"
                    id="t_fecha_nac"
                    placeholder="Fecha Nacimiento"
                    name="fecha_nacimiento"
                    value={newCliente.fecha_nacimiento}
                    onChange={(evt) =>
                      inputChange(evt.target.name, evt.target.value)
                    }
                  />
                  <label htmlFor="t_fecha_nac">Fecha de Nacimiento</label>
                </div>
                <div className="form-floating mb-3 col-lg-4 col-md-4 col-sm-6 col-6">
                  <input
                    type="text"
                    className="form-control"
                    id="t_numero_exterior"
                    placeholder="Num. Ext"
                    name="numero_exterior"
                    value={newCliente.numero_exterior}
                    onChange={(evt) =>
                      inputChange(evt.target.name, evt.target.value)
                    }
                  />
                  <label htmlFor="t_numero_exterior">Núm. Ext.</label>
                </div>

                <div className="form-floating mb-3 col-lg-4 col-md-4 col-sm-6 col-6">
                  <input
                    type="text"
                    className="form-control"
                    id="t_cp"
                    placeholder="Código Postal"
                    name="cp"
                    value={newCliente.cp}
                    onChange={(evt) =>
                      inputChange(evt.target.name, evt.target.value)
                    }
                  />
                  <label htmlFor="t_cp">Código Postal</label>
                </div>

                <div className="form-floating mb-3 col-lg-4 col-md-4 col-sm-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    id="t_ciudad"
                    placeholder="Ciudad"
                    name="ciudad"
                    value={newCliente.ciudad}
                    onChange={(evt) =>
                      inputChange(evt.target.name, evt.target.value)
                    }
                  />
                  <label htmlFor="t_ciudad">Ciudad</label>
                </div>

                <div className="form-floating mb-3 col-lg-4 col-md-4 col-sm-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    id="t_estado"
                    placeholder="Estado"
                    name="estado"
                    value={newCliente.estado}
                    onChange={(evt) =>
                      inputChange(evt.target.name, evt.target.value)
                    }
                  />
                  <label htmlFor="t_estado">Estado</label>
                </div>

                <div className="form-floating mb-3 col-lg-4 col-md-4 col-sm-6 col-6">
                  <input
                    type="text"
                    className="form-control"
                    id="t_telefono"
                    placeholder="Teléfono"
                    name="telefono"
                    value={newCliente.telefono}
                    onChange={(evt) =>
                      inputChange(evt.target.name, evt.target.value)
                    }
                  />
                  <label htmlFor="t_telefono">Teléfono</label>
                </div>
                <div className="form-floating mb-3 col-lg-4 col-md-4 col-sm-6 col-6">
                  <input
                    type="text"
                    className="form-control"
                    id="t_capacidad"
                    placeholder="Capacidad Credito"
                    name="capacidad"
                    value={newCliente.capacidad}
                    onChange={(evt) =>
                      inputChange(evt.target.name, evt.target.value)
                    }
                  />
                  <label htmlFor="t_capacidad">Capacidad Credito</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary"
            onClick={(evt) => guardar(evt)}
          >
            Guardar
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
);
    
}
export default  ModalRegClientes;