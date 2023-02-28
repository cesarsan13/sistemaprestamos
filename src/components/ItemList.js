import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function ItemList ({nombre,icono,hacia}){
  
    return(
        <li className="nav-item">
                    <Link to={hacia} className="nav-link align-middle px-0" >
                        <FontAwesomeIcon icon={icono}/><span className="ms-1 d-none d-sm-inline">{nombre}</span>
                        {/* <FontAwesomeIcon icon={{prefix:"fas",iconName:"house-chimney"}} /><span className="ms-1 d-none d-sm-inline">{nombre}</span> */}
                </Link>   
                    </li>
    );
}
export default ItemList;