import { Link } from "react-router-dom";
function IconLink({id, to, titulo, prefix, iconName }) {
  return (
    <Link id={id} to={to} className="text-decoration-none nav-link py-3 px-2" title={titulo} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title={titulo}>
     
        <i className={`${prefix} ${iconName} fs-4 m-1`}></i>
       
    </Link>
  );
}

export default IconLink;
