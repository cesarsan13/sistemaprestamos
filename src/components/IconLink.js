import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function IconLink({to,titulo,prefix,iconName}){
    return (
    <Link to={to} className="d-block p-3 link-dark text-decoration-none" title={titulo} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title={titulo}>
        <FontAwesomeIcon icon={[prefix,iconName]} className={'faicon'} />
    </Link>
    );
}

export default IconLink;