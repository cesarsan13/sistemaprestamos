// import MainList from "./MainList";
// import { Link } from "react-router-dom";

// import logo from "../logo.svg";
import IconLink from "./IconLink";
function SideBar({ logout }) {
  return (
  
    <div className="col-sm-auto sticky-top">
      <div className="d-flex flex-sm-column flex-row flex-nowrap align-items-center sticky-top">
      <a href="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                    <i className="bi-house fs-1"></i>
          </a>
        <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between w-100 px-3 align-items-center">
          {/* <li className="navbar-brand">
          <div className="col">
          <FontAwesomeIcon icon={["fas","home"]} className={'faicon fs-4'} /><span className="fw-bold fs-6 faicon-text d-none d-sm-inline d-lg-inline d-xl-inline">Prestamos Marmir</span>
          </div>
          </li> */}
        
          <li li className="nav-item">

              <IconLink
              id={"aClientes"}
              to={"/Clientes"}
              titulo={"Clientes"}
              prefix={"bi"}
              iconName={"bi-person-circle"}
              />
           
          </li>
          <li className="nav-item">
            <IconLink
            id={"aUsuarios"}
            to={"/Usuarios"}
              titulo={"Usuarios"}
              prefix={"bi"}
              iconName={"bi-file-person-fill"}
            />
          </li>
          <li className="nav-item">
            <IconLink
            id={"aSocios"}
            to={"/Socios"}
              titulo={"Socios"}
              prefix={"bi"}
              iconName={"bi-people-fill"}
            />
          </li>
          <li className="nav-item">
            <IconLink
            id={"aPagos"}
            to={"/Pagos"}
              titulo={"Pagos"}
              prefix={"bi"}
              iconName={"bi-cash-coin"}
            />
          </li>
         
       

          <li className="nav-item">
            <a
              href="."
              className="d-flex align-items-center justify-content-center p-2 link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser3"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <li className="bi bi-book faicon fs-4"></li>
              {/* <span className="fw-bold fs-6 faicon-text d-none d-sm-inline d-lg-inline d-xl-inline">
                Reportes
              </span> */}
            </a>
            <ul className="dropdown-menu d-menu"  aria-labelledby="dropdownUser3">
              <li className="dropdown-item ddi">Hola</li>
              <li className="dropdown-item">Hola</li>
              <li className="dropdown-item">Hola</li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              href="."
              className="d-flex align-items-center justify-content-center p-2 link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser3"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             <i className="bi bi-bar-chart-line faicon fs-4"></i>
             
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownUser3">
              <li className="dropdown-item">Hola</li>
              <li className="dropdown-item">Hola</li>
              <li className="dropdown-item">Hola</li>
            </ul>
          </li>

        </ul>
        <div></div>
      </div>
    </div>
   
  );
}

export default SideBar;
