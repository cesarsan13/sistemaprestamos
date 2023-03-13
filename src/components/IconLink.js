import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function IconLink({to,titulo,prefix,iconName}){
    return (
    <Link to={to} className="text-decoration-none"  title={titulo} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title={titulo}>
        <div className="row mt-2">
            <div className="col-sm-3">
            <FontAwesomeIcon icon={[prefix,iconName]} className={'faicon fs-4 m-1'} id={titulo}/>

            </div>
            <div className="col-sm-9">

            <span htmlFor={titulo} className="faicon-text d-none d-sm-inline d-lg-inline d-xl-inline">{titulo}</span>
            </div>
        </div>
    </Link>
    );
}

export default IconLink;