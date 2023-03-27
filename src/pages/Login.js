import logo from "../logo.svg";
import { Navigate } from "react-router-dom";
function Login({ login, user , onTextChanged,isAuth }) {
  const {username,password} = user;
  return (
    <div className="container">
      {isAuth && <Navigate to="/" replace />}
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto bg-gray border-5 " >
          <div className="card border-5 shadow rounded-3 my-5 panel">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-tittle text-center mb-2 fw-bold fs-2 titulo">
                Sistema de Prestamos
              </h5>
              <div className="d-flex justify-content-center">
                <img src={logo} alt="" className="imagen" />
              </div>
              <h5 className="card-tittle text-center mb-2 fw-bold fs-2 titulo">
                Bienvenido
              </h5>
              <form onSubmit={(event)=>login(event)
              }>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="username"
                    onChange={(e)=>onTextChanged(e)}
                    value={username}
                  />
                  <label htmlFor="floatingInput">Usuario</label>
                </div>
                <div className=" form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="password"
                    onChange={(e)=>onTextChanged(e)}
                    value={password}
                  />
                  <label htmlFor="floatingPassword">Contraseña</label>
                </div>
                <div className="d-grid">
                  <button
                    className="btn boton btn-login text-uppercase fw-bold"
                    ype="submit"
                  >
                    Iniciar Sesion
                  </button>
                </div>
                <hr className="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
