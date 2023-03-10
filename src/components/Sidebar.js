import MainList from "./MainList";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../logo.svg"
import IconLink from "./IconLink";
function SideBar({logout}){

    return (
        <div className="col-sm-1 sticky-top sidebar">
            <div classNAme="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top" >
                <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between w-100 px-4 align-items-center">
                <IconLink to={"/index"} titulo={"Prestamos Marmir"} prefix={"fas"} iconName={"home"}/>
                    <li className="nav-item">
                        <IconLink to={"/Clientes"} titulo={"Clientes"} prefix={"fas"} iconName={"person"}/>
                    </li>
                    <li className="nav-item">
                        <IconLink to={"/Usuarios"} titulo={"Usuarios"} prefix={"fas"} iconName={"users"}/>
                    </li>
                    <li className="nav-item">
                        <IconLink to={"/Socios"} titulo={"Socios"} prefix={"fas"} iconName={"handshake"}/>
                    </li>
                    <li className="nav-item">
                        <IconLink to={"/Pagos"} titulo={"Registro de Pagos"} prefix={"fas"} iconName={"money-bill"}/>
                    </li>
                    
                </ul>
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false" title="Reportes">
                    <FontAwesomeIcon icon={['fas','book']}  />
                    </a>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                        <li><Link className="dropdown-item" to={"#"}>Resumenes</Link></li>
                    </ul>
                    </div>
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                        <FontAwesomeIcon icon={['fas','chart-line']}  />
                    </a>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                    <li><Link className="dropdown-item" to={"#"}>Proyecciones</Link></li>
                    <li><Link className="dropdown-item" to={"#"}>Punto de Equilibrio</Link></li>
                    <li><Link className="dropdown-item" to={"#"}>Tabla de Amortizaciones</Link></li>
                    <li><Link className="dropdown-item" to={"#"}>Cartera Vencida</Link></li>
                     
                    </ul>
                </div>
            </div>
        </div>
        // <div classNameName="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark rounded-3">
        //     <div classNameName="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        //         <Link to="/index" classNameName="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        //             <span classNameName="fs-1 d-none d-sm-inline">Menu</span>
        //         </Link>
        //        <MainList/>
        //         <div classNameName="dropdown pb-4">
        //             <a href="#" classNameName="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        //                 <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" classNameName="rounded-circle"/>
        //                 <span classNameName="d-none d-sm-inline mx-1">loser</span>
        //             </a>
        //             <ul classNameName="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        //                 <li><a classNameName="dropdown-item" href="#">New project...</a></li>
        //                 <li><a classNameName="dropdown-item" href="#">Settings</a></li>
        //                 <li><a classNameName="dropdown-item" href="#">Profile</a></li>
        //                 <li>
        //                     <hr classNameName="dropdown-divider"/>
        //                 </li>
        //                 <li><button classNameName="dropdown-item" onClick={(evt)=>logout(evt)}>Sign out</button></li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>

    );
}

export default SideBar;