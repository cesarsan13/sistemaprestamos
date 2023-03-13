import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function CCLientes(){
    return(
        <div className="container">
            <div className="row mb-5">
                <div className="col-sm-9 align-self-start">
                <h1 className="c-titulo fw-bold">
                    Clientes
                </h1>
                </div>
                <div className="col-sm-3 align-self-end" >
                    <button type="button" className="btn btn-danger mb-2">Añadir</button>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-12 col-md-6 ">
                    <div className="input-group input-group-sm">
                        <span className="input-group-text">
                            <button className="btn">
                                <FontAwesomeIcon icon={["fas","search"]} className={'faicon m-1'}/>
                            </button>
                        </span>
                        <input type="text" aria-label="First name" className="form-control form-control-sm" placeholder="Nombre..."/>
                        <input type="text" aria-label="First name" className="form-control form-control-sm" placeholder="Apellidos..."/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <table className="table table-striped table-danger">
                        <thead>
                            <tr key="">
                                <td>Num.</td>
                                <td>Nombre</td>
                                <td>Apellidos</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="">
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr key="">
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    );
}

export default CCLientes;