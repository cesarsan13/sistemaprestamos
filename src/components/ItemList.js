import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { prueba } from "./icons";
function ItemList ({nombre,icono}){
    return(
        <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0">
                        {/* <FontAwesomeIcon icon={"angry-horns"}/><span className="ms-1 d-none d-sm-inline">{nombre}</span> */}
                        <FontAwesomeIcon icon={{prefix:"fas",iconName:"house-chimney"}} /><span className="ms-1 d-none d-sm-inline">{nombre}</span>
                        </a>
                    </li>
    );
}
export default ItemList;