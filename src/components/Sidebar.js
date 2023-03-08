import MainList from "./MainList";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SideBar({logout}){

    return (


        <div className="col-sm-auto  sticky-top sidebar">
            <div className="d-flex flex-sm-column flex-row flex-nowrap fs-4 sidebar-content align-items-center sticky-top">
                <Link to={"/index"} className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                    <FontAwesomeIcon icon={['fas','user']} className={'faicon'} /> PM
                </Link>
                <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between w-100 px-3 align-items-center">
                    <li className="nav-item">
                        <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                            <i className="bi-house fs-5"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                            <i className="bi-speedometer2 fs-1"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                            <i className="bi-table fs-1"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                            <i className="bi-heart fs-1"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                            <i className="bi-people fs-1"></i>
                        </a>
                    </li>
                      <li>
                        <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                            <i className="bi-people fs-1"></i>
                        </a>
                    </li>
                </ul>
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi-person-circle h2"></i>
                    </a>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
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