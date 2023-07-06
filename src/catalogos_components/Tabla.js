import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Tabla({Movimiento,changeMovimiento,clientes,verRegistro}){
    return (
      <div className="row ">
        <div className="col-sm-12 col-md-12 col-12 col-lg-10  table-responsive table-wrapper">
          <table className="table table-striped table-primary ">
            <thead style={{ background: "red" }}>
              <tr key="">
                <th>Num.</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th className="text-center">Ver</th>
                <th className="text-center">Cambio</th>
                <th className="text-center">Borrar</th>
              </tr>
            </thead>
            <tbody>
            {clientes.map((cliente) => (
          <tr key={cliente.id}>
            <td>{cliente.id}</td>
            <td>{cliente.nombres}</td>
            <td>{cliente.ap_paterno + ' ' + cliente.ap_materno }</td>
            <td className="text-center">
                  <button className="btn"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) =>
                  {
                    changeMovimiento("Ver");
                    verRegistro(cliente);
                  } 
                    
                  }
                  >
                    <FontAwesomeIcon
                      icon={["fas", "eye"]}
                      className={"faicon"}
                    />
                  </button>
                </td>

                <td className="text-center">
                  <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"onClick={(e) => {changeMovimiento("Cambio");verRegistro(cliente)}}>
                    <FontAwesomeIcon
                      icon={["fas", "pen-to-square"]}
                      className={"faicon"}
                    />
                  </button>
                </td>
                <td className="text-center">
                  <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => {changeMovimiento("Baja");verRegistro(cliente)}}>
                    <FontAwesomeIcon
                      icon={["fas", "trash"]}
                      className={"faicon"}
                    />
                  </button>
                </td>

            {/* Agrega más celdas de datos según tus datos */}
          </tr>
        ))}
              {/* <tr key="">
                
                <td>{{clientes}}</td>
                <td>Cesar Omar</td>
                <td>Sanchez Tapia</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Tabla;