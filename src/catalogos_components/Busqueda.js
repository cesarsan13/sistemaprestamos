import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Busqueda(){
    return(
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
    );
}
export default Busqueda