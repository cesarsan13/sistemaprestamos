import MainList from "./MainList";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../logo.svg";
import IconLink from "./IconLink";
function SideBar({ logout }) {
  return (
    <div className="col-sm-auto sticky-top sidebar">
      <div className="d-flex flex-sm-column flex-row flex-nowrap align-items-start sticky-top">
        <ul className="gap-5 nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-start justify-content-between w-100 px-4 align-items-start">
          <li className="navbar-brand">
          <div className="col">
          <FontAwesomeIcon icon={["fas","home"]} className={'faicon fs-4'} /><span className="fw-bold fs-6 faicon-text d-none d-sm-inline d-lg-inline d-xl-inline">Prestamos Marmir</span>
          </div>
          </li>
          <li className="nav-item">
            <IconLink
              to={"/Clientes"}
              titulo={"Clientes"}
              prefix={"fas"}
              iconName={"person"}
            />
          </li>
          <li className="nav-item">
            <IconLink
              to={"/Usuarios"}
              titulo={"Usuarios"}
              prefix={"fas"}
              iconName={"users"}
            />
          </li>
          <li className="nav-item">
            <IconLink
              to={"/Socios"}
              titulo={"Socios"}
              prefix={"fas"}
              iconName={"handshake"}
            />
          </li>
          <li className="nav-item">
            <IconLink
              to={"/Pagos"}
              titulo={"Pagos"}
              prefix={"fas"}
              iconName={"money-bill"}
            />
          </li>
          <li className="dropend nav-item">
            <a
              href="#"
              className="d-flex align-items-center justify-content-center p-2 link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser3"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={["fas", "book"]} className={"faicon fs-4"} />{" "}
              <span className="fw-bold fs-6 faicon-text d-none d-sm-inline d-lg-inline d-xl-inline">
                Reportes
              </span>
            </a>
            <ul className="dropdown-menu d-menu"  aria-labelledby="dropdownUser3">
              <li className="dropdown-item ddi">Hola</li>
              <li className="dropdown-item">Hola</li>
              <li className="dropdown-item">Hola</li>
            </ul>
          </li>

          <li className="dropend nav-item">
            <a
              href="#"
              className="d-flex align-items-center justify-content-center p-2 link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser3"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={["fas", "chart-line"]} className={"faicon fs-4"} />
              <span className="fw-bold fs-6 faicon-text d-none d-sm-inline d-lg-inline d-xl-inline">
                Estadisticas
              </span>
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
