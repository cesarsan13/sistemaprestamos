import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Navigate } from "react-router-dom";
import { prueba } from "./icons";
function ItemList ({nombre,icono}){
    const handleClick=(evt)=>{
        evt.preventDefault();
        alert("hey");
        <Navigate to="/Clientes"/>
    }
    return(
        <li className="nav-item">
                    <Link to={"/clientes"} className="nav-link align-middle px-0" >
                        <FontAwesomeIcon icon={icono}/><span className="ms-1 d-none d-sm-inline">{nombre}</span>
                        {/* <FontAwesomeIcon icon={{prefix:"fas",iconName:"house-chimney"}} /><span className="ms-1 d-none d-sm-inline">{nombre}</span> */}
                </Link>   
                    </li>
    );
}
export default ItemList;