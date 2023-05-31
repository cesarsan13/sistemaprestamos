import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Tabla(){
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
              <tr key="">
                <td>1</td>
                <td>Cesar Omar</td>
                <td>Sanchez Tapia</td>
                <td className="text-center">
                  <button className="btn" onClick={() => alert("hola mundo")}>
                    <FontAwesomeIcon
                      icon={["fas", "eye"]}
                      className={"faicon"}
                    />
                  </button>
                </td>

                <td className="text-center">
                  <button className="btn" onClick={() => alert("hola mundo")}>
                    <FontAwesomeIcon
                      icon={["fas", "pen-to-square"]}
                      className={"faicon"}
                    />
                  </button>
                </td>
                <td className="text-center">
                  <button className="btn" onClick={() => alert("hola mundo")}>
                    <FontAwesomeIcon
                      icon={["fas", "trash"]}
                      className={"faicon"}
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Tabla;