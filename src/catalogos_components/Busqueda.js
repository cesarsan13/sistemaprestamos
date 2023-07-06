function Busqueda({txt_boton,children,buscar,changeBusqueda}){
    return (
      <div className="row mb-3">
        <div className="col-sm-10 col-md-6 ">
          <div className="input-group input-group-sm">
            <span className="input-group-text">
              <button className="btn fw-bold" onClick={(e)=>buscar()}>
                <i className="bi bi-search fs-4"></i>
                {/* <FontAwesomeIcon
                  icon={["fas", "search"]}
                  className={"faicon m-1"}
                /> */}
              </button>
            </span>
            <input
              type="text"
              aria-label="First name"
              className="form-control form-control-sm"
              placeholder="Nombre..."
              name="nombres"
              id="nombres"
              onChange={(evt) =>
                changeBusqueda(evt.target.name, evt.target.value)
              }
              
            />
            <input
              type="text"
              aria-label="First name"
              className="form-control form-control-sm"
              placeholder="Apellidos..."
              name="apellidos"
              id="apellidos"
              onChange={(evt) =>
                changeBusqueda(evt.target.name, evt.target.value)
              }
            />
          </div>
        </div>
       {children}
      </div>
    );
}
export default Busqueda